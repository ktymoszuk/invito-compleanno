import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sizes } from '../utils/Sizes';

export class Camera {
  instance!: THREE.PerspectiveCamera;
  controls!: OrbitControls;

  // Variabili per l'accelerometro
  private targetRotationX = 0;
  private targetRotationY = 0;
  private currentRotationX = 0;
  private currentRotationY = 0;
  private hasOrientationPermission = false;
  private orientationActive = false;
  private initialRadius = 5.3;
  private initialHeight = 1.7;
  private initialTarget = new THREE.Vector3(-0.2, 1.35, 0);
  private defaultPosition = new THREE.Vector3(0.0, 1.7, 5.35);
  private fallbackAngle = 0;
  private idleTimer = 0;
  private lastUserInteraction = 0;

  constructor(private sizes: Sizes, private domElement: HTMLElement) {
    this.setInstance();
    this.setControls();
    this.initOrientation();
  }

  private setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      60, // FOV per abbracciare entrambe le pareti
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );

    this.instance.position.copy(this.defaultPosition);
  }

  private setControls() {
    this.controls = new OrbitControls(this.instance, this.domElement);
    this.controls.enableDamping = true;

    // 👈 ABILITA LO ZOOM (pinch-to-zoom su mobile e rotellina su desktop)
    this.controls.enableZoom = true;
    this.controls.minDistance = 2.5; // Distanza minima per non entrare troppo nei dettagli
    this.controls.maxDistance = 7.0; // Distanza massima per non uscire dalla stanza

    // Il target punta verso la console del DJ, con una vista più ampia e meno centrale.
    this.controls.target.copy(this.initialTarget);

    this.controls.minAzimuthAngle = -Math.PI / 3;
    this.controls.maxAzimuthAngle = Math.PI / 3;
    
    this.controls.minPolarAngle = Math.PI / 3;
    this.controls.maxPolarAngle = Math.PI / 1.85;

    this.controls.update();
  }

  private initOrientation() {
    if (typeof window === 'undefined' || typeof window.DeviceOrientationEvent === 'undefined') {
      return;
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma === null || event.beta === null) {
        return;
      }

      const gamma = THREE.MathUtils.clamp(event.gamma, -45, 45);
      const beta = THREE.MathUtils.clamp(event.beta, 20, 90);

      this.targetRotationY = (gamma * Math.PI) / 180 * 0.18;
      this.targetRotationX = ((beta - 45) * Math.PI) / 180 * 0.14;
      this.orientationActive = true;
    };

    const startTracking = () => {
      if (this.orientationActive) {
        return;
      }

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

    const markUserInteraction = () => {
      this.lastUserInteraction = performance.now();
    };

    // Sul telefono il primo tap/touch è spesso necessario per sbloccare il sensore.
    window.addEventListener('pointerdown', startTracking, { once: true, passive: true });
    window.addEventListener('touchstart', startTracking, { once: true, passive: true });
    window.addEventListener('keydown', startTracking, { once: true });
    window.addEventListener('pointermove', markUserInteraction, { passive: true });
    window.addEventListener('wheel', markUserInteraction, { passive: true });
    window.addEventListener('touchmove', markUserInteraction, { passive: true });

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
    const hasGyroInput = Math.abs(this.targetRotationX) > 0.001 || Math.abs(this.targetRotationY) > 0.001;
    const hasRecentInteraction = now - this.lastUserInteraction < 2000;

    if (hasGyroInput && hasRecentInteraction) {
      this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.12;
      this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.12;

      const radius = this.initialRadius;
      this.instance.position.x = 0.0 + Math.sin(this.currentRotationY) * radius * 0.42;
      this.instance.position.z = this.initialRadius + Math.cos(this.currentRotationY) * radius * 0.22;
      this.instance.position.y = this.initialHeight + this.currentRotationX * 0.7;

      this.controls.target.set(
        this.initialTarget.x + this.currentRotationY * 0.18,
        this.initialTarget.y + this.currentRotationX * 0.1,
        this.initialTarget.z
      );
      this.instance.lookAt(this.controls.target);
    } else {
      this.currentRotationX += (0 - this.currentRotationX) * 0.05;
      this.currentRotationY += (0 - this.currentRotationY) * 0.05;

      this.fallbackAngle += 0.012;
      const sweep = Math.sin(this.fallbackAngle) * 1.55;

      this.instance.position.set(
        this.defaultPosition.x + sweep,
        this.defaultPosition.y + Math.sin(this.fallbackAngle * 0.8) * 0.04,
        this.defaultPosition.z
      );

      this.controls.target.set(
        this.initialTarget.x + sweep * 0.16,
        this.initialTarget.y,
        this.initialTarget.z
      );
      this.instance.lookAt(this.controls.target);
    }

    this.controls.update();
  }
}