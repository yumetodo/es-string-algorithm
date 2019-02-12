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
    it('stringSize.pass', () => {
      expect(findFirstNotOf('', '', 0)).toEqual(-1);
      expect(findFirstNotOf('', 'laenf', 0)).toEqual(-1);
      expect(findFirstNotOf('', 'pqlnkmbdjo', 0)).toEqual(-1);
      expect(findFirstNotOf('', 'qkamfogpnljdcshbreti', 0)).toEqual(-1);
      expect(findFirstNotOf('', '', 1)).toEqual(-1);
      expect(findFirstNotOf('', 'bjaht', 1)).toEqual(-1);
      expect(findFirstNotOf('', 'hjlcmgpket', 1)).toEqual(-1);
      expect(findFirstNotOf('', 'htaobedqikfplcgjsmrn', 1)).toEqual(-1);
      expect(findFirstNotOf('fodgq', '', 0)).toEqual(0);
      expect(findFirstNotOf('qanej', 'dfkap', 0)).toEqual(0);
      expect(findFirstNotOf('clbao', 'ihqrfebgad', 0)).toEqual(0);
      expect(findFirstNotOf('mekdn', 'ngtjfcalbseiqrphmkdo', 0)).toEqual(-1);
      expect(findFirstNotOf('srdfq', '', 1)).toEqual(1);
      expect(findFirstNotOf('oemth', 'ikcrq', 1)).toEqual(1);
      expect(findFirstNotOf('cdaih', 'dmajblfhsg', 1)).toEqual(3);
      expect(findFirstNotOf('qohtk', 'oqftjhdmkgsblacenirp', 1)).toEqual(-1);
      expect(findFirstNotOf('cshmd', '', 2)).toEqual(2);
      expect(findFirstNotOf('lhcdo', 'oebqi', 2)).toEqual(2);
      expect(findFirstNotOf('qnsoh', 'kojhpmbsfe', 2)).toEqual(-1);
      expect(findFirstNotOf('pkrof', 'acbsjqogpltdkhinfrem', 2)).toEqual(-1);
      expect(findFirstNotOf('fmtsp', '', 4)).toEqual(4);
      expect(findFirstNotOf('khbpm', 'aobjd', 4)).toEqual(4);
      expect(findFirstNotOf('pbsji', 'pcbahntsje', 4)).toEqual(4);
      expect(findFirstNotOf('mprdj', 'fhepcrntkoagbmldqijs', 4)).toEqual(-1);
      expect(findFirstNotOf('eqmpa', '', 5)).toEqual(-1);
      expect(findFirstNotOf('omigs', 'kocgb', 5)).toEqual(-1);
      expect(findFirstNotOf('onmje', 'fbslrjiqkm', 5)).toEqual(-1);
      expect(findFirstNotOf('oqmrj', 'jeidpcmalhfnqbgtrsko', 5)).toEqual(-1);
      expect(findFirstNotOf('schfa', '', 6)).toEqual(-1);
      expect(findFirstNotOf('igdsc', 'qngpd', 6)).toEqual(-1);
      expect(findFirstNotOf('brqgo', 'rodhqklgmb', 6)).toEqual(-1);
      expect(findFirstNotOf('tnrph', 'thdjgafrlbkoiqcspmne', 6)).toEqual(-1);
      expect(findFirstNotOf('hcjitbfapl', '', 0)).toEqual(0);
      expect(findFirstNotOf('daiprenocl', 'ashjd', 0)).toEqual(2);
      expect(findFirstNotOf('litpcfdghe', 'mgojkldsqh', 0)).toEqual(1);
      expect(findFirstNotOf('aidjksrolc', 'imqnaghkfrdtlopbjesc', 0)).toEqual(-1);
      expect(findFirstNotOf('qpghtfbaji', '', 1)).toEqual(1);
      expect(findFirstNotOf('gfshlcmdjr', 'nadkh', 1)).toEqual(1);
      expect(findFirstNotOf('nkodajteqp', 'ofdrqmkebl', 1)).toEqual(4);
      expect(findFirstNotOf('gbmetiprqd', 'bdfjqgatlksriohemnpc', 1)).toEqual(-1);
      expect(findFirstNotOf('crnklpmegd', '', 5)).toEqual(5);
      expect(findFirstNotOf('jsbtafedoc', 'prqgn', 5)).toEqual(5);
      expect(findFirstNotOf('qnmodrtkeb', 'pejafmnokr', 5)).toEqual(6);
      expect(findFirstNotOf('cpebqsfmnj', 'odnqkgijrhabfmcestlp', 5)).toEqual(-1);
      expect(findFirstNotOf('lmofqdhpki', '', 9)).toEqual(9);
      expect(findFirstNotOf('hnefkqimca', 'rtjpa', 9)).toEqual(-1);
      expect(findFirstNotOf('drtasbgmfp', 'ktsrmnqagd', 9)).toEqual(9);
      expect(findFirstNotOf('lsaijeqhtr', 'rtdhgcisbnmoaqkfpjle', 9)).toEqual(-1);
      expect(findFirstNotOf('elgofjmbrq', '', 10)).toEqual(-1);
      expect(findFirstNotOf('mjqdgalkpc', 'dplqa', 10)).toEqual(-1);
      expect(findFirstNotOf('kthqnfcerm', 'dkacjoptns', 10)).toEqual(-1);
      expect(findFirstNotOf('dfsjhanorc', 'hqfimtrgnbekpdcsjalo', 10)).toEqual(-1);
      expect(findFirstNotOf('eqsgalomhb', '', 11)).toEqual(-1);
      expect(findFirstNotOf('akiteljmoh', 'lofbc', 11)).toEqual(-1);
      expect(findFirstNotOf('hlbdfreqjo', 'astoegbfpn', 11)).toEqual(-1);
      expect(findFirstNotOf('taqobhlerg', 'pdgreqomsncafklhtibj', 11)).toEqual(-1);
      expect(findFirstNotOf('snafbdlghrjkpqtoceim', '', 0)).toEqual(0);
      expect(findFirstNotOf('aemtbrgcklhndjisfpoq', 'lbtqd', 0)).toEqual(0);
      expect(findFirstNotOf('pnracgfkjdiholtbqsem', 'tboimldpjh', 0)).toEqual(1);
      expect(findFirstNotOf('dicfltehbsgrmojnpkaq', 'slcerthdaiqjfnobgkpm', 0)).toEqual(-1);
      expect(findFirstNotOf('jlnkraeodhcspfgbqitm', '', 1)).toEqual(1);
      expect(findFirstNotOf('lhosrngtmfjikbqpcade', 'aqibs', 1)).toEqual(1);
      expect(findFirstNotOf('rbtaqjhgkneisldpmfoc', 'gtfblmqinc', 1)).toEqual(3);
      expect(findFirstNotOf('gpifsqlrdkbonjtmheca', 'mkqpbtdalgniorhfescj', 1)).toEqual(-1);
      expect(findFirstNotOf('hdpkobnsalmcfijregtq', '', 10)).toEqual(10);
      expect(findFirstNotOf('jtlshdgqaiprkbcoenfm', 'pblas', 10)).toEqual(11);
      expect(findFirstNotOf('fkdrbqltsgmcoiphneaj', 'arosdhcfme', 10)).toEqual(13);
      expect(findFirstNotOf('crsplifgtqedjohnabmk', 'blkhjeogicatqfnpdmsr', 10)).toEqual(-1);
      expect(findFirstNotOf('niptglfbosehkamrdqcj', '', 19)).toEqual(19);
      expect(findFirstNotOf('copqdhstbingamjfkler', 'djkqc', 19)).toEqual(19);
      expect(findFirstNotOf('mrtaefilpdsgocnhqbjk', 'lgokshjtpb', 19)).toEqual(-1);
      expect(findFirstNotOf('kojatdhlcmigpbfrqnes', 'bqjhtkfepimcnsgrlado', 19)).toEqual(-1);
      expect(findFirstNotOf('eaintpchlqsbdgrkjofm', '', 20)).toEqual(-1);
      expect(findFirstNotOf('gjnhidfsepkrtaqbmclo', 'nocfa', 20)).toEqual(-1);
      expect(findFirstNotOf('spocfaktqdbiejlhngmr', 'bgtajmiedc', 20)).toEqual(-1);
      expect(findFirstNotOf('rphmlekgfscndtaobiqj', 'lsckfnqgdahejiopbtmr', 20)).toEqual(-1);
      expect(findFirstNotOf('liatsqdoegkmfcnbhrpj', '', 21)).toEqual(-1);
      expect(findFirstNotOf('binjagtfldkrspcomqeh', 'gfsrt', 21)).toEqual(-1);
      expect(findFirstNotOf('latkmisecnorjbfhqpdg', 'pfsocbhjtm', 21)).toEqual(-1);
      expect(findFirstNotOf('lecfratdjkhnsmqpoigb', 'tpflmdnoicjgkberhqsa', 21)).toEqual(-1);

      expect(findFirstNotOf('', '')).toEqual(-1);
      expect(findFirstNotOf('', 'laenf')).toEqual(-1);
      expect(findFirstNotOf('', 'pqlnkmbdjo')).toEqual(-1);
      expect(findFirstNotOf('', 'qkamfogpnljdcshbreti')).toEqual(-1);
      expect(findFirstNotOf('nhmko', '')).toEqual(0);
      expect(findFirstNotOf('lahfb', 'irkhs')).toEqual(0);
      expect(findFirstNotOf('gmfhd', 'kantesmpgj')).toEqual(2);
      expect(findFirstNotOf('odaft', 'oknlrstdpiqmjbaghcfe')).toEqual(-1);
      expect(findFirstNotOf('eolhfgpjqk', '')).toEqual(0);
      expect(findFirstNotOf('nbatdlmekr', 'bnrpe')).toEqual(2);
      expect(findFirstNotOf('jdmciepkaq', 'jtdaefblso')).toEqual(2);
      expect(findFirstNotOf('hkbgspoflt', 'oselktgbcapndfjihrmq')).toEqual(-1);
      expect(findFirstNotOf('gprdcokbnjhlsfmtieqa', '')).toEqual(0);
      expect(findFirstNotOf('qjghlnftcaismkropdeb', 'bjaht')).toEqual(0);
      expect(findFirstNotOf('pnalfrdtkqcmojiesbhg', 'hjlcmgpket')).toEqual(1);
      expect(findFirstNotOf('pniotcfrhqsmgdkjbael', 'htaobedqikfplcgjsmrn')).toEqual(-1);
    });
  });
});
