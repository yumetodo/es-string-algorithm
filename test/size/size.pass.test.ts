//===----------------------------------------------------------------------===//
//
// Port from the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//
import { size } from '../../src';
describe('size', () => {
  describe('libcxx test', () => {
    it('size.pass', () => {
      expect(size('')).toEqual(0);
      expect(size('123')).toEqual(3);
      expect(size('12345678901234567890123456789012345678901234567890')).toEqual(50);
    });
  });
});
