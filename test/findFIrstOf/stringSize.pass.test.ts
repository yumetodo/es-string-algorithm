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
    it('stringSize.pass', () => {
      expect(findFirstOf('', '', 0)).toEqual(-1);
      expect(findFirstOf('', 'laenf', 0)).toEqual(-1);
      expect(findFirstOf('', 'pqlnkmbdjo', 0)).toEqual(-1);
      expect(findFirstOf('', 'qkamfogpnljdcshbreti', 0)).toEqual(-1);
      expect(findFirstOf('', '', 1)).toEqual(-1);
      expect(findFirstOf('', 'bjaht', 1)).toEqual(-1);
      expect(findFirstOf('', 'hjlcmgpket', 1)).toEqual(-1);
      expect(findFirstOf('', 'htaobedqikfplcgjsmrn', 1)).toEqual(-1);
      expect(findFirstOf('fodgq', '', 0)).toEqual(-1);
      expect(findFirstOf('qanej', 'dfkap', 0)).toEqual(1);
      expect(findFirstOf('clbao', 'ihqrfebgad', 0)).toEqual(2);
      expect(findFirstOf('mekdn', 'ngtjfcalbseiqrphmkdo', 0)).toEqual(0);
      expect(findFirstOf('srdfq', '', 1)).toEqual(-1);
      expect(findFirstOf('oemth', 'ikcrq', 1)).toEqual(-1);
      expect(findFirstOf('cdaih', 'dmajblfhsg', 1)).toEqual(1);
      expect(findFirstOf('qohtk', 'oqftjhdmkgsblacenirp', 1)).toEqual(1);
      expect(findFirstOf('cshmd', '', 2)).toEqual(-1);
      expect(findFirstOf('lhcdo', 'oebqi', 2)).toEqual(4);
      expect(findFirstOf('qnsoh', 'kojhpmbsfe', 2)).toEqual(2);
      expect(findFirstOf('pkrof', 'acbsjqogpltdkhinfrem', 2)).toEqual(2);
      expect(findFirstOf('fmtsp', '', 4)).toEqual(-1);
      expect(findFirstOf('khbpm', 'aobjd', 4)).toEqual(-1);
      expect(findFirstOf('pbsji', 'pcbahntsje', 4)).toEqual(-1);
      expect(findFirstOf('mprdj', 'fhepcrntkoagbmldqijs', 4)).toEqual(4);
      expect(findFirstOf('eqmpa', '', 5)).toEqual(-1);
      expect(findFirstOf('omigs', 'kocgb', 5)).toEqual(-1);
      expect(findFirstOf('onmje', 'fbslrjiqkm', 5)).toEqual(-1);
      expect(findFirstOf('oqmrj', 'jeidpcmalhfnqbgtrsko', 5)).toEqual(-1);
      expect(findFirstOf('schfa', '', 6)).toEqual(-1);
      expect(findFirstOf('igdsc', 'qngpd', 6)).toEqual(-1);
      expect(findFirstOf('brqgo', 'rodhqklgmb', 6)).toEqual(-1);
      expect(findFirstOf('tnrph', 'thdjgafrlbkoiqcspmne', 6)).toEqual(-1);
      expect(findFirstOf('hcjitbfapl', '', 0)).toEqual(-1);
      expect(findFirstOf('daiprenocl', 'ashjd', 0)).toEqual(0);
      expect(findFirstOf('litpcfdghe', 'mgojkldsqh', 0)).toEqual(0);
      expect(findFirstOf('aidjksrolc', 'imqnaghkfrdtlopbjesc', 0)).toEqual(0);
      expect(findFirstOf('qpghtfbaji', '', 1)).toEqual(-1);
      expect(findFirstOf('gfshlcmdjr', 'nadkh', 1)).toEqual(3);
      expect(findFirstOf('nkodajteqp', 'ofdrqmkebl', 1)).toEqual(1);
      expect(findFirstOf('gbmetiprqd', 'bdfjqgatlksriohemnpc', 1)).toEqual(1);
      expect(findFirstOf('crnklpmegd', '', 5)).toEqual(-1);
      expect(findFirstOf('jsbtafedoc', 'prqgn', 5)).toEqual(-1);
      expect(findFirstOf('qnmodrtkeb', 'pejafmnokr', 5)).toEqual(5);
      expect(findFirstOf('cpebqsfmnj', 'odnqkgijrhabfmcestlp', 5)).toEqual(5);
      expect(findFirstOf('lmofqdhpki', '', 9)).toEqual(-1);
      expect(findFirstOf('hnefkqimca', 'rtjpa', 9)).toEqual(9);
      expect(findFirstOf('drtasbgmfp', 'ktsrmnqagd', 9)).toEqual(-1);
      expect(findFirstOf('lsaijeqhtr', 'rtdhgcisbnmoaqkfpjle', 9)).toEqual(9);
      expect(findFirstOf('elgofjmbrq', '', 10)).toEqual(-1);
      expect(findFirstOf('mjqdgalkpc', 'dplqa', 10)).toEqual(-1);
      expect(findFirstOf('kthqnfcerm', 'dkacjoptns', 10)).toEqual(-1);
      expect(findFirstOf('dfsjhanorc', 'hqfimtrgnbekpdcsjalo', 10)).toEqual(-1);
      expect(findFirstOf('eqsgalomhb', '', 11)).toEqual(-1);
      expect(findFirstOf('akiteljmoh', 'lofbc', 11)).toEqual(-1);
      expect(findFirstOf('hlbdfreqjo', 'astoegbfpn', 11)).toEqual(-1);
      expect(findFirstOf('taqobhlerg', 'pdgreqomsncafklhtibj', 11)).toEqual(-1);
      expect(findFirstOf('snafbdlghrjkpqtoceim', '', 0)).toEqual(-1);
      expect(findFirstOf('aemtbrgcklhndjisfpoq', 'lbtqd', 0)).toEqual(3);
      expect(findFirstOf('pnracgfkjdiholtbqsem', 'tboimldpjh', 0)).toEqual(0);
      expect(findFirstOf('dicfltehbsgrmojnpkaq', 'slcerthdaiqjfnobgkpm', 0)).toEqual(0);
      expect(findFirstOf('jlnkraeodhcspfgbqitm', '', 1)).toEqual(-1);
      expect(findFirstOf('lhosrngtmfjikbqpcade', 'aqibs', 1)).toEqual(3);
      expect(findFirstOf('rbtaqjhgkneisldpmfoc', 'gtfblmqinc', 1)).toEqual(1);
      expect(findFirstOf('gpifsqlrdkbonjtmheca', 'mkqpbtdalgniorhfescj', 1)).toEqual(1);
      expect(findFirstOf('hdpkobnsalmcfijregtq', '', 10)).toEqual(-1);
      expect(findFirstOf('jtlshdgqaiprkbcoenfm', 'pblas', 10)).toEqual(10);
      expect(findFirstOf('fkdrbqltsgmcoiphneaj', 'arosdhcfme', 10)).toEqual(10);
      expect(findFirstOf('crsplifgtqedjohnabmk', 'blkhjeogicatqfnpdmsr', 10)).toEqual(10);
      expect(findFirstOf('niptglfbosehkamrdqcj', '', 19)).toEqual(-1);
      expect(findFirstOf('copqdhstbingamjfkler', 'djkqc', 19)).toEqual(-1);
      expect(findFirstOf('mrtaefilpdsgocnhqbjk', 'lgokshjtpb', 19)).toEqual(19);
      expect(findFirstOf('kojatdhlcmigpbfrqnes', 'bqjhtkfepimcnsgrlado', 19)).toEqual(19);
      expect(findFirstOf('eaintpchlqsbdgrkjofm', '', 20)).toEqual(-1);
      expect(findFirstOf('gjnhidfsepkrtaqbmclo', 'nocfa', 20)).toEqual(-1);
      expect(findFirstOf('spocfaktqdbiejlhngmr', 'bgtajmiedc', 20)).toEqual(-1);
      expect(findFirstOf('rphmlekgfscndtaobiqj', 'lsckfnqgdahejiopbtmr', 20)).toEqual(-1);
      expect(findFirstOf('liatsqdoegkmfcnbhrpj', '', 21)).toEqual(-1);
      expect(findFirstOf('binjagtfldkrspcomqeh', 'gfsrt', 21)).toEqual(-1);
      expect(findFirstOf('latkmisecnorjbfhqpdg', 'pfsocbhjtm', 21)).toEqual(-1);
      expect(findFirstOf('lecfratdjkhnsmqpoigb', 'tpflmdnoicjgkberhqsa', 21)).toEqual(-1);

      expect(findFirstOf('', '')).toEqual(-1);
      expect(findFirstOf('', 'laenf')).toEqual(-1);
      expect(findFirstOf('', 'pqlnkmbdjo')).toEqual(-1);
      expect(findFirstOf('', 'qkamfogpnljdcshbreti')).toEqual(-1);
      expect(findFirstOf('nhmko', '')).toEqual(-1);
      expect(findFirstOf('lahfb', 'irkhs')).toEqual(2);
      expect(findFirstOf('gmfhd', 'kantesmpgj')).toEqual(0);
      expect(findFirstOf('odaft', 'oknlrstdpiqmjbaghcfe')).toEqual(0);
      expect(findFirstOf('eolhfgpjqk', '')).toEqual(-1);
      expect(findFirstOf('nbatdlmekr', 'bnrpe')).toEqual(0);
      expect(findFirstOf('jdmciepkaq', 'jtdaefblso')).toEqual(0);
      expect(findFirstOf('hkbgspoflt', 'oselktgbcapndfjihrmq')).toEqual(0);
      expect(findFirstOf('gprdcokbnjhlsfmtieqa', '')).toEqual(-1);
      expect(findFirstOf('qjghlnftcaismkropdeb', 'bjaht')).toEqual(1);
      expect(findFirstOf('pnalfrdtkqcmojiesbhg', 'hjlcmgpket')).toEqual(0);
      expect(findFirstOf('pniotcfrhqsmgdkjbael', 'htaobedqikfplcgjsmrn')).toEqual(0);
    });
  });
});
