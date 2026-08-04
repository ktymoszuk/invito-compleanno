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
    this.controls.enablePan = false; // Disabilitato il pan per evitare scostamenti strani del target
    this.controls.enableZoom = true;
    this.controls.minDistance = 2.0;
    this.controls.maxDistance = 9.0;

    this.controls.target.copy(this.initialTarget);

    // Ampliamo i limiti di rotazione per permettere di esplorare bene la stanza
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

      const gamma = THREE.MathUtils.clamp(event.gamma, -60, 60);
      const beta = THREE.MathUtils.clamp(event.beta, 10, 100);

      this.targetRotationY = (gamma * Math.PI) / 180 * 0.4;
      this.targetRotationX = ((beta - 45) * Math.PI) / 180 * 0.3;
      this.orientationActive = true;
    };

    const startTracking = () => {
      if (this.orientationActive) return;

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
      this.lastUserInteraction = performance.now(); // Resetta il timer dei 3 secondi dal rilascio
    };

    window.addEventListener('pointerdown', startTracking, { once: true, passive: true });
    window.addEventListener('touchstart', startTracking, { once: true, passive: true });
    
    // Intercettiamo qualsiasi interazione utente (tocchi, mouse, zoom)
    window.addEventListener('pointerdown', markInteraction, { passive: true });
    window.addEventListener('touchstart', markInteraction, { passive: true });
    window.addEventListener('wheel', markInteraction, { passive: true });
    
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
    // Controlla se sono passati più di 3 secondi dall'ultimo toccamento
    const timeSinceInteraction = now - this.lastUserInteraction;
    const shouldAutoMove = timeSinceInteraction > 3000 && !this.isUserInteracting;

    if (shouldAutoMove) {
      // 🚀 MOVIMENTO AUTOMATICO RAPIDO DA UNA PARETE ALL'ALTRA (ampiezza 180 gradi circa)
      // Aumentando la velocità (0.03 anziché 0.012) e l'ampiezza dello sweep (3.5)
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
    } else if (this.orientationActive && !this.isUserInteracting && Math.abs(this.targetRotationY) > 0.001) {
      // Gestione giroscopio fluida se l'utente non sta toccando lo schermo
      this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.1;
      this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.1;

      const radius = 5.8;
      this.instance.position.x = Math.sin(this.currentRotationY) * radius;
      this.instance.position.z = Math.cos(this.currentRotationY) * radius;
      this.instance.position.y = 1.7 + this.currentRotationX;
      this.instance.lookAt(this.controls.target);
    }

    // Aggiorna i controlli OrbitControls permettendo all'utente di mantenere la visuale libera
    this.controls.update();
  }
}