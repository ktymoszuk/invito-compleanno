import * as THREE from 'three';
import { Sizes } from '../utils/Sizes';

export class Renderer {
  instance!: THREE.WebGLRenderer;

  constructor(private sizes: Sizes, private container: HTMLElement) {
    this.setInstance();
  }

  private setInstance() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    this.instance = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
    this.instance.setClearColor(0x0a0a12, 0);
    this.instance.shadowMap.enabled = !isMobile;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.toneMapping = THREE.ACESFilmicToneMapping;

    Object.assign(this.instance.domElement.style, {
      position: 'absolute',
      inset: '0',
      pointerEvents: 'none',
      zIndex: '1',
    });

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