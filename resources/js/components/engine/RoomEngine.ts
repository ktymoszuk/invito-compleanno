import * as THREE from 'three';
import { Sizes } from './utils/Sizes';
import { Scene } from './core/Scene';
import { Camera } from './core/Camera';
import { Renderer } from './core/Renderer';
import { Room } from './room/Room';
import { DiscoBall } from './disco/DiscoBall';
import { Lighting } from './lighting/Lighting';
import { YouTubeWallPlayer } from './room/YouTubeWallPlayer';

export class RoomEngine {
  sizes: Sizes;
  scene: Scene;
  camera: Camera;
  renderer: Renderer;
  room: Room;
  discoBall: DiscoBall;
  lighting: Lighting;
  youtubeWallPlayer: YouTubeWallPlayer;
  
  private clock: THREE.Clock;
  private reqId: number = 0;
  private scratchResetTimer: number | null = null;
  private running = true;
  private readonly isMobile = window.matchMedia('(max-width: 768px)').matches;
  private readonly frameInterval = window.matchMedia('(max-width: 768px)').matches ? 1000 / 30 : 0;
  private lastFrameTime = 0;
  private qualityRestoreTimer: number | null = null;

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
    this.youtubeWallPlayer = new YouTubeWallPlayer(this.sizes, container);

    // Add to Scene
    this.scene.instance.add(
      this.room.group,
      this.discoBall.group,
      this.lighting.group
    );

    this.sizes.addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
    if (this.isMobile) {
      window.addEventListener('pointerdown', this.lowerQualityWhileMoving, { passive: true });
      window.addEventListener('pointerup', this.scheduleQualityRestore, { passive: true });
      window.addEventListener('pointercancel', this.scheduleQualityRestore, { passive: true });
    }
    
    // Loop
    this.loop();
  }

  // 👈 METODO FONDAMENTALE: Inoltra l'ordine di partenza alla Room
  triggerConfetti() {
    if (this.room) {
      this.room.startConfetti();
    }
  }

  activateYouTubePlayer() {
    this.youtubeWallPlayer.activate();
  }

  private scratch() {
    this.room.djConsole.scratch();
    this.room.movingLightRig.boost();
    if (this.scratchResetTimer !== null) window.clearTimeout(this.scratchResetTimer);
    this.scratchResetTimer = window.setTimeout(() => {
      this.scratchResetTimer = null;
    }, 1100);
  }

  private resize() {
    this.camera.resize();
    this.renderer.resize();
    this.youtubeWallPlayer.resize();
  }

  private lowerQualityWhileMoving = () => {
    if (this.qualityRestoreTimer !== null) window.clearTimeout(this.qualityRestoreTimer);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  };

  private scheduleQualityRestore = () => {
    if (this.qualityRestoreTimer !== null) window.clearTimeout(this.qualityRestoreTimer);
    this.qualityRestoreTimer = window.setTimeout(() => {
      this.renderer.setPixelRatio(this.sizes.pixelRatio);
      this.qualityRestoreTimer = null;
    }, 180);
  };

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

  private loop = (frameTime = 0) => {
    if (this.frameInterval && frameTime - this.lastFrameTime < this.frameInterval) {
      this.reqId = requestAnimationFrame(this.loop);
      return;
    }
    this.lastFrameTime = frameTime;
    const delta = this.clock.getDelta();

    // Passiamo renderer e scene per aggiornare i riflessi a specchio della palla
    this.discoBall.update(delta, this.renderer.instance, this.scene.instance);
    this.camera.update();

    // Aggiorna tutta la stanza (inclusi i coriandoli se sono stati attivati)
    this.room.update(delta);
    this.room.updateWallVisibility(this.camera.instance.position);

    // Render
    this.renderer.render(this.scene.instance, this.camera.instance);
    this.youtubeWallPlayer.render(this.camera.instance);

    this.reqId = requestAnimationFrame(this.loop);
  };

  destroy() {
    this.running = false;
    cancelAnimationFrame(this.reqId);
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
    window.removeEventListener('pointerdown', this.lowerQualityWhileMoving);
    window.removeEventListener('pointerup', this.scheduleQualityRestore);
    window.removeEventListener('pointercancel', this.scheduleQualityRestore);
    this.camera.destroy();
    this.sizes.destroy();
    if (this.scratchResetTimer !== null) window.clearTimeout(this.scratchResetTimer);
    if (this.qualityRestoreTimer !== null) window.clearTimeout(this.qualityRestoreTimer);
    this.youtubeWallPlayer.destroy();
    this.renderer.instance.dispose();
    this.renderer.instance.domElement.remove();
  }
}