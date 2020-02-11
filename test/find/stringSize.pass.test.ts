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
    it('stringSize.pass', () => {
      expect(find('', '', 0)).toEqual(0);
      expect(find('', 'abcde', 0)).toEqual(-1);
      expect(find('', 'abcdeabcde', 0)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 0)).toEqual(-1);
      expect(find('', '', 1)).toEqual(-1);
      expect(find('', 'abcde', 1)).toEqual(-1);
      expect(find('', 'abcdeabcde', 1)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 1)).toEqual(-1);
      expect(find('abcde', '', 0)).toEqual(0);
      expect(find('abcde', 'abcde', 0)).toEqual(0);
      expect(find('abcde', 'abcdeabcde', 0)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 0)).toEqual(-1);
      expect(find('abcde', '', 1)).toEqual(1);
      expect(find('abcde', 'abcde', 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 1)).toEqual(-1);
      expect(find('abcde', '', 2)).toEqual(2);
      expect(find('abcde', 'abcde', 2)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 2)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 2)).toEqual(-1);
      expect(find('abcde', '', 4)).toEqual(4);
      expect(find('abcde', 'abcde', 4)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 4)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 4)).toEqual(-1);
      expect(find('abcde', '', 5)).toEqual(5);
      expect(find('abcde', 'abcde', 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 5)).toEqual(-1);
      expect(find('abcde', '', 6)).toEqual(-1);
      expect(find('abcde', 'abcde', 6)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 6)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 6)).toEqual(-1);
      expect(find('abcdeabcde', '', 0)).toEqual(0);
      expect(find('abcdeabcde', 'abcde', 0)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcde', 0)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 0)).toEqual(-1);
      expect(find('abcdeabcde', '', 1)).toEqual(1);
      expect(find('abcdeabcde', 'abcde', 1)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 1)).toEqual(-1);
      expect(find('abcdeabcde', '', 5)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 5)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 5)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 5)).toEqual(-1);
      expect(find('abcdeabcde', '', 9)).toEqual(9);
      expect(find('abcdeabcde', 'abcde', 9)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 9)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 9)).toEqual(-1);
      expect(find('abcdeabcde', '', 10)).toEqual(10);
      expect(find('abcdeabcde', 'abcde', 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 10)).toEqual(-1);
      expect(find('abcdeabcde', '', 11)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 11)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 11)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 11)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 0)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 0)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 0)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 0)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', '', 1)).toEqual(1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 1)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 1)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 10)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 10)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 10)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 10)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 19)).toEqual(19);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 20)).toEqual(20);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 21)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 21)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 21)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 21)).toEqual(-1);

      expect(find('', '')).toEqual(0);
      expect(find('', 'abcde')).toEqual(-1);
      expect(find('', 'abcdeabcde')).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde')).toEqual(-1);
      expect(find('abcde', '')).toEqual(0);
      expect(find('abcde', 'abcde')).toEqual(0);
      expect(find('abcde', 'abcdeabcde')).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde')).toEqual(-1);
      expect(find('abcdeabcde', '')).toEqual(0);
      expect(find('abcdeabcde', 'abcde')).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcde')).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde')).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '')).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcde')).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde')).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde')).toEqual(0);
    });
  });
});
