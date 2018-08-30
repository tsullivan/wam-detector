export class WamDetector {
  private wams: number;

  constructor() {
    this.wams = 0;
  }
  detectForWams(credits: number = 0): string {
    const result = this.wams + credits;
    return result === 0 ?
      'no wams found' :
      'some wams found';
  }
}
