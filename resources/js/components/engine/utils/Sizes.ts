export class Sizes extends EventTarget {
  width: number = 0;
  height: number = 0;
  pixelRatio: number = 1;

  constructor(private container: HTMLElement) {
    super();
    this.update();

    window.addEventListener('resize', () => {
      this.update();
      // Emette l'evento nativo 'resize'
      this.dispatchEvent(new Event('resize'));
    });
  }

  private update() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
  }
}