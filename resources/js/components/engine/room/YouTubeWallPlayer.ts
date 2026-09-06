import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { Sizes } from '../utils/Sizes';

export class YouTubeWallPlayer {
  private readonly scene = new THREE.Scene();
  private readonly renderer = new CSS3DRenderer();
  private readonly player: CSS3DObject;

  constructor(private sizes: Sizes, container: HTMLElement) {
    const screen = document.createElement('div');
    screen.setAttribute('aria-label', 'Player ufficiale YouTube');
    Object.assign(screen.style, {
      width: '960px',
      height: '540px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      background: '#000000',
      border: '10px solid #09090d',
      borderRadius: '6px',
      boxShadow: '0 0 18px rgba(255, 0, 127, 0.7)',
      pointerEvents: 'auto',
    });

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/YaC3UY3Dnnk?playsinline=1&rel=0';
    iframe.title = 'Bacio che schiocca - player ufficiale YouTube';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', '0');
    Object.assign(iframe.style, {
      display: 'block',
      width: '100%',
      height: '100%',
    });
    screen.appendChild(iframe);

    this.player = new CSS3DObject(screen);
  this.player.position.set(-0.65, 2.6, -4.94);
  this.player.scale.setScalar(0.00635);
    this.scene.add(this.player);

    Object.assign(this.renderer.domElement.style, {
      position: 'absolute',
      inset: '0',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: '0',
    });
    this.resize();
    container.appendChild(this.renderer.domElement);
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
  }

  render(camera: THREE.PerspectiveCamera) {
    this.renderer.render(this.scene, camera);
  }

  destroy() {
    this.player.removeFromParent();
    this.renderer.domElement.remove();
  }
}