import * as THREE from 'three';

export class InteractivePulse {
  group: THREE.Group;

  private rings: Array<{ mesh: THREE.Mesh; material: THREE.MeshBasicMaterial; phase: number }> = [];
  private elapsed = 0;
  private active = false;

  constructor(color = 0x67f7e8) {
    this.group = new THREE.Group();

    [0, 0.5].forEach((phase) => {
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(new THREE.RingGeometry(0.13, 0.18, 32), material);
      this.group.add(mesh);
      this.rings.push({ mesh, material, phase });
    });

    const centerMaterial = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 2.2,
      transparent: true,
      opacity: 0.9,
    });
    const center = new THREE.Mesh(new THREE.CircleGeometry(0.07, 24), centerMaterial);
    center.position.z = 0.006;
    this.group.add(center);
  }

  setActive(active: boolean) {
    this.active = active;
  }

  update(delta: number) {
    this.elapsed += delta;
    this.rings.forEach((ring) => {
      const progress = (this.elapsed * (this.active ? 0.65 : 0.45) + ring.phase) % 1;
      const scale = 1 + progress * 1.8;
      ring.mesh.scale.setScalar(scale);
      ring.material.opacity = (1 - progress) * (this.active ? 0.95 : 0.68);
    });
  }
}
