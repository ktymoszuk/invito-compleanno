import * as THREE from 'three';
import { Sizes } from '../utils/Sizes';

export class Renderer {
  instance!: THREE.WebGLRenderer;

  constructor(private sizes: Sizes, private container: HTMLElement) {
    this.setInstance();
  }

  private setInstance() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    this.instance = new THREE.WebGLRenderer({ antialias: !isMobile, powerPreference: 'high-performance' });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
    this.instance.shadowMap.enabled = !isMobile;
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