//===----------------------------------------------------------------------===//
//
// Port from the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//
import { findFirstNotOf } from '../../src';
describe('findFirstNotOf', () => {
  describe('libcxx test', () => {
    it('charSize.pass', () => {
      expect(findFirstNotOf('', 'q', 0)).toEqual(-1);
      expect(findFirstNotOf('', 'q', 1)).toEqual(-1);
      expect(findFirstNotOf('kitcj', 'q', 0)).toEqual(0);
      expect(findFirstNotOf('qkamf', 'q', 1)).toEqual(1);
      expect(findFirstNotOf('nhmko', 'q', 2)).toEqual(2);
      expect(findFirstNotOf('tpsaf', 'q', 4)).toEqual(4);
      expect(findFirstNotOf('lahfb', 'q', 5)).toEqual(-1);
      expect(findFirstNotOf('irkhs', 'q', 6)).toEqual(-1);
      expect(findFirstNotOf('gmfhdaipsr', 'q', 0)).toEqual(0);
      expect(findFirstNotOf('kantesmpgj', 'q', 1)).toEqual(1);
      expect(findFirstNotOf('odaftiegpm', 'q', 5)).toEqual(5);
      expect(findFirstNotOf('oknlrstdpi', 'q', 9)).toEqual(9);
      expect(findFirstNotOf('eolhfgpjqk', 'q', 10)).toEqual(-1);
      expect(findFirstNotOf('pcdrofikas', 'q', 11)).toEqual(-1);
      expect(findFirstNotOf('nbatdlmekrgcfqsophij', 'q', 0)).toEqual(0);
      expect(findFirstNotOf('bnrpehidofmqtcksjgla', 'q', 1)).toEqual(1);
      expect(findFirstNotOf('jdmciepkaqgotsrfnhlb', 'q', 10)).toEqual(10);
      expect(findFirstNotOf('jtdaefblsokrmhpgcnqi', 'q', 19)).toEqual(19);
      expect(findFirstNotOf('hkbgspofltajcnedqmri', 'q', 20)).toEqual(-1);
      expect(findFirstNotOf('oselktgbcapndfjihrmq', 'q', 21)).toEqual(-1);

      expect(findFirstNotOf('', 'q')).toEqual(-1);
      expect(findFirstNotOf('q', 'q')).toEqual(-1);
      expect(findFirstNotOf('qqq', 'q')).toEqual(-1);
      expect(findFirstNotOf('csope', 'q')).toEqual(0);
      expect(findFirstNotOf('gfsmthlkon', 'q')).toEqual(0);
      expect(findFirstNotOf('laenfsbridchgotmkqpj', 'q')).toEqual(0);
    });
  });
});
