//===----------------------------------------------------------------------===//
//
// Port from the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//
import { find } from '../../src';
describe('find', () => {
  describe('libcxx test', () => {
    it('charSize.pass', () => {
      expect(find('', 'c', 0)).toEqual(-1);
      expect(find('', 'c', 1)).toEqual(-1);
      expect(find('abcde', 'c', 0)).toEqual(2);
      expect(find('abcde', 'c', 1)).toEqual(2);
      expect(find('abcde', 'c', 2)).toEqual(2);
      expect(find('abcde', 'c', 4)).toEqual(-1);
      expect(find('abcde', 'c', 5)).toEqual(-1);
      expect(find('abcde', 'c', 6)).toEqual(-1);
      expect(find('abcdeabcde', 'c', 0)).toEqual(2);
      expect(find('abcdeabcde', 'c', 1)).toEqual(2);
      expect(find('abcdeabcde', 'c', 5)).toEqual(7);
      expect(find('abcdeabcde', 'c', 9)).toEqual(-1);
      expect(find('abcdeabcde', 'c', 10)).toEqual(-1);
      expect(find('abcdeabcde', 'c', 11)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'c', 0)).toEqual(2);
      expect(find('abcdeabcdeabcdeabcde', 'c', 1)).toEqual(2);
      expect(find('abcdeabcdeabcdeabcde', 'c', 10)).toEqual(12);
      expect(find('abcdeabcdeabcdeabcde', 'c', 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'c', 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'c', 21)).toEqual(-1);

      expect(find('', 'c')).toEqual(-1);
      expect(find('abcde', 'c')).toEqual(2);
      expect(find('abcdeabcde', 'c')).toEqual(2);
      expect(find('abcdeabcdeabcdeabcde', 'c')).toEqual(2);
    });
  });
});
