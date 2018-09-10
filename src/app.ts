import { WamDetector } from './lib/wam_detector';

const credits = 0;
const wammer = new WamDetector('blenry');
console.log(wammer.detectForWams(credits));
wammer.speak();

export const exit = 0
