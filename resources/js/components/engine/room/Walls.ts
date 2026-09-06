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

    // Parete posteriore con vano centrale per il player YouTube 16:9.
    const screenWidth = 6.2;
    const screenHeight = 3.5;
    const screenCenterX = -0.65;
    const screenCenterY = height / 2;
    const screenLeft = screenCenterX - screenWidth / 2;
    const screenRight = screenCenterX + screenWidth / 2;
    const leftWidth = screenLeft + width / 2;
    const rightWidth = width / 2 - screenRight;
    const bottomHeight = screenCenterY - screenHeight / 2;
    const topHeight = height - (screenCenterY + screenHeight / 2);
    const backPanels = [
      { width: leftWidth, height, x: -width / 2 + leftWidth / 2, y: height / 2 },
      { width: rightWidth, height, x: screenRight + rightWidth / 2, y: height / 2 },
      { width: screenWidth, height: bottomHeight, x: screenCenterX, y: bottomHeight / 2 },
      { width: screenWidth, height: topHeight, x: screenCenterX, y: height - topHeight / 2 },
    ];

    const backWalls = backPanels.map(panel => {
      const wall = new THREE.Mesh(new THREE.PlaneGeometry(panel.width, panel.height), material);
      wall.position.set(panel.x, panel.y, -depth / 2);
      wall.receiveShadow = true;
      return wall;
    });

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

    // Parete frontale: visibile dall'interno ma invisibile alla camera esterna.
    const frontMaterial = material.clone();
    frontMaterial.side = THREE.BackSide;
    const frontWall = new THREE.Mesh(new THREE.PlaneGeometry(width, height), frontMaterial);
    frontWall.position.set(0, height / 2, depth / 2);
    frontWall.receiveShadow = true;

    this.group.add(...backWalls, leftWall, rightWall, frontWall);
  }
}