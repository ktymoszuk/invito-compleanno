import * as THREE from 'three';
import { BartenderRobot } from './BartenderRobot';
import { InteractivePulse } from './InteractivePulse';

export class Bar {
  group: THREE.Group;
  bartender: BartenderRobot;
  interactionPulse: InteractivePulse;

  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(-4.62, 0, 1.25);
    this.group.rotation.y = Math.PI / 2;

    const counterMaterial = new THREE.MeshStandardMaterial({
      color: 0x151119,
      metalness: 0.45,
      roughness: 0.28,
    });
    const topMaterial = new THREE.MeshStandardMaterial({
      color: 0x303642,
      metalness: 0.8,
      roughness: 0.16,
    });
    const shelfMaterial = new THREE.MeshStandardMaterial({
      color: 0x141821,
      metalness: 0.7,
      roughness: 0.3,
    });

    const counter = new THREE.Mesh(new THREE.BoxGeometry(3.1, 1.05, 0.72), counterMaterial);
    counter.position.set(0, 0.525, 0.42);
    counter.castShadow = true;
    counter.receiveShadow = true;

    const counterTop = new THREE.Mesh(new THREE.BoxGeometry(3.25, 0.09, 0.86), topMaterial);
    counterTop.position.set(0, 1.08, 0.42);
    counterTop.castShadow = true;

    const neonStrip = new THREE.Mesh(
      new THREE.BoxGeometry(2.85, 0.055, 0.025),
      new THREE.MeshStandardMaterial({
        color: 0x67f7e8,
        emissive: 0x67f7e8,
        emissiveIntensity: 2.1,
      }),
    );
    neonStrip.position.set(0, 0.75, 0.79);
    this.group.add(counter, counterTop, neonStrip);

    [1.55, 2.15].forEach((height) => {
      const shelf = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.08, 0.18), shelfMaterial);
      shelf.position.set(0, height, -0.2);
      this.group.add(shelf);
    });

    const bottleColors = [0xff4f9a, 0x67f7e8, 0xffd84d, 0x8f6bff, 0x7dff89, 0xff7657];
    bottleColors.forEach((color, index) => {
      const shelfLevel = index < 3 ? 1.55 : 2.15;
      const xPosition = -0.85 + (index % 3) * 0.85;
      const bottleMaterial = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.55,
        transparent: true,
        opacity: 0.86,
        roughness: 0.18,
      });
      const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.105, 0.38, 16), bottleMaterial);
      bottle.position.set(xPosition, shelfLevel + 0.23, -0.19);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.14, 12), bottleMaterial);
      neck.position.set(xPosition, shelfLevel + 0.49, -0.19);
      this.group.add(bottle, neck);
    });

    const signCanvas = document.createElement('canvas');
    signCanvas.width = 512;
    signCanvas.height = 192;
    const context = signCanvas.getContext('2d')!;
    context.clearRect(0, 0, signCanvas.width, signCanvas.height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '900 126px "Trebuchet MS", sans-serif';
    context.shadowColor = '#ff4f9a';
    context.shadowBlur = 32;
    context.strokeStyle = '#ff4f9a';
    context.lineWidth = 7;
    context.strokeText('BAR', 256, 96);
    context.fillStyle = '#ffffff';
    context.fillText('BAR', 256, 96);

    const signTexture = new THREE.CanvasTexture(signCanvas);
    signTexture.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(2.25, 0.84),
      new THREE.MeshBasicMaterial({ map: signTexture, transparent: true, depthWrite: false }),
    );
    sign.position.set(0, 2.92, -0.37);
    this.group.add(sign);

    const barLight = new THREE.PointLight(0xff4f9a, 8, 4.5, 1.5);
    barLight.position.set(0, 2.2, 1.25);
    this.group.add(barLight);

    this.bartender = new BartenderRobot();
    this.group.add(this.bartender.group);

    this.interactionPulse = new InteractivePulse(0xff4f9a);
    this.interactionPulse.group.position.set(0, 0.5, 0.805);
    this.group.add(this.interactionPulse.group);
  }

  update(delta: number) {
    this.bartender.update(delta);
    this.interactionPulse.update(delta);
  }

  throwShaker() {
    this.bartender.throwShaker();
  }
}