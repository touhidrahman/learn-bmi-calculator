import { FeetToInchesPipe } from './feet-to-inches.pipe';

describe('FeetToInchesPipe', () => {
  it('create an instance', () => {
    const pipe = new FeetToInchesPipe();
    expect(pipe).toBeTruthy();
  });
});
