import * as THREE from 'three';

export class DJSign {
  group: THREE.Group;
  private backWallElements: THREE.Object3D[] = [];
  private rightWallElements: THREE.Object3D[] = [];

  constructor() {
    this.group = new THREE.Group();

    // --- 1. "66" CONTINUO SULLE DUE PARETI ---
    const createNumberHalf = (
      alignment: CanvasTextAlign,
      text = '6',
      canvasWidth = 512,
      planeWidth = 1.6,
    ) => {
      const canvas = document.createElement('canvas');
      canvas.width = canvasWidth;
      canvas.height = 768;
      const context = canvas.getContext('2d')!;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.textAlign = alignment;
      context.textBaseline = 'middle';
      context.font = '600 540px "Trebuchet MS", sans-serif';
      context.shadowColor = '#ff007f';
      context.shadowBlur = 50;
      context.lineWidth = 9;
      context.strokeStyle = '#ff007f';

      const x = alignment === 'right' ? canvas.width - 12 : 12;
      context.strokeText(text, x, canvas.height / 2);

      context.shadowBlur = 15;
      context.shadowColor = '#ffffff';
      context.fillStyle = '#ffe6f2';
      context.fillText(text, x, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;

      return new THREE.Mesh(
        new THREE.PlaneGeometry(planeWidth, 2.4),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
    };

    const firstSix = createNumberHalf('right', "'6", 640, 2);
    firstSix.position.set(3.95, 4.05, -4.94);

    const secondSix = createNumberHalf('left');
    secondSix.position.set(4.94, 4.05, -4.15);
    secondSix.rotation.y = -Math.PI / 2;

    this.group.add(firstSix, secondSix);
    this.backWallElements.push(firstSix);
    this.rightWallElements.push(secondSix);

    // --- 2. "CELEBRATION" CONTINUA SULLE DUE PARETI ---
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