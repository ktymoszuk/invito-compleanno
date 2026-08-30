import * as THREE from 'three';

type FloatingNote = {
  sprite: THREE.Sprite;
  speed: number;
  phase: number;
  startX: number;
};

export class RobotDJ {
  group: THREE.Group;
  headHitArea: THREE.Mesh;

  private body: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private ledMaterials: THREE.MeshStandardMaterial[] = [];
  private notes: FloatingNote[] = [];
  private elapsed = 0;
  private playing = false;
  private paletteOffset = 0;

  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(0, 0, -0.42);

    this.body = new THREE.Group();
    this.group.add(this.body);

    const shellMaterial = new THREE.MeshStandardMaterial({
      color: 0xd7e2e8,
      metalness: 0.78,
      roughness: 0.24,
    });
    const darkMaterial = new THREE.MeshStandardMaterial({
      color: 0x111820,
      metalness: 0.7,
      roughness: 0.3,
    });
    const faceMaterial = new THREE.MeshStandardMaterial({
      color: 0x071018,
      metalness: 0.35,
      roughness: 0.22,
    });

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.72, 0.42), shellMaterial);
    torso.position.y = 1.48;
    torso.castShadow = true;
    this.body.add(torso);

    const chestPanel = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.34, 0.025), faceMaterial);
    chestPanel.position.set(0, 1.5, 0.225);
    this.body.add(chestPanel);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.58, 0.56), shellMaterial);
    head.position.y = 2.13;
    head.castShadow = true;
    this.body.add(head);

    const face = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.34, 0.025), faceMaterial);
    face.position.set(0, 2.13, 0.295);
    this.body.add(face);

    this.headHitArea = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.62, 0.08),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
    );
    this.headHitArea.position.set(0, 2.13, 0.34);
    this.body.add(this.headHitArea);

    [-0.2, 0.2].forEach((xPosition) => {
      const eyeMaterial = this.createLedMaterial(0x67f7e8);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.065, 16, 12), eyeMaterial);
      eye.scale.y = 0.72;
      eye.position.set(xPosition, 2.17, 0.32);
      this.body.add(eye);
    });

    [-0.2, 0, 0.2].forEach((xPosition, index) => {
      const led = new THREE.Mesh(
        new THREE.BoxGeometry(0.09, 0.12 + index * 0.045, 0.035),
        this.createLedMaterial(index === 0 ? 0xff4f9a : index === 1 ? 0x67f7e8 : 0xffd84d),
      );
      led.position.set(xPosition, 1.48, 0.245);
      this.body.add(led);
    });

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.35, 10), darkMaterial);
    antenna.position.set(0, 2.59, 0);
    this.body.add(antenna);

    const antennaLed = new THREE.Mesh(
      new THREE.SphereGeometry(0.075, 16, 12),
      this.createLedMaterial(0xff4f9a),
    );
    antennaLed.position.set(0, 2.79, 0);
    this.body.add(antennaLed);

    const headphoneBand = new THREE.Mesh(
      new THREE.TorusGeometry(0.48, 0.055, 12, 32, Math.PI),
      darkMaterial,
    );
    headphoneBand.position.set(0, 2.23, 0);
    headphoneBand.rotation.z = Math.PI;
    this.body.add(headphoneBand);

    [-0.47, 0.47].forEach((xPosition) => {
      const earCup = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.11, 20), darkMaterial);
      earCup.rotation.z = Math.PI / 2;
      earCup.position.set(xPosition, 2.12, 0);
      this.body.add(earCup);
    });

    this.leftArm = this.createArm(-1, shellMaterial, darkMaterial);
    this.rightArm = this.createArm(1, shellMaterial, darkMaterial);
    this.body.add(this.leftArm, this.rightArm);

    this.createNotes();
  }

  update(delta: number) {
    this.elapsed += delta;
    this.body.position.y = Math.sin(this.elapsed * (this.playing ? 5.2 : 2.4)) * (this.playing ? 0.075 : 0.035);
    this.body.rotation.y = Math.sin(this.elapsed * 1.35) * 0.055;
    this.body.rotation.x = this.playing ? Math.sin(this.elapsed * 8) * 0.09 : 0;
    const armSpread = this.playing
      ? 1.32 + Math.sin(this.elapsed * 5.5) * 0.22
      : 0.38 + (Math.sin(this.elapsed * 3.5) + 1) * 0.1;
    this.leftArm.rotation.z = -armSpread;
    this.rightArm.rotation.z = armSpread;

    this.ledMaterials.forEach((material, index) => {
      const hue = (this.elapsed * 0.12 + index * 0.17 + this.paletteOffset) % 1;
      material.color.setHSL(hue, 0.9, 0.62);
      material.emissive.setHSL(hue, 0.9, 0.5);
      material.emissiveIntensity = 1.7 + Math.sin(this.elapsed * 4 + index) * 0.55;
    });

    this.notes.forEach((note, index) => {
      const progress = (this.elapsed * note.speed + note.phase) % 1;
      note.sprite.position.set(
        note.startX + Math.sin(progress * Math.PI * 3 + index) * 0.18,
        1.2 + progress * 2.25,
        0.12 + Math.cos(progress * Math.PI * 2 + index) * 0.08,
      );
      note.sprite.material.opacity = Math.sin(progress * Math.PI) * 0.95;
      const scale = 0.34 + progress * 0.18;
      note.sprite.scale.set(scale, scale, 1);
    });
  }

  setPlaying(playing: boolean) {
    this.playing = playing;
    this.notes.forEach(note => {
      note.sprite.visible = playing;
    });
  }

  cycleLedPalette() {
    this.paletteOffset = (this.paletteOffset + 0.23) % 1;
  }

  private createLedMaterial(color: number) {
    const material = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 2,
      roughness: 0.25,
    });
    this.ledMaterials.push(material);
    return material;
  }

  private createArm(side: -1 | 1, shellMaterial: THREE.Material, darkMaterial: THREE.Material) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.48, 1.67, 0.02);
    arm.rotation.z = side * 0.38;

    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.1, 0.5, 14), shellMaterial);
    upperArm.position.y = -0.22;
    arm.add(upperArm);

    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 12), darkMaterial);
    hand.position.set(0, -0.52, 0.13);
    arm.add(hand);
    return arm;
  }

  private createNotes() {
    const startPositions = [-1.55, -0.9, -0.28, 0.35, 0.95, 1.55];

    ['♪', '♫', '♪', '♬', '♫', '♪'].forEach((symbol, index) => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const context = canvas.getContext('2d');
      if (!context) return;

      context.clearRect(0, 0, 128, 128);
      context.fillStyle = '#ffffff';
      context.font = '700 104px Georgia';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.shadowColor = '#ffffff';
      context.shadowBlur = 20;
      context.fillText(symbol, 64, 66);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      const material = new THREE.SpriteMaterial({
        map: texture,
        color: 0xffffff,
        transparent: true,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      sprite.visible = false;
      this.group.add(sprite);
      this.notes.push({
        sprite,
        speed: 0.12 + index * 0.012,
        phase: index / startPositions.length,
        startX: startPositions[index],
      });
    });
  }
}