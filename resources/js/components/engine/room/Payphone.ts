import * as THREE from 'three';
import { InteractivePulse } from './InteractivePulse';

export class Payphone {
  group: THREE.Group;

  private elapsed = 0;
  private ringTime = 0;
  private handset: THREE.Group;
  private interactionPulse: InteractivePulse;
  private speechBubble: THREE.Sprite;

  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(1.15, 2.2, 4.78);
    this.group.rotation.y = Math.PI;

    const cream = new THREE.MeshStandardMaterial({ color: 0xd8cbb0, metalness: 0.42, roughness: 0.36 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x17191d, metalness: 0.55, roughness: 0.3 });
    const chrome = new THREE.MeshStandardMaterial({ color: 0xb6c0c5, metalness: 0.95, roughness: 0.12 });
    const red = new THREE.MeshStandardMaterial({ color: 0xc72d3c, emissive: 0x5a0712, emissiveIntensity: 0.8 });

    const cabinet = new THREE.Mesh(new THREE.BoxGeometry(1.08, 1.62, 0.34), cream);
    const inset = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.62, 0.04), dark);
    inset.position.set(0.08, 0.25, 0.19);
    this.group.add(cabinet, inset);

    const displayCanvas = document.createElement('canvas');
    displayCanvas.width = 768;
    displayCanvas.height = 256;
    const context = displayCanvas.getContext('2d')!;
    context.fillStyle = '#07160e';
    context.fillRect(0, 0, displayCanvas.width, displayCanvas.height);
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = '700 48px monospace';
    context.fillStyle = '#70ff8c';
    context.shadowColor = '#70ff8c';
    context.shadowBlur = 18;

    const displayTexture = new THREE.CanvasTexture(displayCanvas);
    displayTexture.colorSpace = THREE.SRGBColorSpace;
    const display = new THREE.Mesh(
      new THREE.PlaneGeometry(0.73, 0.25),
      new THREE.MeshBasicMaterial({ map: displayTexture }),
    );
    display.position.set(0.08, 0.55, 0.225);
    this.group.add(display);

    const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.055, 32), chrome);
    dial.rotation.x = Math.PI / 2;
    dial.position.set(0.08, 0.08, 0.235);
    this.group.add(dial);

    for (let index = 0; index < 10; index++) {
      const angle = index / 10 * Math.PI * 2;
      const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.065, 12), dark);
      hole.rotation.x = Math.PI / 2;
      hole.position.set(0.08 + Math.cos(angle) * 0.16, 0.08 + Math.sin(angle) * 0.16, 0.27);
      this.group.add(hole);
    }

    const coinSlot = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.25, 0.035), red);
    coinSlot.position.set(0.36, -0.42, 0.205);
    this.group.add(coinSlot);

    this.handset = new THREE.Group();
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.83, 14), dark);
    const receiverGeometry = new THREE.SphereGeometry(0.15, 16, 10);
    const topReceiver = new THREE.Mesh(receiverGeometry, dark);
    const bottomReceiver = new THREE.Mesh(receiverGeometry, dark);
    topReceiver.position.y = 0.42;
    bottomReceiver.position.y = -0.42;
    this.handset.add(handle, topReceiver, bottomReceiver);
    this.handset.position.set(-0.43, 0, 0.31);
    this.group.add(this.handset);

    const cable = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.018, 8, 22, Math.PI * 1.55), dark);
    cable.position.set(-0.32, -0.72, 0.22);
    cable.rotation.z = -0.35;
    this.group.add(cable);

    const light = new THREE.PointLight(0x70ff8c, 2.5, 2.2, 1.8);
    light.position.set(0, 0.5, 0.8);
    this.group.add(light);

    this.interactionPulse = new InteractivePulse(0x70ff8c);
    this.interactionPulse.group.position.set(0.34, -0.56, 0.24);
    this.interactionPulse.setActive(true);
    this.group.add(this.interactionPulse.group);

    const bubbleCanvas = document.createElement('canvas');
    bubbleCanvas.width = 1024;
    bubbleCanvas.height = 384;
    const bubbleContext = bubbleCanvas.getContext('2d')!;
    bubbleContext.fillStyle = '#ffffff';
    bubbleContext.strokeStyle = '#ffffff';
    bubbleContext.lineWidth = 18;
    bubbleContext.beginPath();
    bubbleContext.roundRect(35, 30, 930, 255, 70);
    bubbleContext.moveTo(250, 280);
    bubbleContext.lineTo(170, 360);
    bubbleContext.lineTo(390, 282);
    bubbleContext.closePath();
    bubbleContext.fill();
    bubbleContext.stroke();
    bubbleContext.fillStyle = '#000000';
    bubbleContext.textAlign = 'center';
    bubbleContext.textBaseline = 'middle';
    bubbleContext.font = '800 82px "Trebuchet MS", sans-serif';
    bubbleContext.fillText('Ti aspettiamo in pista!', 500, 157);

    const bubbleTexture = new THREE.CanvasTexture(bubbleCanvas);
    bubbleTexture.colorSpace = THREE.SRGBColorSpace;
    this.speechBubble = new THREE.Sprite(new THREE.SpriteMaterial({
      map: bubbleTexture,
      transparent: true,
      depthTest: false,
    }));
    this.speechBubble.position.set(0.45, 1.35, 0.45);
    this.speechBubble.scale.set(2.8, 1.05, 1);
    this.speechBubble.visible = false;
    this.speechBubble.renderOrder = 20;
    this.group.add(this.speechBubble);
  }

  update(delta: number) {
    this.elapsed += delta;
    this.ringTime = Math.max(0, this.ringTime - delta);
    this.handset.rotation.z = this.ringTime > 0 ? Math.sin(this.elapsed * 46) * 0.055 : 0;
    this.speechBubble.visible = this.ringTime > 0;
    this.interactionPulse.update(delta);
  }

  updateVisibility(cameraPosition: THREE.Vector3) {
    this.group.visible = cameraPosition.z < 4.78;
  }

  ring() {
    this.ringTime = 3.4;
  }
}
