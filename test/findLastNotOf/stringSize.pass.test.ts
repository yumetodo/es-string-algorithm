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
    it('stringSize.pass', () => {
      expect(findLastNotof('', '', 0)).toEqual(-1);
      expect(findLastNotof('', 'laenf', 0)).toEqual(-1);
      expect(findLastNotof('', 'pqlnkmbdjo', 0)).toEqual(-1);
      expect(findLastNotof('', 'qkamfogpnljdcshbreti', 0)).toEqual(-1);
      expect(findLastNotof('', '', 1)).toEqual(-1);
      expect(findLastNotof('', 'bjaht', 1)).toEqual(-1);
      expect(findLastNotof('', 'hjlcmgpket', 1)).toEqual(-1);
      expect(findLastNotof('', 'htaobedqikfplcgjsmrn', 1)).toEqual(-1);
      expect(findLastNotof('fodgq', '', 0)).toEqual(0);
      expect(findLastNotof('qanej', 'dfkap', 0)).toEqual(0);
      expect(findLastNotof('clbao', 'ihqrfebgad', 0)).toEqual(0);
      expect(findLastNotof('mekdn', 'ngtjfcalbseiqrphmkdo', 0)).toEqual(-1);
      expect(findLastNotof('srdfq', '', 1)).toEqual(1);
      expect(findLastNotof('oemth', 'ikcrq', 1)).toEqual(1);
      expect(findLastNotof('cdaih', 'dmajblfhsg', 1)).toEqual(0);
      expect(findLastNotof('qohtk', 'oqftjhdmkgsblacenirp', 1)).toEqual(-1);
      expect(findLastNotof('cshmd', '', 2)).toEqual(2);
      expect(findLastNotof('lhcdo', 'oebqi', 2)).toEqual(2);
      expect(findLastNotof('qnsoh', 'kojhpmbsfe', 2)).toEqual(1);
      expect(findLastNotof('pkrof', 'acbsjqogpltdkhinfrem', 2)).toEqual(-1);
      expect(findLastNotof('fmtsp', '', 4)).toEqual(4);
      expect(findLastNotof('khbpm', 'aobjd', 4)).toEqual(4);
      expect(findLastNotof('pbsji', 'pcbahntsje', 4)).toEqual(4);
      expect(findLastNotof('mprdj', 'fhepcrntkoagbmldqijs', 4)).toEqual(-1);
      expect(findLastNotof('eqmpa', '', 5)).toEqual(4);
      expect(findLastNotof('omigs', 'kocgb', 5)).toEqual(4);
      expect(findLastNotof('onmje', 'fbslrjiqkm', 5)).toEqual(4);
      expect(findLastNotof('oqmrj', 'jeidpcmalhfnqbgtrsko', 5)).toEqual(-1);
      expect(findLastNotof('schfa', '', 6)).toEqual(4);
      expect(findLastNotof('igdsc', 'qngpd', 6)).toEqual(4);
      expect(findLastNotof('brqgo', 'rodhqklgmb', 6)).toEqual(-1);
      expect(findLastNotof('tnrph', 'thdjgafrlbkoiqcspmne', 6)).toEqual(-1);
      expect(findLastNotof('hcjitbfapl', '', 0)).toEqual(0);
      expect(findLastNotof('daiprenocl', 'ashjd', 0)).toEqual(-1);
      expect(findLastNotof('litpcfdghe', 'mgojkldsqh', 0)).toEqual(-1);
      expect(findLastNotof('aidjksrolc', 'imqnaghkfrdtlopbjesc', 0)).toEqual(-1);
      expect(findLastNotof('qpghtfbaji', '', 1)).toEqual(1);
      expect(findLastNotof('gfshlcmdjr', 'nadkh', 1)).toEqual(1);
      expect(findLastNotof('nkodajteqp', 'ofdrqmkebl', 1)).toEqual(0);
      expect(findLastNotof('gbmetiprqd', 'bdfjqgatlksriohemnpc', 1)).toEqual(-1);
      expect(findLastNotof('crnklpmegd', '', 5)).toEqual(5);
      expect(findLastNotof('jsbtafedoc', 'prqgn', 5)).toEqual(5);
      expect(findLastNotof('qnmodrtkeb', 'pejafmnokr', 5)).toEqual(4);
      expect(findLastNotof('cpebqsfmnj', 'odnqkgijrhabfmcestlp', 5)).toEqual(-1);
      expect(findLastNotof('lmofqdhpki', '', 9)).toEqual(9);
      expect(findLastNotof('hnefkqimca', 'rtjpa', 9)).toEqual(8);
      expect(findLastNotof('drtasbgmfp', 'ktsrmnqagd', 9)).toEqual(9);
      expect(findLastNotof('lsaijeqhtr', 'rtdhgcisbnmoaqkfpjle', 9)).toEqual(-1);
      expect(findLastNotof('elgofjmbrq', '', 10)).toEqual(9);
      expect(findLastNotof('mjqdgalkpc', 'dplqa', 10)).toEqual(9);
      expect(findLastNotof('kthqnfcerm', 'dkacjoptns', 10)).toEqual(9);
      expect(findLastNotof('dfsjhanorc', 'hqfimtrgnbekpdcsjalo', 10)).toEqual(-1);
      expect(findLastNotof('eqsgalomhb', '', 11)).toEqual(9);
      expect(findLastNotof('akiteljmoh', 'lofbc', 11)).toEqual(9);
      expect(findLastNotof('hlbdfreqjo', 'astoegbfpn', 11)).toEqual(8);
      expect(findLastNotof('taqobhlerg', 'pdgreqomsncafklhtibj', 11)).toEqual(-1);
      expect(findLastNotof('snafbdlghrjkpqtoceim', '', 0)).toEqual(0);
      expect(findLastNotof('aemtbrgcklhndjisfpoq', 'lbtqd', 0)).toEqual(0);
      expect(findLastNotof('pnracgfkjdiholtbqsem', 'tboimldpjh', 0)).toEqual(-1);
      expect(findLastNotof('dicfltehbsgrmojnpkaq', 'slcerthdaiqjfnobgkpm', 0)).toEqual(-1);
      expect(findLastNotof('jlnkraeodhcspfgbqitm', '', 1)).toEqual(1);
      expect(findLastNotof('lhosrngtmfjikbqpcade', 'aqibs', 1)).toEqual(1);
      expect(findLastNotof('rbtaqjhgkneisldpmfoc', 'gtfblmqinc', 1)).toEqual(0);
      expect(findLastNotof('gpifsqlrdkbonjtmheca', 'mkqpbtdalgniorhfescj', 1)).toEqual(-1);
      expect(findLastNotof('hdpkobnsalmcfijregtq', '', 10)).toEqual(10);
      expect(findLastNotof('jtlshdgqaiprkbcoenfm', 'pblas', 10)).toEqual(9);
      expect(findLastNotof('fkdrbqltsgmcoiphneaj', 'arosdhcfme', 10)).toEqual(9);
      expect(findLastNotof('crsplifgtqedjohnabmk', 'blkhjeogicatqfnpdmsr', 10)).toEqual(-1);
      expect(findLastNotof('niptglfbosehkamrdqcj', '', 19)).toEqual(19);
      expect(findLastNotof('copqdhstbingamjfkler', 'djkqc', 19)).toEqual(19);
      expect(findLastNotof('mrtaefilpdsgocnhqbjk', 'lgokshjtpb', 19)).toEqual(16);
      expect(findLastNotof('kojatdhlcmigpbfrqnes', 'bqjhtkfepimcnsgrlado', 19)).toEqual(-1);
      expect(findLastNotof('eaintpchlqsbdgrkjofm', '', 20)).toEqual(19);
      expect(findLastNotof('gjnhidfsepkrtaqbmclo', 'nocfa', 20)).toEqual(18);
      expect(findLastNotof('spocfaktqdbiejlhngmr', 'bgtajmiedc', 20)).toEqual(19);
      expect(findLastNotof('rphmlekgfscndtaobiqj', 'lsckfnqgdahejiopbtmr', 20)).toEqual(-1);
      expect(findLastNotof('liatsqdoegkmfcnbhrpj', '', 21)).toEqual(19);
      expect(findLastNotof('binjagtfldkrspcomqeh', 'gfsrt', 21)).toEqual(19);
      expect(findLastNotof('latkmisecnorjbfhqpdg', 'pfsocbhjtm', 21)).toEqual(19);
      expect(findLastNotof('lecfratdjkhnsmqpoigb', 'tpflmdnoicjgkberhqsa', 21)).toEqual(-1);

      expect(findLastNotof('', '')).toEqual(-1);
      expect(findLastNotof('', 'laenf')).toEqual(-1);
      expect(findLastNotof('', 'pqlnkmbdjo')).toEqual(-1);
      expect(findLastNotof('', 'qkamfogpnljdcshbreti')).toEqual(-1);
      expect(findLastNotof('nhmko', '')).toEqual(4);
      expect(findLastNotof('lahfb', 'irkhs')).toEqual(4);
      expect(findLastNotof('gmfhd', 'kantesmpgj')).toEqual(4);
      expect(findLastNotof('odaft', 'oknlrstdpiqmjbaghcfe')).toEqual(-1);
      expect(findLastNotof('eolhfgpjqk', '')).toEqual(9);
      expect(findLastNotof('nbatdlmekr', 'bnrpe')).toEqual(8);
      expect(findLastNotof('jdmciepkaq', 'jtdaefblso')).toEqual(9);
      expect(findLastNotof('hkbgspoflt', 'oselktgbcapndfjihrmq')).toEqual(-1);
      expect(findLastNotof('gprdcokbnjhlsfmtieqa', '')).toEqual(19);
      expect(findLastNotof('qjghlnftcaismkropdeb', 'bjaht')).toEqual(18);
      expect(findLastNotof('pnalfrdtkqcmojiesbhg', 'hjlcmgpket')).toEqual(17);
      expect(findLastNotof('pniotcfrhqsmgdkjbael', 'htaobedqikfplcgjsmrn')).toEqual(-1);
    });
  });
});
