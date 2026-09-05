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
  private music: HTMLAudioElement | null = null;
  private musicVolume = 0.4;
  private scratchResetTimer: number | null = null;
  private volumeFadeId: number | null = null;
  private musicStateListener: ((playing: boolean) => void) | null = null;
  private running = true;

  constructor(container: HTMLElement) {
    this.clock = new THREE.Clock();
    // Core setup
    this.sizes = new Sizes(container);
    this.scene = new Scene();
    this.camera = new Camera(this.sizes, container);
    this.renderer = new Renderer(this.sizes, container);

    // Elements
    this.room = new Room();
    this.camera.setNavigationRoot(this.room.group);
    this.camera.addInteraction(this.room.robotDJ.group, () => this.room.robotDJ.performDance());
    this.room.djConsole.turntables.forEach(turntable => {
      this.camera.addInteraction(turntable, () => this.scratch());
    });
    this.camera.addInteraction(this.room.bar.bartender.servedDrink, () => this.room.bar.bartender.activateDrink());
    this.camera.addInteraction(this.room.payphone.group, () => this.room.payphone.ring());
    this.camera.addInteraction(this.room.djConsole.group, () => this.room.robotDJ.performDance());
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

  async startMusicWithFade() {
    if (this.volumeFadeId !== null) cancelAnimationFrame(this.volumeFadeId);
    const music = this.getMusic();
    music.volume = 0;

    try {
      await music.play();
      this.setMusicVisuals(true);
      const startedAt = performance.now();
      const fade = (now: number) => {
        const progress = Math.min((now - startedAt) / 2000, 1);
        music.volume = progress * this.musicVolume;
        if (progress < 1) this.volumeFadeId = requestAnimationFrame(fade);
        else this.volumeFadeId = null;
      };
      this.volumeFadeId = requestAnimationFrame(fade);
    } catch {
      this.setMusicVisuals(false);
    }
  }

  toggleMusic() {
    const music = this.getMusic();
    if (music.paused) {
      void music.play()
        .then(() => this.setMusicVisuals(true))
        .catch(() => this.setMusicVisuals(false));
      return;
    }

    music.pause();
    this.setMusicVisuals(false);
  }

  setMusicVolume(volume: number) {
    if (this.volumeFadeId !== null) {
      cancelAnimationFrame(this.volumeFadeId);
      this.volumeFadeId = null;
    }
    this.musicVolume = Math.min(Math.max(volume, 0), 1);
    if (this.music) this.music.volume = this.musicVolume;
  }

  onMusicStateChange(listener: (playing: boolean) => void) {
    this.musicStateListener = listener;
  }

  private setMusicVisuals(playing: boolean) {
    this.room.djConsole.setPlaying(playing);
    this.room.robotDJ.setPlaying(playing);
    this.musicStateListener?.(playing);
  }

  private getMusic() {
    if (!this.music) {
      this.music = new Audio('/music/bacio-che-schiocca.mp3');
      this.music.loop = true;
      this.music.volume = this.musicVolume;
    }
    return this.music;
  }

  private scratch() {
    this.room.djConsole.scratch();
    this.room.movingLightRig.boost();
    if (this.music && !this.music.paused) this.music.playbackRate = 1.35;
    if (this.scratchResetTimer !== null) window.clearTimeout(this.scratchResetTimer);
    this.scratchResetTimer = window.setTimeout(() => {
      if (this.music) this.music.playbackRate = 1;
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
    this.room.updateWallVisibility(this.camera.instance.position);

    // Render
    this.renderer.render(this.scene.instance, this.camera.instance);

    this.reqId = requestAnimationFrame(this.loop);
  };

  destroy() {
    this.running = false;
    cancelAnimationFrame(this.reqId);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    this.camera.destroy();
    this.sizes.destroy();
    this.music?.pause();
    if (this.music) this.music.src = '';
    if (this.volumeFadeId !== null) cancelAnimationFrame(this.volumeFadeId);
    if (this.scratchResetTimer !== null) window.clearTimeout(this.scratchResetTimer);
    this.renderer.instance.dispose();
    this.renderer.instance.domElement.remove();
  }
}