import * as THREE from 'three';

export class TallPlant {
  group: THREE.Group;

  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(4.2, 0, 3.65);

    const potMaterial = new THREE.MeshStandardMaterial({
      color: 0xb31555,
      metalness: 0.25,
      roughness: 0.42,
      emissive: 0x350317,
      emissiveIntensity: 0.35,
    });
    const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x315c35, roughness: 0.7 });
    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x36a760,
      roughness: 0.62,
      side: THREE.DoubleSide,
    });

    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.25, 0.62, 24), potMaterial);
    pot.position.y = 0.31;
    pot.castShadow = true;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.045, 10, 24), potMaterial);
    rim.position.y = 0.62;
    rim.rotation.x = Math.PI / 2;
    this.group.add(pot, rim);

    const stems = [
      { x: 0, z: 0, height: 2.45, lean: 0.03 },
      { x: -0.12, z: 0.04, height: 2.05, lean: -0.12 },
      { x: 0.13, z: -0.04, height: 2.2, lean: 0.13 },
    ];

    stems.forEach((stemData, stemIndex) => {
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.04, stemData.height, 10), stemMaterial);
      stem.position.set(stemData.x, 0.62 + stemData.height / 2, stemData.z);
      stem.rotation.z = stemData.lean;
      stem.castShadow = true;
      this.group.add(stem);

      for (let leafIndex = 0; leafIndex < 5; leafIndex++) {
        const side = leafIndex % 2 === 0 ? -1 : 1;
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 10), leafMaterial);
        leaf.scale.set(1.7, 0.18, 0.62);
        leaf.position.set(
          stemData.x + side * (0.23 + leafIndex * 0.025),
          1.05 + leafIndex * 0.38 + stemIndex * 0.05,
          stemData.z + (stemIndex - 1) * 0.12,
        );
        leaf.rotation.z = side * (0.38 + leafIndex * 0.08);
        leaf.rotation.y = stemIndex * 0.72 + leafIndex * 0.45;
        leaf.castShadow = true;
        this.group.add(leaf);
      }
    });

    const plantLight = new THREE.PointLight(0x65ff75, 3.5, 3, 1.8);
    plantLight.position.set(0, 1.5, 0.4);
    this.group.add(plantLight);
  }
}