//===----------------------------------------------------------------------===//
//
// Port from the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//
import { findFirstOf } from '../../src';
describe('findFirstOf', () => {
  describe('libcxx test', () => {
    it('charSize.pass', () => {
      expect(findFirstOf('', 'e', 0)).toEqual(-1);
      expect(findFirstOf('', 'e', 1)).toEqual(-1);
      expect(findFirstOf('kitcj', 'e', 0)).toEqual(-1);
      expect(findFirstOf('qkamf', 'e', 1)).toEqual(-1);
      expect(findFirstOf('nhmko', 'e', 2)).toEqual(-1);
      expect(findFirstOf('tpsaf', 'e', 4)).toEqual(-1);
      expect(findFirstOf('lahfb', 'e', 5)).toEqual(-1);
      expect(findFirstOf('irkhs', 'e', 6)).toEqual(-1);
      expect(findFirstOf('gmfhdaipsr', 'e', 0)).toEqual(-1);
      expect(findFirstOf('kantesmpgj', 'e', 1)).toEqual(4);
      expect(findFirstOf('odaftiegpm', 'e', 5)).toEqual(6);
      expect(findFirstOf('oknlrstdpi', 'e', 9)).toEqual(-1);
      expect(findFirstOf('eolhfgpjqk', 'e', 10)).toEqual(-1);
      expect(findFirstOf('pcdrofikas', 'e', 11)).toEqual(-1);
      expect(findFirstOf('nbatdlmekrgcfqsophij', 'e', 0)).toEqual(7);
      expect(findFirstOf('bnrpehidofmqtcksjgla', 'e', 1)).toEqual(4);
      expect(findFirstOf('jdmciepkaqgotsrfnhlb', 'e', 10)).toEqual(-1);
      expect(findFirstOf('jtdaefblsokrmhpgcnqi', 'e', 19)).toEqual(-1);
      expect(findFirstOf('hkbgspofltajcnedqmri', 'e', 20)).toEqual(-1);
      expect(findFirstOf('oselktgbcapndfjihrmq', 'e', 21)).toEqual(-1);

      expect(findFirstOf('', 'e')).toEqual(-1);
      expect(findFirstOf('csope', 'e')).toEqual(4);
      expect(findFirstOf('gfsmthlkon', 'e')).toEqual(-1);
      expect(findFirstOf('laenfsbridchgotmkqpj', 'e')).toEqual(2);
    });
  });
});
