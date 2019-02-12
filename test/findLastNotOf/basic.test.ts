import { findLastNotof } from '../../src';
describe('findLastNotOf', () => {
  it('by string', () => {
    const s = 'Hello, world. Welcome to C++ world.';
    const str = 'world';
    expect(findLastNotof(s, str, 40)).toEqual(34);
    expect(findLastNotof(s, str, 11)).toEqual(6);
    expect(findLastNotof(s, 'Welcome to C++ world.')).toEqual(5);
    expect(findLastNotof(s, 'Hello', 3)).toEqual(-1);
  });
  it('by char', () => {
    const s = 'arikitari na sekai';
    expect(findLastNotof(s, 'a')).toEqual(17);
    expect(findLastNotof(s, 'a', 0)).toEqual(-1);
    expect(findLastNotof(s, '\0')).toEqual(17);
  });
  it('emoji', () => {
    const s = '🍣🍺';
    expect(findLastNotof(s, '🍺')).toEqual(0);
    expect(findLastNotof(s, '👩‍❤️‍💋‍👨')).toEqual(1);
  });
});
