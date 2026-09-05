import * as THREE from 'three';
import { Floor } from './Floor';
import { Ceiling } from './Ceiling';
import { Walls } from './Walls';
import { CountdownBoard } from './CountdownBoard';
import { DJConsole } from './DJConsole';
import { DJSign } from './DJSign';
import { ConfettiRain } from './ConfettiRain';
import { RobotDJ } from './RobotDJ';
import { MovingLightRig } from './MovingLightRig';
import { Bar } from './Bar';
import { LoungeSet } from './LoungeSet';
import { TallPlant } from './TallPlant';
import { BirthdayCake } from './BirthdayCake';
import { Payphone } from './Payphone';
import { VinylWall } from './VinylWall';

export class Room {
  group: THREE.Group;
  floor: Floor;
  ceiling: Ceiling;
  walls: Walls;
  countdownBoard: CountdownBoard;
  djConsole: DJConsole;
  robotDJ: RobotDJ;
  movingLightRig: MovingLightRig;
  bar: Bar;
  loungeSet: LoungeSet;
  tallPlant: TallPlant;
  birthdayCake: BirthdayCake;
  payphone: Payphone;
  vinylWall: VinylWall;
  djSign: DJSign;
  confettiRain: ConfettiRain | null = null; // Inizialmente null
  private cakeConfettiRain: ConfettiRain | null = null;
  private cakeCelebrationTime = 0;

  constructor(targetDate: Date = new Date('2026-10-30T21:30:00+01:00')) {
    this.group = new THREE.Group();

    const roomSize = 10;
    const roomHeight = 5.2;

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

    this.robotDJ = new RobotDJ();
    this.djConsole.group.add(this.robotDJ.group);

    this.movingLightRig = new MovingLightRig();
    this.group.add(this.movingLightRig.group);

    this.bar = new Bar();
    this.group.add(this.bar.group);

    this.loungeSet = new LoungeSet();
    this.group.add(this.loungeSet.group);

    this.tallPlant = new TallPlant();
    this.group.add(this.tallPlant.group);

    this.birthdayCake = new BirthdayCake();
    this.group.add(this.birthdayCake.group);

    this.payphone = new Payphone();
    this.group.add(this.payphone.group);

    this.vinylWall = new VinylWall();
    this.group.add(this.vinylWall.group);

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

  celebrateCake() {
    if (!this.birthdayCake.celebrate()) return;
    this.cakeConfettiRain = new ConfettiRain();
    this.cakeCelebrationTime = 5.2;
    this.group.add(this.cakeConfettiRain.group);
  }

  updateWallVisibility(cameraPosition: THREE.Vector3) {
    this.vinylWall.update(cameraPosition);
    this.payphone.updateVisibility(cameraPosition);
    this.countdownBoard.updateVisibility(cameraPosition);
    this.djSign.updateVisibility(cameraPosition);
    this.birthdayCake.updateVisibility(cameraPosition);
    this.tallPlant.updateVisibility(cameraPosition);
  }

  update(delta: number) {
    if (this.floor) {
      this.floor.update(delta);
    }
    if (this.countdownBoard?.group.visible) {
      this.countdownBoard.update();
    }
    if (this.robotDJ) {
      this.robotDJ.update(delta);
    }
    if (this.djConsole) {
      this.djConsole.update(delta);
    }
    if (this.movingLightRig) {
      this.movingLightRig.update(delta);
    }
    if (this.bar) {
      this.bar.update(delta);
    }
    if (this.loungeSet) {
      this.loungeSet.update(delta);
    }
    if (this.birthdayCake?.group.visible) {
      this.birthdayCake.update(delta);
    }
    if (this.payphone?.group.visible) {
      this.payphone.update(delta);
    }
    if (this.confettiRain) {
      this.confettiRain.update(); // Aggiorna i coriandoli solo se sono stati attivati
    }
    if (this.cakeConfettiRain) {
      this.cakeConfettiRain.update();
      this.cakeCelebrationTime -= delta;
      if (this.cakeCelebrationTime <= 0) {
        this.group.remove(this.cakeConfettiRain.group);
        this.cakeConfettiRain = null;
      }
    }
  }
}