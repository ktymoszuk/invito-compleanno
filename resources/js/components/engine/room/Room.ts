import * as THREE from 'three';
import { Floor } from './Floor';
import { Ceiling } from './Ceiling';
import { Walls } from './Walls';
import { CountdownBoard } from './CountdownBoard';
import { DJConsole } from './DJConsole';
import { DJSign } from './DJSign';
import { ConfettiRain } from './ConfettiRain';

export class Room {
  group: THREE.Group;
  floor: Floor;
  ceiling: Ceiling;
  walls: Walls;
  countdownBoard: CountdownBoard;
  djConsole: DJConsole;
  djSign: DJSign;
  confettiRain: ConfettiRain | null = null; // Inizialmente null

  constructor(targetDate: Date = new Date('2026-12-31T23:59:59')) {
    this.group = new THREE.Group();

    const roomSize = 10;
    const roomHeight = 4;

    // 1. Pavimento (senza luci)
    this.floor = new Floor(roomSize, roomSize, 10);
    this.group.add(this.floor.mesh);

    // 2. Soffitto riflettente
    this.ceiling = new Ceiling(roomSize, roomSize, roomHeight);
    this.group.add(this.ceiling.mesh);

    // 3. Pareti
    this.walls = new Walls(roomSize, roomHeight, roomSize);
    this.group.add(this.walls.group);

    // 4. Elementi della stanza
    this.countdownBoard = new CountdownBoard(targetDate);
    this.group.add(this.countdownBoard.group);

    this.djConsole = new DJConsole();
    this.group.add(this.djConsole.group);

    // 5. Scritte luminose
    this.djSign = new DJSign();
    this.group.add(this.djSign.group);

    // NOTA: I coriandoli NON vengono creati qui all'avvio!
  }

  // Metodo per fare esplodere i coriandoli al momento della registrazione
  startConfetti() {
    if (!this.confettiRain) {
      this.confettiRain = new ConfettiRain();
      this.group.add(this.confettiRain.group);
    }
  }

  update(delta: number) {
    if (this.floor) {
      this.floor.update(delta);
    }
    if (this.countdownBoard) {
      this.countdownBoard.update();
    }
    if (this.confettiRain) {
      this.confettiRain.update(); // Aggiorna i coriandoli solo se sono stati attivati
    }
  }
}