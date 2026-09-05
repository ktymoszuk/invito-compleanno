import * as THREE from 'three';

export class LoungeSet {
  group: THREE.Group;
  private lavaBlobs: THREE.Mesh[] = [];
  private elapsed = 0;

  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(-2.35, 0, 4.05);

    const chrome = new THREE.MeshStandardMaterial({ color: 0xa7b2bc, metalness: 1, roughness: 0.12 });
    const smokedGlass = new THREE.MeshPhysicalMaterial({
      color: 0x342348,
      metalness: 0.15,
      roughness: 0.08,
      transmission: 0.48,
      transparent: true,
      opacity: 0.78,
    });
    const velvet = new THREE.MeshStandardMaterial({
      color: 0x67f7e8,
      roughness: 0.68,
      emissive: 0x123f42,
      emissiveIntensity: 0.5,
    });

    const tableStem = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.075, 0.84, 16), chrome);
    tableStem.position.y = 0.46;
    const tableBase = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.08, 28), chrome);
    tableBase.position.y = 0.04;
    const tableTop = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.07, 32), smokedGlass);
    tableTop.position.y = 0.91;
    tableTop.castShadow = true;
    this.group.add(tableStem, tableBase, tableTop);

    [-1, 1].forEach((side) => {
      const chair = new THREE.Group();
      chair.position.x = side * 1.08;

      const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.43, 12), chrome);
      pedestal.position.y = 0.24;
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.07, 22), chrome);
      foot.position.y = 0.035;
      const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.34, 0.16, 24), velvet);
      seat.position.y = 0.51;
      seat.castShadow = true;
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.58, 0.13), velvet);
      back.position.set(side * 0.31, 0.78, 0);
      back.rotation.y = Math.PI / 2;
      back.rotation.z = side * 0.16;
      back.castShadow = true;
      chair.add(pedestal, foot, seat, back);
      this.group.add(chair);
    });

    const lamp = new THREE.Group();
    lamp.position.set(0, 0.98, 0);

    const lampMetal = new THREE.MeshStandardMaterial({
      color: 0xc98f2b,
      metalness: 0.82,
      roughness: 0.2,
    });
    const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.13, 20), lampMetal);
    const lampGlass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.15, 0.48, 20),
      new THREE.MeshPhysicalMaterial({
        color: 0xffc928,
        emissive: 0x8f4800,
        emissiveIntensity: 0.48,
        transparent: true,
        opacity: 0.48,
        transmission: 0.38,
        roughness: 0.12,
        depthWrite: false,
      }),
    );
    lampGlass.position.y = 0.3;
    const lampCap = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 0.1, 20), lampMetal);
    lampCap.position.y = 0.59;
    lamp.add(lampBase, lampGlass, lampCap);

    const lavaMaterial = new THREE.MeshBasicMaterial({ color: 0xffef62 });
    [0.18, 0.34, 0.48].forEach((height, index) => {
      const blob = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 10), lavaMaterial);
      blob.position.y = height;
      blob.scale.set(1 + index * 0.12, 1.35, 0.82);
      this.lavaBlobs.push(blob);
      lamp.add(blob);
    });

    const lampGlow = new THREE.PointLight(0xffc928, 1.6, 1.8, 2);
    lampGlow.position.y = 0.34;
    lamp.add(lampGlow);
    this.group.add(lamp);

    const loungeLight = new THREE.PointLight(0x67f7e8, 5, 4.2, 1.7);
    loungeLight.position.set(0, 1.8, 0.2);
    this.group.add(loungeLight);
  }

  update(delta: number) {
    this.elapsed += delta;
    this.lavaBlobs.forEach((blob, index) => {
      const phase = this.elapsed * (0.72 + index * 0.09) + index * 2.1;
      blob.position.y = 0.33 + Math.sin(phase) * 0.16;
      blob.position.x = Math.sin(phase * 0.67) * 0.025;
      blob.scale.y = 1.15 + Math.cos(phase * 1.3) * 0.28;
    });
  }
}