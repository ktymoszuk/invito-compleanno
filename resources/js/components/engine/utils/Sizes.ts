export class Sizes extends EventTarget {
  width: number = 0;
  height: number = 0;
  pixelRatio: number = 1;

  constructor(private container: HTMLElement) {
    super();
    this.update();
    window.addEventListener('resize', this.handleResize, { passive: true });
  }

  private handleResize = () => {
    this.update();
    this.dispatchEvent(new Event('resize'));
  };

  private update() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    const maxPixelRatio = 2;
    this.pixelRatio = Math.min(window.devicePixelRatio, maxPixelRatio);
  }

  destroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}