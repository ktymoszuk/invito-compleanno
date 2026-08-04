import * as THREE from 'three';

interface WallSpot {
  mesh: THREE.Mesh;
  angle: number;       // Angolo orizzontale orario rispetto alla palla
  heightRatio: number; // Tendenza verticale (altezza/inclinazione del raggio)
  distanceRatio: number;
}

export class DiscoBall {
  group: THREE.Group;
  ballMesh: THREE.Mesh;
  cubeRenderTarget: THREE.WebGLCubeRenderTarget;
  cubeCamera: THREE.CubeCamera;
  private wallSpots: WallSpot[] = [];

  constructor() {
    this.group = new THREE.Group();

    // 1. CUBE CAMERA PER RIFLESSI IN TEMPO REALE
    this.cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
      generateMipmaps: true,
      minFilter: THREE.LinearMipmapLinearFilter,
    });
    this.cubeCamera = new THREE.CubeCamera(0.1, 50, this.cubeRenderTarget);

    // 2. DISCO BALL AD ALTA DENSITÀ
    const radius = 0.85;
    const ballGeometry = new THREE.SphereGeometry(radius, 128, 64);
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
    const wireGeo = new THREE.CylinderGeometry(0.008, 0.008, 1.8);
    const wireMat = new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.8 });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    wire.position.y = 0.9;

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
    const spotGeo = new THREE.PlaneGeometry(0.35, 0.35); // Macchie leggermente più sottili
    const spotMat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.35, // Opacità molto ridotta per un effetto tenue e soffuso
    });

    // 4. LUCI PROIETTATE A 360°
    const spotsCount = 220;
    
    for (let i = 0; i < spotsCount; i++) {
      const spotMesh = new THREE.Mesh(spotGeo, spotMat);
      this.group.add(spotMesh);

      this.wallSpots.push({
        mesh: spotMesh,
        angle: Math.random() * Math.PI * 2,
        heightRatio: (Math.random() - 0.5) * 2.2,
        distanceRatio: 0.8 + Math.random() * 0.4,
      });
    }

    // Posizione fisica della Disco Ball nel mondo (Z = -2.8)
    this.group.position.set(0, 3.4, -2.8);
  }

  update(delta: number, renderer?: THREE.WebGLRenderer, scene?: THREE.Scene) {
    if (renderer && scene) {
      this.ballMesh.visible = false;
      this.cubeCamera.update(renderer, scene);
      this.ballMesh.visible = true;
    }

    // Velocità di rotazione coerente della palla
    const rotationSpeed = 0.3;
    this.ballMesh.rotation.y += delta * rotationSpeed;

    // Dimensioni fisiche della stanza per le collisioni sulle pareti
    const halfW = 4.85;
    const halfD = 4.85;
    const floorY = -3.3;
    const ceilY = 1.4;

    // AGGIORNAMENTO DI TUTTE LE MACCHIE IN UNISONO
    this.wallSpots.forEach((spot) => {
      spot.angle += delta * rotationSpeed;

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

      spot.mesh.position.set(posX, posY, posZ);

      if (Math.abs(posX - halfW) < 0.05) {
        spot.mesh.rotation.set(0, -Math.PI / 2, 0);
      } else if (Math.abs(posX + halfW) < 0.05) {
        spot.mesh.rotation.set(0, Math.PI / 2, 0);
      } else if (Math.abs(posY - ceilY) < 0.05) {
        spot.mesh.rotation.set(Math.PI / 2, 0, 0);
      } else if (Math.abs(posY - floorY) < 0.05) {
        spot.mesh.rotation.set(-Math.PI / 2, 0, 0);
      } else {
        spot.mesh.rotation.set(0, 0, 0);
      }
    });
  }
}