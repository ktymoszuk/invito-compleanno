import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sizes } from '../utils/Sizes';

export class Camera {
  instance!: THREE.PerspectiveCamera;
  controls!: OrbitControls;

  private targetRotationX = 0;
  private targetRotationY = 0;
  private currentRotationX = 0;
  private currentRotationY = 0;
  private hasOrientationPermission = false;
  private orientationActive = false;
  
  private initialTarget = new THREE.Vector3(-0.2, 1.35, 0);
  private defaultPosition = new THREE.Vector3(0.0, 1.7, 5.8);
  
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

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma === null || event.beta === null) return;

      // Leggiamo i valori dell'inclinazione del telefono
      const gamma = THREE.MathUtils.clamp(event.gamma, -45, 45); // Destra/Sinistra
      const beta = THREE.MathUtils.clamp(event.beta, 15, 85);    // Avanti/Indietro

      this.targetRotationY = (gamma * Math.PI) / 180 * 0.35;
      this.targetRotationX = ((beta - 45) * Math.PI) / 180 * 0.25;
      this.orientationActive = true;
    };

    const startTracking = () => {
      if (this.hasOrientationPermission) return;

      // Richiesta permessi espliciti per iOS 13+
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        (DeviceOrientationEvent as any).requestPermission()
          .then((response: string) => {
            if (response === 'granted') {
              window.addEventListener('deviceorientation', handleOrientation, { passive: true });
              this.hasOrientationPermission = true;
              this.orientationActive = true;
            }
          })
          .catch(console.error);
      } else {
        // Android e altri dispositivi compatibili
        window.addEventListener('deviceorientation', handleOrientation, { passive: true });
        this.hasOrientationPermission = true;
        this.orientationActive = true;
      }
    };

    const markInteraction = () => {
      this.lastUserInteraction = performance.now();
      this.isUserInteracting = true;
    };

    const endInteraction = () => {
      this.isUserInteracting = false;
      this.lastUserInteraction = performance.now();
    };

    // Al primo tocco sblocchiamo i sensori (richiesto da Safari/iOS)
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
      startTracking();
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
      // 1. Auto-movimento fluido a 180° se l'utente non interagisce da 3 secondi
      this.fallbackAngle += 0.03; 
      const sweep = Math.sin(this.fallbackAngle) * 3.5;

      this.instance.position.set(
        this.defaultPosition.x + sweep,
        this.defaultPosition.y,
        this.defaultPosition.z - Math.abs(sweep) * 0.2
      );

      this.controls.target.set(
        this.initialTarget.x + sweep * 0.5,
        this.initialTarget.y,
        this.initialTarget.z
      );
    } else if (this.orientationActive && !this.isUserInteracting && (Math.abs(this.targetRotationX) > 0.001 || Math.abs(this.targetRotationY) > 0.001)) {
      // 2. Giroscopio attivo: muove la visuale in base all'inclinazione del telefono quando non si sta toccando lo schermo
      this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.1;
      this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.1;

      const radius = 5.8;
      this.instance.position.x = Math.sin(this.currentRotationY) * radius;
      this.instance.position.z = Math.cos(this.currentRotationY) * radius;
      this.instance.position.y = 1.7 + this.currentRotationX;
      
      this.controls.target.set(
        this.initialTarget.x + this.currentRotationY * 0.5,
        this.initialTarget.y + this.currentRotationX * 0.5,
        this.initialTarget.z
      );
      this.instance.lookAt(this.controls.target);
    }

    this.controls.update();
  }
}