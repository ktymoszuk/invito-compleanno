import * as THREE from 'three';
import { InteractivePulse } from './InteractivePulse';

type SmokeParticle = {
  mesh: THREE.Mesh;
  offset: number;
};

type CakeConfetti = {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  spin: THREE.Vector3;
};

export class BirthdayCake {
  group: THREE.Group;

  private flames: THREE.Mesh[] = [];
  private smoke: SmokeParticle[] = [];
  private confetti: CakeConfetti[] = [];
  private elapsed = 0;
  private celebrationTime = -1;
  private interactionPulse: InteractivePulse;

  constructor() {
    this.group = new THREE.Group();
    this.group.position.set(4.05, 0, 1.45);

    const chrome = new THREE.MeshStandardMaterial({ color: 0xa8b4bf, metalness: 1, roughness: 0.14 });
    const tableTop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.78, 0.78, 0.09, 32),
      new THREE.MeshPhysicalMaterial({
        color: 0x232733,
        metalness: 0.45,
        roughness: 0.18,
        transmission: 0.22,
      }),
    );
    tableTop.position.y = 0.88;
    tableTop.castShadow = true;

    const tableStem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.84, 16), chrome);
    tableStem.position.y = 0.44;
    const tableBase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.48, 0.08, 28), chrome);
    tableBase.position.y = 0.04;
    this.group.add(tableTop, tableStem, tableBase);

    const cakeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd8e8,
      roughness: 0.62,
      emissive: 0x3b1024,
      emissiveIntensity: 0.28,
    });
    const icingMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 });
    const lowerCake = new THREE.Mesh(new THREE.CylinderGeometry(0.56, 0.58, 0.34, 32), cakeMaterial);
    lowerCake.position.y = 1.09;
    lowerCake.castShadow = true;
    const upperCake = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.43, 0.26, 32), icingMaterial);
    upperCake.position.y = 1.38;
    upperCake.castShadow = true;
    const ribbon = new THREE.Mesh(
      new THREE.TorusGeometry(0.565, 0.035, 10, 32),
      new THREE.MeshStandardMaterial({ color: 0x67f7e8, emissive: 0x67f7e8, emissiveIntensity: 1.1 }),
    );
    ribbon.rotation.x = Math.PI / 2;
    ribbon.position.y = 1.16;
    this.group.add(lowerCake, upperCake, ribbon);

    [-0.2, 0, 0.2].forEach((xPosition, index) => {
      const candle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, 0.28, 12),
        new THREE.MeshStandardMaterial({ color: index === 1 ? 0xff4f9a : 0x67f7e8, roughness: 0.42 }),
      );
      candle.position.set(xPosition, 1.65, 0.08);
      const flame = new THREE.Mesh(
        new THREE.SphereGeometry(0.055, 12, 10),
        new THREE.MeshBasicMaterial({ color: 0xffe36b, transparent: true, opacity: 0.95 }),
      );
      flame.scale.y = 1.7;
      flame.position.set(xPosition, 1.86, 0.08);
      this.flames.push(flame);
      this.group.add(candle, flame);

      for (let smokeIndex = 0; smokeIndex < 3; smokeIndex++) {
        const smokeMaterial = new THREE.MeshBasicMaterial({
          color: 0xdde4e8,
          transparent: true,
          opacity: 0,
          depthWrite: false,
        });
        const smoke = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), smokeMaterial);
        smoke.visible = false;
        this.smoke.push({ mesh: smoke, offset: index * 0.23 + smokeIndex * 0.31 });
        this.group.add(smoke);
      }
    });

    const confettiColors = [0x67f7e8, 0xff4f9a, 0xffd84d, 0xffffff, 0x8f6bff];
    for (let index = 0; index < 55; index++) {
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(0.045, 0.09),
        new THREE.MeshBasicMaterial({ color: confettiColors[index % confettiColors.length], side: THREE.DoubleSide }),
      );
      mesh.visible = false;
      this.group.add(mesh);
      this.confetti.push({
        mesh,
        velocity: new THREE.Vector3(),
        spin: new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
        ),
      });
    }

    this.interactionPulse = new InteractivePulse(0xffd84d);
    this.interactionPulse.group.position.set(-0.72, 1.02, -0.28);
    this.interactionPulse.group.rotation.y = -1.94;
    this.interactionPulse.setActive(true);
    this.group.add(this.interactionPulse.group);
  }

  celebrate() {
    if (this.celebrationTime >= 0) return false;
    this.celebrationTime = 0;
    this.flames.forEach(flame => { flame.visible = false; });

    this.confetti.forEach((particle, index) => {
      const angle = (index / this.confetti.length) * Math.PI * 2;
      particle.mesh.visible = true;
      particle.mesh.position.set(0, 1.75, 0);
      particle.velocity.set(
        Math.cos(angle) * (0.45 + Math.random() * 0.8),
        1.4 + Math.random() * 1.2,
        Math.sin(angle) * (0.45 + Math.random() * 0.8),
      );
    });
    return true;
  }

  updateVisibility(cameraPosition: THREE.Vector3) {
    this.group.visible = cameraPosition.x < 4.95;
  }

  update(delta: number) {
    this.elapsed += delta;
    this.interactionPulse.update(delta);
    this.flames.forEach((flame, index) => {
      const flicker = 0.88 + Math.sin(this.elapsed * 12 + index * 1.7) * 0.13;
      flame.scale.set(0.9 + flicker * 0.1, 1.45 + flicker * 0.3, 0.9 + flicker * 0.1);
      flame.position.x += Math.sin(this.elapsed * 9 + index) * 0.0006;
    });

    if (this.celebrationTime < 0) return;
    this.celebrationTime += delta;

    this.smoke.forEach((particle, index) => {
      const smokeTime = this.celebrationTime - particle.offset;
      particle.mesh.visible = smokeTime > 0 && smokeTime < 2.2;
      if (!particle.mesh.visible) return;
      particle.mesh.position.set(
        -0.2 + (index % 3) * 0.2 + Math.sin(smokeTime * 3 + index) * 0.08,
        1.88 + smokeTime * 0.42,
        0.08,
      );
      const material = particle.mesh.material as THREE.MeshBasicMaterial;
      material.opacity = Math.sin(Math.min(smokeTime / 2.2, 1) * Math.PI) * 0.38;
      particle.mesh.scale.setScalar(1 + smokeTime * 1.5);
    });

    this.confetti.forEach((particle) => {
      if (!particle.mesh.visible) return;
      particle.velocity.y -= delta * 1.65;
      particle.mesh.position.addScaledVector(particle.velocity, delta);
      particle.mesh.rotation.x += particle.spin.x * delta;
      particle.mesh.rotation.y += particle.spin.y * delta;
      particle.mesh.rotation.z += particle.spin.z * delta;
      if (particle.mesh.position.y <= 0.05) particle.mesh.visible = false;
    });

    if (this.celebrationTime > 5.2) {
      this.celebrationTime = -1;
      this.flames.forEach(flame => { flame.visible = true; });
      this.smoke.forEach(particle => { particle.mesh.visible = false; });
      this.confetti.forEach(particle => { particle.mesh.visible = false; });
    }
  }
}
