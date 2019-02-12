import { findFirstOf, findLastof, findFirstNotOf } from '../src';

describe('findFirstOf', () => {
  it('by string', () => {
    const s = 'Hello, world. Welcome to C++ world.';
    const str = 'world';
    expect(findFirstOf(s, str)).toEqual(2);
    expect(findFirstOf(s, str, 14)).toEqual(16);
    expect(findFirstOf(s, str, 40)).toEqual(-1);
    expect(findFirstOf(s, ',.+', 14)).toEqual(26);
    expect(findFirstOf(s, 'ab')).toEqual(-1);
  });
  it('by char', () => {
    const s = 'arikitari na sekai';
    expect(findFirstOf(s, 'a')).toEqual(0);
    expect(findFirstOf(s, 'a', 1)).toEqual(6);
    expect(findFirstOf(s, '\0')).toEqual(-1);
  });
  it('emoji', () => {
    const s = '🍣🍺';
    expect(findFirstOf(s, '🍺')).toEqual(1);
    expect(findFirstOf(s, '👩‍❤️‍💋‍👨')).toEqual(-1);
  });
});
describe('findLastOf', () => {
  it('by string', () => {
    const s = 'Hello, world. Welcome to C++ world.';
    const str = 'world';
    expect(findLastof(s, str)).toEqual(33);
    expect(findLastof(s, str, 40)).toEqual(-1);
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
