import * as THREE from 'three';

export class DJSign {
  group: THREE.Group;
  private backWallElements: THREE.Object3D[] = [];
  private rightWallElements: THREE.Object3D[] = [];

  constructor() {
    this.group = new THREE.Group();

    // --- 1. SCRITTA "MARCO ROSSI" (Allineata a destra, più grande, line-height ridotto) ---
    const canvasText = document.createElement('canvas');
    canvasText.width = 1200;
    canvasText.height = 768;
    const ctx = canvasText.getContext('2d')!;

    ctx.clearRect(0, 0, canvasText.width, canvasText.height);
    
    // Allineamento a destra sul canvas
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    
    // Font ancora più grande
    ctx.font = '400 160px "Trebuchet MS", sans-serif';

    // Distanza verticale ridotta (line-height più basso)
    const yMarco = 280;
    const yRossi = 440;
    const xPos = 1150; // Margine destro interno del canvas

    // Effetto neon Glow esterno azzurro
    ctx.shadowColor = '#00d9ff';
    ctx.shadowBlur = 45;
    ctx.lineWidth = 6;
    ctx.strokeStyle = '#00d9ff';

    ctx.strokeText('MARCO', xPos, yMarco);
    ctx.strokeText('ROSSI', xPos, yRossi);

    // Nucleo centrale acceso bianco/azzurro
    ctx.shadowBlur = 12;
    ctx.shadowColor = '#ffffff';
    ctx.fillStyle = '#e0f7ff';

    ctx.fillText('MARCO', xPos, yMarco);
    ctx.fillText('ROSSI', xPos, yRossi);

    const textureText = new THREE.CanvasTexture(canvasText);
    textureText.minFilter = THREE.LinearFilter;

    const meshText = new THREE.Mesh(
      new THREE.PlaneGeometry(3.4, 2.2),
      new THREE.MeshBasicMaterial({ 
        map: textureText, 
        transparent: true, 
        side: THREE.DoubleSide,
        depthWrite: false 
      })
    );
    
    meshText.position.set(3.4, 3.85, -4.95);
    this.group.add(meshText);
    this.backWallElements.push(meshText);


    // --- 2. SCRITTA "60" (Ancora più grande sulla parete opposta) ---
    const canvas60 = document.createElement('canvas');
    canvas60.width = 768;
    canvas60.height = 768;
    const ctx60 = canvas60.getContext('2d')!;

    ctx60.clearRect(0, 0, canvas60.width, canvas60.height);
    ctx60.textAlign = 'center';
    ctx60.textBaseline = 'middle';
    
    // 60 ancora più grande e d'impatto
    ctx60.font = '600 380px "Trebuchet MS", sans-serif';

    // Effetto neon Glow magenta/viola
    ctx60.shadowColor = '#ff007f';
    ctx60.shadowBlur = 50;
    ctx60.lineWidth = 9;
    ctx60.strokeStyle = '#ff007f';

    ctx60.strokeText('60', canvas60.width / 2, canvas60.height / 2);

    ctx60.shadowBlur = 15;
    ctx60.shadowColor = '#ffffff';
    ctx60.fillStyle = '#ffe6f2';

    ctx60.fillText('60', canvas60.width / 2, canvas60.height / 2);

    const texture60 = new THREE.CanvasTexture(canvas60);
    texture60.minFilter = THREE.LinearFilter;

    const mesh60 = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 2.4),
      new THREE.MeshBasicMaterial({ 
        map: texture60, 
        transparent: true, 
        side: THREE.DoubleSide,
        depthWrite: false 
      })
    );
    
    mesh60.position.set(4.95, 3.85, -3.8);
    mesh60.rotation.y = -Math.PI / 2;
    this.group.add(mesh60);
    this.rightWallElements.push(mesh60);

    // --- 3. "CELEBRATION" CONTINUA SULLE DUE PARETI ---
    const createCelebrationHalf = (text: string, alignment: CanvasTextAlign) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 256;
      const context = canvas.getContext('2d')!;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.textAlign = alignment;
      context.textBaseline = 'middle';
      context.font = '600 174px "Trebuchet MS", sans-serif';
      context.shadowColor = '#b8ff42';
      context.shadowBlur = 38;
      context.lineWidth = 5;
      context.strokeStyle = '#b8ff42';

      const x = alignment === 'right' ? canvas.width - 12 : 12;
      context.strokeText(text, x, canvas.height / 2);

      context.shadowColor = '#ffffff';
      context.shadowBlur = 10;
      context.fillStyle = '#f4ffd8';
      context.fillText(text, x, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;

      return new THREE.Mesh(
        new THREE.PlaneGeometry(3.2, 0.8),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
    };

    const celeb = createCelebrationHalf('CELEB', 'right');
    celeb.position.set(3.35, 3.1, -4.94);

    const ration = createCelebrationHalf('RATION', 'left');
    ration.position.set(4.94, 3.1, -3.35);
    ration.rotation.y = -Math.PI / 2;

    this.group.add(celeb, ration);
    this.backWallElements.push(celeb);
    this.rightWallElements.push(ration);
  }

  updateVisibility(cameraPosition: THREE.Vector3) {
    const backWallVisible = cameraPosition.z > -4.95;
    const rightWallVisible = cameraPosition.x < 4.95;
    this.backWallElements.forEach(element => { element.visible = backWallVisible; });
    this.rightWallElements.forEach(element => { element.visible = rightWallVisible; });
  }
}