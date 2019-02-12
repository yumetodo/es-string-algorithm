import { findFirstNotOf } from '../src';
describe('findFirstNotOf', () => {
  it('by string', () => {
    const s = 'Hello, world. Welcome to C++ world.';
    const str = 'world';
    expect(findFirstNotOf(s, str)).toEqual(0);
    expect(findFirstNotOf(s, str, 2)).toEqual(5);
    expect(findFirstNotOf(s, str, 40)).toEqual(-1);
    expect(findFirstNotOf(s, 'worlde,. ', 1)).toEqual(14);
    expect(findFirstNotOf(s, 'ab')).toEqual(0);
  });
  it('by char', () => {
    const s = 'arikitari na sekai datta';
    expect(findFirstNotOf(s, 'a')).toEqual(1);
    expect(findFirstNotOf(s, 't', 21)).toEqual(23);
    expect(findFirstNotOf(s, '\0')).toEqual(0);
  });
  it('emoji', () => {
    const s = '🍣🍺';
    expect(findFirstNotOf(s, '🍣')).toEqual(1);
    expect(findFirstNotOf(s, '👩‍❤️‍💋‍👨')).toEqual(0);
  });
});
