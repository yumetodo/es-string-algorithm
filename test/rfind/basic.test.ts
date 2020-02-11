//===----------------------------------------------------------------------===//
//
// Port from the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//
import { rfind } from '../../src';
describe('rfind', () => {
  it('basic', () => {
    const s = 'Hello, world. Welcome to C++ world.';
    const findWord = 'world';
    expect(rfind(s, findWord, 29)).toEqual(29);
    expect(rfind(s, findWord, 28)).toEqual(7);
    expect(rfind(s, 'W', 29)).toEqual(14);
    expect(rfind(s, findWord, 0)).toEqual(-1);
  });
  it('emoji', () => {
    expect(rfind('🍣🍺📧💾', '🍺📧')).toEqual(1);
    expect(rfind('🍺🍣🍺📧💾', '🍺📧')).toEqual(2);
  });
});
