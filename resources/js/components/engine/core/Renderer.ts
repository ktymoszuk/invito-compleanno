import * as THREE from 'three';
import { Sizes } from '../utils/Sizes';

export class Renderer {
  instance!: THREE.WebGLRenderer;

  constructor(private sizes: Sizes, private container: HTMLElement) {
    this.setInstance();
  }

  private setInstance() {
    this.instance = new THREE.WebGLRenderer({ antialias: true });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.toneMapping = THREE.ACESFilmicToneMapping;

    this.container.appendChild(this.instance.domElement);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  render(scene: THREE.Scene, camera: THREE.Camera) {
    this.instance.render(scene, camera);
  }
}