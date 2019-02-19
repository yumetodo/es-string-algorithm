# es-string-algorithm

[![Build Status](https://travis-ci.org/yumetodo/es-string-algorithm.svg?branch=master)](https://travis-ci.org/yumetodo/es-string-algorithm)

[![Greenkeeper badge](https://badges.greenkeeper.io/yumetodo/es-string-algorithm.svg)](https://greenkeeper.io/)

## Introduction

C++ STL provide `find_first_of` / `find_first_not_of` / `find_last_of` / `find_last_not_of` member function.

However, JavaScript `String` class does not provide such method. So, this package provide these functions.

(When you want `find` / `rfind` that C++ STL provide, please use [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) / [`lastIndexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf))

## Reference

**Every function manipulate a string as if that is UTF-32 encoded.**

To describe simply, we use two function like below:

- `size(s: string) => number`: Returns the length of `s`.
- `at(s: string, n: number) => string`: Returns `n`th charactor.

### findFirstOf

```ts
export declare const findFirstOf: (target: string, key: string, pos?: number, n?: number | undefined) => number;
```

Determines the lowest position `xpos`, if possible, such that both of the following conditions hold:

1. `pos <= xpos` and `xpos < size(target)`
2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to [`key.substring(0, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring))

#### Parameters

- `target`: search target string
- `key`: string identifying characters to search for
- `pos = 0`: position at which to begin searching
- `n`(opt): length of character string identifying characters to search for

#### Return value

`xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.

#### Example

```js
const std = require('es-string-algorithm');
const s = 'Hello, world. Welcome to C++ world.';
const str = 'world';
console.log(std.findFirstOf(s, str, 14));// => 16
console.log(std.findFirstOf(s, ',.+', 14));// => 26
console.log(std.findFirstOf('arikitari na sekai', 'a', 1));// => 6
console.log(std.findFirstOf('🍣🍺', '🍺'));// => 1
```

### findLastof

```ts
export declare const findLastof: (target: string, key: string, pos?: number, n?: number | undefined) => number;
```

Determines the highest position `xpos`, if possible, such that both of the following conditions hold:

1. `pos <= xpos` and `xpos < size(target)`
2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to [`key.substring(0, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring))

#### Parameters

- `target`: search target string
- `key`: string identifying characters to search for
- `pos = -1`: position at which the search is to finish. `-1` is equal to the length of search target string
- `n`(opt): length of character string identifying characters to search for

#### Return value

`xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.

#### Example

```js
const std = require('es-string-algorithm');
const s = 'Hello, world. Welcome to C++ world.';
const str = 'world';
console.log(std.findLastof(s, str, 25));// => 23
console.log(std.findLastof(s, ',.+', 5));// => 5
console.log(std.findLastof('arikitari na sekai', 'a', 1));// => 0
console.log(std.findLastof('🍣🍺', '🍺'));// => 1
```

### findFirstNotOf

```ts
export declare const findFirstNotOf: (target: string, key: string, pos?: number, n?: number | undefined) => number;
```

Determines the lowest position `xpos`, if possible, such that both of the following conditions hold:

1. `pos <= xpos` and `xpos < size(target)`
2. [`!k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to [`key.substring(0, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring))

#### Parameters

- `target`: search target string
- `key`: string identifying characters to search for
- `pos = 0`: position at which to begin searching
- `n`(opt): length of character string identifying characters to search for

#### Return value

`xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.

#### Example

```js
const std = require('es-string-algorithm');
const s = 'Hello, world. Welcome to C++ world.';
const str = 'world';
console.log(std.findFirstNotOf(s, str, 2));// => 5
console.log(std.findFirstNotOf(s, 'worlde,. ', 1));// => 14
console.log(std.findFirstNotOf('arikitari na sekai datta', 't', 21));// => 23
console.log(std.findFirstNotOf('🍣🍺', '🍣'));// => 1
```

### findLastNotof

```ts
export declare const findLastNotof: (target: string, key: string, pos?: number, n?: number | undefined) => number;
```

Determines the highest position `xpos`, if possible, such that both of the following conditions hold:

1. `pos <= xpos` and `xpos < size(target)`
2. [`k.includes(at(target, xpos))`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) (When `n` is `undefined` (omitted), `k` is equal to `key`. Otherwise, `k` is equal to [`key.substring(0, n)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring))

#### Parameters

- `target`: search target string
- `key`: string identifying characters to search for
- `pos = -1`: position at which the search is to finish. `-1` is equal to the length of search target string
- `n`(opt): length of character string identifying characters to search for

#### Return value

`xpos` if the function can determine such a value for `xpos`. Otherwise, returns `-1`.

#### Example

```js
const std = require('es-string-algorithm');
const s = 'Hello, world. Welcome to C++ world.';
const str = 'world';
console.log(std.findLastNotof(s, str, 11));// => 6
console.log(std.findLastNotof(s, 'Welcome to C++ world.', 1));// => 5
console.log(std.findLastNotof('arikitari na sekai', 'a', 0));// => -1
console.log(std.findLastNotof('🍣🍺', '🍺'));// => 0
```
