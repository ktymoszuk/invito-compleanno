import * as THREE from 'three';

type WallSide = 'back' | 'front' | 'right';

export class VinylWall {
  group: THREE.Group;
  private wallRecords: Array<{ group: THREE.Group; wall: WallSide }> = [];

  constructor() {
    this.group = new THREE.Group();

    const recordGeometry = new THREE.CylinderGeometry(0.34, 0.34, 0.035, 32);
    const vinylMaterial = new THREE.MeshStandardMaterial({
      color: 0x090a0c,
      metalness: 0.48,
      roughness: 0.2,
    });
    const labelGeometry = new THREE.CylinderGeometry(0.105, 0.105, 0.042, 20);
    const labelColors = [0xff4f9a, 0x67f7e8, 0xffd84d, 0xff5b2e, 0x8f6bff, 0x65ff75];

    const records = [
      { position: [-3.55, 3.58, -4.82], rotation: [Math.PI / 2, 0, 0], wall: 'back' as const },
      { position: [-2.7, 4.1, -4.82], rotation: [Math.PI / 2, 0, 0], wall: 'back' as const },
      { position: [2.35, 3.72, -4.82], rotation: [Math.PI / 2, 0, 0], wall: 'back' as const },
      { position: [4.82, 3.82, -1.45], rotation: [0, 0, Math.PI / 2], wall: 'right' as const },
      { position: [4.82, 4.22, -0.48], rotation: [0, 0, Math.PI / 2], wall: 'right' as const },
      { position: [4.82, 3.5, 0.42], rotation: [0, 0, Math.PI / 2], wall: 'right' as const },
      { position: [-3.25, 2.15, 4.78], rotation: [-Math.PI / 2, 0, 0], wall: 'front' as const },
      { position: [-2.35, 2.5, 4.78], rotation: [-Math.PI / 2, 0, 0], wall: 'front' as const },
      { position: [-1.45, 2.15, 4.78], rotation: [-Math.PI / 2, 0, 0], wall: 'front' as const },
    ];

    records.forEach(({ position, rotation, wall }, index) => {
      const record = new THREE.Group();
      record.position.set(position[0], position[1], position[2]);
      record.rotation.set(rotation[0], rotation[1], rotation[2]);

      const disc = new THREE.Mesh(recordGeometry, vinylMaterial);
      const label = new THREE.Mesh(
        labelGeometry,
        new THREE.MeshStandardMaterial({
          color: labelColors[index % labelColors.length],
          emissive: labelColors[index % labelColors.length],
          emissiveIntensity: 0.45,
        }),
      );
      label.position.y = 0.023;
      record.add(disc, label);
      this.group.add(record);
      this.wallRecords.push({ group: record, wall });
    });
  }

  update(cameraPosition: THREE.Vector3) {
    this.wallRecords.forEach(({ group, wall }) => {
      if (wall === 'back') group.visible = cameraPosition.z > -4.82;
      if (wall === 'front') group.visible = cameraPosition.z < 4.78;
      if (wall === 'right') group.visible = cameraPosition.x < 4.82;
    });
  }
}
