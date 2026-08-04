import * as THREE from 'three';

export class CountdownBoard {
  group: THREE.Group;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private texture: THREE.CanvasTexture;
  private targetDate: Date;
  private lastSecond = -1;

  constructor(targetDate: Date) {
    this.group = new THREE.Group();
    this.targetDate = targetDate;

    // 1. CANVAS AD ALTA RISOLUZIONE
    this.canvas = document.createElement('canvas');
    this.canvas.width = 2048;
    this.canvas.height = 512;
    this.ctx = this.canvas.getContext('2d')!;

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;

    // 2. STRUTTURA 3D DEL TABELLONE
    const boardW = 4.8;
    const boardH = 1.3;

    // Cornice scura metallica
    const frameGeo = new THREE.BoxGeometry(boardW, boardH, 0.1);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0f,
      metalness: 0.8,
      roughness: 0.2,
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);

    // Profilo Neon Magenta attorno al display
    const neonGeo = new THREE.BoxGeometry(boardW + 0.12, boardH + 0.12, 0.02);
    const neonMat = new THREE.MeshStandardMaterial({
      color: 0xff007f,
      emissive: 0xff007f,
      emissiveIntensity: 1.8,
    });
    const neonBorder = new THREE.Mesh(neonGeo, neonMat);
    neonBorder.position.z = -0.02;

    // Schermo a LED
    const screenGeo = new THREE.PlaneGeometry(boardW - 0.2, boardH - 0.2);
    const screenMat = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.z = 0.055;

    this.group.add(frame, neonBorder, screen);

    // Posizionamento sulla parete
    this.group.position.set(-1.6, 2.3, -4.85);

    // Primo disegno iniziale
    this.updateText();
  }

  setTargetDate(newDate: Date) {
    this.targetDate = newDate;
    this.updateText();
  }

  private updateText() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    let timeString = '00d  00h  00m  00s';

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dStr = String(days).padStart(2, '0');
      const hStr = String(hours).padStart(2, '0');
      const mStr = String(minutes).padStart(2, '0');
      const sStr = String(seconds).padStart(2, '0');

      timeString = `${dStr}d  ${hStr}h  ${mStr}m  ${sStr}s`;
    }

    // --- RENDERING CANVAS GRAFICA ---
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Sfondo nero profondo
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const centerX = this.canvas.width / 2;

    // 1. SCRITTA SUPERIORE: "ALLA FESTA MANCANO:" (Stessa dimensione 130px)
    this.ctx.font = '900 130px "Courier New", monospace';
    this.ctx.textAlign = 'center';
    this.ctx.shadowColor = '#ff0055';
    this.ctx.shadowBlur = 25;
    this.ctx.fillStyle = '#ff88aa';
    this.ctx.fillText('ALLA FESTA MANCANO:', centerX, 175);

    // 2. SFONDO LED SPENTO (Ghosting) per il countdown
    this.ctx.font = '900 130px "Courier New", monospace';
    this.ctx.fillStyle = 'rgba(40, 0, 20, 0.4)';
    this.ctx.shadowBlur = 0;
    this.ctx.fillText('88d  88h  88m  88s', centerX, 385);

    // 3. NUMERI DEL COUNTDOWN ATTIVI
    this.ctx.font = '900 130px "Courier New", monospace';
    this.ctx.shadowColor = '#ff0055';
    this.ctx.shadowBlur = 25;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillText(timeString, centerX, 385);

    // Aggiorna la texture sulla GPU Three.js
    this.texture.needsUpdate = true;
  }

  // Da chiamare nel loop di render ad ogni frame
  update() {
    const currentSecond = Math.floor(Date.now() / 1000);

    // Aggiorna la grafica solo quando cambia il secondo
    if (currentSecond !== this.lastSecond) {
      this.lastSecond = currentSecond;
      this.updateText();
    }
  }
}