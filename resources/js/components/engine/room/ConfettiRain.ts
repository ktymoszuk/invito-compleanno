import * as THREE from 'three';

export class ConfettiRain {
  group: THREE.Group;
  private particles: {
    mesh: THREE.Mesh;
    velocity: THREE.Vector3;
    rotSpeed: THREE.Vector3;
  }[] = [];
  private count = 150;
  private roomSize = 10;
  private roomHeight = 4;
  private clock = new THREE.Clock(); // Orologio interno autonomo

  constructor() {
    this.group = new THREE.Group();

    const geometry = new THREE.PlaneGeometry(0.06, 0.12);
    const material = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.95,
      roughness: 0.1,
      side: THREE.DoubleSide,
      emissive: 0x222222,
    });

    for (let i = 0; i < this.count; i++) {
      const mesh = new THREE.Mesh(geometry, material);

      const x = (Math.random() - 0.5) * (this.roomSize - 1);
      const y = Math.random() * this.roomHeight;
      const z = (Math.random() - 0.5) * (this.roomSize - 1);
      mesh.position.set(x, y, z);

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        - (0.5 + Math.random() * 0.8),
        (Math.random() - 0.5) * 0.2
      );

      const rotSpeed = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );

      this.group.add(mesh);
      this.particles.push({ mesh, velocity, rotSpeed });
    }

    // Avvia l'orologio
    this.clock.start();
  }

  // Non dipende più dal delta esterno, calcola il tempo trascorso in autonomia
  update() {
    const delta = this.clock.getDelta();

    this.particles.forEach((p) => {
      p.mesh.position.addScaledVector(p.velocity, delta);

      p.mesh.rotation.x += p.rotSpeed.x * delta;
      p.mesh.rotation.y += p.rotSpeed.y * delta;
      p.mesh.rotation.z += p.rotSpeed.z * delta;

      if (p.mesh.position.y <= 0) {
        p.mesh.position.y = this.roomHeight;
        p.mesh.position.x = (Math.random() - 0.5) * (this.roomSize - 1);
        p.mesh.position.z = (Math.random() - 0.5) * (this.roomSize - 1);
      }
    });
  }
}