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
    it('stringSize.pass', () => {
      expect(findLastof('', '', 0)).toEqual(-1);
      expect(findLastof('', 'laenf', 0)).toEqual(-1);
      expect(findLastof('', 'pqlnkmbdjo', 0)).toEqual(-1);
      expect(findLastof('', 'qkamfogpnljdcshbreti', 0)).toEqual(-1);
      expect(findLastof('', '', 1)).toEqual(-1);
      expect(findLastof('', 'bjaht', 1)).toEqual(-1);
      expect(findLastof('', 'hjlcmgpket', 1)).toEqual(-1);
      expect(findLastof('', 'htaobedqikfplcgjsmrn', 1)).toEqual(-1);
      expect(findLastof('fodgq', '', 0)).toEqual(-1);
      expect(findLastof('qanej', 'dfkap', 0)).toEqual(-1);
      expect(findLastof('clbao', 'ihqrfebgad', 0)).toEqual(-1);
      expect(findLastof('mekdn', 'ngtjfcalbseiqrphmkdo', 0)).toEqual(0);
      expect(findLastof('srdfq', '', 1)).toEqual(-1);
      expect(findLastof('oemth', 'ikcrq', 1)).toEqual(-1);
      expect(findLastof('cdaih', 'dmajblfhsg', 1)).toEqual(1);
      expect(findLastof('qohtk', 'oqftjhdmkgsblacenirp', 1)).toEqual(1);
      expect(findLastof('cshmd', '', 2)).toEqual(-1);
      expect(findLastof('lhcdo', 'oebqi', 2)).toEqual(-1);
      expect(findLastof('qnsoh', 'kojhpmbsfe', 2)).toEqual(2);
      expect(findLastof('pkrof', 'acbsjqogpltdkhinfrem', 2)).toEqual(2);
      expect(findLastof('fmtsp', '', 4)).toEqual(-1);
      expect(findLastof('khbpm', 'aobjd', 4)).toEqual(2);
      expect(findLastof('pbsji', 'pcbahntsje', 4)).toEqual(3);
      expect(findLastof('mprdj', 'fhepcrntkoagbmldqijs', 4)).toEqual(4);
      expect(findLastof('eqmpa', '', 5)).toEqual(-1);
      expect(findLastof('omigs', 'kocgb', 5)).toEqual(3);
      expect(findLastof('onmje', 'fbslrjiqkm', 5)).toEqual(3);
      expect(findLastof('oqmrj', 'jeidpcmalhfnqbgtrsko', 5)).toEqual(4);
      expect(findLastof('schfa', '', 6)).toEqual(-1);
      expect(findLastof('igdsc', 'qngpd', 6)).toEqual(2);
      expect(findLastof('brqgo', 'rodhqklgmb', 6)).toEqual(4);
      expect(findLastof('tnrph', 'thdjgafrlbkoiqcspmne', 6)).toEqual(4);
      expect(findLastof('hcjitbfapl', '', 0)).toEqual(-1);
      expect(findLastof('daiprenocl', 'ashjd', 0)).toEqual(0);
      expect(findLastof('litpcfdghe', 'mgojkldsqh', 0)).toEqual(0);
      expect(findLastof('aidjksrolc', 'imqnaghkfrdtlopbjesc', 0)).toEqual(0);
      expect(findLastof('qpghtfbaji', '', 1)).toEqual(-1);
      expect(findLastof('gfshlcmdjr', 'nadkh', 1)).toEqual(-1);
      expect(findLastof('nkodajteqp', 'ofdrqmkebl', 1)).toEqual(1);
      expect(findLastof('gbmetiprqd', 'bdfjqgatlksriohemnpc', 1)).toEqual(1);
      expect(findLastof('crnklpmegd', '', 5)).toEqual(-1);
      expect(findLastof('jsbtafedoc', 'prqgn', 5)).toEqual(-1);
      expect(findLastof('qnmodrtkeb', 'pejafmnokr', 5)).toEqual(5);
      expect(findLastof('cpebqsfmnj', 'odnqkgijrhabfmcestlp', 5)).toEqual(5);
      expect(findLastof('lmofqdhpki', '', 9)).toEqual(-1);
      expect(findLastof('hnefkqimca', 'rtjpa', 9)).toEqual(9);
      expect(findLastof('drtasbgmfp', 'ktsrmnqagd', 9)).toEqual(7);
      expect(findLastof('lsaijeqhtr', 'rtdhgcisbnmoaqkfpjle', 9)).toEqual(9);
      expect(findLastof('elgofjmbrq', '', 10)).toEqual(-1);
      expect(findLastof('mjqdgalkpc', 'dplqa', 10)).toEqual(8);
      expect(findLastof('kthqnfcerm', 'dkacjoptns', 10)).toEqual(6);
      expect(findLastof('dfsjhanorc', 'hqfimtrgnbekpdcsjalo', 10)).toEqual(9);
      expect(findLastof('eqsgalomhb', '', 11)).toEqual(-1);
      expect(findLastof('akiteljmoh', 'lofbc', 11)).toEqual(8);
      expect(findLastof('hlbdfreqjo', 'astoegbfpn', 11)).toEqual(9);
      expect(findLastof('taqobhlerg', 'pdgreqomsncafklhtibj', 11)).toEqual(9);
      expect(findLastof('snafbdlghrjkpqtoceim', '', 0)).toEqual(-1);
      expect(findLastof('aemtbrgcklhndjisfpoq', 'lbtqd', 0)).toEqual(-1);
      expect(findLastof('pnracgfkjdiholtbqsem', 'tboimldpjh', 0)).toEqual(0);
      expect(findLastof('dicfltehbsgrmojnpkaq', 'slcerthdaiqjfnobgkpm', 0)).toEqual(0);
      expect(findLastof('jlnkraeodhcspfgbqitm', '', 1)).toEqual(-1);
      expect(findLastof('lhosrngtmfjikbqpcade', 'aqibs', 1)).toEqual(-1);
      expect(findLastof('rbtaqjhgkneisldpmfoc', 'gtfblmqinc', 1)).toEqual(1);
      expect(findLastof('gpifsqlrdkbonjtmheca', 'mkqpbtdalgniorhfescj', 1)).toEqual(1);
      expect(findLastof('hdpkobnsalmcfijregtq', '', 10)).toEqual(-1);
      expect(findLastof('jtlshdgqaiprkbcoenfm', 'pblas', 10)).toEqual(10);
      expect(findLastof('fkdrbqltsgmcoiphneaj', 'arosdhcfme', 10)).toEqual(10);
      expect(findLastof('crsplifgtqedjohnabmk', 'blkhjeogicatqfnpdmsr', 10)).toEqual(10);
      expect(findLastof('niptglfbosehkamrdqcj', '', 19)).toEqual(-1);
      expect(findLastof('copqdhstbingamjfkler', 'djkqc', 19)).toEqual(16);
      expect(findLastof('mrtaefilpdsgocnhqbjk', 'lgokshjtpb', 19)).toEqual(19);
      expect(findLastof('kojatdhlcmigpbfrqnes', 'bqjhtkfepimcnsgrlado', 19)).toEqual(19);
      expect(findLastof('eaintpchlqsbdgrkjofm', '', 20)).toEqual(-1);
      expect(findLastof('gjnhidfsepkrtaqbmclo', 'nocfa', 20)).toEqual(19);
      expect(findLastof('spocfaktqdbiejlhngmr', 'bgtajmiedc', 20)).toEqual(18);
      expect(findLastof('rphmlekgfscndtaobiqj', 'lsckfnqgdahejiopbtmr', 20)).toEqual(19);
      expect(findLastof('liatsqdoegkmfcnbhrpj', '', 21)).toEqual(-1);
      expect(findLastof('binjagtfldkrspcomqeh', 'gfsrt', 21)).toEqual(12);
      expect(findLastof('latkmisecnorjbfhqpdg', 'pfsocbhjtm', 21)).toEqual(17);
      expect(findLastof('lecfratdjkhnsmqpoigb', 'tpflmdnoicjgkberhqsa', 21)).toEqual(19);

      expect(findLastof('', '')).toEqual(-1);
      expect(findLastof('', 'laenf')).toEqual(-1);
      expect(findLastof('', 'pqlnkmbdjo')).toEqual(-1);
      expect(findLastof('', 'qkamfogpnljdcshbreti')).toEqual(-1);
      expect(findLastof('nhmko', '')).toEqual(-1);
      expect(findLastof('lahfb', 'irkhs')).toEqual(2);
      expect(findLastof('gmfhd', 'kantesmpgj')).toEqual(1);
      expect(findLastof('odaft', 'oknlrstdpiqmjbaghcfe')).toEqual(4);
      expect(findLastof('eolhfgpjqk', '')).toEqual(-1);
      expect(findLastof('nbatdlmekr', 'bnrpe')).toEqual(9);
      expect(findLastof('jdmciepkaq', 'jtdaefblso')).toEqual(8);
      expect(findLastof('hkbgspoflt', 'oselktgbcapndfjihrmq')).toEqual(9);
      expect(findLastof('gprdcokbnjhlsfmtieqa', '')).toEqual(-1);
      expect(findLastof('qjghlnftcaismkropdeb', 'bjaht')).toEqual(19);
      expect(findLastof('pnalfrdtkqcmojiesbhg', 'hjlcmgpket')).toEqual(19);
      expect(findLastof('pniotcfrhqsmgdkjbael', 'htaobedqikfplcgjsmrn')).toEqual(19);
    });
  });
});
