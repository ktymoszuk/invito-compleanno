import * as THREE from 'three';

export class Floor {
  mesh: THREE.Group;

  constructor(width = 10, depth = 10, gridSize = 8) {
    this.mesh = new THREE.Group();

    const tileSize = (width / gridSize) * 0.985; 
    const spacing = width / gridSize;
    const startX = -width / 2 + spacing / 2;
    const startZ = -depth / 2 + spacing / 2;

    // 1. BASE SCURA PER LE FUGHE SOTTILI
    const baseGeo = new THREE.PlaneGeometry(width, depth);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x050208,
      roughness: 0.9,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.rotation.x = -Math.PI / 2;
    baseMesh.position.y = -0.01;
    this.mesh.add(baseMesh);

    // 2. PIASTRELLE STANDARD (Senza emissione di luce)
    const tileGeo = new THREE.PlaneGeometry(tileSize, tileSize);
    const tileMat = new THREE.MeshStandardMaterial({
      color: 0x111116,                 // Colore scuro opaco / industriale
      roughness: 0.8,
      metalness: 0.2,
    });

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const tileMesh = new THREE.Mesh(tileGeo, tileMat);
        tileMesh.rotation.x = -Math.PI / 2;
        tileMesh.position.set(
          startX + col * spacing,
          0,
          startZ + row * spacing
        );
        tileMesh.receiveShadow = true;

        this.mesh.add(tileMesh);
      }
    }
  }

  // Metodo vuoto per mantenere la compatibilità con il loop di Room
  update(delta: number) {}
}