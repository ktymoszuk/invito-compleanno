import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sizes } from '../utils/Sizes';

export class Camera {
  instance!: THREE.PerspectiveCamera;
  controls!: OrbitControls;

  private hasOrientationPermission = false;
  private orientationActive = false;
  
  // Posizionata nell'angolo opposto (dall'altra parte della stanza)
  private defaultPosition = new THREE.Vector3(-2.5, 1.7, 4.5);
  // Punta verso la direzione corretta (angolo in fondo a destra, leggermente spostata verso il centro)
  private initialTarget = new THREE.Vector3(1.2, 1.35, -2.5);
  
  private fallbackAngle = 0;
  private lastUserInteraction = 0;
  private isUserInteracting = false;

  constructor(private sizes: Sizes, private domElement: HTMLElement) {
    this.setInstance();
    this.setControls();
    this.initOrientation();
  }

  private setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      60,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.instance.position.copy(this.defaultPosition);
  }

  private setControls() {
    this.controls = new OrbitControls(this.instance, this.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.enablePan = false;
    this.controls.enableZoom = true;
    this.controls.minDistance = 2.0;
    this.controls.maxDistance = 9.0;

    this.controls.target.copy(this.initialTarget);

    this.controls.minAzimuthAngle = -Math.PI;
    this.controls.maxAzimuthAngle = Math.PI;
    
    this.controls.minPolarAngle = Math.PI / 4;
    this.controls.maxPolarAngle = Math.PI / 1.7;

    this.controls.update();
  }

  private initOrientation() {
    if (typeof window === 'undefined' || typeof window.DeviceOrientationEvent === 'undefined') {
      return;
    }

    const startTracking = () => {
      if (this.hasOrientationPermission) return;

      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        (DeviceOrientationEvent as any).requestPermission()
          .then((response: string) => {
            if (response === 'granted') {
              this.hasOrientationPermission = true;
              this.orientationActive = true;
            }
          })
          .catch(console.error);
      } else {
        this.hasOrientationPermission = true;
        this.orientationActive = true;
      }
    };

    const markInteraction = () => {
      this.lastUserInteraction = performance.now();
      this.isUserInteracting = true;
    };

    const endInteraction = () => {
      this.defaultPosition.copy(this.instance.position);
      this.initialTarget.copy(this.controls.target);
      
      this.isUserInteracting = false;
      this.lastUserInteraction = performance.now();
    };

    window.addEventListener('pointerdown', startTracking, { once: true, passive: true });
    window.addEventListener('touchstart', startTracking, { once: true, passive: true });
    
    window.addEventListener('pointerdown', markInteraction, { passive: true });
    window.addEventListener('touchstart', markInteraction, { passive: true });
    window.addEventListener('wheel', markInteraction, { passive: true });
    window.addEventListener('pointermove', markInteraction, { passive: true });
    window.addEventListener('touchmove', markInteraction, { passive: true });
    
    window.addEventListener('pointerup', endInteraction, { passive: true });
    window.addEventListener('touchend', endInteraction, { passive: true });
    window.addEventListener('pointercancel', endInteraction, { passive: true });

    if (!(DeviceOrientationEvent as any).requestPermission) {
      this.hasOrientationPermission = true;
      this.orientationActive = true;
    }
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    const now = performance.now();
    const timeSinceInteraction = now - this.lastUserInteraction;
    
    const shouldAutoMove = timeSinceInteraction > 3000 && !this.isUserInteracting;

    if (shouldAutoMove) {
      this.fallbackAngle += 0.02; 
      const sweep = Math.sin(this.fallbackAngle) * 2.0; 

      this.instance.position.x = this.defaultPosition.x + sweep;
      this.controls.target.x = this.initialTarget.x + sweep * 0.3;
    }

    this.controls.update();
  }
}