"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const networks_1 = require("./networks");
const _coins = [
    {
        name: 'Asiacoin',
        symbol: 'AC',
        network: networks_1.default.asiacoin,
        slug: 'asiacoin',
        coinType: 51,
    },
    {
        name: 'Adcoin',
        symbol: 'ACC',
        network: networks_1.default.adcoin,
        slug: 'adcoin',
        coinType: 161,
    },
    {
        name: 'Argoneum',
        symbol: 'AGM',
        network: networks_1.default.argoneum,
        slug: 'argoneum',
        coinType: 421,
    },
    {
        name: 'Aryacoin',
        symbol: 'ARYA',
        network: networks_1.default.aryacoin,
        slug: 'aryacoin',
        coinType: 357,
    },
    {
        name: 'Cosmos Hub',
        symbol: 'ATOM',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 118,
    },
    {
        name: 'Auroracoin',
        symbol: 'AUR',
        network: networks_1.default.auroracoin,
        slug: 'auroracoin',
        coinType: 85,
    },
    {
        name: 'Axe',
        symbol: 'AXE',
        network: networks_1.default.axe,
        slug: 'axe',
        coinType: 4242,
    },
    {
        name: 'ANON',
        symbol: 'ANON',
        network: networks_1.default.anon,
        slug: 'anon',
        coinType: 220,
    },
    {
        name: 'Bolivarcoin',
        symbol: 'BOLI',
        network: networks_1.default.bolivarcoin,
        slug: 'bolivarcoin',
        coinType: 278,
    },
    {
        name: 'Bitcoin Atom',
        symbol: 'BCA',
        network: networks_1.default.atom,
        slug: 'atom',
        coinType: 185,
    },
    {
        name: 'Beetlecoin',
        symbol: 'BEET',
        network: networks_1.default.beetlecoin,
        slug: 'beetlecoin',
        coinType: 800,
    },
    {
        name: 'Belacoin',
        symbol: 'BELA',
        network: networks_1.default.belacoin,
        slug: 'belacoin',
        coinType: 73,
    },
    {
        name: 'BlackCoin',
        symbol: 'BLK',
        network: networks_1.default.blackcoin,
        slug: 'blackcoin',
        coinType: 10,
    },
    {
        name: 'Blocknode',
        symbol: 'BND',
        network: networks_1.default.blocknode,
        slug: 'blocknode',
        coinType: 2941,
    },
    {
        name: 'Blocknode Testnet',
        symbol: 'tBND',
        network: networks_1.default.blocknode_testnet,
        slug: 'blocknode_testnet',
        coinType: 1,
    },
    {
        name: 'Britcoin',
        symbol: 'BRIT',
        network: networks_1.default.britcoin,
        slug: 'britcoin',
        coinType: 70,
    },
    {
        name: 'Bitsend',
        symbol: 'BSD',
        network: networks_1.default.bitsend,
        slug: 'bitsend',
        coinType: 91,
    },
    {
        name: 'BlockStamp',
        symbol: 'BST',
        network: networks_1.default.blockstamp,
        slug: 'blockstamp',
        coinType: 254,
    },
    {
        name: 'Bata',
        symbol: 'BTA',
        network: networks_1.default.bata,
        slug: 'bata',
        coinType: 89,
    },
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 0,
    },
    {
        name: 'Bitcoin RegTest',
        symbol: 'BTC',
        network: networks_1.default.regtest,
        slug: 'regtest',
        coinType: 1,
    },
    {
        name: 'Bitcoin Testnet',
        symbol: 'BTC',
        network: networks_1.default.bitcoin_testnet,
        slug: 'bitcoin_testnet',
        coinType: 1,
    },
    {
        name: 'Bitcoin Green',
        symbol: 'BITG',
        network: networks_1.default.bitcoingreen,
        slug: 'bitcoingreen',
        coinType: 222,
    },
    {
        name: 'Bitcoin Private',
        symbol: 'BTCP',
        network: networks_1.default.bitcoinprivate,
        slug: 'bitcoinprivate',
        coinType: 183,
    },
    {
        name: 'Bitcoin Private Testnet',
        symbol: 'BTCPt',
        network: networks_1.default.bitcoinprivatetestnet,
        slug: 'bitcoinprivatetestnet',
        coinType: 1,
    },
    {
        name: 'Binance Smart Chain',
        symbol: 'BSC',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 60,
    },
    {
        name: 'BitcoinSV',
        symbol: 'BSV',
        network: networks_1.default.bitcoinsv,
        slug: 'bitcoinsv',
        coinType: 236,
    },
    {
        name: 'Bitcoinz',
        symbol: 'BTCZ',
        network: networks_1.default.bitcoinz,
        slug: 'bitcoinz',
        coinType: 177,
    },
    {
        name: 'BitCloud',
        symbol: 'BTDX',
        network: networks_1.default.bitcloud,
        slug: 'bitcloud',
        coinType: 218,
    },
    {
        name: 'Bitcoin Gold',
        symbol: 'BTG',
        network: networks_1.default.bgold,
        slug: 'bgold',
        coinType: 156,
    },
    {
        name: 'Bitcore',
        symbol: 'BTX',
        network: networks_1.default.bitcore,
        slug: 'bitcore',
        coinType: 160,
    },
    {
        name: 'Cannacoin',
        symbol: 'CCN',
        network: networks_1.default.cannacoin,
        slug: 'cannacoin',
        coinType: 19,
    },
    {
        name: 'Cryptoescudo',
        symbol: 'CESC',
        network: networks_1.default.cannacoin,
        slug: 'cannacoin',
        coinType: 111,
    },
    {
        name: 'Canadaecoin',
        symbol: 'CDN',
        network: networks_1.default.canadaecoin,
        slug: 'canadaecoin',
        coinType: 34,
    },
    {
        name: 'Clams',
        symbol: 'CLAM',
        network: networks_1.default.clam,
        slug: 'clam',
        coinType: 23,
    },
    {
        name: 'Callisto',
        symbol: 'CLO',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 820,
    },
    {
        name: 'Clubcoin',
        symbol: 'CLUB',
        network: networks_1.default.clubcoin,
        slug: 'clubcoin',
        coinType: 79,
    },
    {
        name: 'Compcoin',
        symbol: 'CMP',
        network: networks_1.default.compcoin,
        slug: 'compcoin',
        coinType: 71,
    },
    {
        name: 'CPUchain',
        symbol: 'CPU',
        network: networks_1.default.cpuchain,
        slug: 'cpuchain',
        coinType: 363,
    },
    {
        name: 'Crave',
        symbol: 'CRAVE',
        network: networks_1.default.crave,
        slug: 'crave',
        coinType: 186,
    },
    {
        name: 'CranePay',
        symbol: 'CRP',
        network: networks_1.default.cranepay,
        slug: 'cranepay',
        coinType: 2304,
    },
    {
        name: 'Crown (Legacy)',
        symbol: 'CRW',
        network: networks_1.default.crown,
        slug: 'crown',
        coinType: 72,
    },
    {
        name: 'Crown',
        symbol: 'CRW',
        network: networks_1.default.crown,
        slug: 'crown',
        coinType: 72,
    },
    {
        name: 'CasinoCoin',
        symbol: 'CSC',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 359,
    },
    {
        name: 'Dash',
        symbol: 'DASH',
        network: networks_1.default.dash,
        slug: 'dash',
        coinType: 5,
    },
    {
        name: 'Dash Testnet',
        symbol: 'DASH',
        network: networks_1.default.dashtn,
        slug: 'dashtn',
        coinType: 1,
    },
    {
        name: 'Defcoin',
        symbol: 'DFC',
        network: networks_1.default.defcoin,
        slug: 'defcoin',
        coinType: 1337,
    },
    {
        name: 'Digibyte',
        symbol: 'DGB',
        network: networks_1.default.digibyte,
        slug: 'digibyte',
        coinType: 20,
    },
    {
        name: 'Digitalcoin',
        symbol: 'DGC',
        network: networks_1.default.digitalcoin,
        slug: 'digitalcoin',
        coinType: 18,
    },
    {
        name: 'DIVI',
        symbol: 'DIVI',
        network: networks_1.default.divi,
        slug: 'divi',
        coinType: 301,
    },
    {
        name: 'DIVI Testnet',
        symbol: 'DIVI',
        network: networks_1.default.divitestnet,
        slug: 'divitestnet',
        coinType: 1,
    },
    {
        name: 'Diamond',
        symbol: 'DMD',
        network: networks_1.default.diamond,
        slug: 'diamond',
        coinType: 152,
    },
    {
        name: 'Denarius',
        symbol: 'DNR',
        network: networks_1.default.denarius,
        slug: 'denarius',
        coinType: 116,
    },
    {
        name: 'Dogecoin',
        symbol: 'DOGE',
        network: networks_1.default.dogecoin,
        slug: 'dogecoin',
        coinType: 3,
    },
    {
        name: 'Dogecoin Testnet',
        symbol: 'DOGEt',
        network: networks_1.default.dogecointestnet,
        slug: 'dogecointestnet',
        coinType: 1,
    },
    {
        name: 'DEXON',
        symbol: 'DXN',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 237,
    },
    {
        name: 'Ecoin',
        symbol: 'ECN',
        network: networks_1.default.ecoin,
        slug: 'ecoin',
        coinType: 115,
    },
    {
        name: 'Edrcoin',
        symbol: 'EDRC',
        network: networks_1.default.edrcoin,
        slug: 'edrcoin',
        coinType: 56,
    },
    {
        name: 'Egulden',
        symbol: 'EFL',
        network: networks_1.default.egulden,
        slug: 'egulden',
        coinType: 78,
    },
    {
        name: 'Elastos',
        symbol: 'ELA',
        network: networks_1.default.elastos,
        slug: 'elastos',
        coinType: 2305,
    },
    {
        name: 'Ellaism',
        symbol: 'ELLA',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 163,
    },
    {
        name: 'Einsteinium',
        symbol: 'EMC2',
        network: networks_1.default.einsteinium,
        slug: 'einsteinium',
        coinType: 41,
    },
    {
        name: 'Europecoin',
        symbol: 'ERC',
        network: networks_1.default.europecoin,
        slug: 'europecoin',
        coinType: 151,
    },
    {
        name: 'EtherCore',
        symbol: 'ERE',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 466,
    },
    {
        name: 'Ethersocial Network',
        symbol: 'ESN',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 31102,
    },
    {
        name: 'Ethereum Classic',
        symbol: 'ETC',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 61,
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 60,
    },
    {
        name: 'EnergyWeb',
        symbol: 'EWT',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 246,
    },
    {
        name: 'Exclusivecoin',
        symbol: 'EXCL',
        network: networks_1.default.exclusivecoin,
        slug: 'exclusivecoin',
        coinType: 190,
    },
    {
        name: 'ExchangeCoin',
        symbol: 'EXCC',
        network: networks_1.default.exchangecoin,
        slug: 'exchangecoin',
        coinType: 0,
    },
    {
        name: 'Expanse',
        symbol: 'EXP',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 40,
    },
    {
        name: 'Foundation for Interwallet Operability',
        symbol: 'FIO',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 235,
    },
    {
        name: 'Firo (Zcoin rebrand)',
        symbol: 'FIRO',
        network: networks_1.default.firo,
        slug: 'firo',
        coinType: 136,
    },
    {
        name: 'FIX',
        symbol: 'FIX',
        network: networks_1.default.fix,
        slug: 'fix',
        coinType: 336,
    },
    {
        name: 'FIX Testnet',
        symbol: 'FIX',
        network: networks_1.default.fixtestnet,
        slug: 'fixtestnet',
        coinType: 1,
    },
    {
        name: 'Fujicoin',
        symbol: 'FJC',
        network: networks_1.default.fujicoin,
        slug: 'fujicoin',
        coinType: 75,
    },
    {
        name: 'Flashcoin',
        symbol: 'FLASH',
        network: networks_1.default.flashcoin,
        slug: 'flashcoin',
        coinType: 120,
    },
    {
        name: 'Firstcoin',
        symbol: 'FRST',
        network: networks_1.default.firstcoin,
        slug: 'firstcoin',
        coinType: 167,
    },
    {
        name: 'Feathercoin',
        symbol: 'FTC',
        network: networks_1.default.feathercoin,
        slug: 'feathercoin',
        coinType: 8,
    },
    {
        name: 'GameCredits',
        symbol: 'GAME',
        network: networks_1.default.game,
        slug: 'game',
        coinType: 101,
    },
    {
        name: 'Gobyte',
        symbol: 'GBX',
        network: networks_1.default.gobyte,
        slug: 'gobyte',
        coinType: 176,
    },
    {
        name: 'GCRCoin',
        symbol: 'GCR',
        network: networks_1.default.gcr,
        slug: 'gcr',
        coinType: 79,
    },
    {
        name: 'Gridcoin',
        symbol: 'GRC',
        network: networks_1.default.gridcoin,
        slug: 'gridcoin',
        coinType: 84,
    },
    {
        name: 'Groestlcoin',
        symbol: 'GRS',
        network: networks_1.default.groestlcoin,
        slug: 'groestlcoin',
        coinType: 17,
    },
    {
        name: 'Groestlcoin Testnet',
        symbol: 'GRS',
        network: networks_1.default.groestlcointestnet,
        slug: 'groestlcointestnet',
        coinType: 1,
    },
    {
        name: 'Helleniccoin',
        symbol: 'HNC',
        network: networks_1.default.helleniccoin,
        slug: 'helleniccoin',
        coinType: 168,
    },
    {
        name: 'Hush (Legacy)',
        symbol: 'HUSH',
        network: networks_1.default.hush,
        slug: 'hush',
        coinType: 197,
    },
    {
        name: 'Hush3',
        symbol: 'HUSH',
        network: networks_1.default.hush3,
        slug: 'hush3',
        coinType: 197,
    },
    {
        name: 'Insane',
        symbol: 'INSN',
        network: networks_1.default.insane,
        slug: 'insane',
        coinType: 68,
    },
    {
        name: 'Iop',
        symbol: 'IOP',
        network: networks_1.default.iop,
        slug: 'iop',
        coinType: 66,
    },
    {
        name: 'Starname',
        symbol: 'IOV',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 234,
    },
    {
        name: 'Ixcoin',
        symbol: 'IXC',
        network: networks_1.default.ixcoin,
        slug: 'ixcoin',
        coinType: 86,
    },
    {
        name: 'Jumbucks',
        symbol: 'JBS',
        network: networks_1.default.jumbucks,
        slug: 'jumbucks',
        coinType: 26,
    },
    {
        name: 'Komodo',
        symbol: 'KMD',
        network: networks_1.default.komodo,
        slug: 'komodo',
        coinType: 141,
    },
    {
        name: 'Kobocoin',
        symbol: 'KOBO',
        network: networks_1.default.kobocoin,
        slug: 'kobocoin',
        coinType: 196,
    },
    {
        name: 'Library Credits',
        symbol: 'LBC',
        network: networks_1.default.lbry,
        slug: 'lbry',
        coinType: 140,
    },
    {
        name: 'Litecoincash',
        symbol: 'LCC',
        network: networks_1.default.litecoincash,
        slug: 'litecoincash',
        coinType: 192,
    },
    {
        name: 'Landcoin',
        symbol: 'LDCN',
        network: networks_1.default.landcoin,
        slug: 'landcoin',
        coinType: 63,
    },
    {
        name: 'Linx',
        symbol: 'LINX',
        network: networks_1.default.linx,
        slug: 'linx',
        coinType: 114,
    },
    {
        name: 'Lkrcoin',
        symbol: 'LKR',
        network: networks_1.default.lkrcoin,
        slug: 'lkrcoin',
        coinType: 557,
    },
    {
        name: 'Litecoin',
        symbol: 'LTC',
        network: networks_1.default.litecoin,
        slug: 'litecoin',
        coinType: 2,
    },
    {
        name: 'Litecoin Testnet',
        symbol: 'LTCt',
        network: networks_1.default.litecointestnet,
        slug: 'litecointestnet',
        coinType: 1,
    },
    {
        name: 'LitecoinZ',
        symbol: 'LTZ',
        network: networks_1.default.litecoinz,
        slug: 'litecoinz',
        coinType: 221,
    },
    {
        name: 'Terra',
        symbol: 'LUNA',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 330,
    },
    {
        name: 'Lynx',
        symbol: 'LYNX',
        network: networks_1.default.lynx,
        slug: 'lynx',
        coinType: 191,
    },
    {
        name: 'Maza',
        symbol: 'MAZA',
        network: networks_1.default.maza,
        slug: 'maza',
        coinType: 13,
    },
    {
        name: 'Megacoin',
        symbol: 'MEC',
        network: networks_1.default.megacoin,
        slug: 'megacoin',
        coinType: 217,
    },
    {
        name: 'MIX',
        symbol: 'MIX',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 76,
    },
    {
        name: 'Minexcoin',
        symbol: 'MNX',
        network: networks_1.default.minexcoin,
        slug: 'minexcoin',
        coinType: 182,
    },
    {
        name: 'Monacoin',
        symbol: 'MONA',
        network: networks_1.default.monacoin,
        slug: 'monacoin',
        coinType: 22,
    },
    {
        name: 'Monkey Project',
        symbol: 'MONK',
        network: networks_1.default.monkeyproject,
        slug: 'monkeyproject',
        coinType: 214,
    },
    {
        name: 'MOAC',
        symbol: 'MOAC',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 314,
    },
    {
        name: 'Musicoin',
        symbol: 'MUSIC',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 184,
    },
    {
        name: 'Navcoin',
        symbol: 'NAV',
        network: networks_1.default.navcoin,
        slug: 'navcoin',
        coinType: 130,
    },
    {
        name: 'Nebulas',
        symbol: 'NAS',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 2718,
    },
    {
        name: 'Neblio',
        symbol: 'NEBL',
        network: networks_1.default.neblio,
        slug: 'neblio',
        coinType: 146,
    },
    {
        name: 'Neoscoin',
        symbol: 'NEOS',
        network: networks_1.default.neoscoin,
        slug: 'neoscoin',
        coinType: 25,
    },
    {
        name: 'NIX Platform',
        symbol: 'NIX',
        network: networks_1.default.nix,
        slug: 'nix',
        coinType: 400,
    },
    {
        name: 'Gulden',
        symbol: 'NLG',
        network: networks_1.default.gulden,
        slug: 'gulden',
        coinType: 87,
    },
    {
        name: 'Namecoin',
        symbol: 'NMC',
        network: networks_1.default.namecoin,
        slug: 'namecoin',
        coinType: 7,
    },
    {
        name: 'Energi',
        symbol: 'NRG',
        network: networks_1.default.energi,
        slug: 'energi',
        coinType: 204,
    },
    {
        name: 'Neurocoin',
        symbol: 'NRO',
        network: networks_1.default.neurocoin,
        slug: 'neurocoin',
        coinType: 110,
    },
    {
        name: 'Nushares',
        symbol: 'NSR',
        network: networks_1.default.nushares,
        slug: 'nushares',
        coinType: 11,
    },
    {
        name: 'Newyorkc',
        symbol: 'NYC',
        network: networks_1.default.newyorkc,
        slug: 'newyorkc',
        coinType: 179,
    },
    {
        name: 'Novacoin',
        symbol: 'NVC',
        network: networks_1.default.novacoin,
        slug: 'novacoin',
        coinType: 50,
    },
    {
        name: 'Okcash',
        symbol: 'OK',
        network: networks_1.default.okcash,
        slug: 'okcash',
        coinType: 69,
    },
    {
        name: 'Omnicore',
        symbol: 'OMNI',
        network: networks_1.default.omnicore,
        slug: 'omnicore',
        coinType: 200,
    },
    {
        name: 'DeepOnion',
        symbol: 'ONION',
        network: networks_1.default.deeponion,
        slug: 'deeponion',
        coinType: 305,
    },
    {
        name: 'Onixcoin',
        symbol: 'ONX',
        network: networks_1.default.onixcoin,
        slug: 'onixcoin',
        coinType: 174,
    },
    {
        name: 'Particl',
        symbol: 'PART',
        network: networks_1.default.particl,
        slug: 'particl',
        coinType: 44,
    },
    {
        name: 'Phore',
        symbol: 'PHR',
        network: networks_1.default.phore,
        slug: 'phore',
        coinType: 444,
    },
    {
        name: 'Pinkcoin',
        symbol: 'PINK',
        network: networks_1.default.pinkcoin,
        slug: 'pinkcoin',
        coinType: 117,
    },
    {
        name: 'Pirl',
        symbol: 'PIRL',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 164,
    },
    {
        name: 'PIVX',
        symbol: 'PIVX',
        network: networks_1.default.pivx,
        slug: 'pivx',
        coinType: 119,
    },
    {
        name: 'PIVX Testnet',
        symbol: 'PIVX',
        network: networks_1.default.pivxtestnet,
        slug: 'pivxtestnet',
        coinType: 1,
    },
    {
        name: 'Poa',
        symbol: 'POA',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 178,
    },
    {
        name: 'POSWcoin',
        symbol: 'POSW',
        network: networks_1.default.poswcoin,
        slug: 'poswcoin',
        coinType: 47,
    },
    {
        name: 'Potcoin',
        symbol: 'POT',
        network: networks_1.default.potcoin,
        slug: 'potcoin',
        coinType: 81,
    },
    {
        name: 'Peercoin',
        symbol: 'PPC',
        network: networks_1.default.peercoin,
        slug: 'peercoin',
        coinType: 6,
    },
    {
        name: 'ProjectCoin',
        symbol: 'PRJ',
        network: networks_1.default.projectcoin,
        slug: 'projectcoin',
        coinType: 533,
    },
    {
        name: 'Pesobit',
        symbol: 'PSB',
        network: networks_1.default.pesobit,
        slug: 'pesobit',
        coinType: 62,
    },
    {
        name: 'Putincoin',
        symbol: 'PUT',
        network: networks_1.default.putincoin,
        slug: 'putincoin',
        coinType: 122,
    },
    {
        name: 'Rapids',
        symbol: 'RPD',
        network: networks_1.default.rapids,
        slug: 'rapids',
        coinType: 320,
    },
    {
        name: 'Ravencoin',
        symbol: 'RVN',
        network: networks_1.default.ravencoin,
        slug: 'ravencoin',
        coinType: 175,
    },
    {
        name: 'Rubycoin',
        symbol: 'RBY',
        network: networks_1.default.rubycoin,
        slug: 'rubycoin',
        coinType: 16,
    },
    {
        name: 'Reddcoin',
        symbol: 'RDD',
        network: networks_1.default.reddcoin,
        slug: 'reddcoin',
        coinType: 4,
    },
    {
        name: 'Ritocoin',
        symbol: 'RITO',
        network: networks_1.default.ritocoin,
        slug: 'ritocoin',
        coinType: 19169,
    },
    {
        name: 'THORChain',
        symbol: 'RUNE',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 931,
    },
    {
        name: 'RevolutionVR',
        symbol: 'RVR',
        network: networks_1.default.revolutionvr,
        slug: 'revolutionvr',
        coinType: 129,
    },
    {
        name: 'Safecoin',
        symbol: 'SAFE',
        network: networks_1.default.safecoin,
        slug: 'safecoin',
        coinType: 19165,
    },
    {
        name: 'Scribe',
        symbol: 'SCRIBE',
        network: networks_1.default.scribe,
        slug: 'scribe',
        coinType: 545,
    },
    {
        name: 'Salus',
        symbol: 'SLS',
        network: networks_1.default.salus,
        slug: 'salus',
        coinType: 63,
    },
    {
        name: 'ShadowCash',
        symbol: 'SDC',
        network: networks_1.default.shadow,
        slug: 'shadow',
        coinType: 35,
    },
    {
        name: 'ShadowCash Testnet',
        symbol: 'SDC',
        network: networks_1.default.shadowtn,
        slug: 'shadowtn',
        coinType: 1,
    },
    {
        name: 'Slimcoin',
        symbol: 'SLM',
        network: networks_1.default.slimcoin,
        slug: 'slimcoin',
        coinType: 63,
    },
    {
        name: 'Slimcoin Testnet',
        symbol: 'SLM',
        network: networks_1.default.slimcointn,
        slug: 'slimcointn',
        coinType: 111,
    },
    {
        name: 'Solarcoin',
        symbol: 'SLR',
        network: networks_1.default.solarcoin,
        slug: 'solarcoin',
        coinType: 58,
    },
    {
        name: 'Smileycoin',
        symbol: 'SMLY',
        network: networks_1.default.smileycoin,
        slug: 'smileycoin',
        coinType: 59,
    },
    {
        name: 'Stash Testnet',
        symbol: 'STASH',
        network: networks_1.default.stashtn,
        slug: 'stashtn',
        coinType: 0xcafe,
    },
    {
        name: 'Stratis',
        symbol: 'STRAT',
        network: networks_1.default.stratis,
        slug: 'stratis',
        coinType: 105,
    },
    {
        name: 'Sugarchain',
        symbol: 'SUGAR',
        network: networks_1.default.sugarchain,
        slug: 'sugarchain',
        coinType: 408,
    },
    {
        name: 'Sugarchain Testnet',
        symbol: 'TUGAR',
        network: networks_1.default.sugarchaintestnet,
        slug: 'sugarchaintestnet',
        coinType: 408,
    },
    {
        name: 'Jingtum',
        symbol: 'SWTC',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 315,
    },
    {
        name: 'Stratis Testnet',
        symbol: 'TSTRAT',
        network: networks_1.default.stratistest,
        slug: 'stratistest',
        coinType: 105,
    },
    {
        name: 'Syscoin',
        symbol: 'SYS',
        network: networks_1.default.syscoin,
        slug: 'syscoin',
        coinType: 57,
    },
    {
        name: 'Hempcoin',
        symbol: 'THC',
        network: networks_1.default.hempcoin,
        slug: 'hempcoin',
        coinType: 113,
    },
    {
        name: 'Thought',
        symbol: 'THT',
        network: networks_1.default.thought,
        slug: 'thought',
        coinType: 1618,
    },
    {
        name: 'Toa',
        symbol: 'TOA',
        network: networks_1.default.toa,
        slug: 'toa',
        coinType: 159,
    },
    {
        name: 'TWINS',
        symbol: 'TWINS',
        network: networks_1.default.twins,
        slug: 'twins',
        coinType: 970,
    },
    {
        name: 'TWINS Testnet',
        symbol: 'TWINS',
        network: networks_1.default.twinstestnet,
        slug: 'twinstestnet',
        coinType: 1,
    },
    {
        name: 'Ultimatesecurecash',
        symbol: 'USC',
        network: networks_1.default.ultimatesecurecash,
        slug: 'ultimatesecurecash',
        coinType: 112,
    },
    {
        name: 'NuBits',
        symbol: 'USNBT',
        network: networks_1.default.nubits,
        slug: 'nubits',
        coinType: 12,
    },
    {
        name: 'Unobtanium',
        symbol: 'UNO',
        network: networks_1.default.unobtanium,
        slug: 'unobtanium',
        coinType: 92,
    },
    {
        name: 'Vpncoin',
        symbol: 'VASH',
        network: networks_1.default.vpncoin,
        slug: 'vpncoin',
        coinType: 33,
    },
    {
        name: 'VeChain',
        symbol: 'VET',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 818,
    },
    {
        name: 'Viacoin',
        symbol: 'VIA',
        network: networks_1.default.viacoin,
        slug: 'viacoin',
        coinType: 14,
    },
    {
        name: 'Viacoin Testnet',
        symbol: 'VIA',
        network: networks_1.default.viacointestnet,
        slug: 'viacointestnet',
        coinType: 1,
    },
    {
        name: 'Vivo',
        symbol: 'VIVO',
        network: networks_1.default.vivo,
        slug: 'vivo',
        coinType: 166,
    },
    {
        name: 'Vertcoin',
        symbol: 'VTC',
        network: networks_1.default.vertcoin,
        slug: 'vertcoin',
        coinType: 28,
    },
    {
        name: 'Wagerr',
        symbol: 'WGR',
        network: networks_1.default.wagerr,
        slug: 'wagerr',
        coinType: 7825266,
    },
    {
        name: 'Wincoin',
        symbol: 'WC',
        network: networks_1.default.wincoin,
        slug: 'wincoin',
        coinType: 181,
    },
    {
        name: 'Artax',
        symbol: 'XAX',
        network: networks_1.default.artax,
        slug: 'artax',
        coinType: 219,
    },
    {
        name: 'Bitcoinplus',
        symbol: 'XBC',
        network: networks_1.default.bitcoinplus,
        slug: 'bitcoinplus',
        coinType: 65,
    },
    {
        name: 'Myriadcoin',
        symbol: 'XMY',
        network: networks_1.default.myriadcoin,
        slug: 'myriadcoin',
        coinType: 90,
    },
    {
        name: 'Ripple',
        symbol: 'XRP',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 144,
    },
    {
        name: 'Vcash',
        symbol: 'XVC',
        network: networks_1.default.vcash,
        slug: 'vcash',
        coinType: 127,
    },
    {
        name: 'Verge',
        symbol: 'XVG',
        network: networks_1.default.verge,
        slug: 'verge',
        coinType: 77,
    },
    {
        name: 'Xuez',
        symbol: 'XUEZ',
        network: networks_1.default.xuez,
        slug: 'xuez',
        coinType: 225,
    },
    {
        name: 'Whitecoin Classic',
        symbol: 'XWCC',
        network: networks_1.default.whitecoin,
        slug: 'whitecoin',
        coinType: 155,
    },
    {
        name: 'Zcoin (rebranded to Firo)',
        symbol: 'XZC',
        network: networks_1.default.zcoin,
        slug: 'zcoin',
        coinType: 136,
    },
    {
        name: 'ZooBlockchain',
        symbol: 'ZBC',
        network: networks_1.default.zoobc,
        slug: 'zoobc',
        coinType: 883,
    },
    {
        name: 'Zclassic',
        symbol: 'ZCL',
        network: networks_1.default.zclassic,
        slug: 'zclassic',
        coinType: 147,
    },
    {
        name: 'Zcash',
        symbol: 'ZEC',
        network: networks_1.default.zcash,
        slug: 'zcash',
        coinType: 133,
    },
    {
        name: 'Horizen',
        symbol: 'ZEN',
        network: networks_1.default.zencash,
        slug: 'zencash',
        coinType: 121,
    },
    {
        name: 'Whitecoin',
        symbol: 'XWC',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 559,
    },
    {
        name: 'Tron',
        symbol: 'TRX',
        network: networks_1.default.bitcoin,
        slug: 'bitcoin',
        coinType: 195,
    },
];
class Coins {
    static getCoins() {
        return _coins;
    }
    static getCoinInfo(symbol, slug) {
        return _coins.find((coin) => coin.symbol === symbol && coin.slug === slug);
    }
}
exports.default = Coins;
