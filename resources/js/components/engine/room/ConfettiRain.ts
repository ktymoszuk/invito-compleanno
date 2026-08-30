import * as THREE from 'three';

export class ConfettiRain {
  group: THREE.Group;
  private particles: {
    position: THREE.Vector3;
    rotation: THREE.Euler;
    velocity: THREE.Vector3;
    rotSpeed: THREE.Vector3;
  }[] = [];
  private mesh: THREE.InstancedMesh;
  private transform = new THREE.Object3D();
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
    this.mesh = new THREE.InstancedMesh(geometry, material, this.count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.group.add(this.mesh);

    for (let i = 0; i < this.count; i++) {
      const x = (Math.random() - 0.5) * (this.roomSize - 1);
      const y = Math.random() * this.roomHeight;
      const z = (Math.random() - 0.5) * (this.roomSize - 1);
      const position = new THREE.Vector3(x, y, z);
      const rotation = new THREE.Euler(
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

      this.particles.push({ position, rotation, velocity, rotSpeed });
    }

    // Avvia l'orologio
    this.clock.start();
  }

  // Non dipende più dal delta esterno, calcola il tempo trascorso in autonomia
  update() {
    const delta = this.clock.getDelta();

    this.particles.forEach((particle, index) => {
      particle.position.addScaledVector(particle.velocity, delta);

      particle.rotation.x += particle.rotSpeed.x * delta;
      particle.rotation.y += particle.rotSpeed.y * delta;
      particle.rotation.z += particle.rotSpeed.z * delta;

      if (particle.position.y <= 0) {
        particle.position.y = this.roomHeight;
        particle.position.x = (Math.random() - 0.5) * (this.roomSize - 1);
        particle.position.z = (Math.random() - 0.5) * (this.roomSize - 1);
      }

      this.transform.position.copy(particle.position);
      this.transform.rotation.copy(particle.rotation);
      this.transform.updateMatrix();
      this.mesh.setMatrixAt(index, this.transform.matrix);
    });
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}