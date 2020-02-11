import * as impl from './impl';
/**
 * Determines the lowest position `xpos`, if possible, such that both of the following conditions hold:
 *
 * 1. `pos <= xpos` and `xpos < std.size(target)`
 * 2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to `std.substr(key, 0, n)`)
 *
 * @param target search target string
 * @param key string identifying characters to search for
 * @param pos position at which to begin searching
 * @param n length of character string identifying characters to search for
 * @returns `xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.
 */
export const findFirstOf = (target: string, key: string, pos = 0, n?: number): number =>
  impl.findFirst(target, pos, t => impl.includes(key, t, n));
/**
 * Determines the highest position `xpos`, if possible, such that both of the following conditions hold:
 *
 * 1. `pos <= xpos` and `xpos < std.size(target)`
 * 2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to `std.substr(key, 0, n)`)
 *
 * @param target search target string
 * @param key string identifying characters to search for
 * @param pos position at which the search is to finish. `-1` is equal to the length of search target string
 * @param n length of character string identifying characters to search for
 * @retunrs `xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.
 */
export const findLastof = (target: string, key: string, pos = -1, n?: number): number =>
  impl.findLast(target, pos, t => impl.includes(key, t, n));
/**
 * Determines the lowest position `xpos`, if possible, such that both of the following conditions hold:
 *
 * 1. `pos <= xpos` and `xpos < std.size(target)`
 * 2. [`!k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to `std.substr(key, 0, n)`)
 *
 * @param target search target string
 * @param key string identifying characters to search for
 * @param pos position at which to begin searching
 * @param n length of character string identifying characters to search for
 * @returns `xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.
 */
export const findFirstNotOf = (target: string, key: string, pos = 0, n?: number): number =>
  impl.findFirst(target, pos, t => !impl.includes(key, t, n));
/**
 * Determines the highest position `xpos`, if possible, such that both of the following conditions hold:
 *
 * 1. `pos <= xpos` and `xpos < std.size(target)`
 * 2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to `std.substr(key, 0, n)`)
 *
 * @param target search target string
 * @param key string identifying characters to search for
 * @param pos position at which the search is to finish. `-1` is equal to the length of search target string
 * @param n length of character string identifying characters to search for
 * @returns `xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.
 */
export const findLastNotof = (target: string, key: string, pos = -1, n?: number): number =>
  impl.findLast(target, pos, t => !impl.includes(key, t, n));

export const find = (target: string, key: string, pos = 0, n?: number): number => {
  for (; ; ++pos) {
    let i = 0;
    const it1 = target[Symbol.iterator]();

    for (; i < pos; ++i) {
      if (it1.next().done) {
        return -1;
      }
    }

    const it2 = key[Symbol.iterator]();

    for (let j = 0; ; ++j) {
      const n1 = it1.next();
      const n2 = it2.next();

      if (n2.done || j === n) {
        return i;
      }
      if (n1.done) {
        return -1;
      }

      if (n1.value !== n2.value) {
        break;
      }
    }
  }
};
export const rfind = (target: string, key: string, pos = -1, n?: number): number => {
  const t = Array.from(target);
  if (typeof n === 'number' && 0 === n) return Math.min(pos, t.length);
  for (let i = -1 === pos || t.length <= pos ? t.length - 1 : pos; ; --i) {
    if (-1 === i) return -1;
    const it2 = key[Symbol.iterator]();
    for (let j = 0; ; ++j) {
      const n2 = it2.next();
      if (n2.done || j === n) {
        return i;
      }
      if (t.length <= i + j) {
        break;
      }
      if (t[i + j] !== n2.value) {
        break;
      }
    }
  }
};
/**
 * Create part of the `s`
 * @param s string
 * @param pos copy start position
 * @param n copy length
 * @returns part of the `s` in range of `[pos...rlast]` (`rlast` is the smaller of `pos + n` and `std.size(s)`)
 * @throws {RangeError} When `pos` or `n` is negative or `pos` > `std.size(s)`
 */
export const substr = (s: string, pos = 0, n?: number): string => {
  if (pos < 0) {
    throw new RangeError('std.substr: pos < 0');
  }
  if (typeof n === 'number' && n < 0) {
    throw new RangeError('std.substr: n < 0');
  }
  let i = 0;
  let l = 0;
  let begin = 0;
  for (const c of s) {
    if (i === pos) {
      if (typeof n === 'number' && 0 === n) {
        return '';
      }
      begin = l;
    } else if (typeof n === 'number' && i === pos + n) {
      return s.substring(begin, l);
    }
    l += c.length;
    ++i;
  }
  if (i < pos) {
    throw new RangeError(`std.substr: pos (which is ${pos}) > std.size(s) (which is ${i})`);
  }
  if (0 === n) {
    return '';
  }
  return s.substring(begin);
};

/**
 * A count of the number of codepoint currently in the string.
 *
 * Complexity: O(n)
 * @param s string
 */
export const size = (s: string): number => {
  let i = 0;
  for (const _ of s) {
    ++i;
  }
  return i;
};
