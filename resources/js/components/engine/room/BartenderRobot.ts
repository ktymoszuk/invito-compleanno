import * as THREE from 'three';

export class BartenderRobot {
  group: THREE.Group;
  servedDrink: THREE.Group;

  private shaker: THREE.Group;
  private leftArm: THREE.Group;
  private rightArm: THREE.Group;
  private elapsed = 0;
  private throwProgress: number | null = null;
  private pourStream: THREE.Mesh;
  private drinkMaterial: THREE.MeshStandardMaterial;
  private glass: THREE.Mesh;
  private liquid: THREE.Mesh;
  private glassShards: THREE.Mesh[] = [];
  private bubbles: THREE.Mesh[] = [];
  private bubbleTime = 0;
  private drinkColorIndex = 0;

  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(0.92, 0, 0.4);

    const shell = new THREE.MeshStandardMaterial({ color: 0xdce6e9, metalness: 0.82, roughness: 0.22 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x10151c, metalness: 0.72, roughness: 0.28 });
    const pink = new THREE.MeshStandardMaterial({
      color: 0xff287f,
      emissive: 0xff287f,
      emissiveIntensity: 1.5,
    });

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.62, 0.34), shell);
    torso.position.y = 1.43;
    const apron = new THREE.Mesh(new THREE.BoxGeometry(0.37, 0.4, 0.025), pink);
    apron.position.set(0, 1.4, 0.185);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.46, 0.46), shell);
    head.position.y = 1.97;
    const face = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.25, 0.025), dark);
    face.position.set(0, 1.98, 0.245);
    this.group.add(torso, apron, head, face);

    [-0.14, 0.14].forEach((xPosition) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 14, 10), pink);
      eye.position.set(xPosition, 2, 0.265);
      this.group.add(eye);
    });

    const bowCenter = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 8), dark);
    bowCenter.position.set(0, 1.7, 0.21);
    const bowGeometry = new THREE.ConeGeometry(0.11, 0.18, 3);
    [-1, 1].forEach((side) => {
      const bow = new THREE.Mesh(bowGeometry, dark);
      bow.position.set(side * 0.1, 1.7, 0.2);
      bow.rotation.z = side * Math.PI / 2;
      this.group.add(bow);
    });
    this.group.add(bowCenter);

    this.leftArm = this.createArm(-1, shell, dark);
    this.rightArm = this.createArm(1, shell, dark);
    this.group.add(this.leftArm, this.rightArm);

    this.shaker = new THREE.Group();
    const shakerBody = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.12, 0.34, 16), dark);
    const shakerCap = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.1, 16), shell);
    shakerCap.position.y = 0.22;
    this.shaker.add(shakerBody, shakerCap);
    this.shaker.position.set(0, 1.38, 0.34);
    this.group.add(this.shaker);

    this.drinkMaterial = new THREE.MeshStandardMaterial({
      color: 0xff287f,
      emissive: 0xff287f,
      emissiveIntensity: 0.9,
      transparent: true,
      opacity: 0,
    });
    this.servedDrink = new THREE.Group();
    this.servedDrink.position.set(-0.34, 0, 0.55);
    this.glass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.13, 0.095, 0.28, 18, 1, true),
      new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 0.75,
        transparent: true,
        opacity: 0.42,
        roughness: 0.08,
        side: THREE.DoubleSide,
      }),
    );
    this.glass.position.y = 1.24;
    this.liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.078, 0.19, 16), this.drinkMaterial);
    this.liquid.position.y = 1.21;
    this.servedDrink.add(this.glass, this.liquid);

    const shardMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe8fbff,
      transmission: 0.72,
      transparent: true,
      opacity: 0.68,
      roughness: 0.12,
    });
    for (let index = 0; index < 10; index++) {
      const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(0.045 + (index % 3) * 0.018), shardMaterial);
      shard.visible = false;
      this.glassShards.push(shard);
      this.servedDrink.add(shard);
    }

    const bubbleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 });
    for (let index = 0; index < 9; index++) {
      const bubble = new THREE.Mesh(new THREE.SphereGeometry(0.018 + (index % 3) * 0.006, 8, 6), bubbleMaterial);
      bubble.visible = false;
      this.bubbles.push(bubble);
      this.servedDrink.add(bubble);
    }
    this.group.add(this.servedDrink);

    this.pourStream = new THREE.Mesh(
      new THREE.CylinderGeometry(0.018, 0.018, 0.5, 8),
      new THREE.MeshBasicMaterial({ color: 0xff287f, transparent: true, opacity: 0.75 }),
    );
    this.pourStream.position.set(-0.34, 1.58, 0.5);
    this.pourStream.visible = false;
    this.group.add(this.pourStream);
  }

  update(delta: number) {
    this.elapsed += delta;
    this.updateBubbles(delta);

    if (this.throwProgress !== null) {
      this.throwProgress += delta;
      const time = this.throwProgress;
      const throwPhase = Math.min(time / 1.5, 1);
      const arc = Math.sin(throwPhase * Math.PI);
      this.shaker.position.set(0, 1.42 + arc * 2.2, 0.34);
      this.shaker.rotation.z = throwPhase * Math.PI * 4;
      this.group.rotation.y = THREE.MathUtils.smoothstep(throwPhase, 0.12, 0.88) * Math.PI * 2;

      if (time >= 1.5 && time < 2.4) {
        const pourPhase = (time - 1.5) / 0.9;
        this.shaker.position.set(-0.34, 1.88, 0.42);
        this.shaker.rotation.z = 1.05;
        this.pourStream.visible = pourPhase > 0.08;
        this.drinkMaterial.opacity = Math.min(0.82, pourPhase);
      } else if (time >= 2.4 && time < 4.25) {
        const slide = 1 - Math.pow(1 - (time - 2.4) / 1.85, 3);
        this.pourStream.visible = false;
        this.shaker.position.set(0, 1.38, 0.34);
        this.shaker.rotation.z = 0;
        this.servedDrink.position.x = -0.34 - slide * 2.16;
      } else if (time >= 4.25 && time < 4.95) {
        const fall = (time - 4.25) / 0.7;
        this.shaker.position.set(-0.08, 1.17, 0.48);
        this.shaker.rotation.z = Math.PI / 2;
        this.servedDrink.position.x = -2.5 - fall * 0.18;
        this.servedDrink.position.y = -fall * 1.18;
        this.servedDrink.rotation.z = fall * Math.PI * 1.35;
        if (fall > 0.82) this.breakGlass(fall);
      } else if (time >= 4.95 && time < 7.25) {
        const panicTime = time - 4.95;
        this.breakGlass(1);
        this.shaker.position.set(-0.08, 1.17, 0.48);
        this.shaker.rotation.z = Math.PI / 2;
        this.group.rotation.y = -0.72 + Math.sin(panicTime * 16) * 0.05;
        this.group.position.y = Math.abs(Math.sin(panicTime * 18)) * 0.045;
        this.leftArm.rotation.z = 2.9 + Math.sin(panicTime * 13) * 0.1;
        this.rightArm.rotation.z = -2.9 - Math.sin(panicTime * 13) * 0.1;
      } else if (time >= 7.25) {
        const recover = Math.min((time - 7.25) / 0.75, 1);
        this.group.rotation.y = THREE.MathUtils.lerp(-0.72, 0, recover);
        this.group.position.y = 0;
        this.leftArm.rotation.z = THREE.MathUtils.lerp(2.9, 1.02, recover);
        this.rightArm.rotation.z = THREE.MathUtils.lerp(-2.9, -1.02, recover);
        this.shaker.position.lerp(new THREE.Vector3(0, 1.38, 0.34), recover);
        this.shaker.rotation.z = THREE.MathUtils.lerp(Math.PI / 2, 0, recover);
      }

      if (time < 4.95) {
        const reach = Math.sin(Math.min(time / 2.1, 1) * Math.PI);
        this.leftArm.rotation.z = 1.02 - reach * 0.28;
        this.rightArm.rotation.z = -1.02 + reach * 0.28;
      }

      if (time >= 8) {
        this.throwProgress = null;
        this.shaker.position.set(0, 1.38, 0.34);
        this.shaker.rotation.z = 0;
        this.group.rotation.y = 0;
        this.group.position.y = 0;
        this.leftArm.rotation.z = 1.02;
        this.rightArm.rotation.z = -1.02;
        this.pourStream.visible = false;
      }
      return;
    }

    const shake = Math.sin(this.elapsed * 10);
    this.shaker.position.x = shake * 0.055;
    this.shaker.position.y = 1.38 + Math.abs(shake) * 0.045;
    this.shaker.rotation.z = shake * 0.16;
    this.leftArm.rotation.z = 1.02 + shake * 0.08;
    this.rightArm.rotation.z = -1.02 + shake * 0.08;
    this.group.rotation.y = Math.sin(this.elapsed * 1.4) * 0.035;
  }

  throwShaker() {
    if (this.throwProgress === null) {
      this.throwProgress = 0;
      this.servedDrink.position.set(-0.34, 0, 0.55);
      this.servedDrink.rotation.set(0, 0, 0);
      this.glass.visible = true;
      this.liquid.visible = true;
      this.glassShards.forEach(shard => { shard.visible = false; });
      this.drinkMaterial.opacity = 0;
      this.bubbleTime = 0;
      this.bubbles.forEach(bubble => { bubble.visible = false; });
    }
  }

  activateDrink() {
    if (!this.glass.visible || this.drinkMaterial.opacity === 0) return;
    const colors = [0xff287f, 0x00d9ff, 0xffd84d, 0xff6b24, 0x65ff75];
    this.drinkColorIndex = (this.drinkColorIndex + 1) % colors.length;
    const color = colors[this.drinkColorIndex];
    this.drinkMaterial.color.setHex(color);
    this.drinkMaterial.emissive.setHex(color);
    this.drinkMaterial.opacity = 0.86;
    this.bubbleTime = 2.4;
  }

  private updateBubbles(delta: number) {
    this.bubbleTime = Math.max(0, this.bubbleTime - delta);
    this.bubbles.forEach((bubble, index) => {
      bubble.visible = this.bubbleTime > 0;
      if (!bubble.visible) return;
      const progress = (this.elapsed * (0.8 + index * 0.04) + index * 0.13) % 1;
      bubble.position.set(
        Math.sin(index * 2.1) * 0.07,
        1.12 + progress * 0.32,
        Math.cos(index * 1.7) * 0.055,
      );
      bubble.scale.setScalar(0.65 + progress * 0.7);
    });
  }

  private breakGlass(progress: number) {
    this.glass.visible = false;
    this.liquid.visible = false;
    this.bubbleTime = 0;
    this.bubbles.forEach(bubble => { bubble.visible = false; });
    this.glassShards.forEach((shard, index) => {
      shard.visible = true;
      const spread = Math.max(0, progress - 0.82) * 2.8;
      const angle = index / this.glassShards.length * Math.PI * 2;
      shard.position.set(
        Math.cos(angle) * spread * (0.12 + (index % 3) * 0.025),
        1.24 + Math.abs(Math.sin(angle * 2)) * spread * 0.055,
        Math.sin(angle) * spread * 0.11,
      );
      shard.rotation.set(angle * 0.7, angle, angle * 1.3);
    });
  }

  private createArm(side: -1 | 1, shell: THREE.Material, dark: THREE.Material) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.34, 1.58, 0.12);
    arm.rotation.z = side * -1.02;
    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.42, 12), shell);
    forearm.position.y = -0.19;
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.08, 14, 10), dark);
    hand.position.set(0, -0.42, 0.2);
    arm.add(forearm, hand);
    return arm;
  }
}