import networks from './networks';

const _coins: CoinInfo[] = [
  {
    name: 'Asiacoin',
    symbol: 'AC',
    network: networks.asiacoin,
    slug: 'asiacoin',
    coinType: 51,
  },
  {
    name: 'Adcoin',
    symbol: 'ACC',
    network: networks.adcoin,
    slug: 'adcoin',
    coinType: 161,
  },
  {
    name: 'Argoneum',
    symbol: 'AGM',
    network: networks.argoneum,
    slug: 'argoneum',
    coinType: 421,
  },
  {
    name: 'Aryacoin',
    symbol: 'ARYA',
    network: networks.aryacoin,
    slug: 'aryacoin',
    coinType: 357,
  },
  {
    name: 'Cosmos Hub',
    symbol: 'ATOM',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 118,
  },
  {
    name: 'Auroracoin',
    symbol: 'AUR',
    network: networks.auroracoin,
    slug: 'auroracoin',
    coinType: 85,
  },
  {
    name: 'Axe',
    symbol: 'AXE',
    network: networks.axe,
    slug: 'axe',
    coinType: 4242,
  },
  {
    name: 'ANON',
    symbol: 'ANON',
    network: networks.anon,
    slug: 'anon',
    coinType: 220,
  },
  {
    name: 'Bolivarcoin',
    symbol: 'BOLI',
    network: networks.bolivarcoin,
    slug: 'bolivarcoin',
    coinType: 278,
  },
  {
    name: 'Bitcoin Atom',
    symbol: 'BCA',
    network: networks.atom,
    slug: 'atom',
    coinType: 185,
  },
  {
    name: 'Beetlecoin',
    symbol: 'BEET',
    network: networks.beetlecoin,
    slug: 'beetlecoin',
    coinType: 800,
  },
  {
    name: 'Belacoin',
    symbol: 'BELA',
    network: networks.belacoin,
    slug: 'belacoin',
    coinType: 73,
  },
  {
    name: 'BlackCoin',
    symbol: 'BLK',
    network: networks.blackcoin,
    slug: 'blackcoin',
    coinType: 10,
  },
  {
    name: 'Blocknode',
    symbol: 'BND',
    network: networks.blocknode,
    slug: 'blocknode',
    coinType: 2941,
  },
  {
    name: 'Blocknode Testnet',
    symbol: 'tBND',
    network: networks.blocknode_testnet,
    slug: 'blocknode_testnet',
    coinType: 1,
  },
  {
    name: 'Britcoin',
    symbol: 'BRIT',
    network: networks.britcoin,
    slug: 'britcoin',
    coinType: 70,
  },
  {
    name: 'Bitsend',
    symbol: 'BSD',
    network: networks.bitsend,
    slug: 'bitsend',
    coinType: 91,
  },
  {
    name: 'BlockStamp',
    symbol: 'BST',
    network: networks.blockstamp,
    slug: 'blockstamp',
    coinType: 254,
  },
  {
    name: 'Bata',
    symbol: 'BTA',
    network: networks.bata,
    slug: 'bata',
    coinType: 89,
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 0,
  },
  {
    name: 'Bitcoin RegTest',
    symbol: 'BTC',
    network: networks.regtest,
    slug: 'regtest',
    coinType: 1,
  },
  {
    name: 'Bitcoin Testnet',
    symbol: 'BTC',
    network: networks.bitcoin_testnet,
    slug: 'bitcoin_testnet',
    coinType: 1,
  },
  {
    name: 'Bitcoin Green',
    symbol: 'BITG',
    network: networks.bitcoingreen,
    slug: 'bitcoingreen',
    coinType: 222,
  },
  {
    name: 'Bitcoin Private',
    symbol: 'BTCP',
    network: networks.bitcoinprivate,
    slug: 'bitcoinprivate',
    coinType: 183,
  },
  {
    name: 'Bitcoin Private Testnet',
    symbol: 'BTCPt',
    network: networks.bitcoinprivatetestnet,
    slug: 'bitcoinprivatetestnet',
    coinType: 1,
  },
  {
    name: 'Binance Smart Chain',
    symbol: 'BSC',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 60,
  },
  {
    name: 'BitcoinSV',
    symbol: 'BSV',
    network: networks.bitcoinsv,
    slug: 'bitcoinsv',
    coinType: 236,
  },
  {
    name: 'Bitcoinz',
    symbol: 'BTCZ',
    network: networks.bitcoinz,
    slug: 'bitcoinz',
    coinType: 177,
  },
  {
    name: 'BitCloud',
    symbol: 'BTDX',
    network: networks.bitcloud,
    slug: 'bitcloud',
    coinType: 218,
  },
  {
    name: 'Bitcoin Gold',
    symbol: 'BTG',
    network: networks.bgold,
    slug: 'bgold',
    coinType: 156,
  },
  {
    name: 'Bitcore',
    symbol: 'BTX',
    network: networks.bitcore,
    slug: 'bitcore',
    coinType: 160,
  },
  {
    name: 'Cannacoin',
    symbol: 'CCN',
    network: networks.cannacoin,
    slug: 'cannacoin',
    coinType: 19,
  },
  {
    name: 'Cryptoescudo',
    symbol: 'CESC',
    network: networks.cannacoin,
    slug: 'cannacoin',
    coinType: 111,
  },
  {
    name: 'Canadaecoin',
    symbol: 'CDN',
    network: networks.canadaecoin,
    slug: 'canadaecoin',
    coinType: 34,
  },
  {
    name: 'Clams',
    symbol: 'CLAM',
    network: networks.clam,
    slug: 'clam',
    coinType: 23,
  },
  {
    name: 'Callisto',
    symbol: 'CLO',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 820,
  },
  {
    name: 'Clubcoin',
    symbol: 'CLUB',
    network: networks.clubcoin,
    slug: 'clubcoin',
    coinType: 79,
  },
  {
    name: 'Compcoin',
    symbol: 'CMP',
    network: networks.compcoin,
    slug: 'compcoin',
    coinType: 71,
  },
  {
    name: 'CPUchain',
    symbol: 'CPU',
    network: networks.cpuchain,
    slug: 'cpuchain',
    coinType: 363,
  },
  {
    name: 'Crave',
    symbol: 'CRAVE',
    network: networks.crave,
    slug: 'crave',
    coinType: 186,
  },
  {
    name: 'CranePay',
    symbol: 'CRP',
    network: networks.cranepay,
    slug: 'cranepay',
    coinType: 2304,
  },
  {
    name: 'Crown (Legacy)',
    symbol: 'CRW',
    network: networks.crown,
    slug: 'crown',
    coinType: 72,
  },
  {
    name: 'Crown',
    symbol: 'CRW',
    network: networks.crown,
    slug: 'crown',
    coinType: 72,
  },
  {
    name: 'CasinoCoin',
    symbol: 'CSC',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 359,
  },
  {
    name: 'Dash',
    symbol: 'DASH',
    network: networks.dash,
    slug: 'dash',
    coinType: 5,
  },
  {
    name: 'Dash Testnet',
    symbol: 'DASH',
    network: networks.dashtn,
    slug: 'dashtn',
    coinType: 1,
  },
  {
    name: 'Defcoin',
    symbol: 'DFC',
    network: networks.defcoin,
    slug: 'defcoin',
    coinType: 1337,
  },
  {
    name: 'Digibyte',
    symbol: 'DGB',
    network: networks.digibyte,
    slug: 'digibyte',
    coinType: 20,
  },
  {
    name: 'Digitalcoin',
    symbol: 'DGC',
    network: networks.digitalcoin,
    slug: 'digitalcoin',
    coinType: 18,
  },
  {
    name: 'DIVI',
    symbol: 'DIVI',
    network: networks.divi,
    slug: 'divi',
    coinType: 301,
  },
  {
    name: 'DIVI Testnet',
    symbol: 'DIVI',
    network: networks.divitestnet,
    slug: 'divitestnet',
    coinType: 1,
  },
  {
    name: 'Diamond',
    symbol: 'DMD',
    network: networks.diamond,
    slug: 'diamond',
    coinType: 152,
  },
  {
    name: 'Denarius',
    symbol: 'DNR',
    network: networks.denarius,
    slug: 'denarius',
    coinType: 116,
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    network: networks.dogecoin,
    slug: 'dogecoin',
    coinType: 3,
  },
  {
    name: 'Dogecoin Testnet',
    symbol: 'DOGEt',
    network: networks.dogecointestnet,
    slug: 'dogecointestnet',
    coinType: 1,
  },
  {
    name: 'DEXON',
    symbol: 'DXN',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 237,
  },
  {
    name: 'Ecoin',
    symbol: 'ECN',
    network: networks.ecoin,
    slug: 'ecoin',
    coinType: 115,
  },
  {
    name: 'Edrcoin',
    symbol: 'EDRC',
    network: networks.edrcoin,
    slug: 'edrcoin',
    coinType: 56,
  },
  {
    name: 'Egulden',
    symbol: 'EFL',
    network: networks.egulden,
    slug: 'egulden',
    coinType: 78,
  },
  {
    name: 'Elastos',
    symbol: 'ELA',
    network: networks.elastos,
    slug: 'elastos',
    coinType: 2305,
  },
  {
    name: 'Ellaism',
    symbol: 'ELLA',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 163,
  },
  {
    name: 'Einsteinium',
    symbol: 'EMC2',
    network: networks.einsteinium,
    slug: 'einsteinium',
    coinType: 41,
  },
  {
    name: 'Europecoin',
    symbol: 'ERC',
    network: networks.europecoin,
    slug: 'europecoin',
    coinType: 151,
  },
  {
    name: 'EtherCore',
    symbol: 'ERE',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 466,
  },
  {
    name: 'Ethersocial Network',
    symbol: 'ESN',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 31102,
  },
  {
    name: 'Ethereum Classic',
    symbol: 'ETC',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 61,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 60,
  },
  {
    name: 'EnergyWeb',
    symbol: 'EWT',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 246,
  },
  {
    name: 'Exclusivecoin',
    symbol: 'EXCL',
    network: networks.exclusivecoin,
    slug: 'exclusivecoin',
    coinType: 190,
  },
  {
    name: 'ExchangeCoin',
    symbol: 'EXCC',
    network: networks.exchangecoin,
    slug: 'exchangecoin',
    coinType: 0,
  },
  {
    name: 'Expanse',
    symbol: 'EXP',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 40,
  },
  {
    name: 'Foundation for Interwallet Operability',
    symbol: 'FIO',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 235,
  },
  {
    name: 'Firo (Zcoin rebrand)',
    symbol: 'FIRO',
    network: networks.firo,
    slug: 'firo',
    coinType: 136,
  },
  {
    name: 'FIX',
    symbol: 'FIX',
    network: networks.fix,
    slug: 'fix',
    coinType: 336,
  },
  {
    name: 'FIX Testnet',
    symbol: 'FIX',
    network: networks.fixtestnet,
    slug: 'fixtestnet',
    coinType: 1,
  },
  {
    name: 'Fujicoin',
    symbol: 'FJC',
    network: networks.fujicoin,
    slug: 'fujicoin',
    coinType: 75,
  },
  {
    name: 'Flashcoin',
    symbol: 'FLASH',
    network: networks.flashcoin,
    slug: 'flashcoin',
    coinType: 120,
  },
  {
    name: 'Firstcoin',
    symbol: 'FRST',
    network: networks.firstcoin,
    slug: 'firstcoin',
    coinType: 167,
  },
  {
    name: 'Feathercoin',
    symbol: 'FTC',
    network: networks.feathercoin,
    slug: 'feathercoin',
    coinType: 8,
  },
  {
    name: 'GameCredits',
    symbol: 'GAME',
    network: networks.game,
    slug: 'game',
    coinType: 101,
  },
  {
    name: 'Gobyte',
    symbol: 'GBX',
    network: networks.gobyte,
    slug: 'gobyte',
    coinType: 176,
  },
  {
    name: 'GCRCoin',
    symbol: 'GCR',
    network: networks.gcr,
    slug: 'gcr',
    coinType: 79,
  },
  {
    name: 'Gridcoin',
    symbol: 'GRC',
    network: networks.gridcoin,
    slug: 'gridcoin',
    coinType: 84,
  },
  {
    name: 'Groestlcoin',
    symbol: 'GRS',
    network: networks.groestlcoin,
    slug: 'groestlcoin',
    coinType: 17,
  },
  {
    name: 'Groestlcoin Testnet',
    symbol: 'GRS',
    network: networks.groestlcointestnet,
    slug: 'groestlcointestnet',
    coinType: 1,
  },
  {
    name: 'Helleniccoin',
    symbol: 'HNC',
    network: networks.helleniccoin,
    slug: 'helleniccoin',
    coinType: 168,
  },
  {
    name: 'Hush (Legacy)',
    symbol: 'HUSH',
    network: networks.hush,
    slug: 'hush',
    coinType: 197,
  },
  {
    name: 'Hush3',
    symbol: 'HUSH',
    network: networks.hush3,
    slug: 'hush3',
    coinType: 197,
  },
  {
    name: 'Insane',
    symbol: 'INSN',
    network: networks.insane,
    slug: 'insane',
    coinType: 68,
  },
  {
    name: 'Iop',
    symbol: 'IOP',
    network: networks.iop,
    slug: 'iop',
    coinType: 66,
  },
  {
    name: 'Starname',
    symbol: 'IOV',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 234,
  },
  {
    name: 'Ixcoin',
    symbol: 'IXC',
    network: networks.ixcoin,
    slug: 'ixcoin',
    coinType: 86,
  },
  {
    name: 'Jumbucks',
    symbol: 'JBS',
    network: networks.jumbucks,
    slug: 'jumbucks',
    coinType: 26,
  },
  {
    name: 'Komodo',
    symbol: 'KMD',
    network: networks.komodo,
    slug: 'komodo',
    coinType: 141,
  },
  {
    name: 'Kobocoin',
    symbol: 'KOBO',
    network: networks.kobocoin,
    slug: 'kobocoin',
    coinType: 196,
  },
  {
    name: 'Library Credits',
    symbol: 'LBC',
    network: networks.lbry,
    slug: 'lbry',
    coinType: 140,
  },
  {
    name: 'Litecoincash',
    symbol: 'LCC',
    network: networks.litecoincash,
    slug: 'litecoincash',
    coinType: 192,
  },
  {
    name: 'Landcoin',
    symbol: 'LDCN',
    network: networks.landcoin,
    slug: 'landcoin',
    coinType: 63,
  },
  {
    name: 'Linx',
    symbol: 'LINX',
    network: networks.linx,
    slug: 'linx',
    coinType: 114,
  },
  {
    name: 'Lkrcoin',
    symbol: 'LKR',
    network: networks.lkrcoin,
    slug: 'lkrcoin',
    coinType: 557,
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    network: networks.litecoin,
    slug: 'litecoin',
    coinType: 2,
  },
  {
    name: 'Litecoin Testnet',
    symbol: 'LTCt',
    network: networks.litecointestnet,
    slug: 'litecointestnet',
    coinType: 1,
  },
  {
    name: 'LitecoinZ',
    symbol: 'LTZ',
    network: networks.litecoinz,
    slug: 'litecoinz',
    coinType: 221,
  },
  {
    name: 'Terra',
    symbol: 'LUNA',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 330,
  },
  {
    name: 'Lynx',
    symbol: 'LYNX',
    network: networks.lynx,
    slug: 'lynx',
    coinType: 191,
  },
  {
    name: 'Maza',
    symbol: 'MAZA',
    network: networks.maza,
    slug: 'maza',
    coinType: 13,
  },
  {
    name: 'Megacoin',
    symbol: 'MEC',
    network: networks.megacoin,
    slug: 'megacoin',
    coinType: 217,
  },
  {
    name: 'MIX',
    symbol: 'MIX',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 76,
  },
  {
    name: 'Minexcoin',
    symbol: 'MNX',
    network: networks.minexcoin,
    slug: 'minexcoin',
    coinType: 182,
  },
  {
    name: 'Monacoin',
    symbol: 'MONA',
    network: networks.monacoin,
    slug: 'monacoin',
    coinType: 22,
  },
  {
    name: 'Monkey Project',
    symbol: 'MONK',
    network: networks.monkeyproject,
    slug: 'monkeyproject',
    coinType: 214,
  },
  {
    name: 'MOAC',
    symbol: 'MOAC',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 314,
  },
  {
    name: 'Musicoin',
    symbol: 'MUSIC',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 184,
  },

  {
    name: 'Navcoin',
    symbol: 'NAV',
    network: networks.navcoin,
    slug: 'navcoin',
    coinType: 130,
  },
  {
    name: 'Nebulas',
    symbol: 'NAS',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 2718,
  },
  {
    name: 'Neblio',
    symbol: 'NEBL',
    network: networks.neblio,
    slug: 'neblio',
    coinType: 146,
  },
  {
    name: 'Neoscoin',
    symbol: 'NEOS',
    network: networks.neoscoin,
    slug: 'neoscoin',
    coinType: 25,
  },
  {
    name: 'NIX Platform',
    symbol: 'NIX',
    network: networks.nix,
    slug: 'nix',
    coinType: 400,
  },
  {
    name: 'Gulden',
    symbol: 'NLG',
    network: networks.gulden,
    slug: 'gulden',
    coinType: 87,
  },
  {
    name: 'Namecoin',
    symbol: 'NMC',
    network: networks.namecoin,
    slug: 'namecoin',
    coinType: 7,
  },
  {
    name: 'Energi',
    symbol: 'NRG',
    network: networks.energi,
    slug: 'energi',
    coinType: 204,
  },
  {
    name: 'Neurocoin',
    symbol: 'NRO',
    network: networks.neurocoin,
    slug: 'neurocoin',
    coinType: 110,
  },
  {
    name: 'Nushares',
    symbol: 'NSR',
    network: networks.nushares,
    slug: 'nushares',
    coinType: 11,
  },
  {
    name: 'Newyorkc',
    symbol: 'NYC',
    network: networks.newyorkc,
    slug: 'newyorkc',
    coinType: 179,
  },
  {
    name: 'Novacoin',
    symbol: 'NVC',
    network: networks.novacoin,
    slug: 'novacoin',
    coinType: 50,
  },
  {
    name: 'Okcash',
    symbol: 'OK',
    network: networks.okcash,
    slug: 'okcash',
    coinType: 69,
  },
  {
    name: 'Omnicore',
    symbol: 'OMNI',
    network: networks.omnicore,
    slug: 'omnicore',
    coinType: 200,
  },
  {
    name: 'DeepOnion',
    symbol: 'ONION',
    network: networks.deeponion,
    slug: 'deeponion',
    coinType: 305,
  },
  {
    name: 'Onixcoin',
    symbol: 'ONX',
    network: networks.onixcoin,
    slug: 'onixcoin',
    coinType: 174,
  },
  {
    name: 'Particl',
    symbol: 'PART',
    network: networks.particl,
    slug: 'particl',
    coinType: 44,
  },
  {
    name: 'Phore',
    symbol: 'PHR',
    network: networks.phore,
    slug: 'phore',
    coinType: 444,
  },
  {
    name: 'Pinkcoin',
    symbol: 'PINK',
    network: networks.pinkcoin,
    slug: 'pinkcoin',
    coinType: 117,
  },
  {
    name: 'Pirl',
    symbol: 'PIRL',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 164,
  },
  {
    name: 'PIVX',
    symbol: 'PIVX',
    network: networks.pivx,
    slug: 'pivx',
    coinType: 119,
  },
  {
    name: 'PIVX Testnet',
    symbol: 'PIVX',
    network: networks.pivxtestnet,
    slug: 'pivxtestnet',
    coinType: 1,
  },
  {
    name: 'Poa',
    symbol: 'POA',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 178,
  },
  {
    name: 'POSWcoin',
    symbol: 'POSW',
    network: networks.poswcoin,
    slug: 'poswcoin',
    coinType: 47,
  },
  {
    name: 'Potcoin',
    symbol: 'POT',
    network: networks.potcoin,
    slug: 'potcoin',
    coinType: 81,
  },
  {
    name: 'Peercoin',
    symbol: 'PPC',
    network: networks.peercoin,
    slug: 'peercoin',
    coinType: 6,
  },
  {
    name: 'ProjectCoin',
    symbol: 'PRJ',
    network: networks.projectcoin,
    slug: 'projectcoin',
    coinType: 533,
  },
  {
    name: 'Pesobit',
    symbol: 'PSB',
    network: networks.pesobit,
    slug: 'pesobit',
    coinType: 62,
  },
  {
    name: 'Putincoin',
    symbol: 'PUT',
    network: networks.putincoin,
    slug: 'putincoin',
    coinType: 122,
  },
  {
    name: 'Rapids',
    symbol: 'RPD',
    network: networks.rapids,
    slug: 'rapids',
    coinType: 320,
  },
  {
    name: 'Ravencoin',
    symbol: 'RVN',
    network: networks.ravencoin,
    slug: 'ravencoin',
    coinType: 175,
  },
  {
    name: 'Rubycoin',
    symbol: 'RBY',
    network: networks.rubycoin,
    slug: 'rubycoin',
    coinType: 16,
  },
  {
    name: 'Reddcoin',
    symbol: 'RDD',
    network: networks.reddcoin,
    slug: 'reddcoin',
    coinType: 4,
  },
  {
    name: 'Ritocoin',
    symbol: 'RITO',
    network: networks.ritocoin,
    slug: 'ritocoin',
    coinType: 19169,
  },
  {
    name: 'THORChain',
    symbol: 'RUNE',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 931,
  },
  {
    name: 'RevolutionVR',
    symbol: 'RVR',
    network: networks.revolutionvr,
    slug: 'revolutionvr',
    coinType: 129,
  },
  {
    name: 'Safecoin',
    symbol: 'SAFE',
    network: networks.safecoin,
    slug: 'safecoin',
    coinType: 19165,
  },
  {
    name: 'Scribe',
    symbol: 'SCRIBE',
    network: networks.scribe,
    slug: 'scribe',
    coinType: 545,
  },
  {
    name: 'Salus',
    symbol: 'SLS',
    network: networks.salus,
    slug: 'salus',
    coinType: 63,
  },
  {
    name: 'ShadowCash',
    symbol: 'SDC',
    network: networks.shadow,
    slug: 'shadow',
    coinType: 35,
  },
  {
    name: 'ShadowCash Testnet',
    symbol: 'SDC',
    network: networks.shadowtn,
    slug: 'shadowtn',
    coinType: 1,
  },
  {
    name: 'Slimcoin',
    symbol: 'SLM',
    network: networks.slimcoin,
    slug: 'slimcoin',
    coinType: 63,
  },
  {
    name: 'Slimcoin Testnet',
    symbol: 'SLM',
    network: networks.slimcointn,
    slug: 'slimcointn',
    coinType: 111,
  },
  {
    name: 'Solarcoin',
    symbol: 'SLR',
    network: networks.solarcoin,
    slug: 'solarcoin',
    coinType: 58,
  },
  {
    name: 'Smileycoin',
    symbol: 'SMLY',
    network: networks.smileycoin,
    slug: 'smileycoin',
    coinType: 59,
  },
  {
    name: 'Stash Testnet',
    symbol: 'STASH',
    network: networks.stashtn,
    slug: 'stashtn',
    coinType: 0xcafe,
  },
  {
    name: 'Stratis',
    symbol: 'STRAT',
    network: networks.stratis,
    slug: 'stratis',
    coinType: 105,
  },
  {
    name: 'Sugarchain',
    symbol: 'SUGAR',
    network: networks.sugarchain,
    slug: 'sugarchain',
    coinType: 408,
  },
  {
    name: 'Sugarchain Testnet',
    symbol: 'TUGAR',
    network: networks.sugarchaintestnet,
    slug: 'sugarchaintestnet',
    coinType: 408,
  },
  {
    name: 'Jingtum',
    symbol: 'SWTC',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 315,
  },
  {
    name: 'Stratis Testnet',
    symbol: 'TSTRAT',
    network: networks.stratistest,
    slug: 'stratistest',
    coinType: 105,
  },
  {
    name: 'Syscoin',
    symbol: 'SYS',
    network: networks.syscoin,
    slug: 'syscoin',
    coinType: 57,
  },
  {
    name: 'Hempcoin',
    symbol: 'THC',
    network: networks.hempcoin,
    slug: 'hempcoin',
    coinType: 113,
  },
  {
    name: 'Thought',
    symbol: 'THT',
    network: networks.thought,
    slug: 'thought',
    coinType: 1618,
  },
  {
    name: 'Toa',
    symbol: 'TOA',
    network: networks.toa,
    slug: 'toa',
    coinType: 159,
  },
  {
    name: 'TWINS',
    symbol: 'TWINS',
    network: networks.twins,
    slug: 'twins',
    coinType: 970,
  },
  {
    name: 'TWINS Testnet',
    symbol: 'TWINS',
    network: networks.twinstestnet,
    slug: 'twinstestnet',
    coinType: 1,
  },
  {
    name: 'Ultimatesecurecash',
    symbol: 'USC',
    network: networks.ultimatesecurecash,
    slug: 'ultimatesecurecash',
    coinType: 112,
  },
  {
    name: 'NuBits',
    symbol: 'USNBT',
    network: networks.nubits,
    slug: 'nubits',
    coinType: 12,
  },
  {
    name: 'Unobtanium',
    symbol: 'UNO',
    network: networks.unobtanium,
    slug: 'unobtanium',
    coinType: 92,
  },
  {
    name: 'Vpncoin',
    symbol: 'VASH',
    network: networks.vpncoin,
    slug: 'vpncoin',
    coinType: 33,
  },
  {
    name: 'VeChain',
    symbol: 'VET',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 818,
  },
  {
    name: 'Viacoin',
    symbol: 'VIA',
    network: networks.viacoin,
    slug: 'viacoin',
    coinType: 14,
  },
  {
    name: 'Viacoin Testnet',
    symbol: 'VIA',
    network: networks.viacointestnet,
    slug: 'viacointestnet',
    coinType: 1,
  },
  {
    name: 'Vivo',
    symbol: 'VIVO',
    network: networks.vivo,
    slug: 'vivo',
    coinType: 166,
  },
  {
    name: 'Vertcoin',
    symbol: 'VTC',
    network: networks.vertcoin,
    slug: 'vertcoin',
    coinType: 28,
  },
  {
    name: 'Wagerr',
    symbol: 'WGR',
    network: networks.wagerr,
    slug: 'wagerr',
    coinType: 7825266,
  },
  {
    name: 'Wincoin',
    symbol: 'WC',
    network: networks.wincoin,
    slug: 'wincoin',
    coinType: 181,
  },
  {
    name: 'Artax',
    symbol: 'XAX',
    network: networks.artax,
    slug: 'artax',
    coinType: 219,
  },
  {
    name: 'Bitcoinplus',
    symbol: 'XBC',
    network: networks.bitcoinplus,
    slug: 'bitcoinplus',
    coinType: 65,
  },
  {
    name: 'Myriadcoin',
    symbol: 'XMY',
    network: networks.myriadcoin,
    slug: 'myriadcoin',
    coinType: 90,
  },
  {
    name: 'Ripple',
    symbol: 'XRP',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 144,
  },
  {
    name: 'Vcash',
    symbol: 'XVC',
    network: networks.vcash,
    slug: 'vcash',
    coinType: 127,
  },
  {
    name: 'Verge',
    symbol: 'XVG',
    network: networks.verge,
    slug: 'verge',
    coinType: 77,
  },
  {
    name: 'Xuez',
    symbol: 'XUEZ',
    network: networks.xuez,
    slug: 'xuez',
    coinType: 225,
  },
  {
    name: 'Whitecoin Classic',
    symbol: 'XWCC',
    network: networks.whitecoin,
    slug: 'whitecoin',
    coinType: 155,
  },
  {
    name: 'Zcoin (rebranded to Firo)',
    symbol: 'XZC',
    network: networks.zcoin,
    slug: 'zcoin',
    coinType: 136,
  },
  {
    name: 'ZooBlockchain',
    symbol: 'ZBC',
    network: networks.zoobc,
    slug: 'zoobc',
    coinType: 883,
  },
  {
    name: 'Zclassic',
    symbol: 'ZCL',
    network: networks.zclassic,
    slug: 'zclassic',
    coinType: 147,
  },
  {
    name: 'Zcash',
    symbol: 'ZEC',
    network: networks.zcash,
    slug: 'zcash',
    coinType: 133,
  },
  {
    name: 'Horizen',
    symbol: 'ZEN',
    network: networks.zencash,
    slug: 'zencash',
    coinType: 121,
  },
  {
    name: 'Whitecoin',
    symbol: 'XWC',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 559,
  },
  {
    name: 'Tron',
    symbol: 'TRX',
    network: networks.bitcoin,
    slug: 'bitcoin',
    coinType: 195,
  },
];

export type CoinSymbol =
  | 'AC'
  | 'ACC'
  | 'AGM'
  | 'ARYA'
  | 'ATOM'
  | 'AUR'
  | 'AXE'
  | 'ANON'
  | 'BOLI'
  | 'BCA'
  | 'BEET'
  | 'BELA'
  | 'BLK'
  | 'BND'
  | 'tBND'
  | 'BRIT'
  | 'BSD'
  | 'BST'
  | 'BTA'
  | 'BTC'
  | 'BITG'
  | 'BTCP'
  | 'BTCPt'
  | 'BSC'
  | 'BSV'
  | 'BTCZ'
  | 'BTDX'
  | 'BTG'
  | 'BTX'
  | 'CCN'
  | 'CESC'
  | 'CDN'
  | 'CLAM'
  | 'CLO'
  | 'CLUB'
  | 'CMP'
  | 'CPU'
  | 'CRAVE'
  | 'CRP'
  | 'CRW'
  | 'CSC'
  | 'DASH'
  | 'DFC'
  | 'DGB'
  | 'DGC'
  | 'DIVI'
  | 'DMD'
  | 'DNR'
  | 'DOGE'
  | 'DOGEt'
  | 'DXN'
  | 'ECN'
  | 'EDRC'
  | 'EFL'
  | 'ELA'
  | 'ELLA'
  | 'EMC2'
  | 'ERC'
  | 'TRX'
  | 'ERE'
  | 'ESN'
  | 'ETC'
  | 'ETH'
  | 'EWT'
  | 'EXCL'
  | 'EXCC'
  | 'EXP'
  | 'FIO'
  | 'FIRO'
  | 'FIX'
  | 'FJC'
  | 'FLASH'
  | 'FRST'
  | 'FTC'
  | 'GAME'
  | 'GBX'
  | 'GCR'
  | 'GRC'
  | 'GRS'
  | 'HNC'
  | 'HUSH'
  | 'INSN'
  | 'IOP'
  | 'IOV'
  | 'IXC'
  | 'JBS'
  | 'KMD'
  | 'KOBO'
  | 'LBC'
  | 'LCC'
  | 'LDCN'
  | 'LINX'
  | 'LKR'
  | 'LTC'
  | 'LTCt'
  | 'LTZ'
  | 'LUNA'
  | 'LYNX'
  | 'MAZA'
  | 'MEC'
  | 'MIX'
  | 'MNX'
  | 'MONA'
  | 'MONK'
  | 'MOAC'
  | 'MUSIC'
  | 'NAV'
  | 'NAS'
  | 'NEBL'
  | 'NEOS'
  | 'NIX'
  | 'NLG'
  | 'NMC'
  | 'NRG'
  | 'NRO'
  | 'NSR'
  | 'NYC'
  | 'NVC'
  | 'OK'
  | 'OMNI'
  | 'ONION'
  | 'ONX'
  | 'PART'
  | 'PHR'
  | 'PINK'
  | 'PIRL'
  | 'PIVX'
  | 'POA'
  | 'POSW'
  | 'POT'
  | 'PPC'
  | 'PRJ'
  | 'PSB'
  | 'PUT'
  | 'RPD'
  | 'RVN'
  | 'RBY'
  | 'RDD'
  | 'RITO'
  | 'RUNE'
  | 'RVR'
  | 'SAFE'
  | 'SCRIBE'
  | 'SLS'
  | 'SDC'
  | 'SLM'
  | 'SLR'
  | 'SMLY'
  | 'STASH'
  | 'STRAT'
  | 'SUGAR'
  | 'TUGAR'
  | 'SWTC'
  | 'TSTRAT'
  | 'SYS'
  | 'THC'
  | 'THT'
  | 'TOA'
  | 'TWINS'
  | 'USC'
  | 'USNBT'
  | 'UNO'
  | 'VASH'
  | 'VET'
  | 'VIA'
  | 'VIVO'
  | 'VTC'
  | 'WGR'
  | 'WC'
  | 'XAX'
  | 'XBC'
  | 'XMY'
  | 'XRP'
  | 'XVC'
  | 'XVG'
  | 'XUEZ'
  | 'XWCC'
  | 'XZC'
  | 'ZBC'
  | 'ZCL'
  | 'ZEC'
  | 'ZEN'
  | 'XWC';

export type NetworkSlug =
  | 'asiacoin'
  | 'adcoin'
  | 'argoneum'
  | 'aryacoin'
  | 'bitcoin'
  | 'auroracoin'
  | 'axe'
  | 'anon'
  | 'bolivarcoin'
  | 'atom'
  | 'beetlecoin'
  | 'belacoin'
  | 'blackcoin'
  | 'blocknode'
  | 'blocknode_testnet'
  | 'britcoin'
  | 'bitsend'
  | 'blockstamp'
  | 'bata'
  | 'regtest'
  | 'bitcoin_testnet'
  | 'bitcoingreen'
  | 'bitcoinprivate'
  | 'bitcoinprivatetestnet'
  | 'bitcoinsv'
  | 'bitcoinz'
  | 'bitcloud'
  | 'bgold'
  | 'bitcore'
  | 'cannacoin'
  | 'canadaecoin'
  | 'clam'
  | 'clubcoin'
  | 'compcoin'
  | 'cpuchain'
  | 'crave'
  | 'cranepay'
  | 'crown'
  | 'dash'
  | 'dashtn'
  | 'defcoin'
  | 'digibyte'
  | 'digitalcoin'
  | 'divi'
  | 'divitestnet'
  | 'diamond'
  | 'denarius'
  | 'dogecoin'
  | 'dogecointestnet'
  | 'ecoin'
  | 'edrcoin'
  | 'egulden'
  | 'elastos'
  | 'einsteinium'
  | 'europecoin'
  | 'exclusivecoin'
  | 'exchangecoin'
  | 'firo'
  | 'fix'
  | 'fixtestnet'
  | 'fujicoin'
  | 'flashcoin'
  | 'firstcoin'
  | 'feathercoin'
  | 'game'
  | 'gobyte'
  | 'gcr'
  | 'gridcoin'
  | 'groestlcoin'
  | 'groestlcointestnet'
  | 'helleniccoin'
  | 'hush'
  | 'hush3'
  | 'insane'
  | 'iop'
  | 'ixcoin'
  | 'jumbucks'
  | 'komodo'
  | 'kobocoin'
  | 'lbry'
  | 'litecoincash'
  | 'landcoin'
  | 'linx'
  | 'lkrcoin'
  | 'litecoin'
  | 'litecointestnet'
  | 'litecoinz'
  | 'lynx'
  | 'maza'
  | 'megacoin'
  | 'minexcoin'
  | 'monacoin'
  | 'monkeyproject'
  | 'navcoin'
  | 'neblio'
  | 'neoscoin'
  | 'nix'
  | 'gulden'
  | 'namecoin'
  | 'energi'
  | 'neurocoin'
  | 'nushares'
  | 'newyorkc'
  | 'novacoin'
  | 'okcash'
  | 'omnicore'
  | 'deeponion'
  | 'onixcoin'
  | 'particl'
  | 'phore'
  | 'pinkcoin'
  | 'pivx'
  | 'pivxtestnet'
  | 'poswcoin'
  | 'potcoin'
  | 'peercoin'
  | 'projectcoin'
  | 'pesobit'
  | 'putincoin'
  | 'rapids'
  | 'ravencoin'
  | 'rubycoin'
  | 'reddcoin'
  | 'ritocoin'
  | 'revolutionvr'
  | 'safecoin'
  | 'scribe'
  | 'salus'
  | 'shadow'
  | 'shadowtn'
  | 'slimcoin'
  | 'slimcointn'
  | 'solarcoin'
  | 'smileycoin'
  | 'stashtn'
  | 'stratis'
  | 'sugarchain'
  | 'sugarchaintestnet'
  | 'stratistest'
  | 'syscoin'
  | 'hempcoin'
  | 'thought'
  | 'toa'
  | 'twins'
  | 'twinstestnet'
  | 'ultimatesecurecash'
  | 'nubits'
  | 'unobtanium'
  | 'vpncoin'
  | 'viacoin'
  | 'viacointestnet'
  | 'vivo'
  | 'vertcoin'
  | 'wagerr'
  | 'wincoin'
  | 'artax'
  | 'bitcoinplus'
  | 'myriadcoin'
  | 'vcash'
  | 'verge'
  | 'xuez'
  | 'whitecoin'
  | 'zcoin'
  | 'zoobc'
  | 'zclassic'
  | 'zcash'
  | 'zencash';

export interface CoinInfo {
  slug: NetworkSlug;
  name: string;
  symbol: CoinSymbol;
  network?: object;
  coinType: number;
}

export default class Coins {
  static getCoins() {
    return _coins;
  }

  static getCoinInfo(symbol: CoinSymbol, slug: NetworkSlug) {
    return _coins.find((coin) => coin.symbol === symbol && coin.slug === slug);
  }
}
