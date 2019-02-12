import { findLastof } from '../src';
describe('findLastOf', () => {
  it('by string', () => {
    const s = 'Hello, world. Welcome to C++ world.';
    const str = 'world';
    expect(findLastof(s, str)).toEqual(33);
    expect(findLastof(s, str, 40)).toEqual(33);
    expect(findLastof(s, str, 25)).toEqual(23);
    expect(findLastof(s, ',.+', 5)).toEqual(5);
    expect(findLastof(s, 'ab')).toEqual(-1);
  });
  it('by char', () => {
    const s = 'arikitari na sekai';
    expect(findLastof(s, 'a')).toEqual(16);
    expect(findLastof(s, 'a', 1)).toEqual(0);
    expect(findLastof(s, '\0')).toEqual(-1);
  });
  it('emoji', () => {
    const s = '🍣🍺';
    expect(findLastof(s, '🍺')).toEqual(1);
    expect(findLastof(s, '👩‍❤️‍💋‍👨')).toEqual(-1);
  });
});
