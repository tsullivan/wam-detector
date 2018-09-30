export class Detector {
  public speaked: number;

  constructor(public name: string) {
    this.speaked = 0;
  }

  public speak(): void {
    this.speaked++;
    console.log('hi ' + this.name);
  }
}
