import * as THREE from 'three';

export class Ceiling {
  mesh: THREE.Mesh;

  constructor(width: number, depth: number, height: number) {
    const geometry = new THREE.PlaneGeometry(width, depth);
    const material = new THREE.MeshStandardMaterial({
      color: 0x444455, // Grigio medio bilanciato per raccogliere le sfumature
      roughness: 0.6,
      metalness: 0.1,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    // Orientiamo il piano verso il basso
    this.mesh.rotation.x = Math.PI * 0.5;
    this.mesh.position.set(0, height, 0);
    this.mesh.receiveShadow = true;
  }
}