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

    this.instance.position.set(0, 1.7, 4.9);
  }

  private setControls() {
    this.controls = new OrbitControls(this.instance, this.domElement);
    this.controls.enableDamping = true;

    // 👈 ABILITA LO ZOOM (pinch-to-zoom su mobile e rotellina su desktop)
    this.controls.enableZoom = true;
    this.controls.minDistance = 2.5; // Distanza minima per non entrare troppo nei dettagli
    this.controls.maxDistance = 7.0; // Distanza massima per non uscire dalla stanza

    // Ruotiamo leggermente il target verso la scritta
    this.controls.target.set(-0.6, 1.7, 0);

    this.controls.minAzimuthAngle = -Math.PI / 3;
    this.controls.maxAzimuthAngle = Math.PI / 3;
    
    this.controls.minPolarAngle = Math.PI / 3;
    this.controls.maxPolarAngle = Math.PI / 1.85;

    this.controls.update();
  }

  private initOrientation() {
    if (window.DeviceOrientationEvent) {
      const handleOrientation = (event: DeviceOrientationEvent) => {
        if (event.gamma !== null && event.beta !== null) {
          this.targetRotationY = (event.gamma * Math.PI) / 180 * 0.25;
          this.targetRotationX = ((event.beta - 45) * Math.PI) / 180 * 0.25;
        }
      };

      // Gestione permessi per iOS 13+
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        const requestAudioPermission = () => {
          (DeviceOrientationEvent as any).requestPermission()
            .then((response: string) => {
              if (response === 'granted') {
                window.addEventListener('deviceorientation', handleOrientation);
                this.hasOrientationPermission = true;
              }
            })
            .catch(console.error);
          window.removeEventListener('click', requestAudioPermission);
          window.removeEventListener('touchend', requestAudioPermission);
        };

        window.addEventListener('click', requestAudioPermission);
        window.addEventListener('touchend', requestAudioPermission);
      } else {
        window.addEventListener('deviceorientation', handleOrientation);
      }
    }
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    // Gestione movimento da accelerometro
    if (this.targetRotationX !== 0 || this.targetRotationY !== 0) {
      this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.05;
      this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.05;

      const radius = 4.9;
      this.instance.position.x = Math.sin(this.currentRotationY) * radius;
      this.instance.position.z = Math.cos(this.currentRotationY) * radius;
      this.instance.position.y = 1.7 + this.currentRotationX;
      
      this.instance.lookAt(this.controls.target);
    }

    this.controls.update();
  }
}