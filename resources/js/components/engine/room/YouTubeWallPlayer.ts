import * as THREE from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { Sizes } from '../utils/Sizes';

export class YouTubeWallPlayer {
  private readonly scene = new THREE.Scene();
  private readonly renderer = new CSS3DRenderer();
  private readonly player: CSS3DObject;
  private readonly screen: HTMLDivElement;
  private readonly lastCameraMatrix = new THREE.Matrix4();
  private readonly lastProjectionMatrix = new THREE.Matrix4();
  private needsRender = true;
  private activated = false;
  private readonly activateOnFirstInteraction = () => this.activate();

  constructor(private sizes: Sizes, container: HTMLElement) {
    this.screen = document.createElement('div');
    this.screen.setAttribute('aria-label', 'Player ufficiale YouTube');
    Object.assign(this.screen.style, {
      width: '480px',
      height: '270px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      background: '#000000',
      border: '4px solid #09090d',
      borderRadius: '6px',
      boxShadow: '0 0 18px rgba(255, 0, 127, 0.7)',
      pointerEvents: 'auto',
    });

    this.player = new CSS3DObject(this.screen);
    this.player.position.set(-0.65, 2.6, -4.94);
    this.player.scale.setScalar(0.0127);
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
    window.addEventListener('pointerdown', this.activateOnFirstInteraction, { once: true, passive: true });
  }

  activate() {
    if (this.activated) return;
    this.activated = true;

    const iframe = document.createElement('iframe');
  const embedUrl = new URL('https://www.youtube.com/embed/YaC3UY3Dnnk');
  embedUrl.searchParams.set('playsinline', '1');
  embedUrl.searchParams.set('rel', '0');
  embedUrl.searchParams.set('origin', window.location.origin);
  iframe.src = embedUrl.toString();
    iframe.title = 'Bacio che schiocca - player ufficiale YouTube';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.referrerPolicy = 'origin';
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', '0');
    Object.assign(iframe.style, {
      display: 'block',
      width: '100%',
      height: '100%',
    });
    this.screen.appendChild(iframe);
  }

  resize() {
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.needsRender = true;
  }

  render(camera: THREE.PerspectiveCamera) {
    if (
      !this.needsRender
      && camera.matrixWorld.equals(this.lastCameraMatrix)
      && camera.projectionMatrix.equals(this.lastProjectionMatrix)
    ) {
      return;
    }

    this.renderer.render(this.scene, camera);
    this.lastCameraMatrix.copy(camera.matrixWorld);
    this.lastProjectionMatrix.copy(camera.projectionMatrix);
    this.needsRender = false;
  }

  destroy() {
    window.removeEventListener('pointerdown', this.activateOnFirstInteraction);
    this.player.removeFromParent();
    this.renderer.domElement.remove();
  }
}