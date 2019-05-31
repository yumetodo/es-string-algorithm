import { substr } from '../../src';
describe('substr', () => {
  it('basic', () => {
    const s = 'hello';
    expect(substr(s, 2, 3)).toEqual('llo');
    expect(substr(s, 2)).toEqual('llo');
  });
  it('emoji', () => {
    const s1 = '🍣🍺';
    expect(substr(s1)).toEqual(s1);
    expect(substr(s1, 1)).toEqual('🍺');
    expect(substr(s1, 1, 1)).toEqual('🍺');
    expect(substr(s1, 1, 5)).toEqual('🍺');
    expect(substr(s1, 0, 1)).toEqual('🍣');
    expect(substr(s1, 0, 5)).toEqual(s1);
  });
});
