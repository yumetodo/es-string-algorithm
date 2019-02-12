//===----------------------------------------------------------------------===//
//
// Port from the LLVM Project, under the Apache License v2.0 with LLVM Exceptions.
// See https://llvm.org/LICENSE.txt for license information.
// SPDX-License-Identifier: Apache-2.0 WITH LLVM-exception
//
//===----------------------------------------------------------------------===//
import { findLastof } from '../../src';
describe('findLastof', () => {
  describe('libcxx test', () => {
    it('charSize.pass', () => {
      expect(findLastof('', 'm', 0)).toEqual(-1);
      expect(findLastof('', 'm', 1)).toEqual(-1);
      expect(findLastof('kitcj', 'm', 0)).toEqual(-1);
      expect(findLastof('qkamf', 'm', 1)).toEqual(-1);
      expect(findLastof('nhmko', 'm', 2)).toEqual(2);
      expect(findLastof('tpsaf', 'm', 4)).toEqual(-1);
      expect(findLastof('lahfb', 'm', 5)).toEqual(-1);
      expect(findLastof('irkhs', 'm', 6)).toEqual(-1);
      expect(findLastof('gmfhdaipsr', 'm', 0)).toEqual(-1);
      expect(findLastof('kantesmpgj', 'm', 1)).toEqual(-1);
      expect(findLastof('odaftiegpm', 'm', 5)).toEqual(-1);
      expect(findLastof('oknlrstdpi', 'm', 9)).toEqual(-1);
      expect(findLastof('eolhfgpjqk', 'm', 10)).toEqual(-1);
      expect(findLastof('pcdrofikas', 'm', 11)).toEqual(-1);
      expect(findLastof('nbatdlmekrgcfqsophij', 'm', 0)).toEqual(-1);
      expect(findLastof('bnrpehidofmqtcksjgla', 'm', 1)).toEqual(-1);
      expect(findLastof('jdmciepkaqgotsrfnhlb', 'm', 10)).toEqual(2);
      expect(findLastof('jtdaefblsokrmhpgcnqi', 'm', 19)).toEqual(12);
      expect(findLastof('hkbgspofltajcnedqmri', 'm', 20)).toEqual(17);
      expect(findLastof('oselktgbcapndfjihrmq', 'm', 21)).toEqual(18);

      expect(findLastof('', 'm')).toEqual(-1);
      expect(findLastof('csope', 'm')).toEqual(-1);
      expect(findLastof('gfsmthlkon', 'm')).toEqual(3);
      expect(findLastof('laenfsbridchgotmkqpj', 'm')).toEqual(15);
    });
  });
});
