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
    it('pointerSizeSize.pass', () => {
      expect(findFirstNotOf('', '', 0, 0)).toEqual(-1);
      expect(findFirstNotOf('', 'irkhs', 0, 0)).toEqual(-1);
      expect(findFirstNotOf('', 'kante', 0, 1)).toEqual(-1);
      expect(findFirstNotOf('', 'oknlr', 0, 2)).toEqual(-1);
      expect(findFirstNotOf('', 'pcdro', 0, 4)).toEqual(-1);
      expect(findFirstNotOf('', 'bnrpe', 0, 5)).toEqual(-1);
      expect(findFirstNotOf('', 'jtdaefblso', 0, 0)).toEqual(-1);
      expect(findFirstNotOf('', 'oselktgbca', 0, 1)).toEqual(-1);
      expect(findFirstNotOf('', 'eqgaplhckj', 0, 5)).toEqual(-1);
      expect(findFirstNotOf('', 'bjahtcmnlp', 0, 9)).toEqual(-1);
      expect(findFirstNotOf('', 'hjlcmgpket', 0, 10)).toEqual(-1);
      expect(findFirstNotOf('', 'htaobedqikfplcgjsmrn', 0, 0)).toEqual(-1);
      expect(findFirstNotOf('', 'hpqiarojkcdlsgnmfetb', 0, 1)).toEqual(-1);
      expect(findFirstNotOf('', 'dfkaprhjloqetcsimnbg', 0, 10)).toEqual(-1);
      expect(findFirstNotOf('', 'ihqrfebgadntlpmjksoc', 0, 19)).toEqual(-1);
      expect(findFirstNotOf('', 'ngtjfcalbseiqrphmkdo', 0, 20)).toEqual(-1);
      expect(findFirstNotOf('', '', 1, 0)).toEqual(-1);
      expect(findFirstNotOf('', 'lbtqd', 1, 0)).toEqual(-1);
      expect(findFirstNotOf('', 'tboim', 1, 1)).toEqual(-1);
      expect(findFirstNotOf('', 'slcer', 1, 2)).toEqual(-1);
      expect(findFirstNotOf('', 'cbjfs', 1, 4)).toEqual(-1);
      expect(findFirstNotOf('', 'aqibs', 1, 5)).toEqual(-1);
      expect(findFirstNotOf('', 'gtfblmqinc', 1, 0)).toEqual(-1);
      expect(findFirstNotOf('', 'mkqpbtdalg', 1, 1)).toEqual(-1);
      expect(findFirstNotOf('', 'kphatlimcd', 1, 5)).toEqual(-1);
      expect(findFirstNotOf('', 'pblasqogic', 1, 9)).toEqual(-1);
      expect(findFirstNotOf('', 'arosdhcfme', 1, 10)).toEqual(-1);
      expect(findFirstNotOf('', 'blkhjeogicatqfnpdmsr', 1, 0)).toEqual(-1);
      expect(findFirstNotOf('', 'bmhineprjcoadgstflqk', 1, 1)).toEqual(-1);
      expect(findFirstNotOf('', 'djkqcmetslnghpbarfoi', 1, 10)).toEqual(-1);
      expect(findFirstNotOf('', 'lgokshjtpbemarcdqnfi', 1, 19)).toEqual(-1);
      expect(findFirstNotOf('', 'bqjhtkfepimcnsgrlado', 1, 20)).toEqual(-1);
      expect(findFirstNotOf('eaint', '', 0, 0)).toEqual(0);
      expect(findFirstNotOf('binja', 'gfsrt', 0, 0)).toEqual(0);
      expect(findFirstNotOf('latkm', 'pfsoc', 0, 1)).toEqual(0);
      expect(findFirstNotOf('lecfr', 'tpflm', 0, 2)).toEqual(0);
      expect(findFirstNotOf('eqkst', 'sgkec', 0, 4)).toEqual(1);
      expect(findFirstNotOf('cdafr', 'romds', 0, 5)).toEqual(0);
      expect(findFirstNotOf('prbhe', 'qhjistlgmr', 0, 0)).toEqual(0);
      expect(findFirstNotOf('lbisk', 'pedfirsglo', 0, 1)).toEqual(0);
      expect(findFirstNotOf('hrlpd', 'aqcoslgrmk', 0, 5)).toEqual(0);
      expect(findFirstNotOf('ehmja', 'dabckmepqj', 0, 9)).toEqual(1);
      expect(findFirstNotOf('mhqgd', 'pqscrjthli', 0, 10)).toEqual(0);
      expect(findFirstNotOf('tgklq', 'kfphdcsjqmobliagtren', 0, 0)).toEqual(0);
      expect(findFirstNotOf('bocjs', 'rokpefncljibsdhqtagm', 0, 1)).toEqual(0);
      expect(findFirstNotOf('grbsd', 'afionmkphlebtcjqsgrd', 0, 10)).toEqual(0);
      expect(findFirstNotOf('ofjqr', 'aenmqplidhkofrjbctsg', 0, 19)).toEqual(-1);
      expect(findFirstNotOf('btlfi', 'osjmbtcadhiklegrpqnf', 0, 20)).toEqual(-1);
      expect(findFirstNotOf('clrgb', '', 1, 0)).toEqual(1);
      expect(findFirstNotOf('tjmek', 'osmia', 1, 0)).toEqual(1);
      expect(findFirstNotOf('bgstp', 'ckonl', 1, 1)).toEqual(1);
      expect(findFirstNotOf('hstrk', 'ilcaj', 1, 2)).toEqual(1);
      expect(findFirstNotOf('kmspj', 'lasiq', 1, 4)).toEqual(1);
      expect(findFirstNotOf('tjboh', 'kfqmr', 1, 5)).toEqual(1);
      expect(findFirstNotOf('ilbcj', 'klnitfaobg', 1, 0)).toEqual(1);
      expect(findFirstNotOf('jkngf', 'gjhmdlqikp', 1, 1)).toEqual(1);
      expect(findFirstNotOf('gfcql', 'skbgtahqej', 1, 5)).toEqual(1);
      expect(findFirstNotOf('dqtlg', 'bjsdgtlpkf', 1, 9)).toEqual(1);
      expect(findFirstNotOf('bthpg', 'bjgfmnlkio', 1, 10)).toEqual(1);
      expect(findFirstNotOf('dgsnq', 'lbhepotfsjdqigcnamkr', 1, 0)).toEqual(1);
      expect(findFirstNotOf('rmfhp', 'tebangckmpsrqdlfojhi', 1, 1)).toEqual(1);
      expect(findFirstNotOf('jfdam', 'joflqbdkhtegimscpanr', 1, 10)).toEqual(3);
      expect(findFirstNotOf('edapb', 'adpmcohetfbsrjinlqkg', 1, 19)).toEqual(-1);
      expect(findFirstNotOf('brfsm', 'iacldqjpfnogbsrhmetk', 1, 20)).toEqual(-1);
      expect(findFirstNotOf('ndrhl', '', 2, 0)).toEqual(2);
      expect(findFirstNotOf('mrecp', 'otkgb', 2, 0)).toEqual(2);
      expect(findFirstNotOf('qlasf', 'cqsjl', 2, 1)).toEqual(2);
      expect(findFirstNotOf('smaqd', 'dpifl', 2, 2)).toEqual(2);
      expect(findFirstNotOf('hjeni', 'oapht', 2, 4)).toEqual(2);
      expect(findFirstNotOf('ocmfj', 'cifts', 2, 5)).toEqual(2);
      expect(findFirstNotOf('hmftq', 'nmsckbgalo', 2, 0)).toEqual(2);
      expect(findFirstNotOf('fklad', 'tpksqhamle', 2, 1)).toEqual(2);
      expect(findFirstNotOf('dirnm', 'tpdrchmkji', 2, 5)).toEqual(3);
      expect(findFirstNotOf('hrgdc', 'ijagfkblst', 2, 9)).toEqual(3);
      expect(findFirstNotOf('ifakg', 'kpocsignjb', 2, 10)).toEqual(2);
      expect(findFirstNotOf('ebrgd', 'pecqtkjsnbdrialgmohf', 2, 0)).toEqual(2);
      expect(findFirstNotOf('rcjml', 'aiortphfcmkjebgsndql', 2, 1)).toEqual(2);
      expect(findFirstNotOf('peqmt', 'sdbkeamglhipojqftrcn', 2, 10)).toEqual(2);
      expect(findFirstNotOf('frehn', 'ljqncehgmfktroapidbs', 2, 19)).toEqual(-1);
      expect(findFirstNotOf('tqolf', 'rtcfodilamkbenjghqps', 2, 20)).toEqual(-1);
      expect(findFirstNotOf('cjgao', '', 4, 0)).toEqual(4);
      expect(findFirstNotOf('kjplq', 'mabns', 4, 0)).toEqual(4);
      expect(findFirstNotOf('herni', 'bdnrp', 4, 1)).toEqual(4);
      expect(findFirstNotOf('tadrb', 'scidp', 4, 2)).toEqual(4);
      expect(findFirstNotOf('pkfeo', 'agbjl', 4, 4)).toEqual(4);
      expect(findFirstNotOf('hoser', 'jfmpr', 4, 5)).toEqual(-1);
      expect(findFirstNotOf('kgrsp', 'rbpefghsmj', 4, 0)).toEqual(4);
      expect(findFirstNotOf('pgejb', 'apsfntdoqc', 4, 1)).toEqual(4);
      expect(findFirstNotOf('thlnq', 'ndkjeisgcl', 4, 5)).toEqual(4);
      expect(findFirstNotOf('nbmit', 'rnfpqatdeo', 4, 9)).toEqual(-1);
      expect(findFirstNotOf('jgmib', 'bntjlqrfik', 4, 10)).toEqual(-1);
      expect(findFirstNotOf('ncrfj', 'kcrtmpolnaqejghsfdbi', 4, 0)).toEqual(4);
      expect(findFirstNotOf('ncsik', 'lobheanpkmqidsrtcfgj', 4, 1)).toEqual(4);
      expect(findFirstNotOf('sgbfh', 'athdkljcnreqbgpmisof', 4, 10)).toEqual(-1);
      expect(findFirstNotOf('dktbn', 'qkdmjialrscpbhefgont', 4, 19)).toEqual(-1);
      expect(findFirstNotOf('fthqm', 'dmasojntqleribkgfchp', 4, 20)).toEqual(-1);
      expect(findFirstNotOf('klopi', '', 5, 0)).toEqual(-1);
      expect(findFirstNotOf('dajhn', 'psthd', 5, 0)).toEqual(-1);
      expect(findFirstNotOf('jbgno', 'rpmjd', 5, 1)).toEqual(-1);
      expect(findFirstNotOf('hkjae', 'dfsmk', 5, 2)).toEqual(-1);

      expect(findFirstNotOf('gbhqo', 'skqne', 5, 4)).toEqual(-1);
      expect(findFirstNotOf('ktdor', 'kipnf', 5, 5)).toEqual(-1);
      expect(findFirstNotOf('ldprn', 'hmrnqdgifl', 5, 0)).toEqual(-1);
      expect(findFirstNotOf('egmjk', 'fsmjcdairn', 5, 1)).toEqual(-1);
      expect(findFirstNotOf('armql', 'pcdgltbrfj', 5, 5)).toEqual(-1);
      expect(findFirstNotOf('cdhjo', 'aekfctpirg', 5, 9)).toEqual(-1);
      expect(findFirstNotOf('jcons', 'ledihrsgpf', 5, 10)).toEqual(-1);
      expect(findFirstNotOf('cbrkp', 'mqcklahsbtirgopefndj', 5, 0)).toEqual(-1);
      expect(findFirstNotOf('fhgna', 'kmlthaoqgecrnpdbjfis', 5, 1)).toEqual(-1);
      expect(findFirstNotOf('ejfcd', 'sfhbamcdptojlkrenqgi', 5, 10)).toEqual(-1);
      expect(findFirstNotOf('kqjhe', 'pbniofmcedrkhlstgaqj', 5, 19)).toEqual(-1);
      expect(findFirstNotOf('pbdjl', 'mongjratcskbhqiepfdl', 5, 20)).toEqual(-1);
      expect(findFirstNotOf('gajqn', '', 6, 0)).toEqual(-1);
      expect(findFirstNotOf('stedk', 'hrnat', 6, 0)).toEqual(-1);
      expect(findFirstNotOf('tjkaf', 'gsqdt', 6, 1)).toEqual(-1);
      expect(findFirstNotOf('dthpe', 'bspkd', 6, 2)).toEqual(-1);
      expect(findFirstNotOf('klhde', 'ohcmb', 6, 4)).toEqual(-1);
      expect(findFirstNotOf('bhlki', 'heatr', 6, 5)).toEqual(-1);
      expect(findFirstNotOf('lqmoh', 'pmblckedfn', 6, 0)).toEqual(-1);
      expect(findFirstNotOf('mtqin', 'aceqmsrbik', 6, 1)).toEqual(-1);
      expect(findFirstNotOf('dpqbr', 'lmbtdehjrn', 6, 5)).toEqual(-1);
      expect(findFirstNotOf('kdhmo', 'teqmcrlgib', 6, 9)).toEqual(-1);
      expect(findFirstNotOf('jblqp', 'njolbmspac', 6, 10)).toEqual(-1);
      expect(findFirstNotOf('qmjgl', 'pofnhidklamecrbqjgst', 6, 0)).toEqual(-1);
      expect(findFirstNotOf('rothp', 'jbhckmtgrqnosafedpli', 6, 1)).toEqual(-1);
      expect(findFirstNotOf('ghknq', 'dobntpmqklicsahgjerf', 6, 10)).toEqual(-1);
      expect(findFirstNotOf('eopfi', 'tpdshainjkbfoemlrgcq', 6, 19)).toEqual(-1);
      expect(findFirstNotOf('dsnmg', 'oldpfgeakrnitscbjmqh', 6, 20)).toEqual(-1);
      expect(findFirstNotOf('jnkrfhotgl', '', 0, 0)).toEqual(0);
      expect(findFirstNotOf('dltjfngbko', 'rqegt', 0, 0)).toEqual(0);
      expect(findFirstNotOf('bmjlpkiqde', 'dashm', 0, 1)).toEqual(0);
      expect(findFirstNotOf('skrflobnqm', 'jqirk', 0, 2)).toEqual(0);
      expect(findFirstNotOf('jkpldtshrm', 'rckeg', 0, 4)).toEqual(0);
      expect(findFirstNotOf('ghasdbnjqo', 'jscie', 0, 5)).toEqual(0);
      expect(findFirstNotOf('igrkhpbqjt', 'efsphndliq', 0, 0)).toEqual(0);
      expect(findFirstNotOf('ikthdgcamf', 'gdicosleja', 0, 1)).toEqual(0);
      expect(findFirstNotOf('pcofgeniam', 'qcpjibosfl', 0, 5)).toEqual(2);
      expect(findFirstNotOf('rlfjgesqhc', 'lrhmefnjcq', 0, 9)).toEqual(4);
      expect(findFirstNotOf('itphbqsker', 'dtablcrseo', 0, 10)).toEqual(0);
      expect(findFirstNotOf('skjafcirqm', 'apckjsftedbhgomrnilq', 0, 0)).toEqual(0);
      expect(findFirstNotOf('tcqomarsfd', 'pcbrgflehjtiadnsokqm', 0, 1)).toEqual(0);
      expect(findFirstNotOf('rocfeldqpk', 'nsiadegjklhobrmtqcpf', 0, 10)).toEqual(0);
      expect(findFirstNotOf('cfpegndlkt', 'cpmajdqnolikhgsbretf', 0, 19)).toEqual(1);
      expect(findFirstNotOf('fqbtnkeasj', 'jcflkntmgiqrphdosaeb', 0, 20)).toEqual(-1);
      expect(findFirstNotOf('shbcqnmoar', '', 1, 0)).toEqual(1);
      expect(findFirstNotOf('bdoshlmfin', 'ontrs', 1, 0)).toEqual(1);
      expect(findFirstNotOf('khfrebnsgq', 'pfkna', 1, 1)).toEqual(1);
      expect(findFirstNotOf('getcrsaoji', 'ekosa', 1, 2)).toEqual(2);
      expect(findFirstNotOf('fjiknedcpq', 'anqhk', 1, 4)).toEqual(1);
      expect(findFirstNotOf('tkejgnafrm', 'jekca', 1, 5)).toEqual(4);
      expect(findFirstNotOf('jnakolqrde', 'ikemsjgacf', 1, 0)).toEqual(1);
      expect(findFirstNotOf('lcjptsmgbe', 'arolgsjkhm', 1, 1)).toEqual(1);
      expect(findFirstNotOf('itfsmcjorl', 'oftkbldhre', 1, 5)).toEqual(3);
      expect(findFirstNotOf('omchkfrjea', 'gbkqdoeftl', 1, 9)).toEqual(1);
      expect(findFirstNotOf('cigfqkated', 'sqcflrgtim', 1, 10)).toEqual(5);
      expect(findFirstNotOf('tscenjikml', 'fmhbkislrjdpanogqcet', 1, 0)).toEqual(1);
      expect(findFirstNotOf('qcpaemsinf', 'rnioadktqlgpbcjsmhef', 1, 1)).toEqual(1);
      expect(findFirstNotOf('gltkojeipd', 'oakgtnldpsefihqmjcbr', 1, 10)).toEqual(5);
      expect(findFirstNotOf('qistfrgnmp', 'gbnaelosidmcjqktfhpr', 1, 19)).toEqual(5);
      expect(findFirstNotOf('bdnpfcqaem', 'akbripjhlosndcmqgfet', 1, 20)).toEqual(-1);
      expect(findFirstNotOf('ectnhskflp', '', 5, 0)).toEqual(5);
      expect(findFirstNotOf('fgtianblpq', 'pijag', 5, 0)).toEqual(5);
      expect(findFirstNotOf('mfeqklirnh', 'jrckd', 5, 1)).toEqual(5);
      expect(findFirstNotOf('astedncjhk', 'qcloh', 5, 2)).toEqual(5);
      expect(findFirstNotOf('fhlqgcajbr', 'thlmp', 5, 4)).toEqual(5);
      expect(findFirstNotOf('epfhocmdng', 'qidmo', 5, 5)).toEqual(5);
      expect(findFirstNotOf('apcnsibger', 'lnegpsjqrd', 5, 0)).toEqual(5);
      expect(findFirstNotOf('aqkocrbign', 'rjqdablmfs', 5, 1)).toEqual(6);
      expect(findFirstNotOf('ijsmdtqgce', 'enkgpbsjaq', 5, 5)).toEqual(5);
      expect(findFirstNotOf('clobgsrken', 'kdsgoaijfh', 5, 9)).toEqual(6);
      expect(findFirstNotOf('jbhcfposld', 'trfqgmckbe', 5, 10)).toEqual(5);
      expect(findFirstNotOf('oqnpblhide', 'igetsracjfkdnpoblhqm', 5, 0)).toEqual(5);
      expect(findFirstNotOf('lroeasctif', 'nqctfaogirshlekbdjpm', 5, 1)).toEqual(5);
      expect(findFirstNotOf('bpjlgmiedh', 'csehfgomljdqinbartkp', 5, 10)).toEqual(6);
      expect(findFirstNotOf('pamkeoidrj', 'qahoegcmplkfsjbdnitr', 5, 19)).toEqual(8);
      expect(findFirstNotOf('espogqbthk', 'dpteiajrqmsognhlfbkc', 5, 20)).toEqual(-1);
      expect(findFirstNotOf('shoiedtcjb', '', 9, 0)).toEqual(9);
      expect(findFirstNotOf('ebcinjgads', 'tqbnh', 9, 0)).toEqual(9);
      expect(findFirstNotOf('dqmregkcfl', 'akmle', 9, 1)).toEqual(9);
      expect(findFirstNotOf('ngcrieqajf', 'iqfkm', 9, 2)).toEqual(9);
      expect(findFirstNotOf('qosmilgnjb', 'tqjsr', 9, 4)).toEqual(9);
      expect(findFirstNotOf('ikabsjtdfl', 'jplqg', 9, 5)).toEqual(-1);
      expect(findFirstNotOf('ersmicafdh', 'oilnrbcgtj', 9, 0)).toEqual(9);
      expect(findFirstNotOf('fdnplotmgh', 'morkglpesn', 9, 1)).toEqual(9);
      expect(findFirstNotOf('fdbicojerm', 'dmicerngat', 9, 5)).toEqual(-1);
      expect(findFirstNotOf('mbtafndjcq', 'radgeskbtc', 9, 9)).toEqual(9);
      expect(findFirstNotOf('mlenkpfdtc', 'ljikprsmqo', 9, 10)).toEqual(9);
      expect(findFirstNotOf('ahlcifdqgs', 'trqihkcgsjamfdbolnpe', 9, 0)).toEqual(9);
      expect(findFirstNotOf('bgjemaltks', 'lqmthbsrekajgnofcipd', 9, 1)).toEqual(9);
      expect(findFirstNotOf('pdhslbqrfc', 'jtalmedribkgqsopcnfh', 9, 10)).toEqual(9);
      expect(findFirstNotOf('dirhtsnjkc', 'spqfoiclmtagejbndkrh', 9, 19)).toEqual(-1);
      expect(findFirstNotOf('dlroktbcja', 'nmotklspigjrdhcfaebq', 9, 20)).toEqual(-1);
      expect(findFirstNotOf('ncjpmaekbs', '', 10, 0)).toEqual(-1);
      expect(findFirstNotOf('hlbosgmrak', 'hpmsd', 10, 0)).toEqual(-1);
      expect(findFirstNotOf('pqfhsgilen', 'qnpor', 10, 1)).toEqual(-1);
      expect(findFirstNotOf('gqtjsbdckh', 'otdma', 10, 2)).toEqual(-1);
      expect(findFirstNotOf('cfkqpjlegi', 'efhjg', 10, 4)).toEqual(-1);
      expect(findFirstNotOf('beanrfodgj', 'odpte', 10, 5)).toEqual(-1);
      expect(findFirstNotOf('adtkqpbjfi', 'bctdgfmolr', 10, 0)).toEqual(-1);
      expect(findFirstNotOf('iomkfthagj', 'oaklidrbqg', 10, 1)).toEqual(-1);

      expect(findFirstNotOf('sdpcilonqj', 'dnjfsagktr', 10, 5)).toEqual(-1);
      expect(findFirstNotOf('gtfbdkqeml', 'nejaktmiqg', 10, 9)).toEqual(-1);
      expect(findFirstNotOf('bmeqgcdorj', 'pjqonlebsf', 10, 10)).toEqual(-1);
      expect(findFirstNotOf('etqlcanmob', 'dshmnbtolcjepgaikfqr', 10, 0)).toEqual(-1);
      expect(findFirstNotOf('roqmkbdtia', 'iogfhpabtjkqlrnemcds', 10, 1)).toEqual(-1);
      expect(findFirstNotOf('kadsithljf', 'ngridfabjsecpqltkmoh', 10, 10)).toEqual(-1);
      expect(findFirstNotOf('sgtkpbfdmh', 'athmknplcgofrqejsdib', 10, 19)).toEqual(-1);
      expect(findFirstNotOf('qgmetnabkl', 'ldobhmqcafnjtkeisgrp', 10, 20)).toEqual(-1);
      expect(findFirstNotOf('cqjohampgd', '', 11, 0)).toEqual(-1);
      expect(findFirstNotOf('hobitmpsan', 'aocjb', 11, 0)).toEqual(-1);
      expect(findFirstNotOf('tjehkpsalm', 'jbrnk', 11, 1)).toEqual(-1);
      expect(findFirstNotOf('ngfbojitcl', 'tqedg', 11, 2)).toEqual(-1);
      expect(findFirstNotOf('rcfkdbhgjo', 'nqskp', 11, 4)).toEqual(-1);
      expect(findFirstNotOf('qghptonrea', 'eaqkl', 11, 5)).toEqual(-1);
      expect(findFirstNotOf('hnprfgqjdl', 'reaoicljqm', 11, 0)).toEqual(-1);
      expect(findFirstNotOf('hlmgabenti', 'lsftgajqpm', 11, 1)).toEqual(-1);
      expect(findFirstNotOf('ofcjanmrbs', 'rlpfogmits', 11, 5)).toEqual(-1);
      expect(findFirstNotOf('jqedtkornm', 'shkncmiaqj', 11, 9)).toEqual(-1);
      expect(findFirstNotOf('rfedlasjmg', 'fpnatrhqgs', 11, 10)).toEqual(-1);
      expect(findFirstNotOf('talpqjsgkm', 'sjclemqhnpdbgikarfot', 11, 0)).toEqual(-1);
      expect(findFirstNotOf('lrkcbtqpie', 'otcmedjikgsfnqbrhpla', 11, 1)).toEqual(-1);
      expect(findFirstNotOf('cipogdskjf', 'bonsaefdqiprkhlgtjcm', 11, 10)).toEqual(-1);
      expect(findFirstNotOf('nqedcojahi', 'egpscmahijlfnkrodqtb', 11, 19)).toEqual(-1);
      expect(findFirstNotOf('hefnrkmctj', 'kmqbfepjthgilscrndoa', 11, 20)).toEqual(-1);
      expect(findFirstNotOf('atqirnmekfjolhpdsgcb', '', 0, 0)).toEqual(0);
      expect(findFirstNotOf('echfkmlpribjnqsaogtd', 'prboq', 0, 0)).toEqual(0);
      expect(findFirstNotOf('qnhiftdgcleajbpkrosm', 'fjcqh', 0, 1)).toEqual(0);
      expect(findFirstNotOf('chamfknorbedjitgslpq', 'fmosa', 0, 2)).toEqual(0);
      expect(findFirstNotOf('njhqpibfmtlkaecdrgso', 'qdbok', 0, 4)).toEqual(0);
      expect(findFirstNotOf('ebnghfsqkprmdcljoiat', 'amslg', 0, 5)).toEqual(0);
      expect(findFirstNotOf('letjomsgihfrpqbkancd', 'smpltjneqb', 0, 0)).toEqual(0);
      expect(findFirstNotOf('nblgoipcrqeaktshjdmf', 'flitskrnge', 0, 1)).toEqual(0);
      expect(findFirstNotOf('cehkbngtjoiflqapsmrd', 'pgqihmlbef', 0, 5)).toEqual(0);
      expect(findFirstNotOf('mignapfoklbhcqjetdrs', 'cfpdqjtgsb', 0, 9)).toEqual(0);
      expect(findFirstNotOf('ceatbhlsqjgpnokfrmdi', 'htpsiaflom', 0, 10)).toEqual(0);
      expect(findFirstNotOf('ocihkjgrdelpfnmastqb', 'kpjfiaceghsrdtlbnomq', 0, 0)).toEqual(0);
      expect(findFirstNotOf('noelgschdtbrjfmiqkap', 'qhtbomidljgafneksprc', 0, 1)).toEqual(0);
      expect(findFirstNotOf('dkclqfombepritjnghas', 'nhtjobkcefldimpsaqgr', 0, 10)).toEqual(0);
      expect(findFirstNotOf('miklnresdgbhqcojftap', 'prabcjfqnoeskilmtgdh', 0, 19)).toEqual(11);
      expect(findFirstNotOf('htbcigojaqmdkfrnlsep', 'dtrgmchilkasqoebfpjn', 0, 20)).toEqual(-1);
      expect(findFirstNotOf('febhmqtjanokscdirpgl', '', 1, 0)).toEqual(1);
      expect(findFirstNotOf('loakbsqjpcrdhftniegm', 'sqome', 1, 0)).toEqual(1);
      expect(findFirstNotOf('reagphsqflbitdcjmkno', 'smfte', 1, 1)).toEqual(1);
      expect(findFirstNotOf('jitlfrqemsdhkopncabg', 'ciboh', 1, 2)).toEqual(2);
      expect(findFirstNotOf('mhtaepscdnrjqgbkifol', 'haois', 1, 4)).toEqual(2);
      expect(findFirstNotOf('tocesrfmnglpbjihqadk', 'abfki', 1, 5)).toEqual(1);
      expect(findFirstNotOf('lpfmctjrhdagneskbqoi', 'frdkocntmq', 1, 0)).toEqual(1);
      expect(findFirstNotOf('lsmqaepkdhncirbtjfgo', 'oasbpedlnr', 1, 1)).toEqual(1);
      expect(findFirstNotOf('epoiqmtldrabnkjhcfsg', 'kltqmhgand', 1, 5)).toEqual(1);
      expect(findFirstNotOf('emgasrilpknqojhtbdcf', 'gdtfjchpmr', 1, 9)).toEqual(3);
      expect(findFirstNotOf('hnfiagdpcklrjetqbsom', 'ponmcqblet', 1, 10)).toEqual(2);
      expect(findFirstNotOf('nsdfebgajhmtricpoklq', 'sgphqdnofeiklatbcmjr', 1, 0)).toEqual(1);
      expect(findFirstNotOf('atjgfsdlpobmeiqhncrk', 'ljqprsmigtfoneadckbh', 1, 1)).toEqual(1);
      expect(findFirstNotOf('sitodfgnrejlahcbmqkp', 'ligeojhafnkmrcsqtbdp', 1, 10)).toEqual(2);
      expect(findFirstNotOf('fraghmbiceknltjpqosd', 'lsimqfnjarbopedkhcgt', 1, 19)).toEqual(13);
      expect(findFirstNotOf('pmafenlhqtdbkirjsogc', 'abedmfjlghniorcqptks', 1, 20)).toEqual(-1);
      expect(findFirstNotOf('pihgmoeqtnakrjslcbfd', '', 10, 0)).toEqual(10);
      expect(findFirstNotOf('gjdkeprctqblnhiafsom', 'hqtoa', 10, 0)).toEqual(10);
      expect(findFirstNotOf('mkpnblfdsahrcqijteog', 'cahif', 10, 1)).toEqual(10);
      expect(findFirstNotOf('gckarqnelodfjhmbptis', 'kehis', 10, 2)).toEqual(10);
      expect(findFirstNotOf('gqpskidtbclomahnrjfe', 'kdlmh', 10, 4)).toEqual(11);
      expect(findFirstNotOf('pkldjsqrfgitbhmaecno', 'paeql', 10, 5)).toEqual(10);
      expect(findFirstNotOf('aftsijrbeklnmcdqhgop', 'aghoqiefnb', 10, 0)).toEqual(10);
      expect(findFirstNotOf('mtlgdrhafjkbiepqnsoc', 'jrbqaikpdo', 10, 1)).toEqual(10);
      expect(findFirstNotOf('pqgirnaefthokdmbsclj', 'smjonaeqcl', 10, 5)).toEqual(10);
      expect(findFirstNotOf('kpdbgjmtherlsfcqoina', 'eqbdrkcfah', 10, 9)).toEqual(11);
      expect(findFirstNotOf('jrlbothiknqmdgcfasep', 'kapmsienhf', 10, 10)).toEqual(10);
      expect(findFirstNotOf('mjogldqferckabinptsh', 'jpqotrlenfcsbhkaimdg', 10, 0)).toEqual(10);
      expect(findFirstNotOf('apoklnefbhmgqcdrisjt', 'jlbmhnfgtcqprikeados', 10, 1)).toEqual(10);
      expect(findFirstNotOf('ifeopcnrjbhkdgatmqls', 'stgbhfmdaljnpqoicker', 10, 10)).toEqual(11);
      expect(findFirstNotOf('ckqhaiesmjdnrgolbtpf', 'oihcetflbjagdsrkmqpn', 10, 19)).toEqual(11);
      expect(findFirstNotOf('bnlgapfimcoterskqdjh', 'adtclebmnpjsrqfkigoh', 10, 20)).toEqual(-1);
      expect(findFirstNotOf('kgdlrobpmjcthqsafeni', '', 19, 0)).toEqual(19);
      expect(findFirstNotOf('dfkechomjapgnslbtqir', 'beafg', 19, 0)).toEqual(19);
      expect(findFirstNotOf('rloadknfbqtgmhcsipje', 'iclat', 19, 1)).toEqual(19);
      expect(findFirstNotOf('mgjhkolrnadqbpetcifs', 'rkhnf', 19, 2)).toEqual(19);
      expect(findFirstNotOf('cmlfakiojdrgtbsphqen', 'clshq', 19, 4)).toEqual(19);
      expect(findFirstNotOf('kghbfipeomsntdalrqjc', 'dtcoj', 19, 5)).toEqual(-1);
      expect(findFirstNotOf('eldiqckrnmtasbghjfpo', 'rqosnjmfth', 19, 0)).toEqual(19);
      expect(findFirstNotOf('abqjcfedgotihlnspkrm', 'siatdfqglh', 19, 1)).toEqual(19);
      expect(findFirstNotOf('qfbadrtjsimkolcenhpg', 'mrlshtpgjq', 19, 5)).toEqual(19);
      expect(findFirstNotOf('abseghclkjqifmtodrnp', 'adlcskgqjt', 19, 9)).toEqual(19);
      expect(findFirstNotOf('ibmsnlrjefhtdokacqpg', 'drshcjknaf', 19, 10)).toEqual(19);
      expect(findFirstNotOf('mrkfciqjebaponsthldg', 'etsaqroinghpkjdlfcbm', 19, 0)).toEqual(19);
      expect(findFirstNotOf('mjkticdeoqshpalrfbgn', 'sgepdnkqliambtrocfhj', 19, 1)).toEqual(19);
      expect(findFirstNotOf('rqnoclbdejgiphtfsakm', 'nlmcjaqgbsortfdihkpe', 19, 10)).toEqual(-1);
      expect(findFirstNotOf('plkqbhmtfaeodjcrsing', 'racfnpmosldibqkghjet', 19, 19)).toEqual(-1);
      expect(findFirstNotOf('oegalhmstjrfickpbndq', 'fjhdsctkqeiolagrnmbp', 19, 20)).toEqual(-1);
      expect(findFirstNotOf('rdtgjcaohpblniekmsfq', '', 20, 0)).toEqual(-1);
      expect(findFirstNotOf('ofkqbnjetrmsaidphglc', 'ejanp', 20, 0)).toEqual(-1);
      expect(findFirstNotOf('grkpahljcftesdmonqib', 'odife', 20, 1)).toEqual(-1);
      expect(findFirstNotOf('jimlgbhfqkteospardcn', 'okaqd', 20, 2)).toEqual(-1);
      expect(findFirstNotOf('gftenihpmslrjkqadcob', 'lcdbi', 20, 4)).toEqual(-1);
      expect(findFirstNotOf('bmhldogtckrfsanijepq', 'fsqbj', 20, 5)).toEqual(-1);
      expect(findFirstNotOf('nfqkrpjdesabgtlcmoih', 'bigdomnplq', 20, 0)).toEqual(-1);
      expect(findFirstNotOf('focalnrpiqmdkstehbjg', 'apiblotgcd', 20, 1)).toEqual(-1);
      expect(findFirstNotOf('rhqdspkmebiflcotnjga', 'acfhdenops', 20, 5)).toEqual(-1);
      expect(findFirstNotOf('rahdtmsckfboqlpniegj', 'jopdeamcrk', 20, 9)).toEqual(-1);
      expect(findFirstNotOf('fbkeiopclstmdqranjhg', 'trqncbkgmh', 20, 10)).toEqual(-1);
      expect(findFirstNotOf('lifhpdgmbconstjeqark', 'tomglrkencbsfjqpihda', 20, 0)).toEqual(-1);

      expect(findFirstNotOf('pboqganrhedjmltsicfk', 'gbkhdnpoietfcmrslajq', 20, 1)).toEqual(-1);
      expect(findFirstNotOf('klchabsimetjnqgorfpd', 'rtfnmbsglkjaichoqedp', 20, 10)).toEqual(-1);
      expect(findFirstNotOf('sirfgmjqhctndbklaepo', 'ohkmdpfqbsacrtjnlgei', 20, 19)).toEqual(-1);
      expect(findFirstNotOf('rlbdsiceaonqjtfpghkm', 'dlbrteoisgphmkncajfq', 20, 20)).toEqual(-1);
      expect(findFirstNotOf('ecgdanriptblhjfqskom', '', 21, 0)).toEqual(-1);
      expect(findFirstNotOf('fdmiarlpgcskbhoteqjn', 'sjrlo', 21, 0)).toEqual(-1);
      expect(findFirstNotOf('rlbstjqopignecmfadkh', 'qjpor', 21, 1)).toEqual(-1);
      expect(findFirstNotOf('grjpqmbshektdolcafni', 'odhfn', 21, 2)).toEqual(-1);
      expect(findFirstNotOf('sakfcohtqnibprjmlged', 'qtfin', 21, 4)).toEqual(-1);
      expect(findFirstNotOf('mjtdglasihqpocebrfkn', 'hpqfo', 21, 5)).toEqual(-1);
      expect(findFirstNotOf('okaplfrntghqbmeicsdj', 'fabmertkos', 21, 0)).toEqual(-1);
      expect(findFirstNotOf('sahngemrtcjidqbklfpo', 'brqtgkmaej', 21, 1)).toEqual(-1);
      expect(findFirstNotOf('dlmsipcnekhbgoaftqjr', 'nfrdeihsgl', 21, 5)).toEqual(-1);
      expect(findFirstNotOf('ahegrmqnoiklpfsdbcjt', 'hlfrosekpi', 21, 9)).toEqual(-1);
      expect(findFirstNotOf('hdsjbnmlegtkqripacof', 'atgbkrjdsm', 21, 10)).toEqual(-1);
      expect(findFirstNotOf('pcnedrfjihqbalkgtoms', 'blnrptjgqmaifsdkhoec', 21, 0)).toEqual(-1);
      expect(findFirstNotOf('qjidealmtpskrbfhocng', 'ctpmdahebfqjgknloris', 21, 1)).toEqual(-1);
      expect(findFirstNotOf('qeindtagmokpfhsclrbj', 'apnkeqthrmlbfodiscgj', 21, 10)).toEqual(-1);
      expect(findFirstNotOf('kpfegbjhsrnodltqciam', 'jdgictpframeoqlsbknh', 21, 19)).toEqual(-1);
      expect(findFirstNotOf('hnbrcplsjfgiktoedmaq', 'qprlsfojamgndekthibc', 21, 20)).toEqual(-1);
    });
  });
});
