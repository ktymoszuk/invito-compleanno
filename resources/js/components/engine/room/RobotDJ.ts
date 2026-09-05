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
  private leftLeg: THREE.Group;
  private rightLeg: THREE.Group;
  private fingerPairs: THREE.Group[] = [];
  private jetFlames: THREE.Group[] = [];
  private ledMaterials: THREE.MeshStandardMaterial[] = [];
  private notes: FloatingNote[] = [];
  private elapsed = 0;
  private playing = false;
  private paletteOffset = 0;
  private performanceTime: number | null = null;

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
    this.leftLeg = this.createLeg(-1, shellMaterial, darkMaterial);
    this.rightLeg = this.createLeg(1, shellMaterial, darkMaterial);
    this.body.add(this.leftArm, this.rightArm, this.leftLeg, this.rightLeg);

    this.createNotes();
  }

  update(delta: number) {
    this.elapsed += delta;
    if (this.performanceTime !== null) {
      this.performanceTime += delta;
      this.updatePerformance(this.performanceTime);
    } else {
      this.body.position.y = Math.sin(this.elapsed * (this.playing ? 5.2 : 2.4)) * (this.playing ? 0.075 : 0.035);
      this.body.rotation.y = Math.sin(this.elapsed * 1.35) * 0.055;
      this.body.rotation.x = this.playing ? Math.sin(this.elapsed * 8) * 0.09 : 0;
      const armSpread = this.playing
        ? 1.32 + Math.sin(this.elapsed * 5.5) * 0.22
        : 0.38 + (Math.sin(this.elapsed * 3.5) + 1) * 0.1;
      this.leftArm.rotation.z = -armSpread;
      this.rightArm.rotation.z = armSpread;
      this.leftLeg.rotation.set(0, 0, 0);
      this.rightLeg.rotation.set(0, 0, 0);
      this.fingerPairs.forEach(fingers => { fingers.visible = false; });
      this.jetFlames.forEach(flame => { flame.visible = false; });
    }

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

  performDance() {
    if (this.performanceTime !== null) return;
    this.performanceTime = 0;
    this.cycleLedPalette();
  }

  private updatePerformance(time: number) {
    const danceFloorZ = 3.8;
    this.body.position.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.leftLeg.rotation.set(0, 0, 0);
    this.rightLeg.rotation.set(0, 0, 0);
    this.leftArm.rotation.x = 0;
    this.rightArm.rotation.x = 0;
    this.fingerPairs.forEach(fingers => { fingers.visible = false; });
    this.jetFlames.forEach(flame => { flame.visible = false; });

    if (time < 0.45) {
      const progress = time / 0.45;
      this.group.position.set(0, 0, -0.42);
      this.group.rotation.set(0, 0, 0);
      this.body.position.y = -Math.sin(progress * Math.PI) * 0.16;
      this.body.rotation.x = progress * 0.12;
      this.leftArm.rotation.z = -0.25;
      this.rightArm.rotation.z = 0.25;
      this.leftLeg.rotation.x = -progress * 0.32;
      this.rightLeg.rotation.x = -progress * 0.32;
      return;
    }

    if (time < 2.35) {
      const progress = (time - 0.45) / 1.9;
      const horizontalProgress = THREE.MathUtils.smoothstep(progress, 0.12, 0.92);
      const inverse = 1 - progress;
      const height = inverse * inverse * 0 + 2 * inverse * progress * 3.8 + progress * progress * -0.5;
      const flipProgress = THREE.MathUtils.smoothstep(progress, 0.34, 0.7);
      this.group.position.set(0, height, THREE.MathUtils.lerp(-0.42, danceFloorZ, horizontalProgress));
      this.group.rotation.set(-flipProgress * Math.PI * 2, 0, 0);
      this.leftArm.rotation.z = -1.65;
      this.rightArm.rotation.z = 1.65;
      this.leftLeg.rotation.x = -Math.sin(progress * Math.PI) * 0.55;
      this.rightLeg.rotation.x = -Math.sin(progress * Math.PI) * 0.55;
      return;
    }

    this.group.position.set(0, -0.5, danceFloorZ);
    this.group.rotation.set(0, 0, 0);

    if (time < 3.35) {
      const progress = (time - 2.35) / 1;
      const impact = Math.sin(progress * Math.PI);
      this.body.position.y = -impact * 0.26;
      this.body.rotation.x = impact * 0.1;
      this.leftLeg.rotation.x = -impact * 0.38;
      this.rightLeg.rotation.x = -impact * 0.38;
      this.leftArm.rotation.z = THREE.MathUtils.lerp(-1.45, -0.55, progress);
      this.rightArm.rotation.z = THREE.MathUtils.lerp(1.45, 0.55, progress);
      return;
    }

    if (time < 4.1) {
      const grooveTime = time - 3.35;
      const groove = Math.sin(grooveTime * Math.PI * 4);
      this.body.position.y = Math.abs(groove) * 0.07;
      this.body.rotation.y = groove * 0.16;
      this.leftArm.rotation.z = -0.72 + groove * 0.18;
      this.rightArm.rotation.z = 0.72 + groove * 0.18;
      return;
    }

    if (time < 6.2) {
      const danceTime = time - 4.1;
      const pointRight = Math.sin(danceTime * Math.PI * 1.6) >= 0;
      const bounce = Math.abs(Math.sin(danceTime * Math.PI * 3.2));
      const settle = THREE.MathUtils.smoothstep((danceTime - 1.7) / 0.4, 0, 1);
      const leftArmPose = pointRight ? -0.62 : -2.35;
      const rightArmPose = pointRight ? 2.35 : 0.62;
      const leftLegPose = pointRight ? -0.28 : 0.1;
      const rightLegPose = pointRight ? 0.1 : -0.28;
      this.body.position.y = bounce * 0.1 * (1 - settle);
      this.body.rotation.set(0, (pointRight ? -0.22 : 0.22) * (1 - settle), (pointRight ? -0.12 : 0.12) * (1 - settle));
      this.leftArm.rotation.z = THREE.MathUtils.lerp(leftArmPose, -0.72, settle);
      this.rightArm.rotation.z = THREE.MathUtils.lerp(rightArmPose, 0.72, settle);
      this.leftLeg.rotation.x = THREE.MathUtils.lerp(leftLegPose, 0, settle);
      this.rightLeg.rotation.x = THREE.MathUtils.lerp(rightLegPose, 0, settle);
      return;
    }

    if (time < 7.7) {
      const splitTime = time - 6.2;
      const spread = splitTime < 0.35
        ? THREE.MathUtils.smoothstep(splitTime / 0.35, 0, 1)
        : splitTime < 0.9
          ? 1
          : 1 - THREE.MathUtils.smoothstep((splitTime - 0.9) / 0.6, 0, 1);
      this.body.position.y = -spread * 0.38;
      this.body.rotation.x = spread * 0.06;
      this.leftLeg.rotation.x = -spread * Math.PI / 2;
      this.rightLeg.rotation.x = spread * Math.PI / 2;
      this.leftArm.rotation.z = THREE.MathUtils.lerp(-0.72, -1.45, spread);
      this.rightArm.rotation.z = THREE.MathUtils.lerp(0.72, 1.45, spread);
      return;
    }

    if (time < 9.4) {
      const gestureTime = time - 7.7;
      const leftHandAtEyes = Math.floor(gestureTime / 0.42) % 2 === 0;
      const sweep = Math.sin((gestureTime % 0.42) / 0.42 * Math.PI);
      this.body.position.y = Math.abs(Math.sin(gestureTime * Math.PI * 3)) * 0.06;
      this.body.rotation.y = (leftHandAtEyes ? 1 : -1) * 0.08 * sweep;
      this.leftArm.rotation.z = leftHandAtEyes ? 2.28 - sweep * 0.18 : -0.72;
      this.rightArm.rotation.z = leftHandAtEyes ? 0.72 : -2.28 + sweep * 0.18;
      this.leftArm.rotation.x = leftHandAtEyes ? -0.32 : 0;
      this.rightArm.rotation.x = leftHandAtEyes ? 0 : -0.32;
      this.fingerPairs[0].visible = leftHandAtEyes;
      this.fingerPairs[1].visible = !leftHandAtEyes;
      this.leftLeg.rotation.x = -Math.sin(gestureTime * Math.PI * 2) * 0.18;
      this.rightLeg.rotation.x = Math.sin(gestureTime * Math.PI * 2) * 0.18;
      return;
    }

    if (time < 11.1) {
      const danceTime = time - 9.4;
      const step = Math.sin(danceTime * Math.PI * 4);
      const pop = Math.sign(Math.sin(danceTime * Math.PI * 3));
      this.body.position.y = Math.abs(step) * 0.12;
      this.body.rotation.set(pop * 0.08, step * 0.28, -step * 0.1);
      this.leftArm.rotation.z = -1.25 + pop * 0.55;
      this.rightArm.rotation.z = 1.25 + pop * 0.55;
      this.leftLeg.rotation.x = step * 0.55;
      this.rightLeg.rotation.x = -step * 0.55;
      return;
    }

    if (time < 11.8) {
      const progress = (time - 11.1) / 0.7;
      const lift = progress * progress;
      this.group.position.set(0, THREE.MathUtils.lerp(-0.5, 1.35, lift), danceFloorZ);
      this.group.rotation.set(-0.08 * (1 - progress), 0, 0);
      this.body.position.y = -Math.sin(progress * Math.PI) * 0.12;
      this.leftArm.rotation.z = -0.55;
      this.rightArm.rotation.z = 0.55;
      this.leftLeg.rotation.x = -0.18 * (1 - progress);
      this.rightLeg.rotation.x = -0.18 * (1 - progress);
      this.setJetFlames(0.45 + progress * 0.55);
      return;
    }

    if (time < 13.9) {
      const progress = (time - 11.8) / 2.1;
      const travel = progress * progress * (3 - 2 * progress);
      this.group.position.set(0, 1.35 + Math.sin(progress * Math.PI) * 0.65, THREE.MathUtils.lerp(danceFloorZ, -0.42, travel));
      this.group.rotation.set(-Math.sin(progress * Math.PI) * 0.12, 0, 0);
      this.leftArm.rotation.z = -0.72 + Math.sin(progress * Math.PI * 2) * 0.08;
      this.rightArm.rotation.z = 0.72 - Math.sin(progress * Math.PI * 2) * 0.08;
      this.setJetFlames(0.9 + Math.sin(this.elapsed * 28) * 0.1);
      return;
    }

    if (time < 14.65) {
      const progress = (time - 13.9) / 0.75;
      const descent = progress * progress * (3 - 2 * progress);
      this.group.position.set(0, THREE.MathUtils.lerp(1.35, 0, descent), -0.42);
      this.group.rotation.set(0, 0, 0);
      this.leftArm.rotation.z = -0.5;
      this.rightArm.rotation.z = 0.5;
      this.setJetFlames(Math.max(0.15, 1 - progress));
      return;
    }

    if (time < 15.1) {
      const progress = (time - 14.65) / 0.45;
      this.group.position.set(0, 0, -0.42);
      this.group.rotation.set(0, 0, 0);
      this.body.position.y = -Math.sin(progress * Math.PI) * 0.11;
      this.leftArm.rotation.z = -0.5;
      this.rightArm.rotation.z = 0.5;
      return;
    }

    this.performanceTime = null;
    this.group.position.set(0, 0, -0.42);
    this.group.rotation.set(0, 0, 0);
    this.body.position.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.leftLeg.rotation.set(0, 0, 0);
    this.rightLeg.rotation.set(0, 0, 0);
    this.leftArm.rotation.x = 0;
    this.rightArm.rotation.x = 0;
    this.jetFlames.forEach(flame => { flame.visible = false; });
  }

  private setJetFlames(intensity: number) {
    this.jetFlames.forEach((flame, index) => {
      const flicker = 0.85 + Math.sin(this.elapsed * 34 + index * 2.4) * 0.15;
      flame.visible = true;
      flame.scale.set(0.8 + intensity * 0.2, intensity * flicker, 0.8 + intensity * 0.2);
    });
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
    const fingers = new THREE.Group();
    fingers.position.set(0, -0.57, 0.17);
    [-0.035, 0.035].forEach(xPosition => {
      const finger = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.022, 0.2, 8),
        new THREE.MeshStandardMaterial({ color: 0x67f7e8, emissive: 0x67f7e8, emissiveIntensity: 1.5 }),
      );
      finger.position.set(xPosition, -0.08, 0);
      fingers.add(finger);
    });
    fingers.visible = false;
    this.fingerPairs.push(fingers);
    arm.add(hand, fingers);
    return arm;
  }

  private createLeg(side: -1 | 1, shellMaterial: THREE.Material, darkMaterial: THREE.Material) {
    const leg = new THREE.Group();
    leg.position.set(side * 0.22, 1.16, 0);

    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.105, 0.58, 14), shellMaterial);
    shin.position.y = -0.27;
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.36), darkMaterial);
    foot.position.set(0, -0.59, 0.1);
    const jetFlame = new THREE.Group();
    jetFlame.position.set(0, -0.8, 0.08);
    const outerFlame = new THREE.Mesh(
      new THREE.ConeGeometry(0.145, 0.64, 14),
      new THREE.MeshBasicMaterial({ color: 0xff3f8f, transparent: true, opacity: 0.92 }),
    );
    const innerFlame = new THREE.Mesh(
      new THREE.ConeGeometry(0.078, 0.46, 12),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 }),
    );
    outerFlame.rotation.z = Math.PI;
    innerFlame.rotation.z = Math.PI;
    innerFlame.position.y = 0.03;
    jetFlame.add(outerFlame, innerFlame);
    jetFlame.visible = false;
    this.jetFlames.push(jetFlame);
    leg.add(shin, foot, jetFlame);
    return leg;
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