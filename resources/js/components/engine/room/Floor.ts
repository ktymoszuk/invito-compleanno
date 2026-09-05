import * as THREE from 'three';

export class Floor {
  mesh: THREE.Group;
  private floorContext: CanvasRenderingContext2D;
  private floorTexture: THREE.CanvasTexture;
  private gridSize: number;
  private palette = [
    '#00d9ff',
    '#ff287f',
    '#ffd84d',
    '#ff6b24',
    '#65ff75',
  ];
  private elapsed = 0;
  private colorUpdateElapsed = Number.POSITIVE_INFINITY;
  private colorUpdateInterval = window.innerWidth <= 768 ? 0.12 : 0.07;

  constructor(width = 10, depth = 10, gridSize = 8) {
    this.mesh = new THREE.Group();
    this.gridSize = gridSize;

    // 1. BASE SCURA PER LE FUGHE
    const baseGeo = new THREE.PlaneGeometry(width, depth);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x050208,
      roughness: 0.9,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.rotation.x = -Math.PI / 2;
    baseMesh.position.y = -0.01;
    this.mesh.add(baseMesh);

    // 2. PISTA COLORATA DISEGNATA SU UNA SOLA TEXTURE
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 256;
    floorCanvas.height = 256;
    this.floorContext = floorCanvas.getContext('2d')!;
    this.drawTiles(0);

    this.floorTexture = new THREE.CanvasTexture(floorCanvas);
    this.floorTexture.colorSpace = THREE.SRGBColorSpace;
    this.floorTexture.generateMipmaps = false;
    this.floorTexture.minFilter = THREE.LinearFilter;
    this.floorTexture.magFilter = THREE.LinearFilter;

    const tileMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, depth),
      new THREE.MeshBasicMaterial({
        map: this.floorTexture,
        side: THREE.DoubleSide,
        toneMapped: false,
      }),
    );
    tileMesh.rotation.x = -Math.PI / 2;
    tileMesh.position.y = 0;
    tileMesh.receiveShadow = true;
    this.mesh.add(tileMesh);

    // 3. LOGO CENTRALE SULLA PISTA
    const logoTexture = new THREE.TextureLoader().load('/images/totem.webp');
    logoTexture.colorSpace = THREE.SRGBColorSpace;
    logoTexture.anisotropy = 8;

    const logoMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(5.0, 4.88),
      new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
        alphaTest: 0.02,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );

    logoMesh.rotation.x = -Math.PI / 2;
    logoMesh.position.set(0, 0.025, 0.45);
    logoMesh.renderOrder = 2;
    this.mesh.add(logoMesh);
  }

  private drawTiles(time: number) {
    const size = this.floorContext.canvas.width;
    const cellSize = size / this.gridSize;
    const gap = 2;
    const patternDuration = 5.8;
    const patternIndex = Math.floor(time / patternDuration) % 3;
    const patternTime = time % patternDuration;

    this.floorContext.globalAlpha = 1;
    this.floorContext.fillStyle = '#030206';
    this.floorContext.fillRect(0, 0, size, size);

    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        let pulse = 0;

        if (patternIndex === 0) {
          const diagonal = (row + col) % this.gridSize;
          const wavePosition = patternTime * 1.35 % this.gridSize;
          const distance = Math.abs(diagonal - wavePosition);
          const wrappedDistance = Math.min(distance, this.gridSize - distance);
          pulse = Math.pow(Math.max(0, 1 - wrappedDistance / 1.45), 2);
        } else if (patternIndex === 1) {
          const center = (this.gridSize - 1) / 2;
          const offsetX = col - center;
          const offsetY = row - center;
          const angle = Math.atan2(offsetY, offsetX);
          const radius = Math.hypot(offsetX, offsetY);
          const spiral = angle + radius * 0.78 - patternTime * 1.15;
          pulse = Math.pow((Math.cos(spiral) + 1) / 2, 7) * Math.max(0.25, 1 - radius / 8);
        } else {
          const center = (this.gridSize - 1) / 2;
          const diamondRing = Math.abs(row - center) + Math.abs(col - center);
          const ringPosition = patternTime * 1.45 % (this.gridSize - 1);
          pulse = Math.pow(Math.max(0, 1 - Math.abs(diamondRing - ringPosition) / 1.15), 2.2);
        }

        const x = col * cellSize + gap / 2;
        const y = row * cellSize + gap / 2;
        const tileSize = cellSize - gap;
        this.floorContext.fillStyle = this.palette[(row * 2 + col) % this.palette.length];
        this.floorContext.globalAlpha = 0.17 + pulse * 0.61;
        this.floorContext.fillRect(x, y, tileSize, tileSize);
      }
    }

    this.floorContext.globalAlpha = 1;
  }

  update(delta: number) {
    this.elapsed += delta;
    this.colorUpdateElapsed += delta;
    if (this.colorUpdateElapsed < this.colorUpdateInterval) return;
    this.colorUpdateElapsed = 0;
    this.drawTiles(this.elapsed);
    this.floorTexture.needsUpdate = true;
  }
}