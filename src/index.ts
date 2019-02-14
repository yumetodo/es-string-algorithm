type Pred = (c: string, k: string) => boolean;
const findFirst = (target: string | string[], key: string, pos: number, pred: Pred, n?: number): number => {
  const k = typeof n !== 'undefined' ? key.substring(0, n) : key;
  let i = 0;
  for (const t of target) {
    if (pos <= i && pred(t, k)) return i;
    ++i;
  }
  return -1;
};
/**
 * Determines the lowest position `xpos`, if possible, such that both of the following conditions hold:
 *
 * 1. `pos <= xpos` and `xpos < size(target)`
 * 2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to [`key.substring(0, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring))
 *
 * @param target search target string
 * @param key string identifying characters to search for
 * @param pos position at which to begin searching
 * @param n length of character string identifying characters to search for
 * @returns `xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.
 */
export const findFirstOf = (target: string, key: string, pos = 0, n?: number): number =>
  findFirst(target, key, pos, (c, k) => k.includes(c), n);
const findLast = (target: string, key: string, pos: number, pred: Pred, n?: number): number => {
  const targetArr = Array.from(target);
  // if (targetArr.length <= pos) return -1;
  targetArr.reverse();
  pos = -1 === pos || targetArr.length <= pos ? 0 : targetArr.length - 1 - pos;
  const re = findFirst(targetArr, key, pos, pred, n);
  return -1 === re ? -1 : targetArr.length - 1 - re;
};
/**
 * Determines the highest position `xpos`, if possible, such that both of the following conditions hold:
 *
 * 1. `pos <= xpos` and `xpos < size(target)`
 * 2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to [`key.substring(0, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring))
 *
 * @param target search target string
 * @param key string identifying characters to search for
 * @param pos position at which the search is to finish. `-1` is equal to the length of search target string
 * @param n length of character string identifying characters to search for
 * @retunrs `xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.
 */
export const findLastof = (target: string, key: string, pos = -1, n?: number): number =>
  findLast(target, key, pos, (c, k) => k.includes(c), n);
/**
 * Determines the lowest position `xpos`, if possible, such that both of the following conditions hold:
 *
 * 1. `pos <= xpos` and `xpos < size(target)`
 * 2. [`!k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to [`key.substring(0, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring))
 *
 * @param target search target string
 * @param key string identifying characters to search for
 * @param pos position at which to begin searching
 * @param n length of character string identifying characters to search for
 * @returns `xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.
 */
export const findFirstNotOf = (target: string, key: string, pos = 0, n?: number): number =>
  findFirst(target, key, pos, (c, k) => !k.includes(c), n);
/**
 * Determines the highest position `xpos`, if possible, such that both of the following conditions hold:
 *
 * 1. `pos <= xpos` and `xpos < size(target)`
 * 2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to [`key.substring(0, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring))
 *
 * @param target search target string
 * @param key string identifying characters to search for
 * @param pos position at which the search is to finish. `-1` is equal to the length of search target string
 * @param n length of character string identifying characters to search for
 * @returns `xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.
 */
export const findLastNotof = (target: string, key: string, pos = -1, n?: number): number =>
  findLast(target, key, pos, (c, k) => !k.includes(c), n);
