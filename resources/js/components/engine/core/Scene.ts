import * as THREE from 'three';

export class Scene {
  instance: THREE.Scene;

  constructor() {
    this.instance = new THREE.Scene();
    this.instance.background = new THREE.Color('#0a0a12');
  }
}