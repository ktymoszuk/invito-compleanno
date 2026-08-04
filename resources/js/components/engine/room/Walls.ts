import * as THREE from 'three';

export class Walls {
  group: THREE.Group;

  constructor(width: number, height: number, depth: number) {
    this.group = new THREE.Group();

    // Materiale ottimizzato per riflettere le luci colorate senza abbagliare
    const material = new THREE.MeshStandardMaterial({
      color: 0x555566, // Un grigio medio (non nero) permette alle luci colorate di risaltare
      roughness: 0.5,  // Diffonde la luce in modo uniforme sulla parete
      metalness: 0.1,
    });

    // Parete Posteriore
    const backGeo = new THREE.PlaneGeometry(width, height);
    const backWall = new THREE.Mesh(backGeo, material);
    backWall.position.set(0, height / 2, -depth / 2);
    backWall.receiveShadow = true;

    // Parete Sinistra
    const leftGeo = new THREE.PlaneGeometry(depth, height);
    const leftWall = new THREE.Mesh(leftGeo, material);
    leftWall.position.set(-width / 2, height / 2, 0);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.receiveShadow = true;

    // Parete Destra (se presente nel tuo layout)
    const rightGeo = new THREE.PlaneGeometry(depth, height);
    const rightWall = new THREE.Mesh(rightGeo, material);
    rightWall.position.set(width / 2, height / 2, 0);
    rightWall.rotation.y = -Math.PI / 2;
    rightWall.receiveShadow = true;

    this.group.add(backWall, leftWall, rightWall);
  }
}