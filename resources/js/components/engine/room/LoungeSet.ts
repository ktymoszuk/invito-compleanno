import * as THREE from 'three';

export class LoungeSet {
  group: THREE.Group;

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

    const drink = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.08, 0.22, 16),
      new THREE.MeshStandardMaterial({
        color: 0x67f7e8,
        emissive: 0x67f7e8,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.82,
      }),
    );
    drink.position.set(0.18, 1.055, 0.04);
    const straw = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.34, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
    );
    straw.position.set(0.23, 1.25, 0.04);
    straw.rotation.z = -0.18;
    this.group.add(drink, straw);

    const loungeLight = new THREE.PointLight(0x67f7e8, 5, 4.2, 1.7);
    loungeLight.position.set(0, 1.8, 0.2);
    this.group.add(loungeLight);
  }
}