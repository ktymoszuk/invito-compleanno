import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Sizes } from '../utils/Sizes';

export class Camera {
  instance!: THREE.PerspectiveCamera;
  controls!: OrbitControls;

  private hasOrientationPermission = false;
  private orientationActive = false;
  
  // Posizionata ancora più in fondo, proprio sul bordo estremo della stanza
  private defaultPosition = new THREE.Vector3(-4.0, 1.7, 7.0);
  // Punta verso la direzione corretta (angolo in fondo a destra, leggermente spostata verso il centro)
  private initialTarget = new THREE.Vector3(1.2, 1.35, -2.5);
  
  private fallbackAngle = 0;
  private lastUserInteraction = 0;
  private isUserInteracting = false;
  private navigationRoot: THREE.Object3D | null = null;
  private navigationTarget: THREE.Vector3 | null = null;
  private navigationPosition: THREE.Vector3 | null = null;
  private pointerStart = new THREE.Vector2();
  private pointerMoved = false;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  private interactiveObjects: Array<{ root: THREE.Object3D; action: () => void }> = [];
  private readonly minTarget = new THREE.Vector3(-4.25, 0.65, -4.25);
  private readonly maxTarget = new THREE.Vector3(4.25, 3.8, 4.25);

  constructor(private sizes: Sizes, private domElement: HTMLElement) {
    this.setInstance();
    this.setControls();
    this.initOrientation();
    this.initPointNavigation();
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
    this.controls.enablePan = true;
    this.controls.panSpeed = 0.72;
    this.controls.screenSpacePanning = false;
    this.controls.enableZoom = true;
    this.controls.minDistance = 2.0;
    this.controls.maxDistance = 11.0;

    this.controls.target.copy(this.initialTarget);

    this.controls.minAzimuthAngle = -Math.PI;
    this.controls.maxAzimuthAngle = Math.PI;
    
    this.controls.minPolarAngle = Math.PI / 4;
    this.controls.maxPolarAngle = Math.PI / 1.7;

    this.controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
    this.controls.mouseButtons.MIDDLE = THREE.MOUSE.DOLLY;
    this.controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
    this.controls.touches.ONE = THREE.TOUCH.ROTATE;
    this.controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
    this.controls.listenToKeyEvents(window);

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
      this.constrainTarget();
      this.defaultPosition.copy(this.instance.position);
      this.initialTarget.copy(this.controls.target);
      this.fallbackAngle = 0;
      
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

  setNavigationRoot(root: THREE.Object3D) {
    this.navigationRoot = root;
  }

  addInteraction(root: THREE.Object3D, action: () => void) {
    this.interactiveObjects.push({ root, action });
  }

  update() {
    const now = performance.now();
    const timeSinceInteraction = now - this.lastUserInteraction;

    if (this.navigationTarget && this.navigationPosition) {
      this.controls.target.lerp(this.navigationTarget, 0.075);
      this.instance.position.lerp(this.navigationPosition, 0.075);

      if (this.controls.target.distanceToSquared(this.navigationTarget) < 0.001) {
        this.controls.target.copy(this.navigationTarget);
        this.instance.position.copy(this.navigationPosition);
        this.defaultPosition.copy(this.instance.position);
        this.initialTarget.copy(this.controls.target);
        this.navigationTarget = null;
        this.navigationPosition = null;
      }
    }
    
    const shouldAutoMove = timeSinceInteraction > 3000
      && !this.isUserInteracting
      && !this.navigationTarget;

    if (shouldAutoMove) {
      this.fallbackAngle += 0.018;
      const idleRotation = Math.sin(this.fallbackAngle) * 0.22;
      const baseOffset = this.defaultPosition.clone().sub(this.initialTarget);
      baseOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), idleRotation);

      this.instance.position.copy(this.initialTarget).add(baseOffset);
      this.controls.target.copy(this.initialTarget);
    }

    this.controls.update();
    this.constrainTarget();
  }

  private constrainTarget() {
    const previousTarget = this.controls.target.clone();
    this.controls.target.clamp(this.minTarget, this.maxTarget);
    this.instance.position.add(this.controls.target.clone().sub(previousTarget));
  }

  private initPointNavigation() {
    this.domElement.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;
      this.pointerStart.set(event.clientX, event.clientY);
      this.pointerMoved = false;
      this.navigationTarget = null;
      this.navigationPosition = null;
    }, { passive: true });

    this.domElement.addEventListener('pointermove', (event) => {
      if (Math.hypot(event.clientX - this.pointerStart.x, event.clientY - this.pointerStart.y) > 8) {
        this.pointerMoved = true;
      }
    }, { passive: true });

    this.domElement.addEventListener('pointerup', (event) => {
      if (event.button !== 0 || this.pointerMoved || !this.navigationRoot) return;

      const bounds = this.domElement.getBoundingClientRect();
      this.pointer.set(
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
        -((event.clientY - bounds.top) / bounds.height) * 2 + 1,
      );
      this.raycaster.setFromCamera(this.pointer, this.instance);

      const intersections = this.raycaster.intersectObject(this.navigationRoot, true);
      const intersection = intersections[0];
      if (!intersection) return;

      const interaction = intersections
        .map(({ object }) => this.interactiveObjects.find(({ root }) => {
          let current: THREE.Object3D | null = object;
          while (current) {
            if (current === root) return true;
            current = current.parent;
          }
          return false;
        }))
        .find((candidate) => candidate !== undefined);

      if (interaction) {
        interaction.action();
        return;
      }

      const destination = new THREE.Vector3(
        THREE.MathUtils.clamp(intersection.point.x, this.minTarget.x, this.maxTarget.x),
        1.7,
        THREE.MathUtils.clamp(intersection.point.z, this.minTarget.z, this.maxTarget.z),
      );
      const viewOffset = this.controls.target.clone().sub(this.instance.position);
      this.navigationPosition = destination;
      this.navigationTarget = destination.clone().add(viewOffset).clamp(this.minTarget, this.maxTarget);
      this.lastUserInteraction = performance.now();
      this.fallbackAngle = 0;
    }, { passive: true });
  }
}