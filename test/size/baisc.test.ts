import { size } from '../../src';
describe('size', () => {
  it('basic', () => {
    expect(size('hello')).toEqual(5);
    expect(size('ありきたりな世界')).toEqual(8);
  });
  it('emoji', () => {
    expect(size('🍣🍺')).toEqual(2);
  });
});
