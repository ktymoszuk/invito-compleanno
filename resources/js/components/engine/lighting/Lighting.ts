import * as THREE from 'three';

export class Lighting {
  group: THREE.Group;
  cameraSpotLight: THREE.SpotLight;
  private cornerLights: THREE.PointLight[] = [];
  private paletteIndex = 0;

  constructor() {
    this.group = new THREE.Group();

    // 1. LUCE AMBIENTALE BASE
    const ambientLight = new THREE.AmbientLight(0x351458, 2.8);

    // 2. LUCE BIANCA DIETRO LA CAMERA (Puntata sulla palla a Z = -2.8)
    this.cameraSpotLight = new THREE.SpotLight(0xffffff, 22);
    this.cameraSpotLight.position.set(0, 2.4, 4.9);
    this.cameraSpotLight.target.position.set(0, 3.6, -2.8);
    this.cameraSpotLight.angle = Math.PI / 7;
    this.cameraSpotLight.penumbra = 0.5;
    this.cameraSpotLight.castShadow = window.innerWidth > 768;

    // 3. LUCI NEON NEGLI ANGOLI
    const cornerCyan = new THREE.PointLight(0x00d9ff, 18, 16, 1.2);
    cornerCyan.position.set(-4.2, 3.0, -4.2);

    const cornerFuchsia = new THREE.PointLight(0xff0088, 20, 16, 1.2);
    cornerFuchsia.position.set(4.2, 3.0, -4.2);

    const cornerPurple = new THREE.PointLight(0x9d00ff, 18, 16, 1.2);
    cornerPurple.position.set(-4.2, 3.0, 3.5);

    const cornerPink = new THREE.PointLight(0xff0044, 18, 16, 1.2);
    cornerPink.position.set(4.2, 3.0, 3.5);
    this.cornerLights = [cornerCyan, cornerFuchsia, cornerPurple, cornerPink];

    // 4. UPLIGHT SOFFITTO
    const ceilingUpLight = new THREE.PointLight(0xb500ff, 15, 14);
    ceilingUpLight.position.set(0, 2.2, 0);

    this.group.add(
      ambientLight,
      this.cameraSpotLight,
      this.cameraSpotLight.target,
      cornerCyan,
      cornerFuchsia,
      cornerPurple,
      cornerPink,
      ceilingUpLight
    );
  }

  cyclePalette() {
    const palettes = [
      [0x00d9ff, 0xff0088, 0x9d00ff, 0xff0044],
      [0xffd83d, 0xff5b2e, 0x65ff75, 0x00d9ff],
      [0x67f7e8, 0x356dff, 0xff4f9a, 0xffffff],
      [0xb8ff42, 0xff287f, 0xffd84d, 0x8f6bff],
    ];
    this.paletteIndex = (this.paletteIndex + 1) % palettes.length;
    this.cornerLights.forEach((light, index) => light.color.setHex(palettes[this.paletteIndex][index]));
  }
}