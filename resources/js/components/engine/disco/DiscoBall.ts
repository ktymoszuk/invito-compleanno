import * as THREE from 'three';

interface WallSpot {
  angle: number;
  heightRatio: number;
  scale: number;
}

export class DiscoBall {
  group: THREE.Group;
  ballMesh: THREE.Mesh;
  cubeRenderTarget: THREE.WebGLCubeRenderTarget;
  cubeCamera: THREE.CubeCamera;
  private wallSpots: WallSpot[] = [];
  private wallSpotMesh: THREE.InstancedMesh;
  private spotTransform = new THREE.Object3D();
  private reflectionElapsed: number;
  private spotElapsed = 0;
  private readonly isMobile = window.matchMedia('(max-width: 768px)').matches;
  private readonly reflectionInterval: number;
  private readonly spotUpdateInterval: number;

  constructor() {
    this.group = new THREE.Group();
    this.reflectionInterval = this.isMobile ? 0.5 : 0.25;
    this.reflectionElapsed = this.reflectionInterval;
    this.spotUpdateInterval = this.isMobile ? 1 / 30 : 0;

    // 1. CUBE CAMERA PER RIFLESSI IN TEMPO REALE
    this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(this.isMobile ? 64 : 128, {
      generateMipmaps: false,
      minFilter: THREE.LinearFilter,
    });
    this.cubeCamera = new THREE.CubeCamera(0.1, 50, this.cubeRenderTarget);

    // 2. DISCO BALL AD ALTA DENSITÀ
    const radius = 0.68;
    const ballGeometry = new THREE.SphereGeometry(radius, this.isMobile ? 48 : 96, this.isMobile ? 24 : 48);
    const ballMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.0,
      flatShading: true,
      envMap: this.cubeRenderTarget.texture,
      envMapIntensity: 4.5,
    });

    this.ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
    this.ballMesh.castShadow = true;

    // Cavo al soffitto
    const wireGeo = new THREE.CylinderGeometry(0.008, 0.008, 1.15);
    const wireMat = new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.8 });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    wire.position.y = 0.575;

    this.group.add(this.ballMesh, wire, this.cubeCamera);

    // 3. TEXTURE SFUMATA E MOLTO PIÙ LEGGERA (Soft Pink/Purple Glow)
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    // Colore delicato rosa/pastello altamente sfumato invece di bianco puro
    gradient.addColorStop(0, 'rgba(255, 230, 255, 0.55)');
    gradient.addColorStop(0.3, 'rgba(220, 180, 255, 0.3)');
    gradient.addColorStop(0.65, 'rgba(180, 140, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);
    const spotGeo = new THREE.PlaneGeometry(0.42, 0.42);
    const spotMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.48,
    });

    // 4. RIFLESSI DISPOSTI IN FASCE REGOLARI COME LE TESSERE DELLA SFERA
    const latitudeBands = [-1.45, -1.2, -1, -0.82, -0.64, -0.48, -0.32, -0.16, 0.16, 0.34, 0.54, 0.76];
    const spotsPerBand = 32;
    this.wallSpotMesh = new THREE.InstancedMesh(spotGeo, spotMat, latitudeBands.length * spotsPerBand);
    this.wallSpotMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.wallSpotMesh.frustumCulled = false;
    this.group.add(this.wallSpotMesh);

    latitudeBands.forEach((heightRatio, bandIndex) => {
      for (let spotIndex = 0; spotIndex < spotsPerBand; spotIndex++) {
        const stagger = bandIndex % 2 === 0 ? 0 : Math.PI / spotsPerBand;

        this.wallSpots.push({
          angle: (spotIndex / spotsPerBand) * Math.PI * 2 + stagger,
          heightRatio,
          scale: 0.82 + (bandIndex % 3) * 0.08,
        });
      }
    });

    // Posizione fisica della Disco Ball nel mondo (Z = -2.8)
    this.group.position.set(0, 4.05, -2.8);
  }

  update(delta: number, renderer?: THREE.WebGLRenderer, scene?: THREE.Scene) {
    this.reflectionElapsed += delta;
    if (renderer && scene && this.reflectionElapsed >= this.reflectionInterval) {
      this.ballMesh.visible = false;
      this.cubeCamera.update(renderer, scene);
      this.ballMesh.visible = true;
      this.reflectionElapsed = 0;
    }

    // Velocità di rotazione coerente della palla
    const rotationSpeed = 0.3;
    this.ballMesh.rotation.y += delta * rotationSpeed;

    this.spotElapsed += delta;
    if (this.spotElapsed < this.spotUpdateInterval) return;
    const spotDelta = this.spotElapsed;
    this.spotElapsed = 0;

    // Dimensioni fisiche della stanza per le collisioni sulle pareti
    const halfW = 4.85;
    const halfD = 4.85;
    const floorY = -3.95;
    const ceilY = 0.75;

    // AGGIORNAMENTO DI TUTTE LE MACCHIE IN UNISONO
    this.wallSpots.forEach((spot, index) => {
      spot.angle += spotDelta * rotationSpeed;

      const dirX = Math.sin(spot.angle);
      const dirZ = Math.cos(spot.angle);
      const dirY = spot.heightRatio;

      let scale = 10;

      if (Math.abs(dirX) > 0.001) {
        const targetX = dirX > 0 ? halfW : -halfW;
        const scaleX = targetX / dirX;
        if (scaleX > 0) scale = Math.min(scale, scaleX);
      }

      if (Math.abs(dirZ) > 0.001) {
        const targetZ = dirZ < 0 ? -2.15 : 7.65;
        const scaleZ = targetZ / dirZ;
        if (scaleZ > 0) scale = Math.min(scale, scaleZ);
      }

      if (Math.abs(dirY) > 0.001) {
        const targetY = dirY > 0 ? ceilY : floorY;
        const scaleY = targetY / dirY;
        if (scaleY > 0) scale = Math.min(scale, scaleY);
      }

      const posX = dirX * scale;
      const posY = dirY * scale;
      const posZ = dirZ * scale;

      this.spotTransform.position.set(posX, posY, posZ);
      this.spotTransform.scale.setScalar(spot.scale);

      if (Math.abs(posX - halfW) < 0.05) {
        this.spotTransform.rotation.set(0, -Math.PI / 2, 0);
      } else if (Math.abs(posX + halfW) < 0.05) {
        this.spotTransform.rotation.set(0, Math.PI / 2, 0);
      } else if (Math.abs(posY - ceilY) < 0.05) {
        this.spotTransform.rotation.set(Math.PI / 2, 0, 0);
      } else if (Math.abs(posY - floorY) < 0.05) {
        this.spotTransform.rotation.set(-Math.PI / 2, 0, 0);
      } else {
        this.spotTransform.rotation.set(0, 0, 0);
      }

      this.spotTransform.updateMatrix();
      this.wallSpotMesh.setMatrixAt(index, this.spotTransform.matrix);
    });
    this.wallSpotMesh.instanceMatrix.needsUpdate = true;
  }
}