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

  constructor(container: HTMLElement) {
    this.clock = new THREE.Clock();
    
    // Core setup
    this.sizes = new Sizes(container);
    this.scene = new Scene();
    this.camera = new Camera(this.sizes, container);
    this.renderer = new Renderer(this.sizes, container);

    // Elements
    this.room = new Room();
    this.discoBall = new DiscoBall();
    this.lighting = new Lighting();

    // Add to Scene
    this.scene.instance.add(
      this.room.group,
      this.discoBall.group,
      this.lighting.group
    );

    this.sizes.addEventListener('resize', () => this.resize());
    
    // Loop
    this.loop();
  }

  // 👈 METODO FONDAMENTALE: Inoltra l'ordine di partenza alla Room
  triggerConfetti() {
    if (this.room) {
      this.room.startConfetti();
    }
  }

  private resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  private loop = () => {
    const delta = this.clock.getDelta();

    // Passiamo renderer e scene per aggiornare i riflessi a specchio della palla
    this.discoBall.update(delta, this.renderer.instance, this.scene.instance);
    this.camera.update();

    // Aggiorna tutta la stanza (inclusi i coriandoli se sono stati attivati)
    this.room.update(delta);

    // Render
    this.renderer.render(this.scene.instance, this.camera.instance);

    this.reqId = requestAnimationFrame(this.loop);
  };

  destroy() {
    cancelAnimationFrame(this.reqId);
    this.renderer.instance.dispose();
  }
}