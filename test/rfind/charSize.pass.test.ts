//===----------------------------------------------------------------------===//
//
// Port from the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//
import { rfind } from '../../src';
describe('rfind', () => {
  describe('libcxx test', () => {
    it('charSize.pass', () => {
      expect(rfind('', 'b', 0)).toEqual(-1);
      expect(rfind('', 'b', 1)).toEqual(-1);
      expect(rfind('abcde', 'b', 0)).toEqual(-1);
      expect(rfind('abcde', 'b', 1)).toEqual(1);
      expect(rfind('abcde', 'b', 2)).toEqual(1);
      expect(rfind('abcde', 'b', 4)).toEqual(1);
      expect(rfind('abcde', 'b', 5)).toEqual(1);
      expect(rfind('abcde', 'b', 6)).toEqual(1);
      expect(rfind('abcdeabcde', 'b', 0)).toEqual(-1);
      expect(rfind('abcdeabcde', 'b', 1)).toEqual(1);
      expect(rfind('abcdeabcde', 'b', 5)).toEqual(1);
      expect(rfind('abcdeabcde', 'b', 9)).toEqual(6);
      expect(rfind('abcdeabcde', 'b', 10)).toEqual(6);
      expect(rfind('abcdeabcde', 'b', 11)).toEqual(6);
      expect(rfind('abcdeabcdeabcdeabcde', 'b', 0)).toEqual(-1);
      expect(rfind('abcdeabcdeabcdeabcde', 'b', 1)).toEqual(1);
      expect(rfind('abcdeabcdeabcdeabcde', 'b', 10)).toEqual(6);
      expect(rfind('abcdeabcdeabcdeabcde', 'b', 19)).toEqual(16);
      expect(rfind('abcdeabcdeabcdeabcde', 'b', 20)).toEqual(16);
      expect(rfind('abcdeabcdeabcdeabcde', 'b', 21)).toEqual(16);

      expect(rfind('', 'b')).toEqual(-1);
      expect(rfind('abcde', 'b')).toEqual(1);
      expect(rfind('abcdeabcde', 'b')).toEqual(6);
      expect(rfind('abcdeabcdeabcdeabcde', 'b')).toEqual(16);
    });
  });
});
