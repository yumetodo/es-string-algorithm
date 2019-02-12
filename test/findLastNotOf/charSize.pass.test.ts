//===----------------------------------------------------------------------===//
//
// Port from the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//
import { findLastNotof } from '../../src';
describe('findLastNotof', () => {
  describe('libcxx test', () => {
    it('charSize.pass', () => {
      expect(findLastNotof('', 'i', 0)).toEqual(-1);
      expect(findLastNotof('', 'i', 1)).toEqual(-1);
      expect(findLastNotof('kitcj', 'i', 0)).toEqual(0);
      expect(findLastNotof('qkamf', 'i', 1)).toEqual(1);
      expect(findLastNotof('nhmko', 'i', 2)).toEqual(2);
      expect(findLastNotof('tpsaf', 'i', 4)).toEqual(4);
      expect(findLastNotof('lahfb', 'i', 5)).toEqual(4);
      expect(findLastNotof('irkhs', 'i', 6)).toEqual(4);
      expect(findLastNotof('gmfhdaipsr', 'i', 0)).toEqual(0);
      expect(findLastNotof('kantesmpgj', 'i', 1)).toEqual(1);
      expect(findLastNotof('odaftiegpm', 'i', 5)).toEqual(4);
      expect(findLastNotof('oknlrstdpi', 'i', 9)).toEqual(8);
      expect(findLastNotof('eolhfgpjqk', 'i', 10)).toEqual(9);
      expect(findLastNotof('pcdrofikas', 'i', 11)).toEqual(9);
      expect(findLastNotof('nbatdlmekrgcfqsophij', 'i', 0)).toEqual(0);
      expect(findLastNotof('bnrpehidofmqtcksjgla', 'i', 1)).toEqual(1);
      expect(findLastNotof('jdmciepkaqgotsrfnhlb', 'i', 10)).toEqual(10);
      expect(findLastNotof('jtdaefblsokrmhpgcnqi', 'i', 19)).toEqual(18);
      expect(findLastNotof('hkbgspofltajcnedqmri', 'i', 20)).toEqual(18);
      expect(findLastNotof('oselktgbcapndfjihrmq', 'i', 21)).toEqual(19);

      expect(findLastNotof('', 'i')).toEqual(-1);
      expect(findLastNotof('csope', 'i')).toEqual(4);
      expect(findLastNotof('gfsmthlkon', 'i')).toEqual(9);
      expect(findLastNotof('laenfsbridchgotmkqpj', 'i')).toEqual(19);
    });
  });
});
