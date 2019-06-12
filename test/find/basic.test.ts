import { find } from '../../src';
describe('find', () => {
  it('basicc', () => {
    const s = 'hello, world. welcome to C++ world.';
    const findWord = 'world';
    expect(find(s, findWord)).toEqual(7);
    expect(find(s, findWord, 12)).toEqual(29);
    expect(find(s, findWord, 27)).toEqual(29);
    expect(find(s, findWord, 33)).toEqual(-1);
  });
  it('emoji', () => {
    expect(find('🍣🍺📧💾', '🍺📧')).toEqual(1);
    expect(find('🍺🍣🍺📧💾', '🍺📧')).toEqual(2);
  });
});
