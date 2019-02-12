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
      expect(findLastNotof('', '', 0, 0)).toEqual(-1);
      expect(findLastNotof('', 'irkhs', 0, 0)).toEqual(-1);
      expect(findLastNotof('', 'kante', 0, 1)).toEqual(-1);
      expect(findLastNotof('', 'oknlr', 0, 2)).toEqual(-1);
      expect(findLastNotof('', 'pcdro', 0, 4)).toEqual(-1);
      expect(findLastNotof('', 'bnrpe', 0, 5)).toEqual(-1);
      expect(findLastNotof('', 'jtdaefblso', 0, 0)).toEqual(-1);
      expect(findLastNotof('', 'oselktgbca', 0, 1)).toEqual(-1);
      expect(findLastNotof('', 'eqgaplhckj', 0, 5)).toEqual(-1);
      expect(findLastNotof('', 'bjahtcmnlp', 0, 9)).toEqual(-1);
      expect(findLastNotof('', 'hjlcmgpket', 0, 10)).toEqual(-1);
      expect(findLastNotof('', 'htaobedqikfplcgjsmrn', 0, 0)).toEqual(-1);
      expect(findLastNotof('', 'hpqiarojkcdlsgnmfetb', 0, 1)).toEqual(-1);
      expect(findLastNotof('', 'dfkaprhjloqetcsimnbg', 0, 10)).toEqual(-1);
      expect(findLastNotof('', 'ihqrfebgadntlpmjksoc', 0, 19)).toEqual(-1);
      expect(findLastNotof('', 'ngtjfcalbseiqrphmkdo', 0, 20)).toEqual(-1);
      expect(findLastNotof('', '', 1, 0)).toEqual(-1);
      expect(findLastNotof('', 'lbtqd', 1, 0)).toEqual(-1);
      expect(findLastNotof('', 'tboim', 1, 1)).toEqual(-1);
      expect(findLastNotof('', 'slcer', 1, 2)).toEqual(-1);
      expect(findLastNotof('', 'cbjfs', 1, 4)).toEqual(-1);
      expect(findLastNotof('', 'aqibs', 1, 5)).toEqual(-1);
      expect(findLastNotof('', 'gtfblmqinc', 1, 0)).toEqual(-1);
      expect(findLastNotof('', 'mkqpbtdalg', 1, 1)).toEqual(-1);
      expect(findLastNotof('', 'kphatlimcd', 1, 5)).toEqual(-1);
      expect(findLastNotof('', 'pblasqogic', 1, 9)).toEqual(-1);
      expect(findLastNotof('', 'arosdhcfme', 1, 10)).toEqual(-1);
      expect(findLastNotof('', 'blkhjeogicatqfnpdmsr', 1, 0)).toEqual(-1);
      expect(findLastNotof('', 'bmhineprjcoadgstflqk', 1, 1)).toEqual(-1);
      expect(findLastNotof('', 'djkqcmetslnghpbarfoi', 1, 10)).toEqual(-1);
      expect(findLastNotof('', 'lgokshjtpbemarcdqnfi', 1, 19)).toEqual(-1);
      expect(findLastNotof('', 'bqjhtkfepimcnsgrlado', 1, 20)).toEqual(-1);
      expect(findLastNotof('eaint', '', 0, 0)).toEqual(0);
      expect(findLastNotof('binja', 'gfsrt', 0, 0)).toEqual(0);
      expect(findLastNotof('latkm', 'pfsoc', 0, 1)).toEqual(0);
      expect(findLastNotof('lecfr', 'tpflm', 0, 2)).toEqual(0);
      expect(findLastNotof('eqkst', 'sgkec', 0, 4)).toEqual(-1);
      expect(findLastNotof('cdafr', 'romds', 0, 5)).toEqual(0);
      expect(findLastNotof('prbhe', 'qhjistlgmr', 0, 0)).toEqual(0);
      expect(findLastNotof('lbisk', 'pedfirsglo', 0, 1)).toEqual(0);
      expect(findLastNotof('hrlpd', 'aqcoslgrmk', 0, 5)).toEqual(0);
      expect(findLastNotof('ehmja', 'dabckmepqj', 0, 9)).toEqual(-1);
      expect(findLastNotof('mhqgd', 'pqscrjthli', 0, 10)).toEqual(0);
      expect(findLastNotof('tgklq', 'kfphdcsjqmobliagtren', 0, 0)).toEqual(0);
      expect(findLastNotof('bocjs', 'rokpefncljibsdhqtagm', 0, 1)).toEqual(0);
      expect(findLastNotof('grbsd', 'afionmkphlebtcjqsgrd', 0, 10)).toEqual(0);
      expect(findLastNotof('ofjqr', 'aenmqplidhkofrjbctsg', 0, 19)).toEqual(-1);
      expect(findLastNotof('btlfi', 'osjmbtcadhiklegrpqnf', 0, 20)).toEqual(-1);
      expect(findLastNotof('clrgb', '', 1, 0)).toEqual(1);
      expect(findLastNotof('tjmek', 'osmia', 1, 0)).toEqual(1);
      expect(findLastNotof('bgstp', 'ckonl', 1, 1)).toEqual(1);
      expect(findLastNotof('hstrk', 'ilcaj', 1, 2)).toEqual(1);
      expect(findLastNotof('kmspj', 'lasiq', 1, 4)).toEqual(1);
      expect(findLastNotof('tjboh', 'kfqmr', 1, 5)).toEqual(1);
      expect(findLastNotof('ilbcj', 'klnitfaobg', 1, 0)).toEqual(1);
      expect(findLastNotof('jkngf', 'gjhmdlqikp', 1, 1)).toEqual(1);
      expect(findLastNotof('gfcql', 'skbgtahqej', 1, 5)).toEqual(1);
      expect(findLastNotof('dqtlg', 'bjsdgtlpkf', 1, 9)).toEqual(1);
      expect(findLastNotof('bthpg', 'bjgfmnlkio', 1, 10)).toEqual(1);
      expect(findLastNotof('dgsnq', 'lbhepotfsjdqigcnamkr', 1, 0)).toEqual(1);
      expect(findLastNotof('rmfhp', 'tebangckmpsrqdlfojhi', 1, 1)).toEqual(1);
      expect(findLastNotof('jfdam', 'joflqbdkhtegimscpanr', 1, 10)).toEqual(-1);
      expect(findLastNotof('edapb', 'adpmcohetfbsrjinlqkg', 1, 19)).toEqual(-1);
      expect(findLastNotof('brfsm', 'iacldqjpfnogbsrhmetk', 1, 20)).toEqual(-1);
      expect(findLastNotof('ndrhl', '', 2, 0)).toEqual(2);
      expect(findLastNotof('mrecp', 'otkgb', 2, 0)).toEqual(2);
      expect(findLastNotof('qlasf', 'cqsjl', 2, 1)).toEqual(2);
      expect(findLastNotof('smaqd', 'dpifl', 2, 2)).toEqual(2);
      expect(findLastNotof('hjeni', 'oapht', 2, 4)).toEqual(2);
      expect(findLastNotof('ocmfj', 'cifts', 2, 5)).toEqual(2);
      expect(findLastNotof('hmftq', 'nmsckbgalo', 2, 0)).toEqual(2);
      expect(findLastNotof('fklad', 'tpksqhamle', 2, 1)).toEqual(2);
      expect(findLastNotof('dirnm', 'tpdrchmkji', 2, 5)).toEqual(1);
      expect(findLastNotof('hrgdc', 'ijagfkblst', 2, 9)).toEqual(1);
      expect(findLastNotof('ifakg', 'kpocsignjb', 2, 10)).toEqual(2);
      expect(findLastNotof('ebrgd', 'pecqtkjsnbdrialgmohf', 2, 0)).toEqual(2);
      expect(findLastNotof('rcjml', 'aiortphfcmkjebgsndql', 2, 1)).toEqual(2);
      expect(findLastNotof('peqmt', 'sdbkeamglhipojqftrcn', 2, 10)).toEqual(2);
      expect(findLastNotof('frehn', 'ljqncehgmfktroapidbs', 2, 19)).toEqual(-1);
      expect(findLastNotof('tqolf', 'rtcfodilamkbenjghqps', 2, 20)).toEqual(-1);
      expect(findLastNotof('cjgao', '', 4, 0)).toEqual(4);
      expect(findLastNotof('kjplq', 'mabns', 4, 0)).toEqual(4);
      expect(findLastNotof('herni', 'bdnrp', 4, 1)).toEqual(4);
      expect(findLastNotof('tadrb', 'scidp', 4, 2)).toEqual(4);
      expect(findLastNotof('pkfeo', 'agbjl', 4, 4)).toEqual(4);
      expect(findLastNotof('hoser', 'jfmpr', 4, 5)).toEqual(3);
      expect(findLastNotof('kgrsp', 'rbpefghsmj', 4, 0)).toEqual(4);
      expect(findLastNotof('pgejb', 'apsfntdoqc', 4, 1)).toEqual(4);
      expect(findLastNotof('thlnq', 'ndkjeisgcl', 4, 5)).toEqual(4);
      expect(findLastNotof('nbmit', 'rnfpqatdeo', 4, 9)).toEqual(3);
      expect(findLastNotof('jgmib', 'bntjlqrfik', 4, 10)).toEqual(2);
      expect(findLastNotof('ncrfj', 'kcrtmpolnaqejghsfdbi', 4, 0)).toEqual(4);
      expect(findLastNotof('ncsik', 'lobheanpkmqidsrtcfgj', 4, 1)).toEqual(4);
      expect(findLastNotof('sgbfh', 'athdkljcnreqbgpmisof', 4, 10)).toEqual(3);
      expect(findLastNotof('dktbn', 'qkdmjialrscpbhefgont', 4, 19)).toEqual(2);
      expect(findLastNotof('fthqm', 'dmasojntqleribkgfchp', 4, 20)).toEqual(-1);
      expect(findLastNotof('klopi', '', 5, 0)).toEqual(4);
      expect(findLastNotof('dajhn', 'psthd', 5, 0)).toEqual(4);
      expect(findLastNotof('jbgno', 'rpmjd', 5, 1)).toEqual(4);
      expect(findLastNotof('hkjae', 'dfsmk', 5, 2)).toEqual(4);

      expect(findLastNotof('gbhqo', 'skqne', 5, 4)).toEqual(4);
      expect(findLastNotof('ktdor', 'kipnf', 5, 5)).toEqual(4);
      expect(findLastNotof('ldprn', 'hmrnqdgifl', 5, 0)).toEqual(4);
      expect(findLastNotof('egmjk', 'fsmjcdairn', 5, 1)).toEqual(4);
      expect(findLastNotof('armql', 'pcdgltbrfj', 5, 5)).toEqual(3);
      expect(findLastNotof('cdhjo', 'aekfctpirg', 5, 9)).toEqual(4);
      expect(findLastNotof('jcons', 'ledihrsgpf', 5, 10)).toEqual(3);
      expect(findLastNotof('cbrkp', 'mqcklahsbtirgopefndj', 5, 0)).toEqual(4);
      expect(findLastNotof('fhgna', 'kmlthaoqgecrnpdbjfis', 5, 1)).toEqual(4);
      expect(findLastNotof('ejfcd', 'sfhbamcdptojlkrenqgi', 5, 10)).toEqual(1);
      expect(findLastNotof('kqjhe', 'pbniofmcedrkhlstgaqj', 5, 19)).toEqual(2);
      expect(findLastNotof('pbdjl', 'mongjratcskbhqiepfdl', 5, 20)).toEqual(-1);
      expect(findLastNotof('gajqn', '', 6, 0)).toEqual(4);
      expect(findLastNotof('stedk', 'hrnat', 6, 0)).toEqual(4);
      expect(findLastNotof('tjkaf', 'gsqdt', 6, 1)).toEqual(4);
      expect(findLastNotof('dthpe', 'bspkd', 6, 2)).toEqual(4);
      expect(findLastNotof('klhde', 'ohcmb', 6, 4)).toEqual(4);
      expect(findLastNotof('bhlki', 'heatr', 6, 5)).toEqual(4);
      expect(findLastNotof('lqmoh', 'pmblckedfn', 6, 0)).toEqual(4);
      expect(findLastNotof('mtqin', 'aceqmsrbik', 6, 1)).toEqual(4);
      expect(findLastNotof('dpqbr', 'lmbtdehjrn', 6, 5)).toEqual(4);
      expect(findLastNotof('kdhmo', 'teqmcrlgib', 6, 9)).toEqual(4);
      expect(findLastNotof('jblqp', 'njolbmspac', 6, 10)).toEqual(3);
      expect(findLastNotof('qmjgl', 'pofnhidklamecrbqjgst', 6, 0)).toEqual(4);
      expect(findLastNotof('rothp', 'jbhckmtgrqnosafedpli', 6, 1)).toEqual(4);
      expect(findLastNotof('ghknq', 'dobntpmqklicsahgjerf', 6, 10)).toEqual(1);
      expect(findLastNotof('eopfi', 'tpdshainjkbfoemlrgcq', 6, 19)).toEqual(-1);
      expect(findLastNotof('dsnmg', 'oldpfgeakrnitscbjmqh', 6, 20)).toEqual(-1);
      expect(findLastNotof('jnkrfhotgl', '', 0, 0)).toEqual(0);
      expect(findLastNotof('dltjfngbko', 'rqegt', 0, 0)).toEqual(0);
      expect(findLastNotof('bmjlpkiqde', 'dashm', 0, 1)).toEqual(0);
      expect(findLastNotof('skrflobnqm', 'jqirk', 0, 2)).toEqual(0);
      expect(findLastNotof('jkpldtshrm', 'rckeg', 0, 4)).toEqual(0);
      expect(findLastNotof('ghasdbnjqo', 'jscie', 0, 5)).toEqual(0);
      expect(findLastNotof('igrkhpbqjt', 'efsphndliq', 0, 0)).toEqual(0);
      expect(findLastNotof('ikthdgcamf', 'gdicosleja', 0, 1)).toEqual(0);
      expect(findLastNotof('pcofgeniam', 'qcpjibosfl', 0, 5)).toEqual(-1);
      expect(findLastNotof('rlfjgesqhc', 'lrhmefnjcq', 0, 9)).toEqual(-1);
      expect(findLastNotof('itphbqsker', 'dtablcrseo', 0, 10)).toEqual(0);
      expect(findLastNotof('skjafcirqm', 'apckjsftedbhgomrnilq', 0, 0)).toEqual(0);
      expect(findLastNotof('tcqomarsfd', 'pcbrgflehjtiadnsokqm', 0, 1)).toEqual(0);
      expect(findLastNotof('rocfeldqpk', 'nsiadegjklhobrmtqcpf', 0, 10)).toEqual(0);
      expect(findLastNotof('cfpegndlkt', 'cpmajdqnolikhgsbretf', 0, 19)).toEqual(-1);
      expect(findLastNotof('fqbtnkeasj', 'jcflkntmgiqrphdosaeb', 0, 20)).toEqual(-1);
      expect(findLastNotof('shbcqnmoar', '', 1, 0)).toEqual(1);
      expect(findLastNotof('bdoshlmfin', 'ontrs', 1, 0)).toEqual(1);
      expect(findLastNotof('khfrebnsgq', 'pfkna', 1, 1)).toEqual(1);
      expect(findLastNotof('getcrsaoji', 'ekosa', 1, 2)).toEqual(0);
      expect(findLastNotof('fjiknedcpq', 'anqhk', 1, 4)).toEqual(1);
      expect(findLastNotof('tkejgnafrm', 'jekca', 1, 5)).toEqual(0);
      expect(findLastNotof('jnakolqrde', 'ikemsjgacf', 1, 0)).toEqual(1);
      expect(findLastNotof('lcjptsmgbe', 'arolgsjkhm', 1, 1)).toEqual(1);
      expect(findLastNotof('itfsmcjorl', 'oftkbldhre', 1, 5)).toEqual(0);
      expect(findLastNotof('omchkfrjea', 'gbkqdoeftl', 1, 9)).toEqual(1);
      expect(findLastNotof('cigfqkated', 'sqcflrgtim', 1, 10)).toEqual(-1);
      expect(findLastNotof('tscenjikml', 'fmhbkislrjdpanogqcet', 1, 0)).toEqual(1);
      expect(findLastNotof('qcpaemsinf', 'rnioadktqlgpbcjsmhef', 1, 1)).toEqual(1);
      expect(findLastNotof('gltkojeipd', 'oakgtnldpsefihqmjcbr', 1, 10)).toEqual(-1);
      expect(findLastNotof('qistfrgnmp', 'gbnaelosidmcjqktfhpr', 1, 19)).toEqual(-1);
      expect(findLastNotof('bdnpfcqaem', 'akbripjhlosndcmqgfet', 1, 20)).toEqual(-1);
      expect(findLastNotof('ectnhskflp', '', 5, 0)).toEqual(5);
      expect(findLastNotof('fgtianblpq', 'pijag', 5, 0)).toEqual(5);
      expect(findLastNotof('mfeqklirnh', 'jrckd', 5, 1)).toEqual(5);
      expect(findLastNotof('astedncjhk', 'qcloh', 5, 2)).toEqual(5);
      expect(findLastNotof('fhlqgcajbr', 'thlmp', 5, 4)).toEqual(5);
      expect(findLastNotof('epfhocmdng', 'qidmo', 5, 5)).toEqual(5);
      expect(findLastNotof('apcnsibger', 'lnegpsjqrd', 5, 0)).toEqual(5);
      expect(findLastNotof('aqkocrbign', 'rjqdablmfs', 5, 1)).toEqual(4);
      expect(findLastNotof('ijsmdtqgce', 'enkgpbsjaq', 5, 5)).toEqual(5);
      expect(findLastNotof('clobgsrken', 'kdsgoaijfh', 5, 9)).toEqual(3);
      expect(findLastNotof('jbhcfposld', 'trfqgmckbe', 5, 10)).toEqual(5);
      expect(findLastNotof('oqnpblhide', 'igetsracjfkdnpoblhqm', 5, 0)).toEqual(5);
      expect(findLastNotof('lroeasctif', 'nqctfaogirshlekbdjpm', 5, 1)).toEqual(5);
      expect(findLastNotof('bpjlgmiedh', 'csehfgomljdqinbartkp', 5, 10)).toEqual(1);
      expect(findLastNotof('pamkeoidrj', 'qahoegcmplkfsjbdnitr', 5, 19)).toEqual(-1);
      expect(findLastNotof('espogqbthk', 'dpteiajrqmsognhlfbkc', 5, 20)).toEqual(-1);
      expect(findLastNotof('shoiedtcjb', '', 9, 0)).toEqual(9);
      expect(findLastNotof('ebcinjgads', 'tqbnh', 9, 0)).toEqual(9);
      expect(findLastNotof('dqmregkcfl', 'akmle', 9, 1)).toEqual(9);
      expect(findLastNotof('ngcrieqajf', 'iqfkm', 9, 2)).toEqual(9);
      expect(findLastNotof('qosmilgnjb', 'tqjsr', 9, 4)).toEqual(9);
      expect(findLastNotof('ikabsjtdfl', 'jplqg', 9, 5)).toEqual(8);
      expect(findLastNotof('ersmicafdh', 'oilnrbcgtj', 9, 0)).toEqual(9);
      expect(findLastNotof('fdnplotmgh', 'morkglpesn', 9, 1)).toEqual(9);
      expect(findLastNotof('fdbicojerm', 'dmicerngat', 9, 5)).toEqual(8);
      expect(findLastNotof('mbtafndjcq', 'radgeskbtc', 9, 9)).toEqual(9);
      expect(findLastNotof('mlenkpfdtc', 'ljikprsmqo', 9, 10)).toEqual(9);
      expect(findLastNotof('ahlcifdqgs', 'trqihkcgsjamfdbolnpe', 9, 0)).toEqual(9);
      expect(findLastNotof('bgjemaltks', 'lqmthbsrekajgnofcipd', 9, 1)).toEqual(9);
      expect(findLastNotof('pdhslbqrfc', 'jtalmedribkgqsopcnfh', 9, 10)).toEqual(9);
      expect(findLastNotof('dirhtsnjkc', 'spqfoiclmtagejbndkrh', 9, 19)).toEqual(3);
      expect(findLastNotof('dlroktbcja', 'nmotklspigjrdhcfaebq', 9, 20)).toEqual(-1);
      expect(findLastNotof('ncjpmaekbs', '', 10, 0)).toEqual(9);
      expect(findLastNotof('hlbosgmrak', 'hpmsd', 10, 0)).toEqual(9);
      expect(findLastNotof('pqfhsgilen', 'qnpor', 10, 1)).toEqual(9);
      expect(findLastNotof('gqtjsbdckh', 'otdma', 10, 2)).toEqual(9);
      expect(findLastNotof('cfkqpjlegi', 'efhjg', 10, 4)).toEqual(9);
      expect(findLastNotof('beanrfodgj', 'odpte', 10, 5)).toEqual(9);
      expect(findLastNotof('adtkqpbjfi', 'bctdgfmolr', 10, 0)).toEqual(9);
      expect(findLastNotof('iomkfthagj', 'oaklidrbqg', 10, 1)).toEqual(9);

      expect(findLastNotof('sdpcilonqj', 'dnjfsagktr', 10, 5)).toEqual(8);
      expect(findLastNotof('gtfbdkqeml', 'nejaktmiqg', 10, 9)).toEqual(9);
      expect(findLastNotof('bmeqgcdorj', 'pjqonlebsf', 10, 10)).toEqual(8);
      expect(findLastNotof('etqlcanmob', 'dshmnbtolcjepgaikfqr', 10, 0)).toEqual(9);
      expect(findLastNotof('roqmkbdtia', 'iogfhpabtjkqlrnemcds', 10, 1)).toEqual(9);
      expect(findLastNotof('kadsithljf', 'ngridfabjsecpqltkmoh', 10, 10)).toEqual(7);
      expect(findLastNotof('sgtkpbfdmh', 'athmknplcgofrqejsdib', 10, 19)).toEqual(5);
      expect(findLastNotof('qgmetnabkl', 'ldobhmqcafnjtkeisgrp', 10, 20)).toEqual(-1);
      expect(findLastNotof('cqjohampgd', '', 11, 0)).toEqual(9);
      expect(findLastNotof('hobitmpsan', 'aocjb', 11, 0)).toEqual(9);
      expect(findLastNotof('tjehkpsalm', 'jbrnk', 11, 1)).toEqual(9);
      expect(findLastNotof('ngfbojitcl', 'tqedg', 11, 2)).toEqual(9);
      expect(findLastNotof('rcfkdbhgjo', 'nqskp', 11, 4)).toEqual(9);
      expect(findLastNotof('qghptonrea', 'eaqkl', 11, 5)).toEqual(7);
      expect(findLastNotof('hnprfgqjdl', 'reaoicljqm', 11, 0)).toEqual(9);
      expect(findLastNotof('hlmgabenti', 'lsftgajqpm', 11, 1)).toEqual(9);
      expect(findLastNotof('ofcjanmrbs', 'rlpfogmits', 11, 5)).toEqual(9);
      expect(findLastNotof('jqedtkornm', 'shkncmiaqj', 11, 9)).toEqual(7);
      expect(findLastNotof('rfedlasjmg', 'fpnatrhqgs', 11, 10)).toEqual(8);
      expect(findLastNotof('talpqjsgkm', 'sjclemqhnpdbgikarfot', 11, 0)).toEqual(9);
      expect(findLastNotof('lrkcbtqpie', 'otcmedjikgsfnqbrhpla', 11, 1)).toEqual(9);
      expect(findLastNotof('cipogdskjf', 'bonsaefdqiprkhlgtjcm', 11, 10)).toEqual(8);
      expect(findLastNotof('nqedcojahi', 'egpscmahijlfnkrodqtb', 11, 19)).toEqual(-1);
      expect(findLastNotof('hefnrkmctj', 'kmqbfepjthgilscrndoa', 11, 20)).toEqual(-1);
      expect(findLastNotof('atqirnmekfjolhpdsgcb', '', 0, 0)).toEqual(0);
      expect(findLastNotof('echfkmlpribjnqsaogtd', 'prboq', 0, 0)).toEqual(0);
      expect(findLastNotof('qnhiftdgcleajbpkrosm', 'fjcqh', 0, 1)).toEqual(0);
      expect(findLastNotof('chamfknorbedjitgslpq', 'fmosa', 0, 2)).toEqual(0);
      expect(findLastNotof('njhqpibfmtlkaecdrgso', 'qdbok', 0, 4)).toEqual(0);
      expect(findLastNotof('ebnghfsqkprmdcljoiat', 'amslg', 0, 5)).toEqual(0);
      expect(findLastNotof('letjomsgihfrpqbkancd', 'smpltjneqb', 0, 0)).toEqual(0);
      expect(findLastNotof('nblgoipcrqeaktshjdmf', 'flitskrnge', 0, 1)).toEqual(0);
      expect(findLastNotof('cehkbngtjoiflqapsmrd', 'pgqihmlbef', 0, 5)).toEqual(0);
      expect(findLastNotof('mignapfoklbhcqjetdrs', 'cfpdqjtgsb', 0, 9)).toEqual(0);
      expect(findLastNotof('ceatbhlsqjgpnokfrmdi', 'htpsiaflom', 0, 10)).toEqual(0);
      expect(findLastNotof('ocihkjgrdelpfnmastqb', 'kpjfiaceghsrdtlbnomq', 0, 0)).toEqual(0);
      expect(findLastNotof('noelgschdtbrjfmiqkap', 'qhtbomidljgafneksprc', 0, 1)).toEqual(0);
      expect(findLastNotof('dkclqfombepritjnghas', 'nhtjobkcefldimpsaqgr', 0, 10)).toEqual(0);
      expect(findLastNotof('miklnresdgbhqcojftap', 'prabcjfqnoeskilmtgdh', 0, 19)).toEqual(-1);
      expect(findLastNotof('htbcigojaqmdkfrnlsep', 'dtrgmchilkasqoebfpjn', 0, 20)).toEqual(-1);
      expect(findLastNotof('febhmqtjanokscdirpgl', '', 1, 0)).toEqual(1);
      expect(findLastNotof('loakbsqjpcrdhftniegm', 'sqome', 1, 0)).toEqual(1);
      expect(findLastNotof('reagphsqflbitdcjmkno', 'smfte', 1, 1)).toEqual(1);
      expect(findLastNotof('jitlfrqemsdhkopncabg', 'ciboh', 1, 2)).toEqual(0);
      expect(findLastNotof('mhtaepscdnrjqgbkifol', 'haois', 1, 4)).toEqual(0);
      expect(findLastNotof('tocesrfmnglpbjihqadk', 'abfki', 1, 5)).toEqual(1);
      expect(findLastNotof('lpfmctjrhdagneskbqoi', 'frdkocntmq', 1, 0)).toEqual(1);
      expect(findLastNotof('lsmqaepkdhncirbtjfgo', 'oasbpedlnr', 1, 1)).toEqual(1);
      expect(findLastNotof('epoiqmtldrabnkjhcfsg', 'kltqmhgand', 1, 5)).toEqual(1);
      expect(findLastNotof('emgasrilpknqojhtbdcf', 'gdtfjchpmr', 1, 9)).toEqual(0);
      expect(findLastNotof('hnfiagdpcklrjetqbsom', 'ponmcqblet', 1, 10)).toEqual(0);
      expect(findLastNotof('nsdfebgajhmtricpoklq', 'sgphqdnofeiklatbcmjr', 1, 0)).toEqual(1);
      expect(findLastNotof('atjgfsdlpobmeiqhncrk', 'ljqprsmigtfoneadckbh', 1, 1)).toEqual(1);
      expect(findLastNotof('sitodfgnrejlahcbmqkp', 'ligeojhafnkmrcsqtbdp', 1, 10)).toEqual(0);
      expect(findLastNotof('fraghmbiceknltjpqosd', 'lsimqfnjarbopedkhcgt', 1, 19)).toEqual(-1);
      expect(findLastNotof('pmafenlhqtdbkirjsogc', 'abedmfjlghniorcqptks', 1, 20)).toEqual(-1);
      expect(findLastNotof('pihgmoeqtnakrjslcbfd', '', 10, 0)).toEqual(10);
      expect(findLastNotof('gjdkeprctqblnhiafsom', 'hqtoa', 10, 0)).toEqual(10);
      expect(findLastNotof('mkpnblfdsahrcqijteog', 'cahif', 10, 1)).toEqual(10);
      expect(findLastNotof('gckarqnelodfjhmbptis', 'kehis', 10, 2)).toEqual(10);
      expect(findLastNotof('gqpskidtbclomahnrjfe', 'kdlmh', 10, 4)).toEqual(9);
      expect(findLastNotof('pkldjsqrfgitbhmaecno', 'paeql', 10, 5)).toEqual(10);
      expect(findLastNotof('aftsijrbeklnmcdqhgop', 'aghoqiefnb', 10, 0)).toEqual(10);
      expect(findLastNotof('mtlgdrhafjkbiepqnsoc', 'jrbqaikpdo', 10, 1)).toEqual(10);
      expect(findLastNotof('pqgirnaefthokdmbsclj', 'smjonaeqcl', 10, 5)).toEqual(10);
      expect(findLastNotof('kpdbgjmtherlsfcqoina', 'eqbdrkcfah', 10, 9)).toEqual(8);
      expect(findLastNotof('jrlbothiknqmdgcfasep', 'kapmsienhf', 10, 10)).toEqual(10);
      expect(findLastNotof('mjogldqferckabinptsh', 'jpqotrlenfcsbhkaimdg', 10, 0)).toEqual(10);
      expect(findLastNotof('apoklnefbhmgqcdrisjt', 'jlbmhnfgtcqprikeados', 10, 1)).toEqual(10);
      expect(findLastNotof('ifeopcnrjbhkdgatmqls', 'stgbhfmdaljnpqoicker', 10, 10)).toEqual(8);
      expect(findLastNotof('ckqhaiesmjdnrgolbtpf', 'oihcetflbjagdsrkmqpn', 10, 19)).toEqual(-1);
      expect(findLastNotof('bnlgapfimcoterskqdjh', 'adtclebmnpjsrqfkigoh', 10, 20)).toEqual(-1);
      expect(findLastNotof('kgdlrobpmjcthqsafeni', '', 19, 0)).toEqual(19);
      expect(findLastNotof('dfkechomjapgnslbtqir', 'beafg', 19, 0)).toEqual(19);
      expect(findLastNotof('rloadknfbqtgmhcsipje', 'iclat', 19, 1)).toEqual(19);
      expect(findLastNotof('mgjhkolrnadqbpetcifs', 'rkhnf', 19, 2)).toEqual(19);
      expect(findLastNotof('cmlfakiojdrgtbsphqen', 'clshq', 19, 4)).toEqual(19);
      expect(findLastNotof('kghbfipeomsntdalrqjc', 'dtcoj', 19, 5)).toEqual(17);
      expect(findLastNotof('eldiqckrnmtasbghjfpo', 'rqosnjmfth', 19, 0)).toEqual(19);
      expect(findLastNotof('abqjcfedgotihlnspkrm', 'siatdfqglh', 19, 1)).toEqual(19);
      expect(findLastNotof('qfbadrtjsimkolcenhpg', 'mrlshtpgjq', 19, 5)).toEqual(19);
      expect(findLastNotof('abseghclkjqifmtodrnp', 'adlcskgqjt', 19, 9)).toEqual(19);
      expect(findLastNotof('ibmsnlrjefhtdokacqpg', 'drshcjknaf', 19, 10)).toEqual(19);
      expect(findLastNotof('mrkfciqjebaponsthldg', 'etsaqroinghpkjdlfcbm', 19, 0)).toEqual(19);
      expect(findLastNotof('mjkticdeoqshpalrfbgn', 'sgepdnkqliambtrocfhj', 19, 1)).toEqual(19);
      expect(findLastNotof('rqnoclbdejgiphtfsakm', 'nlmcjaqgbsortfdihkpe', 19, 10)).toEqual(18);
      expect(findLastNotof('plkqbhmtfaeodjcrsing', 'racfnpmosldibqkghjet', 19, 19)).toEqual(7);
      expect(findLastNotof('oegalhmstjrfickpbndq', 'fjhdsctkqeiolagrnmbp', 19, 20)).toEqual(-1);
      expect(findLastNotof('rdtgjcaohpblniekmsfq', '', 20, 0)).toEqual(19);
      expect(findLastNotof('ofkqbnjetrmsaidphglc', 'ejanp', 20, 0)).toEqual(19);
      expect(findLastNotof('grkpahljcftesdmonqib', 'odife', 20, 1)).toEqual(19);
      expect(findLastNotof('jimlgbhfqkteospardcn', 'okaqd', 20, 2)).toEqual(19);
      expect(findLastNotof('gftenihpmslrjkqadcob', 'lcdbi', 20, 4)).toEqual(18);
      expect(findLastNotof('bmhldogtckrfsanijepq', 'fsqbj', 20, 5)).toEqual(18);
      expect(findLastNotof('nfqkrpjdesabgtlcmoih', 'bigdomnplq', 20, 0)).toEqual(19);
      expect(findLastNotof('focalnrpiqmdkstehbjg', 'apiblotgcd', 20, 1)).toEqual(19);
      expect(findLastNotof('rhqdspkmebiflcotnjga', 'acfhdenops', 20, 5)).toEqual(18);
      expect(findLastNotof('rahdtmsckfboqlpniegj', 'jopdeamcrk', 20, 9)).toEqual(18);
      expect(findLastNotof('fbkeiopclstmdqranjhg', 'trqncbkgmh', 20, 10)).toEqual(17);
      expect(findLastNotof('lifhpdgmbconstjeqark', 'tomglrkencbsfjqpihda', 20, 0)).toEqual(19);

      expect(findLastNotof('pboqganrhedjmltsicfk', 'gbkhdnpoietfcmrslajq', 20, 1)).toEqual(19);
      expect(findLastNotof('klchabsimetjnqgorfpd', 'rtfnmbsglkjaichoqedp', 20, 10)).toEqual(19);
      expect(findLastNotof('sirfgmjqhctndbklaepo', 'ohkmdpfqbsacrtjnlgei', 20, 19)).toEqual(1);
      expect(findLastNotof('rlbdsiceaonqjtfpghkm', 'dlbrteoisgphmkncajfq', 20, 20)).toEqual(-1);
      expect(findLastNotof('ecgdanriptblhjfqskom', '', 21, 0)).toEqual(19);
      expect(findLastNotof('fdmiarlpgcskbhoteqjn', 'sjrlo', 21, 0)).toEqual(19);
      expect(findLastNotof('rlbstjqopignecmfadkh', 'qjpor', 21, 1)).toEqual(19);
      expect(findLastNotof('grjpqmbshektdolcafni', 'odhfn', 21, 2)).toEqual(19);
      expect(findLastNotof('sakfcohtqnibprjmlged', 'qtfin', 21, 4)).toEqual(19);
      expect(findLastNotof('mjtdglasihqpocebrfkn', 'hpqfo', 21, 5)).toEqual(19);
      expect(findLastNotof('okaplfrntghqbmeicsdj', 'fabmertkos', 21, 0)).toEqual(19);
      expect(findLastNotof('sahngemrtcjidqbklfpo', 'brqtgkmaej', 21, 1)).toEqual(19);
      expect(findLastNotof('dlmsipcnekhbgoaftqjr', 'nfrdeihsgl', 21, 5)).toEqual(18);
      expect(findLastNotof('ahegrmqnoiklpfsdbcjt', 'hlfrosekpi', 21, 9)).toEqual(19);
      expect(findLastNotof('hdsjbnmlegtkqripacof', 'atgbkrjdsm', 21, 10)).toEqual(19);
      expect(findLastNotof('pcnedrfjihqbalkgtoms', 'blnrptjgqmaifsdkhoec', 21, 0)).toEqual(19);
      expect(findLastNotof('qjidealmtpskrbfhocng', 'ctpmdahebfqjgknloris', 21, 1)).toEqual(19);
      expect(findLastNotof('qeindtagmokpfhsclrbj', 'apnkeqthrmlbfodiscgj', 21, 10)).toEqual(19);
      expect(findLastNotof('kpfegbjhsrnodltqciam', 'jdgictpframeoqlsbknh', 21, 19)).toEqual(7);
      expect(findLastNotof('hnbrcplsjfgiktoedmaq', 'qprlsfojamgndekthibc', 21, 20)).toEqual(-1);
    });
  });
});
