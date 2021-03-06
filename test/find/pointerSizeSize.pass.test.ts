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
    it('pointerSizeSize.passc', () => {
      expect(find('', '', 0, 0)).toEqual(0);
      expect(find('', 'abcde', 0, 0)).toEqual(0);
      expect(find('', 'abcde', 0, 1)).toEqual(-1);
      expect(find('', 'abcde', 0, 2)).toEqual(-1);
      expect(find('', 'abcde', 0, 4)).toEqual(-1);
      expect(find('', 'abcde', 0, 5)).toEqual(-1);
      expect(find('', 'abcdeabcde', 0, 0)).toEqual(0);
      expect(find('', 'abcdeabcde', 0, 1)).toEqual(-1);
      expect(find('', 'abcdeabcde', 0, 5)).toEqual(-1);
      expect(find('', 'abcdeabcde', 0, 9)).toEqual(-1);
      expect(find('', 'abcdeabcde', 0, 10)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 0, 0)).toEqual(0);
      expect(find('', 'abcdeabcdeabcdeabcde', 0, 1)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 0, 10)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 0, 19)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 0, 20)).toEqual(-1);
      expect(find('', '', 1, 0)).toEqual(-1);
      expect(find('', 'abcde', 1, 0)).toEqual(-1);
      expect(find('', 'abcde', 1, 1)).toEqual(-1);
      expect(find('', 'abcde', 1, 2)).toEqual(-1);
      expect(find('', 'abcde', 1, 4)).toEqual(-1);
      expect(find('', 'abcde', 1, 5)).toEqual(-1);
      expect(find('', 'abcdeabcde', 1, 0)).toEqual(-1);
      expect(find('', 'abcdeabcde', 1, 1)).toEqual(-1);
      expect(find('', 'abcdeabcde', 1, 5)).toEqual(-1);
      expect(find('', 'abcdeabcde', 1, 9)).toEqual(-1);
      expect(find('', 'abcdeabcde', 1, 10)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 1, 0)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 1, 1)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 1, 10)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 1, 19)).toEqual(-1);
      expect(find('', 'abcdeabcdeabcdeabcde', 1, 20)).toEqual(-1);
      expect(find('abcde', '', 0, 0)).toEqual(0);
      expect(find('abcde', 'abcde', 0, 0)).toEqual(0);
      expect(find('abcde', 'abcde', 0, 1)).toEqual(0);
      expect(find('abcde', 'abcde', 0, 2)).toEqual(0);
      expect(find('abcde', 'abcde', 0, 4)).toEqual(0);
      expect(find('abcde', 'abcde', 0, 5)).toEqual(0);
      expect(find('abcde', 'abcdeabcde', 0, 0)).toEqual(0);
      expect(find('abcde', 'abcdeabcde', 0, 1)).toEqual(0);
      expect(find('abcde', 'abcdeabcde', 0, 5)).toEqual(0);
      expect(find('abcde', 'abcdeabcde', 0, 9)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 0, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 0, 0)).toEqual(0);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 0, 1)).toEqual(0);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 0, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 0, 19)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 0, 20)).toEqual(-1);
      expect(find('abcde', '', 1, 0)).toEqual(1);
      expect(find('abcde', 'abcde', 1, 0)).toEqual(1);
      expect(find('abcde', 'abcde', 1, 1)).toEqual(-1);
      expect(find('abcde', 'abcde', 1, 2)).toEqual(-1);
      expect(find('abcde', 'abcde', 1, 4)).toEqual(-1);
      expect(find('abcde', 'abcde', 1, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 1, 0)).toEqual(1);
      expect(find('abcde', 'abcdeabcde', 1, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 1, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 1, 9)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 1, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 1, 0)).toEqual(1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 1, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 1, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 1, 19)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 1, 20)).toEqual(-1);
      expect(find('abcde', '', 2, 0)).toEqual(2);
      expect(find('abcde', 'abcde', 2, 0)).toEqual(2);
      expect(find('abcde', 'abcde', 2, 1)).toEqual(-1);
      expect(find('abcde', 'abcde', 2, 2)).toEqual(-1);
      expect(find('abcde', 'abcde', 2, 4)).toEqual(-1);
      expect(find('abcde', 'abcde', 2, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 2, 0)).toEqual(2);
      expect(find('abcde', 'abcdeabcde', 2, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 2, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 2, 9)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 2, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 2, 0)).toEqual(2);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 2, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 2, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 2, 19)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 2, 20)).toEqual(-1);
      expect(find('abcde', '', 4, 0)).toEqual(4);
      expect(find('abcde', 'abcde', 4, 0)).toEqual(4);
      expect(find('abcde', 'abcde', 4, 1)).toEqual(-1);
      expect(find('abcde', 'abcde', 4, 2)).toEqual(-1);
      expect(find('abcde', 'abcde', 4, 4)).toEqual(-1);
      expect(find('abcde', 'abcde', 4, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 4, 0)).toEqual(4);
      expect(find('abcde', 'abcdeabcde', 4, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 4, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 4, 9)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 4, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 4, 0)).toEqual(4);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 4, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 4, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 4, 19)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 4, 20)).toEqual(-1);
      expect(find('abcde', '', 5, 0)).toEqual(5);
      expect(find('abcde', 'abcde', 5, 0)).toEqual(5);
      expect(find('abcde', 'abcde', 5, 1)).toEqual(-1);
      expect(find('abcde', 'abcde', 5, 2)).toEqual(-1);

      expect(find('abcde', 'abcde', 5, 4)).toEqual(-1);
      expect(find('abcde', 'abcde', 5, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 5, 0)).toEqual(5);
      expect(find('abcde', 'abcdeabcde', 5, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 5, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 5, 9)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 5, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 5, 0)).toEqual(5);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 5, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 5, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 5, 19)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 5, 20)).toEqual(-1);
      expect(find('abcde', '', 6, 0)).toEqual(-1);
      expect(find('abcde', 'abcde', 6, 0)).toEqual(-1);
      expect(find('abcde', 'abcde', 6, 1)).toEqual(-1);
      expect(find('abcde', 'abcde', 6, 2)).toEqual(-1);
      expect(find('abcde', 'abcde', 6, 4)).toEqual(-1);
      expect(find('abcde', 'abcde', 6, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 6, 0)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 6, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 6, 5)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 6, 9)).toEqual(-1);
      expect(find('abcde', 'abcdeabcde', 6, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 6, 0)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 6, 1)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 6, 10)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 6, 19)).toEqual(-1);
      expect(find('abcde', 'abcdeabcdeabcdeabcde', 6, 20)).toEqual(-1);
      expect(find('abcdeabcde', '', 0, 0)).toEqual(0);
      expect(find('abcdeabcde', 'abcde', 0, 0)).toEqual(0);
      expect(find('abcdeabcde', 'abcde', 0, 1)).toEqual(0);
      expect(find('abcdeabcde', 'abcde', 0, 2)).toEqual(0);
      expect(find('abcdeabcde', 'abcde', 0, 4)).toEqual(0);
      expect(find('abcdeabcde', 'abcde', 0, 5)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcde', 0, 0)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcde', 0, 1)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcde', 0, 5)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcde', 0, 9)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcde', 0, 10)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 0, 0)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 0, 1)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 0, 10)).toEqual(0);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 0, 19)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 0, 20)).toEqual(-1);
      expect(find('abcdeabcde', '', 1, 0)).toEqual(1);
      expect(find('abcdeabcde', 'abcde', 1, 0)).toEqual(1);
      expect(find('abcdeabcde', 'abcde', 1, 1)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 1, 2)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 1, 4)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 1, 5)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 1, 0)).toEqual(1);
      expect(find('abcdeabcde', 'abcdeabcde', 1, 1)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 1, 5)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 1, 9)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 1, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 1, 0)).toEqual(1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 1, 1)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 1, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 1, 19)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 1, 20)).toEqual(-1);
      expect(find('abcdeabcde', '', 5, 0)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 5, 0)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 5, 1)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 5, 2)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 5, 4)).toEqual(5);
      expect(find('abcdeabcde', 'abcde', 5, 5)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 5, 0)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 5, 1)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 5, 5)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcde', 5, 9)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 5, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 5, 0)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 5, 1)).toEqual(5);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 5, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 5, 19)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 5, 20)).toEqual(-1);
      expect(find('abcdeabcde', '', 9, 0)).toEqual(9);
      expect(find('abcdeabcde', 'abcde', 9, 0)).toEqual(9);
      expect(find('abcdeabcde', 'abcde', 9, 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 9, 2)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 9, 4)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 9, 5)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 9, 0)).toEqual(9);
      expect(find('abcdeabcde', 'abcdeabcde', 9, 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 9, 5)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 9, 9)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 9, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 9, 0)).toEqual(9);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 9, 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 9, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 9, 19)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 9, 20)).toEqual(-1);
      expect(find('abcdeabcde', '', 10, 0)).toEqual(10);
      expect(find('abcdeabcde', 'abcde', 10, 0)).toEqual(10);
      expect(find('abcdeabcde', 'abcde', 10, 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 10, 2)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 10, 4)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 10, 5)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 10, 0)).toEqual(10);
      expect(find('abcdeabcde', 'abcdeabcde', 10, 1)).toEqual(-1);

      expect(find('abcdeabcde', 'abcdeabcde', 10, 5)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 10, 9)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 10, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 10, 0)).toEqual(10);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 10, 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 10, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 10, 19)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 10, 20)).toEqual(-1);
      expect(find('abcdeabcde', '', 11, 0)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 11, 0)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 11, 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 11, 2)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 11, 4)).toEqual(-1);
      expect(find('abcdeabcde', 'abcde', 11, 5)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 11, 0)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 11, 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 11, 5)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 11, 9)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcde', 11, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 11, 0)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 11, 1)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 11, 10)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 11, 19)).toEqual(-1);
      expect(find('abcdeabcde', 'abcdeabcdeabcdeabcde', 11, 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 0, 0)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 0, 0)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 0, 1)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 0, 2)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 0, 4)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 0, 5)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 0, 0)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 0, 1)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 0, 5)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 0, 9)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 0, 10)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 0, 0)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 0, 1)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 0, 10)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 0, 19)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 0, 20)).toEqual(0);
      expect(find('abcdeabcdeabcdeabcde', '', 1, 0)).toEqual(1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 1, 0)).toEqual(1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 1, 1)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 1, 2)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 1, 4)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 1, 5)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 1, 0)).toEqual(1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 1, 1)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 1, 5)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 1, 9)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 1, 10)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 1, 0)).toEqual(1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 1, 1)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 1, 10)).toEqual(5);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 1, 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 1, 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 10, 0)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 10, 0)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 10, 1)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 10, 2)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 10, 4)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 10, 5)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 10, 0)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 10, 1)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 10, 5)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 10, 9)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 10, 10)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 10, 0)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 10, 1)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 10, 10)).toEqual(10);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 10, 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 10, 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 19, 0)).toEqual(19);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 19, 0)).toEqual(19);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 19, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 19, 2)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 19, 4)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 19, 5)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 19, 0)).toEqual(19);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 19, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 19, 5)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 19, 9)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 19, 10)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 19, 0)).toEqual(19);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 19, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 19, 10)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 19, 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 19, 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 20, 0)).toEqual(20);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 20, 0)).toEqual(20);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 20, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 20, 2)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 20, 4)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 20, 5)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 20, 0)).toEqual(20);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 20, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 20, 5)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 20, 9)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 20, 10)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 20, 0)).toEqual(20);

      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 20, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 20, 10)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 20, 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 20, 20)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', '', 21, 0)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 21, 0)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 21, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 21, 2)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 21, 4)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcde', 21, 5)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 21, 0)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 21, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 21, 5)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 21, 9)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcde', 21, 10)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 21, 0)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 21, 1)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 21, 10)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 21, 19)).toEqual(-1);
      expect(find('abcdeabcdeabcdeabcde', 'abcdeabcdeabcdeabcde', 21, 20)).toEqual(-1);
    });
  });
});
