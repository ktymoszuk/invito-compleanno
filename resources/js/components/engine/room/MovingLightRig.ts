import * as THREE from 'three';

type MovingHead = {
  fixture: THREE.Group;
  light: THREE.SpotLight;
  target: THREE.Object3D;
  ray: THREE.Mesh;
  rayMaterial: THREE.MeshBasicMaterial;
  lensMaterial: THREE.MeshStandardMaterial;
  wallSpot: THREE.Mesh;
  phase: number;
};

export class MovingLightRig {
  group: THREE.Group;

  private heads: MovingHead[] = [];
  private elapsed = 0;
  private boostTime = 0;
  private worldPosition = new THREE.Vector3();
  private lightOrigin = new THREE.Vector3();
  private targetWorldPosition = new THREE.Vector3();
  private lightDirection = new THREE.Vector3();

  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(-4.15, 0, -3.7);

    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x171a20,
      metalness: 0.9,
      roughness: 0.25,
    });
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x68727d,
      metalness: 1,
      roughness: 0.16,
    });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.5, 0.2, 24), baseMaterial);
    base.position.y = 0.1;
    base.castShadow = true;

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 3.75, 14), chromeMaterial);
    pole.position.y = 1.98;
    pole.castShadow = true;

    const topCap = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 12), chromeMaterial);
    topCap.position.y = 3.88;
    this.group.add(base, pole, topCap);

    const spotCanvas = document.createElement('canvas');
    spotCanvas.width = 128;
    spotCanvas.height = 128;
    const spotContext = spotCanvas.getContext('2d')!;
    const spotGradient = spotContext.createRadialGradient(64, 64, 0, 64, 64, 64);
    spotGradient.addColorStop(0, 'rgba(255,255,255,1)');
    spotGradient.addColorStop(0.28, 'rgba(255,255,255,0.8)');
    spotGradient.addColorStop(1, 'rgba(255,255,255,0)');
    spotContext.fillStyle = spotGradient;
    spotContext.fillRect(0, 0, 128, 128);
    const spotTexture = new THREE.CanvasTexture(spotCanvas);

    const colors = [0xff287f, 0xffd83d, 0x65ff75, 0x35d9ff, 0xa95cff];
    const lensRadius = 0.105;
    const wallSpotDiameter = 0.82;
    colors.forEach((color, index) => {
      const height = 0.78 + index * 0.67;
      const fixture = new THREE.Group();
      fixture.position.set(0, height, 0);

      const yoke = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.035, 10, 20, Math.PI), chromeMaterial);
      yoke.rotation.z = Math.PI;
      yoke.position.z = 0.02;

      const housing = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.34, 0.4), baseMaterial);
      housing.position.z = 0.02;
      housing.castShadow = true;

      const lensMaterial = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 2.6,
      });
      const lens = new THREE.Mesh(new THREE.CircleGeometry(lensRadius, 20), lensMaterial);
      lens.position.z = 0.225;
      fixture.add(yoke, housing, lens);
      this.group.add(fixture);

      const target = new THREE.Object3D();
      target.position.set(4, 1, -1.08);

      const light = new THREE.SpotLight(color, 42, 16, Math.PI / 15, 0.55, 1.15);
      light.position.set(0, 0, 0.225);
      light.target = target;
      light.castShadow = index === 2;
      fixture.add(light);

      const rayMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.17,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ray = new THREE.Mesh(
        new THREE.CylinderGeometry(wallSpotDiameter / 2, lensRadius, 1, 20, 1, true),
        rayMaterial,
      );

      const wallSpotMaterial = new THREE.MeshBasicMaterial({
        map: spotTexture,
        color,
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const wallSpot = new THREE.Mesh(
        new THREE.PlaneGeometry(wallSpotDiameter, wallSpotDiameter),
        wallSpotMaterial,
      );

      this.group.add(target, ray, wallSpot);
      this.heads.push({
        fixture,
        light,
        target,
        ray,
        rayMaterial,
        lensMaterial,
        wallSpot,
        phase: index * 0.8,
      });
    });
  }

  update(delta: number) {
    this.boostTime = Math.max(0, this.boostTime - delta);
    this.elapsed += delta * (this.boostTime > 0 ? 3.2 : 1);

    this.heads.forEach((head, index) => {
      const movement = (this.elapsed * (0.1 + index * 0.008) + head.phase) % 4;
      const edge = Math.floor(movement);
      const progress = movement - edge;
      const wall = 4.79;
      const axis = -4.45 + progress * 8.9;
      const height = 0.65 + (Math.sin(this.elapsed * 0.75 + index * 1.1) + 1) * 1.65;
      const worldPosition = this.worldPosition;

      if (edge === 0) {
        worldPosition.set(axis, height, -wall);
        head.wallSpot.rotation.set(0, 0, 0);
      } else if (edge === 1) {
        worldPosition.set(wall, height, axis);
        head.wallSpot.rotation.set(0, -Math.PI / 2, 0);
      } else if (edge === 2) {
        worldPosition.set(-axis, height, wall);
        head.wallSpot.rotation.set(0, Math.PI, 0);
      } else {
        worldPosition.set(-wall, height, -axis);
        head.wallSpot.rotation.set(0, Math.PI / 2, 0);
      }

      const localPosition = worldPosition.sub(this.group.position);
      head.target.position.copy(localPosition);
      head.wallSpot.position.copy(localPosition);

      const targetWorldPosition = this.targetWorldPosition.copy(head.target.position).add(this.group.position);
      head.fixture.lookAt(targetWorldPosition);

      const origin = this.lightOrigin;
      head.light.getWorldPosition(origin);
      origin.sub(this.group.position);
      const direction = this.lightDirection.copy(head.target.position).sub(origin).normalize();
      const distance = origin.distanceTo(head.target.position);
      head.ray.position.copy(origin).addScaledVector(direction, distance / 2);
      head.ray.scale.set(1, distance, 1);
      head.ray.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
      head.rayMaterial.opacity = 0.13 + Math.sin(this.elapsed * 2.5 + index) * 0.035;
      head.lensMaterial.emissiveIntensity = 2.2 + Math.sin(this.elapsed * 3 + index) * 0.8;
    });
  }

  boost() {
    this.boostTime = 1.4;
  }
}