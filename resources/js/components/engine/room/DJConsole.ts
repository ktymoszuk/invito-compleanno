import * as THREE from 'three';

export class DJConsole {
  group: THREE.Group;

  constructor() {
    this.group = new THREE.Group();

    // Materiali base
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x111115,
      roughness: 0.2,
      metalness: 0.5,
    });

    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2,
    });

    const vinylMat = new THREE.MeshStandardMaterial({
      color: 0x050505,
      roughness: 0.3,
      metalness: 0.1,
    });

    // 1. MOBILETTO / DESK DA DJ (Struttura principale)
    const deskGeo = new THREE.BoxGeometry(2.2, 1.0, 0.9);
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.y = 0.5;
    desk.castShadow = true;
    desk.receiveShadow = true;
    this.group.add(desk);

    // Pannello frontale con striscia LED neon fucsia (Anni '80 Style)
    const neonGeo = new THREE.BoxGeometry(2.1, 0.05, 0.02);
    const neonMat = new THREE.MeshStandardMaterial({
      color: 0xff0088,
      emissive: 0xff0088,
      emissiveIntensity: 1.5,
    });
    const neonStrip = new THREE.Mesh(neonGeo, neonMat);
    neonStrip.position.set(0, 0.8, 0.46);
    this.group.add(neonStrip);

    // 2. PIATTI GIRADISCHI (2 Turntables)
    const ttBaseGeo = new THREE.BoxGeometry(0.5, 0.06, 0.4);
    const platterGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.02, 32);

    [-0.6, 0.6].forEach((xOffset) => {
      // Base giradischi
      const ttBase = new THREE.Mesh(ttBaseGeo, metalMat);
      ttBase.position.set(xOffset, 1.03, 0);
      this.group.add(ttBase);

      // Piatto e Vinile nero
      const platter = new THREE.Mesh(platterGeo, vinylMat);
      platter.position.set(xOffset, 1.07, 0);
      this.group.add(platter);

      // Centro del vinile (Etichetta colorata)
      const labelGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.022, 16);
      const labelMat = new THREE.MeshBasicMaterial({ color: xOffset < 0 ? 0x00d9ff : 0xff0055 });
      const label = new THREE.Mesh(labelGeo, labelMat);
      label.position.set(xOffset, 1.07, 0);
      this.group.add(label);
    });

    // 3. MIXER CENTRALE CON LED LUMINOSI
    const mixerBaseGeo = new THREE.BoxGeometry(0.45, 0.07, 0.45);
    const mixerBase = new THREE.Mesh(mixerBaseGeo, metalMat);
    mixerBase.position.set(0, 1.03, 0);
    this.group.add(mixerBase);

    // VU-Meter / Lucine LED sul mixer
    for (let i = 0; i < 4; i++) {
      const ledGeo = new THREE.BoxGeometry(0.03, 0.02, 0.03);
      const ledMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00ff00 : 0xff0000,
      });
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(-0.1 + i * 0.06, 1.07, -0.1);
      this.group.add(led);
    }

    // 4. CASSE MONITOR SPIA (Ai lati del banco)
    const speakerGeo = new THREE.BoxGeometry(0.4, 0.7, 0.4);
    const speakerMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 });

    [-1.2, 1.2].forEach((xOffset) => {
      const speaker = new THREE.Mesh(speakerGeo, speakerMat);
      speaker.position.set(xOffset, 1.15, -0.1);
      speaker.rotation.y = xOffset < 0 ? 0.3 : -0.3; // Inclinati verso il DJ
      this.group.add(speaker);
    });

    // 5. POSIZIONAMENTO NELL'ANGOLO FONDO-DESTRA
    // Mettiamo il banco a X = 3.6, Z = -3.6 e lo ruotiamo verso il centro della stanza
    this.group.position.set(3.5, 0, -3.5);
    this.group.rotation.y = -Math.PI / 4; // Ruotato a 45° nell'angolo
  }
}