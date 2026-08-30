import * as THREE from 'three';
import { Sizes } from './utils/Sizes';
import { Scene } from './core/Scene';
import { Camera } from './core/Camera';
import { Renderer } from './core/Renderer';
import { Room } from './room/Room';
import { DiscoBall } from './disco/DiscoBall';
import { Lighting } from './lighting/Lighting';

export class RoomEngine {
  sizes: Sizes;
  scene: Scene;
  camera: Camera;
  renderer: Renderer;
  room: Room;
  discoBall: DiscoBall;
  lighting: Lighting;
  
  private clock: THREE.Clock;
  private reqId: number = 0;
  private music: HTMLAudioElement;
  private scratchResetTimer: number | null = null;
  private running = true;

  constructor(container: HTMLElement) {
    this.clock = new THREE.Clock();
    this.music = new Audio('/music/ryan-paris-dolce-vita.mp3');
    this.music.loop = true;
    this.music.volume = 0.72;
    
    // Core setup
    this.sizes = new Sizes(container);
    this.scene = new Scene();
    this.camera = new Camera(this.sizes, container);
    this.renderer = new Renderer(this.sizes, container);

    // Elements
    this.room = new Room();
    this.camera.setNavigationRoot(this.room.group);
    this.camera.addInteraction(this.room.robotDJ.headHitArea, () => this.cycleRoomPalette());
    this.room.djConsole.turntables.forEach(turntable => {
      this.camera.addInteraction(turntable, () => this.scratch());
    });
    this.camera.addInteraction(this.room.bar.bartender.servedDrink, () => this.room.bar.bartender.activateDrink());
    this.camera.addInteraction(this.room.payphone.group, () => this.room.payphone.ring());
    this.camera.addInteraction(this.room.djConsole.group, () => this.toggleMusic());
    this.camera.addInteraction(this.room.bar.group, () => this.room.bar.throwShaker());
    this.camera.addInteraction(this.room.birthdayCake.group, () => this.room.celebrateCake());
    this.discoBall = new DiscoBall();
    this.lighting = new Lighting();

    // Add to Scene
    this.scene.instance.add(
      this.room.group,
      this.discoBall.group,
      this.lighting.group
    );

    this.sizes.addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    
    // Loop
    this.loop();
  }

  // 👈 METODO FONDAMENTALE: Inoltra l'ordine di partenza alla Room
  triggerConfetti() {
    if (this.room) {
      this.room.startConfetti();
    }
  }

  private toggleMusic() {
    if (this.music.paused) {
      void this.music.play()
        .then(() => this.setMusicVisuals(true))
        .catch(() => this.setMusicVisuals(false));
      return;
    }

    this.music.pause();
    this.setMusicVisuals(false);
  }

  private setMusicVisuals(playing: boolean) {
    this.room.djConsole.setPlaying(playing);
    this.room.robotDJ.setPlaying(playing);
  }

  private cycleRoomPalette() {
    this.room.robotDJ.cycleLedPalette();
    this.lighting.cyclePalette();
  }

  private scratch() {
    this.room.djConsole.scratch();
    this.room.movingLightRig.boost();
    if (!this.music.paused) this.music.playbackRate = 1.35;
    if (this.scratchResetTimer !== null) window.clearTimeout(this.scratchResetTimer);
    this.scratchResetTimer = window.setTimeout(() => {
      this.music.playbackRate = 1;
      this.scratchResetTimer = null;
    }, 1100);
  }

  private resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  private handleVisibilityChange = () => {
    if (document.hidden) {
      this.running = false;
      cancelAnimationFrame(this.reqId);
      return;
    }

    if (!this.running) {
      this.running = true;
      this.clock.getDelta();
      this.loop();
    }
  };

  private loop = () => {
    const delta = this.clock.getDelta();

    // Passiamo renderer e scene per aggiornare i riflessi a specchio della palla
    this.discoBall.update(delta, this.renderer.instance, this.scene.instance);
    this.camera.update();

    // Aggiorna tutta la stanza (inclusi i coriandoli se sono stati attivati)
    this.room.update(delta);
    this.room.vinylWall.update(this.camera.instance.position);
    this.room.payphone.updateVisibility(this.camera.instance.position);
    this.room.countdownBoard.updateVisibility(this.camera.instance.position);
    this.room.djSign.updateVisibility(this.camera.instance.position);

    // Render
    this.renderer.render(this.scene.instance, this.camera.instance);

    this.reqId = requestAnimationFrame(this.loop);
  };

  destroy() {
    this.running = false;
    cancelAnimationFrame(this.reqId);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    this.music.pause();
    this.music.src = '';
    if (this.scratchResetTimer !== null) window.clearTimeout(this.scratchResetTimer);
    this.renderer.instance.dispose();
  }
}