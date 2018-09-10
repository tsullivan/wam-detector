import { Detector } from './detector';

export class WamDetector extends Detector {
  private wams: number;

  constructor(name) {
    super(name);
    this.wams = 0;
  }

  detectForWams(credits: number = 0): string {
    const result = this.wams + credits;
    return result === 0 ?
      'no wams found' :
      'some wams found';
  }
}
