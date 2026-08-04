import * as THREE from 'three';

export class DJSign {
  group: THREE.Group;

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
    
    meshText.position.set(3.4, 2.7, -4.95);
    this.group.add(meshText);


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
    
    mesh60.position.set(4.95, 2.7, -3.8);
    mesh60.rotation.y = -Math.PI / 2;
    this.group.add(mesh60);
  }
}