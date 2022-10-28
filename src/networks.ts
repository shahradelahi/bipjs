const _extensions = {
   shadow: {
      messagePrefix: 'unused',
      bip32: {
         public: 0xee80286a,
         private: 0xee8031e8,
      },
      pubKeyHash: 0x3f,
      scriptHash: 0x7d,
      wif: 0xbf,
   },
   shadowtn: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x76c0fdfb,
         private: 0x76c1077a,
      },
      pubKeyHash: 0x7f,
      scriptHash: 0xc4,
      wif: 0xff,
   },
   clam: {
      messagePrefix: 'unused',
      bip32: {
         public: 0xa8c26d64,
         private: 0xa8c17826,
      },
      pubKeyHash: 0x89,
      scriptHash: 0x0d,
      wif: 0x85,
   },
   dash: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc,
   },
   maza: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x32,
      scriptHash: 0x09,
      wif: 0xe0,
   },
   dashtn: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x8c,
      scriptHash: 0x13,
      wif: 0xef,
   },
   game: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x26,
      scriptHash: 0x05,
      wif: 0xa6,
   },
   namecoin: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x34,
      scriptHash: 0x0d,
      wif: 0xb4,
   },
   peercoin: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x75,
      wif: 0xb7,
   },
   axe: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x10, // TODO set this correctly
      wif: 0xcc,
   },
   scribe: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3c,
      scriptHash: 0x7d,
      wif: 0x6e,
   },
   slimcoin: {
      messagePrefix: 'unused',
      bip32: {
         public: 0xef6adf10,
         private: 0xef69ea80,
      },
      pubKeyHash: 0x3f,
      scriptHash: 0x7d,
      wif: 0x46,
   },
   slimcointn: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0x57,
   },
   dogecoin: {
      messagePrefix: '\x19Dogecoin Signed Message:\n',
      bip32: {
         public: 0x02facafd,
         private: 0x02fac398,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x16,
      wif: 0x9e,
   },
   dogecointestnet: {
      messagePrefix: '\x19Dogecoin Signed Message:\n',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x71,
      scriptHash: 0xc4,
      wif: 0xf1,
   },
   denarius: {
      messagePrefix: '\x19Denarius Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x5a,
      wif: 0x9e,
   },
   neblio: {
      messagePrefix: '\x18Neblio Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x35,
      scriptHash: 0x70,
      wif: 0xb5,
   },
   viacoin: {
      messagePrefix: '\x18Viacoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x47,
      scriptHash: 0x21,
      wif: 0xc7,
   },
   viacointestnet: {
      messagePrefix: '\x18Viacoin Signed Message:\n',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x7f,
      scriptHash: 0xc4,
      wif: 0xff,
   },
   gamerscoin: {
      messagePrefix: '\x19Gamerscoin Signed Message:\n',
      bip32: {
         public: 0x019da462,
         private: 0x019d9cfe,
      },
      pubKeyHash: 0x26,
      scriptHash: 0x05,
      wif: 0xa6,
   },
   jumbucks: {
      messagePrefix: '\x19Jumbucks Signed Message:\n',
      bip32: {
         public: 0x037a689a,
         private: 0x037a6460,
      },
      pubKeyHash: 0x2b,
      scriptHash: 0x05,
      wif: 0xab,
   },
   zetacoin: {
      messagePrefix: '\x18Zetacoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x50,
      scriptHash: 0x09,
      wif: 0xe0,
   },
   myriadcoin: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x32,
      scriptHash: 0x09,
      wif: 0xb2,
   },
   bolivarcoin: {
      messagePrefix: 'Bolivarcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x55,
      scriptHash: 0x05,
      wif: 0xd5,
   },
   onixcoin: {
      messagePrefix: 'ONIX Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x4b,
      scriptHash: 0x05,
      wif: 0xcb,
   },
   lkrcoin: {
      messagePrefix: '\x18LKRcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x55,
      wif: 0xb0,
   },
   pivx: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x022d2533,
         private: 0x0221312b,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x0d,
      wif: 0xd4,
   },
   pivxtestnet: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x3a8061a0,
         private: 0x3a805837,
      },
      pubKeyHash: 0x8b,
      scriptHash: 0x13,
      wif: 0xef,
   },
   fix: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x022d2533,
         private: 0x0221312b,
      },
      pubKeyHash: 0x23,
      scriptHash: 0x5f,
      wif: 0x3c,
   },
   fixtestnet: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x3a8061a0,
         private: 0x3a805837,
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x89,
      wif: 0xed,
   },
   fujicoin: {
      messagePrefix: '\x19FujiCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x24,
      scriptHash: 0x10,
      wif: 0xa4,
   },
   nubits: {
      messagePrefix: '\x18Nu Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x1a,
      wif: 0x96,
   },
   bgold: {
      messagePrefix: '\x1DBitcoin Gold Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 38,
      scriptHash: 23,
      wif: 128,
   },
   monacoin: {
      messagePrefix: '\x18Monacoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x32,
      scriptHash: 0x37,
      wif: 0xb0,
   },
   litecoinXprv: {
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x32,
      wif: 0xb0,
   },
   komodo: {
      messagePrefix: '\x18Komodo Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3c,
      scriptHash: 0x55,
      wif: 0xbc,
   },
   blackcoin: {
      messagePrefix: '\x18BlackCoin Signed Message:\n',
      bip32: {
         public: 0x02cfbede,
         private: 0x02cfbf60,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x55,
      wif: 0x99,
   },
   beetlecoin: {
      messagePrefix: '\x19Beetlecoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1a,
      scriptHash: 0x55,
      wif: 0x99,
   },
   adcoin: {
      messagePrefix: '\x18AdCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x17,
      scriptHash: 0x05,
      wif: 0xb0,
   },
   asiacoin: {
      messagePrefix: '\x18AsiaCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x17,
      scriptHash: 0x08,
      wif: 0x97,
   },
   auroracoin: {
      messagePrefix: '\x18AuroraCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x17,
      scriptHash: 0x05,
      wif: 0x97,
   },
   bata: {
      messagePrefix: '\x18Bata Signed Message:\n',
      bip32: {
         public: 0xa40c86fa,
         private: 0xa40b91bd,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x05,
      wif: 0xa4,
   },
   belacoin: {
      messagePrefix: '\x18BelaCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x05,
      wif: 0x99,
   },
   atom: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x17,
      scriptHash: 0x0a,
      wif: 0x80,
   },
   bitcoinplus: {
      messagePrefix: '\x18BitcoinPlus Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x08,
      wif: 0x99,
   },
   bitcloud: {
      messagePrefix: '\x18BitCloud Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x05,
      wif: 0x99,
   },
   bitcore: {
      messagePrefix: '\x18BitCore Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x03,
      scriptHash: 0x7d,
      wif: 0x80,
   },
   bitsend: {
      messagePrefix: '\x18Bitsend Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x66,
      scriptHash: 0x05,
      wif: 0xcc,
   },
   britcoin: {
      messagePrefix: '\x18BritCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x55,
      wif: 0x99,
   },
   canadaecoin: {
      messagePrefix: '\x18Canada eCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1c,
      scriptHash: 0x05,
      wif: 0x9c,
   },
   cannacoin: {
      messagePrefix: '\x18Cannacoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1c,
      scriptHash: 0x05,
      wif: 0x9c,
   },
   cranepay: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 28,
      scriptHash: 10,
      wif: 123,
   },
   cryptoescudo: {
      messagePrefix: '\x18Cryptoescudo Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1c,
      scriptHash: 0x05,
      wif: 0x9c,
   },
   clubcoin: {
      messagePrefix: '\x18ClubCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1c,
      scriptHash: 0x55,
      wif: 0x99,
   },
   compcoin: {
      messagePrefix: '\x18CompCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1c,
      scriptHash: 0x55,
      wif: 0x9c,
   },
   crave: {
      messagePrefix: '\x18DarkNet Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x46,
      scriptHash: 0x55,
      wif: 0x99,
   },
   defcoin: {
      messagePrefix: '\x18defcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x05,
      wif: 0x9e,
   },
   diamond: {
      messagePrefix: '\x18Diamond Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x5a,
      scriptHash: 0x08,
      wif: 0xda,
   },
   digibyte: {
      messagePrefix: '\x19DigiByte Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x05,
      wif: 0x80,
   },
   digitalcoin: {
      messagePrefix: '\x18Digitalcoin Signed Message:\n',
      bip32: {
         public: 0x9e0488b2,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x05,
      wif: 0x9e,
   },
   divi: {
      messagePrefix: '\x19Divi Signed Message:\n',
      bip32: {
         public: 0x022d2533,
         private: 0x0221312b,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x0d,
      wif: 0xd4,
   },
   divitestnet: {
      messagePrefix: '\x19Divi Signed Message:\n',
      bip32: {
         public: 0x3a8061a0,
         private: 0x3a805837,
      },
      pubKeyHash: 0x8b,
      scriptHash: 0x13,
      wif: 0xef,
   },
   ecoin: {
      messagePrefix: '\x18eCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x5c,
      scriptHash: 0x14,
      wif: 0xdc,
   },
   edrcoin: {
      messagePrefix: '\x18EDRcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x5d,
      scriptHash: 0x1c,
      wif: 0xdd,
   },
   egulden: {
      messagePrefix: '\x18Egulden Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x05,
      wif: 0xb0,
   },
   einsteinium: {
      messagePrefix: '\x18Einsteinium Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x21,
      scriptHash: 0x05,
      wif: 0xa1,
   },
   europecoin: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x21,
      scriptHash: 0x05,
      wif: 0xa8,
   },
   exclusivecoin: {
      messagePrefix: '\x18ExclusiveCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x21,
      scriptHash: 0x89,
      wif: 0xa1,
   },
   feathercoin: {
      messagePrefix: '\x18Feathercoin Signed Message:\n',
      bip32: {
         public: 0x0488bc26,
         private: 0x0488daee,
      },
      pubKeyHash: 0x0e,
      scriptHash: 0x05,
      wif: 0x8e,
   },
   firo: {
      messagePrefix: '\x18Firo Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x52,
      scriptHash: 0x07,
      wif: 0xd2,
   },
   zcoin: {
      messagePrefix: '\x18Zcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x52,
      scriptHash: 0x07,
      wif: 0xd2,
   },
   firstcoin: {
      messagePrefix: '\x18FirstCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x23,
      scriptHash: 0x05,
      wif: 0xa3,
   },
   flashcoin: {
      messagePrefix: '\x18Flashcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x44,
      scriptHash: 0x82,
      wif: 0xc4,
   },
   gcr: {
      messagePrefix: '\x18GCR Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x26,
      scriptHash: 0x61,
      wif: 0x9a,
   },
   gobyte: {
      messagePrefix: '\x18DarkCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x26,
      scriptHash: 0x0a,
      wif: 0xc6,
   },
   gridcoin: {
      messagePrefix: '\x18Gridcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3e,
      scriptHash: 0x55,
      wif: 0xbe,
   },
   groestlcoin: {
      messagePrefix: '\x19GroestlCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 36,
      scriptHash: 5,
      wif: 128,
   },
   groestlcointestnet: {
      messagePrefix: '\x19GroestlCoin Signed Message:\n',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
   },
   gulden: {
      messagePrefix: '\x18Guldencoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x26,
      scriptHash: 0x62,
      wif: 0x62,
   },
   helleniccoin: {
      messagePrefix: '\x18helleniccoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x05,
      wif: 0xb0,
   },
   hempcoin: {
      messagePrefix: '\x18Hempcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x28,
      scriptHash: 0x08,
      wif: 0xa8,
   },
   insane: {
      messagePrefix: '\x18INSaNe Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x66,
      scriptHash: 0x39,
      wif: 0x37,
   },
   iop: {
      messagePrefix: '\x18IoP Signed Message:\n',
      bip32: {
         public: 0x2780915f,
         private: 0xae3416f6,
      },
      pubKeyHash: 0x75,
      scriptHash: 0xae,
      wif: 0x31,
   },
   ixcoin: {
      messagePrefix: '\x18Ixcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x8a,
      scriptHash: 0x05,
      wif: 0x80,
   },
   kobocoin: {
      messagePrefix: '\x18Kobocoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x23,
      scriptHash: 0x1c,
      wif: 0xa3,
   },
   landcoin: {
      messagePrefix: '\x18Landcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x7a,
      wif: 0xb0,
   },
   lbry: {
      messagePrefix: '\x18LBRYcrd Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x55,
      scriptHash: 0x7a,
      wif: 0x1c,
   },
   linx: {
      messagePrefix: '\x18LinX Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x4b,
      scriptHash: 0x05,
      wif: 0xcb,
   },
   litecointestnet: {
      messagePrefix: '\x18Litecoin Signed Message:\n',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
   },
   litecoincash: {
      messagePrefix: '\x18Litecoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1c,
      scriptHash: 0x05,
      wif: 0xb0,
   },
   lynx: {
      messagePrefix: '\x18Lynx Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x2d,
      scriptHash: 0x32,
      wif: 0xad,
   },
   megacoin: {
      messagePrefix: '\x18Megacoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x32,
      scriptHash: 0x05,
      wif: 0xb2,
   },
   minexcoin: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x4b,
      scriptHash: 0x05,
      wif: 0x80,
   },
   navcoin: {
      messagePrefix: '\x18Navcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x35,
      scriptHash: 0x55,
      wif: 0x96,
   },
   neoscoin: {
      messagePrefix: '\x18NeosCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x35,
      scriptHash: 0x05,
      wif: 0xb1,
   },
   nix: {
      messagePrefix: '\x18Nix Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x26,
      scriptHash: 0x35,
      wif: 0x80,
   },
   neurocoin: {
      messagePrefix: '\x18PPCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x35,
      scriptHash: 0x75,
      wif: 0xb5,
   },
   newyorkc: {
      messagePrefix: '\x18newyorkc Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3c,
      scriptHash: 0x16,
      wif: 0xbc,
   },
   novacoin: {
      messagePrefix: '\x18NovaCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x08,
      scriptHash: 0x14,
      wif: 0x88,
   },
   nushares: {
      messagePrefix: '\x18Nu Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3f,
      scriptHash: 0x40,
      wif: 0x95,
   },
   okcash: {
      messagePrefix: '\x18OKCash Signed Message:\n',
      bip32: {
         public: 0x03cc23d7,
         private: 0x03cc1c73,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x1c,
      wif: 0x03,
   },
   omnicore: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
   },
   pesobit: {
      messagePrefix: '\x18Pesobit Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x55,
      wif: 0xb7,
   },
   pinkcoin: {
      messagePrefix: '\x18Pinkcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x03,
      scriptHash: 0x1c,
      wif: 0x83,
   },
   poswcoin: {
      messagePrefix: '\x18Poswcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x55,
      wif: 0xb7,
   },
   potcoin: {
      messagePrefix: '\x18Potcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x05,
      wif: 0xb7,
   },
   putincoin: {
      messagePrefix: '\x18PutinCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x14,
      wif: 0xb7,
   },
   ravencoin: {
      messagePrefix: '\x16Raven Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3c,
      scriptHash: 0x7a,
      wif: 0x80,
   },
   reddcoin: {
      messagePrefix: '\x18Reddcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3d,
      scriptHash: 0x05,
      wif: 0xbd,
   },
   revolutionvr: {
      messagePrefix: '\x18Voxels Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x46,
      scriptHash: 0x05,
      wif: 0xc6,
   },
   ritocoin: {
      messagePrefix: '\x15Rito Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x69,
      wif: 0x8b,
   },
   rsk: {
      messagePrefix: '\x18RSK Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      // TODO defaulting to Bitcoin value, check this
      pubKeyHash: 0x00,
      // TODO defaulting to Bitcoin value, check this
      scriptHash: 0x05,
      // TODO defaulting to Bitcoin value, check this
      wif: 0x80,
   },
   rsktestnet: {
      messagePrefix: '\x18RSK Testnet Signed Message:\n',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
   },
   rubycoin: {
      messagePrefix: '\x18Rubycoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3c,
      scriptHash: 0x55,
      wif: 0xbc,
   },
   safecoin: {
      messagePrefix: '\x18Safecoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3d,
      scriptHash: 0x56,
      wif: 0xbd,
   },
   salus: {
      messagePrefix: '\x18Salus Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3f,
      scriptHash: 0xc4,
      wif: 0xbf,
   },
   smileycoin: {
      messagePrefix: '\x18Smileycoin Signed Message:\n',
      bip32: {
         public: 0x1e562d9a,
         private: 0x1e5631bc,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x05,
      wif: 0x05,
   },
   solarcoin: {
      messagePrefix: '\x18SolarCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x12,
      scriptHash: 0x05,
      wif: 0x92,
   },
   stash: {
      messagePrefix: '\x18Stash Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc,
   },
   stashtn: {
      messagePrefix: '\x18Stash Test Signed Message:\n',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x8c,
      scriptHash: 0x13,
      wif: 0xef,
   },
   stratis: {
      messagePrefix: '\x18Stratis Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3f,
      scriptHash: 0x7d,
      wif: 0xbf,
   },
   stratistest: {
      messagePrefix: '\x18Stratis Test Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x41,
      scriptHash: 0x7d,
      wif: 0xbf,
   },
   syscoin: {
      messagePrefix: '\x18Syscoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3f,
      scriptHash: 0x05,
      wif: 0x80,
   },
   toa: {
      messagePrefix: '\x18TOA Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x41,
      scriptHash: 0x17,
      wif: 0xc1,
   },
   twins: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x022d2533,
         private: 0x0221312b,
      },
      pubKeyHash: 0x49,
      scriptHash: 0x53,
      wif: 0x42,
   },
   twinstestnet: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x3a8061a0,
         private: 0x3a805837,
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x89,
      wif: 0xed,
   },
   ultimatesecurecash: {
      messagePrefix: '\x18UltimateSecureCash Signed Message:\n',
      bip32: {
         public: 0xee80286a,
         private: 0xee8031e8,
      },
      pubKeyHash: 0x44,
      scriptHash: 0x7d,
      wif: 0xbf,
   },
   unobtanium: {
      messagePrefix: '\x18Unobtanium Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x82,
      scriptHash: 0x1e,
      wif: 0xe0,
   },
   vcash: {
      messagePrefix: '\x18Vcash Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x47,
      scriptHash: 0x08,
      wif: 0xc7,
   },
   verge: {
      messagePrefix: '\x18VERGE Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x21,
      wif: 0x9e,
   },
   vertcoin: {
      messagePrefix: '\x18Vertcoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x47,
      scriptHash: 0x05,
      wif: 0x80,
   },
   vivo: {
      messagePrefix: '\x18DarkCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x46,
      scriptHash: 0x0a,
      wif: 0xc6,
   },
   vpncoin: {
      messagePrefix: '\x18VpnCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x47,
      scriptHash: 0x05,
      wif: 0xc7,
   },
   whitecoin: {
      messagePrefix: '\x18Whitecoin Signed Message:\n',
      bip32: {
         public: 0x04887f1e,
         private: 0x048894ed,
      },
      pubKeyHash: 0x49,
      scriptHash: 0x57,
      wif: 0xc9,
   },
   wincoin: {
      messagePrefix: '\x18WinCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x49,
      scriptHash: 0x1c,
      wif: 0xc9,
   },
   zcash: {
      messagePrefix: '\x18Zcash Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1cb8,
      scriptHash: 0x1cbd,
      wif: 0x80,
   },
   xuez: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x022d2533,
         private: 0x0221312b,
      },
      pubKeyHash: 0x4b,
      scriptHash: 0x12,
      wif: 0xd4,
   },
   bitcoinprivate: {
      messagePrefix: '\x18BitcoinPrivate Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1325,
      scriptHash: 0x13af,
      wif: 0x80,
   },
   bitcoinprivatetestnet: {
      messagePrefix: '\x18BitcoinPrivate Signed Message:\n',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x1957,
      scriptHash: 0x19e0,
      wif: 0xef,
   },
   bitcoinz: {
      messagePrefix: '\x18BitcoinZ Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1cb8,
      scriptHash: 0x1cbd,
      wif: 0x80,
   },
   hush: {
      messagePrefix: '\x18Hush Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1cb8,
      scriptHash: 0x1cbd,
      wif: 0x80,
   },
   hush3: {
      messagePrefix: '\x18Hush Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3c,
      scriptHash: 0x55,
      wif: 0xbc,
   },
   zoobc: {
      messagePrefix: '\x18ZooBC Signed Message:\n',
      bech32: 'bc',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
   },
   zclassic: {
      messagePrefix: '\x18Zcash Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1cb8,
      scriptHash: 0x1cbd,
      wif: 0x80,
   },
   zencash: {
      messagePrefix: '\x18Zcash Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x2089,
      scriptHash: 0x2096,
      wif: 0x80,
   },
   energi: {
      messagePrefix: 'DarkCoin Signed Message:\n',
      bip32: {
         public: 0x03b8c856,
         private: 0xd7dc6e9f,
      },
      pubKeyHash: 0x21,
      scriptHash: 0x35,
      wif: 0x6a,
   },
   exchangecoin: {
      messagePrefix: 'ExchangeCoin Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x21b9,
      scriptHash: 0x34af,
      wif: 0x80,
   },
   artax: {
      messagePrefix: '\x18Artax Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x17,
      scriptHash: 0x1cbd,
      wif: 0x97,
   },
   bitcoingreen: {
      messagePrefix: '\x18BitcoinGreen Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x26,
      scriptHash: 0x1cbd,
      wif: 0x2e,
   },
   anon: {
      messagePrefix: '\x18ANON Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x0582,
      scriptHash: 0x5389,
      wif: 0x80,
   },
   projectcoin: {
      messagePrefix: '\x18ProjectCoin Signed Message:\n',
      bip32: {
         public: 0x022d2533,
         private: 0x0221312b,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x08,
      wif: 0x75,
   },
   phore: {
      messagePrefix: '\x18Phore Signed Message:\n',
      bip32: {
         public: 0x022d2533,
         private: 0x0221312b,
      },
      pubKeyHash: 0x37,
      scriptHash: 0x0d,
      wif: 0xd4,
   },
   blocknode: {
      messagePrefix: '\x18Blocknode Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x19,
      scriptHash: 0x3f,
      wif: 0x4b,
   },
   blocknode_testnet: {
      messagePrefix: '\x18Blocknode Testnet Signed Message:\n',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x55,
      scriptHash: 0x7d,
      wif: 0x89,
   },
   litecoinz: {
      messagePrefix: '\x18LitecoinZ Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade3,
      },
      pubKeyHash: 0x0ab3,
      scriptHash: 0x0ab8,
      wif: 0x80,
   },
   blockstamp: {
      messagePrefix: '\x18BlockStamp Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
   },
   deeponion: {
      messagePrefix: 'x18DeepOnion Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1f,
      scriptHash: 0x4e,
      wif: 0x9f,
   },
   cpuchain: {
      messagePrefix: 'x18CPUchain Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x1c,
      scriptHash: 0x1e,
      wif: 0x80,
   },
   wagerr: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x022d2533,
         private: 0x0221312b,
      },
      pubKeyHash: 0x49,
      scriptHash: 0x3f,
      wif: 0xc7,
   },
   bitcoinsv: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
   },
   monkeyproject: {
      messagePrefix: 'Monkey Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488dde4,
      },
      pubKeyHash: 0x33,
      scriptHash: 0x1c,
      wif: 0x37,
   },
   rapids: {
      messagePrefix: 'DarkNet Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3d,
      scriptHash: 0x06,
      wif: 0x2e,
   },
   aryacoin: {
      messagePrefix: '\x18Aryacoin Signed Message:\n',
      bech32: 'arya',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x17,
      scriptHash: 0x6f,
      wif: 0x97,
   },
   thought: {
      messagePrefix: 'unused',
      bip32: {
         public: 0xfbc6a00d,
         private: 0x5aebd8c6,
      },
      pubKeyHash: 0x07,
      scriptHash: 0x09,
      wif: 0x7b,
   },
   elastos: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x21,
      scriptHash: 0xc4, // TODO set this correctly, same as BTC for now
      wif: 0xef, // TODO set this correctly, same as BTC for now
   },
   sugarchain: {
      messagePrefix: '\x18Sugarchain Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x3f,
      scriptHash: 0x7d,
      wif: 0x80,
   },
   sugarchaintestnet: {
      messagePrefix: '\x18Sugarchain Signed Message:\n',
      bip32: {
         public: 0x045f1cf6,
         private: 0x045f18bc,
      },
      pubKeyHash: 0x42,
      scriptHash: 0x80,
      wif: 0xef,
   },

   regtest: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'bcrt',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
   },
   argoneum: {
      messagePrefix: 'unused',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x32,
      scriptHash: 0x61,
      wif: 0xbf,
   },
   particl: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'pw',
      bip32: {
         public: 0x696e82d1,
         private: 0x8f1daeb8,
      },
      pubKeyHash: 0x38,
      scriptHash: 0x3c,
      wif: 0x6c,
   },
   bitcoin: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'bc',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
   },
   bitcoin_testnet: {
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'tb',
      bip32: {
         public: 0x043587cf,
         private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
   },
   crown: {
      messagePrefix: '\x18Crown Signed Message:\n',
      bip32: {
         public: 0x0488b21e,
         private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
   },
   litecoin: {
      baseNetwork: 'litecoin',
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bech32: 'ltc',
      bip32: {
         public: 0x04b24746,
         private: 0x04b2430c,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x32,
      wif: 0xb0,
   },
};

const _networks: Network[] = [
   {
      slug: 'asiacoin',
      network: _extensions.asiacoin,
      coinType: 51,
   },
   {
      slug: 'adcoin',
      network: _extensions.adcoin,
      coinType: 161,
   },
   {
      slug: 'argoneum',
      network: _extensions.argoneum,
      coinType: 421,
   },
   {
      slug: 'aryacoin',
      network: _extensions.aryacoin,
      coinType: 357,
   },
   {
      slug: 'cosmos',
      network: _extensions.bitcoin,
      coinType: 118,
   },
   {
      slug: 'auroracoin',
      network: _extensions.auroracoin,
      coinType: 85,
   },
   {
      slug: 'axe',
      network: _extensions.axe,
      coinType: 4242,
   },
   {
      slug: 'anon',
      network: _extensions.anon,
      coinType: 220,
   },
   {
      slug: 'bolivarcoin',
      network: _extensions.bolivarcoin,
      coinType: 278,
   },
   {
      slug: 'atom',
      network: _extensions.atom,
      coinType: 185,
   },
   {
      slug: 'beetlecoin',
      network: _extensions.beetlecoin,
      coinType: 800,
   },
   {
      slug: 'belacoin',
      network: _extensions.belacoin,
      coinType: 73,
   },
   {
      slug: 'blackcoin',
      network: _extensions.blackcoin,
      coinType: 10,
   },
   {
      slug: 'blocknode',
      network: _extensions.blocknode,
      coinType: 2941,
   },
   {
      slug: 'blocknode_testnet',
      network: _extensions.blocknode_testnet,
      coinType: 1,
   },
   {
      slug: 'britcoin',
      network: _extensions.britcoin,
      coinType: 70,
   },
   {
      slug: 'bitsend',
      network: _extensions.bitsend,
      coinType: 91,
   },
   {
      slug: 'blockstamp',
      network: _extensions.blockstamp,
      coinType: 254,
   },
   {
      slug: 'bata',
      network: _extensions.bata,
      coinType: 89,
   },
   {
      slug: 'bitcoin',
      network: _extensions.bitcoin,
      coinType: 0,
   },
   {
      slug: 'regtest',
      network: _extensions.regtest,
      coinType: 1,
   },
   {
      slug: 'bitcoin_testnet',
      network: _extensions.bitcoin_testnet,
      coinType: 1,
   },
   {
      slug: 'bitcoingreen',
      network: _extensions.bitcoingreen,
      coinType: 222,
   },
   {
      slug: 'bitcoinprivate',
      network: _extensions.bitcoinprivate,
      coinType: 183,
   },
   {
      slug: 'bitcoinprivatetestnet',
      network: _extensions.bitcoinprivatetestnet,
      coinType: 1,
   },
   {
      slug: 'bitcoinsv',
      network: _extensions.bitcoinsv,
      coinType: 236,
   },
   {
      slug: 'bitcoinz',
      network: _extensions.bitcoinz,
      coinType: 177,
   },
   {
      slug: 'bitcloud',
      network: _extensions.bitcloud,
      coinType: 218,
   },
   {
      slug: 'bgold',
      network: _extensions.bgold,
      coinType: 156,
   },
   {
      slug: 'bitcore',
      network: _extensions.bitcore,
      coinType: 160,
   },
   {
      slug: 'cannacoin',
      network: _extensions.cannacoin,
      coinType: 19,
   },
   {
      slug: 'cannacoin_testnet',
      network: _extensions.cannacoin,
      coinType: 111,
   },
   {
      slug: 'canadaecoin',
      network: _extensions.canadaecoin,
      coinType: 34,
   },
   {
      slug: 'clam',
      network: _extensions.clam,
      coinType: 23,
   },
   {
      slug: 'callisto',
      network: _extensions.bitcoin,
      coinType: 820,
   },
   {
      slug: 'clubcoin',
      network: _extensions.clubcoin,
      coinType: 79,
   },
   {
      slug: 'compcoin',
      network: _extensions.compcoin,
      coinType: 71,
   },
   {
      slug: 'cpuchain',
      network: _extensions.cpuchain,
      coinType: 363,
   },
   {
      slug: 'crave',
      network: _extensions.crave,
      coinType: 186,
   },
   {
      slug: 'cranepay',
      network: _extensions.cranepay,
      coinType: 2304,
   },
   {
      slug: 'crown',
      network: _extensions.crown,
      coinType: 72,
   },
   {
      slug: 'casinocoin',
      network: _extensions.bitcoin,
      coinType: 359,
   },
   {
      slug: 'dash',
      network: _extensions.dash,
      coinType: 5,
   },
   {
      slug: 'dashtn',
      network: _extensions.dashtn,
      coinType: 1,
   },
   {
      slug: 'defcoin',
      network: _extensions.defcoin,
      coinType: 1337,
   },
   {
      slug: 'digibyte',
      network: _extensions.digibyte,
      coinType: 20,
   },
   {
      slug: 'digitalcoin',
      network: _extensions.digitalcoin,
      coinType: 18,
   },
   {
      slug: 'divi',
      network: _extensions.divi,
      coinType: 301,
   },
   {
      slug: 'divitestnet',
      network: _extensions.divitestnet,
      coinType: 1,
   },
   {
      slug: 'diamond',
      network: _extensions.diamond,
      coinType: 152,
   },
   {
      slug: 'denarius',
      network: _extensions.denarius,
      coinType: 116,
   },
   {
      slug: 'dogecoin',
      network: _extensions.dogecoin,
      coinType: 3,
   },
   {
      slug: 'dogecointestnet',
      network: _extensions.dogecointestnet,
      coinType: 1,
   },
   {
      slug: 'dexon',
      network: _extensions.bitcoin,
      coinType: 237,
   },
   {
      slug: 'ecoin',
      network: _extensions.ecoin,
      coinType: 115,
   },
   {
      slug: 'edrcoin',
      network: _extensions.edrcoin,
      coinType: 56,
   },
   {
      slug: 'egulden',
      network: _extensions.egulden,
      coinType: 78,
   },
   {
      slug: 'elastos',
      network: _extensions.elastos,
      coinType: 2305,
   },
   {
      slug: 'ellaism',
      network: _extensions.bitcoin,
      coinType: 163,
   },
   {
      slug: 'einsteinium',
      network: _extensions.einsteinium,
      coinType: 41,
   },
   {
      slug: 'europecoin',
      network: _extensions.europecoin,
      coinType: 151,
   },
   {
      slug: 'ether-core',
      network: _extensions.bitcoin,
      coinType: 466,
   },
   {
      slug: 'ethersocial',
      network: _extensions.bitcoin,
      coinType: 31102,
   },
   {
      slug: 'ethereum-classic',
      network: _extensions.bitcoin,
      coinType: 61,
   },
   {
      slug: 'energyweb',
      network: _extensions.bitcoin,
      coinType: 246,
   },
   {
      slug: 'exclusivecoin',
      network: _extensions.exclusivecoin,
      coinType: 190,
   },
   {
      slug: 'exchangecoin',
      network: _extensions.exchangecoin,
      coinType: 0,
   },
   {
      slug: 'expanse',
      network: _extensions.bitcoin,
      coinType: 40,
   },
   {
      slug: 'fio',
      network: _extensions.bitcoin,
      coinType: 235,
   },
   {
      slug: 'firo',
      network: _extensions.firo,
      coinType: 136,
   },
   {
      slug: 'fix',
      network: _extensions.fix,
      coinType: 336,
   },
   {
      slug: 'fixtestnet',
      network: _extensions.fixtestnet,
      coinType: 1,
   },
   {
      slug: 'fujicoin',
      network: _extensions.fujicoin,
      coinType: 75,
   },
   {
      slug: 'flashcoin',
      network: _extensions.flashcoin,
      coinType: 120,
   },
   {
      slug: 'firstcoin',
      network: _extensions.firstcoin,
      coinType: 167,
   },
   {
      slug: 'feathercoin',
      network: _extensions.feathercoin,
      coinType: 8,
   },
   {
      slug: 'game',
      network: _extensions.game,
      coinType: 101,
   },
   {
      slug: 'gobyte',
      network: _extensions.gobyte,
      coinType: 176,
   },
   {
      slug: 'gcr',
      network: _extensions.gcr,
      coinType: 79,
   },
   {
      slug: 'gridcoin',
      network: _extensions.gridcoin,
      coinType: 84,
   },
   {
      slug: 'groestlcoin',
      network: _extensions.groestlcoin,
      coinType: 17,
   },
   {
      slug: 'groestlcointestnet',
      network: _extensions.groestlcointestnet,
      coinType: 1,
   },
   {
      slug: 'helleniccoin',
      network: _extensions.helleniccoin,
      coinType: 168,
   },
   {
      slug: 'hush',
      network: _extensions.hush,
      coinType: 197,
   },
   {
      slug: 'hush3',
      network: _extensions.hush3,
      coinType: 197,
   },
   {
      slug: 'insane',
      network: _extensions.insane,
      coinType: 68,
   },
   {
      slug: 'iop',
      network: _extensions.iop,
      coinType: 66,
   },
   {
      slug: 'starname',
      network: _extensions.bitcoin,
      coinType: 234,
   },
   {
      slug: 'ixcoin',
      network: _extensions.ixcoin,
      coinType: 86,
   },
   {
      slug: 'jumbucks',
      network: _extensions.jumbucks,
      coinType: 26,
   },
   {
      slug: 'komodo',
      network: _extensions.komodo,
      coinType: 141,
   },
   {
      slug: 'kobocoin',
      network: _extensions.kobocoin,
      coinType: 196,
   },
   {
      slug: 'lbry',
      network: _extensions.lbry,
      coinType: 140,
   },
   {
      slug: 'litecoincash',
      network: _extensions.litecoincash,
      coinType: 192,
   },
   {
      slug: 'landcoin',
      network: _extensions.landcoin,
      coinType: 63,
   },
   {
      slug: 'linx',
      network: _extensions.linx,
      coinType: 114,
   },
   {
      slug: 'lkrcoin',
      network: _extensions.lkrcoin,
      coinType: 557,
   },
   {
      slug: 'litecoin',
      network: _extensions.litecoin,
      coinType: 2,
   },
   {
      slug: 'litecointestnet',
      network: _extensions.litecointestnet,
      coinType: 1,
   },
   {
      slug: 'litecoinz',
      network: _extensions.litecoinz,
      coinType: 221,
   },
   {
      slug: 'terra',
      network: _extensions.bitcoin,
      coinType: 330,
   },
   {
      slug: 'lynx',
      network: _extensions.lynx,
      coinType: 191,
   },
   {
      slug: 'maza',
      network: _extensions.maza,
      coinType: 13,
   },
   {
      slug: 'megacoin',
      network: _extensions.megacoin,
      coinType: 217,
   },
   {
      slug: 'mix',
      network: _extensions.bitcoin,
      coinType: 76,
   },
   {
      slug: 'minexcoin',
      network: _extensions.minexcoin,
      coinType: 182,
   },
   {
      slug: 'monacoin',
      network: _extensions.monacoin,
      coinType: 22,
   },
   {
      slug: 'monkeyproject',
      network: _extensions.monkeyproject,
      coinType: 214,
   },
   {
      slug: 'moac',
      network: _extensions.bitcoin,
      coinType: 314,
   },
   {
      slug: 'musicoin',
      network: _extensions.bitcoin,
      coinType: 184,
   },
   {
      slug: 'navcoin',
      network: _extensions.navcoin,
      coinType: 130,
   },
   {
      slug: 'nebulas',
      network: _extensions.bitcoin,
      coinType: 2718,
   },
   {
      slug: 'neblio',
      network: _extensions.neblio,
      coinType: 146,
   },
   {
      slug: 'neoscoin',
      network: _extensions.neoscoin,
      coinType: 25,
   },
   {
      slug: 'nix',
      network: _extensions.nix,
      coinType: 400,
   },
   {
      slug: 'gulden',
      network: _extensions.gulden,
      coinType: 87,
   },
   {
      slug: 'namecoin',
      network: _extensions.namecoin,
      coinType: 7,
   },
   {
      slug: 'energi',
      network: _extensions.energi,
      coinType: 204,
   },
   {
      slug: 'neurocoin',
      network: _extensions.neurocoin,
      coinType: 110,
   },
   {
      slug: 'nushares',
      network: _extensions.nushares,
      coinType: 11,
   },
   {
      slug: 'newyorkc',
      network: _extensions.newyorkc,
      coinType: 179,
   },
   {
      slug: 'novacoin',
      network: _extensions.novacoin,
      coinType: 50,
   },
   {
      slug: 'okcash',
      network: _extensions.okcash,
      coinType: 69,
   },
   {
      slug: 'omnicore',
      network: _extensions.omnicore,
      coinType: 200,
   },
   {
      slug: 'deeponion',
      network: _extensions.deeponion,
      coinType: 305,
   },
   {
      slug: 'onixcoin',
      network: _extensions.onixcoin,
      coinType: 174,
   },
   {
      slug: 'particl',
      network: _extensions.particl,
      coinType: 44,
   },
   {
      slug: 'phore',
      network: _extensions.phore,
      coinType: 444,
   },
   {
      slug: 'pinkcoin',
      network: _extensions.pinkcoin,
      coinType: 117,
   },
   {
      slug: 'pirl',
      network: _extensions.bitcoin,
      coinType: 164,
   },
   {
      slug: 'pivx',
      network: _extensions.pivx,
      coinType: 119,
   },
   {
      slug: 'pivxtestnet',
      network: _extensions.pivxtestnet,
      coinType: 1,
   },
   {
      slug: 'poa',
      network: _extensions.bitcoin,
      coinType: 178,
   },
   {
      slug: 'poswcoin',
      network: _extensions.poswcoin,
      coinType: 47,
   },
   {
      slug: 'potcoin',
      network: _extensions.potcoin,
      coinType: 81,
   },
   {
      slug: 'peercoin',
      network: _extensions.peercoin,
      coinType: 6,
   },
   {
      slug: 'projectcoin',
      network: _extensions.projectcoin,
      coinType: 533,
   },
   {
      slug: 'pesobit',
      network: _extensions.pesobit,
      coinType: 62,
   },
   {
      slug: 'putincoin',
      network: _extensions.putincoin,
      coinType: 122,
   },
   {
      slug: 'rapids',
      network: _extensions.rapids,
      coinType: 320,
   },
   {
      slug: 'ravencoin',
      network: _extensions.ravencoin,
      coinType: 175,
   },
   {
      slug: 'rubycoin',
      network: _extensions.rubycoin,
      coinType: 16,
   },
   {
      slug: 'reddcoin',
      network: _extensions.reddcoin,
      coinType: 4,
   },
   {
      slug: 'ritocoin',
      network: _extensions.ritocoin,
      coinType: 19169,
   },
   {
      slug: 'thorchain',
      network: _extensions.bitcoin,
      coinType: 931,
   },
   {
      slug: 'revolutionvr',
      network: _extensions.revolutionvr,
      coinType: 129,
   },
   {
      slug: 'safecoin',
      network: _extensions.safecoin,
      coinType: 19165,
   },
   {
      slug: 'scribe',
      network: _extensions.scribe,
      coinType: 545,
   },
   {
      slug: 'salus',
      network: _extensions.salus,
      coinType: 63,
   },
   {
      slug: 'shadow',
      network: _extensions.shadow,
      coinType: 35,
   },
   {
      slug: 'shadowtn',
      network: _extensions.shadowtn,
      coinType: 1,
   },
   {
      slug: 'slimcoin',
      network: _extensions.slimcoin,
      coinType: 63,
   },
   {
      slug: 'slimcointn',
      network: _extensions.slimcointn,
      coinType: 111,
   },
   {
      slug: 'solarcoin',
      network: _extensions.solarcoin,
      coinType: 58,
   },
   {
      slug: 'smileycoin',
      network: _extensions.smileycoin,
      coinType: 59,
   },
   {
      slug: 'stashtn',
      network: _extensions.stashtn,
      coinType: 0xcafe,
   },
   {
      slug: 'stratis',
      network: _extensions.stratis,
      coinType: 105,
   },
   {
      slug: 'sugarchain',
      network: _extensions.sugarchain,
      coinType: 408,
   },
   {
      slug: 'sugarchaintestnet',
      network: _extensions.sugarchaintestnet,
      coinType: 408,
   },
   {
      slug: 'jingtum',
      network: _extensions.bitcoin,
      coinType: 315,
   },
   {
      slug: 'stratistest',
      network: _extensions.stratistest,
      coinType: 105,
   },
   {
      slug: 'syscoin',
      network: _extensions.syscoin,
      coinType: 57,
   },
   {
      slug: 'hempcoin',
      network: _extensions.hempcoin,
      coinType: 113,
   },
   {
      slug: 'thought',
      network: _extensions.thought,
      coinType: 1618,
   },
   {
      slug: 'toa',
      network: _extensions.toa,
      coinType: 159,
   },
   {
      slug: 'twins',
      network: _extensions.twins,
      coinType: 970,
   },
   {
      slug: 'twinstestnet',
      network: _extensions.twinstestnet,
      coinType: 1,
   },
   {
      slug: 'ultimatesecurecash',
      network: _extensions.ultimatesecurecash,
      coinType: 112,
   },
   {
      slug: 'nubits',
      network: _extensions.nubits,
      coinType: 12,
   },
   {
      slug: 'unobtanium',
      network: _extensions.unobtanium,
      coinType: 92,
   },
   {
      slug: 'vpncoin',
      network: _extensions.vpncoin,
      coinType: 33,
   },
   {
      slug: 'vechain',
      network: _extensions.bitcoin,
      coinType: 818,
   },
   {
      slug: 'viacoin',
      network: _extensions.viacoin,
      coinType: 14,
   },
   {
      slug: 'viacointestnet',
      network: _extensions.viacointestnet,
      coinType: 1,
   },
   {
      slug: 'vivo',
      network: _extensions.vivo,
      coinType: 166,
   },
   {
      slug: 'vertcoin',
      network: _extensions.vertcoin,
      coinType: 28,
   },
   {
      slug: 'wagerr',
      network: _extensions.wagerr,
      coinType: 7825266,
   },
   {
      slug: 'wincoin',
      network: _extensions.wincoin,
      coinType: 181,
   },
   {
      slug: 'artax',
      network: _extensions.artax,
      coinType: 219,
   },
   {
      slug: 'bitcoinplus',
      network: _extensions.bitcoinplus,
      coinType: 65,
   },
   {
      slug: 'myriadcoin',
      network: _extensions.myriadcoin,
      coinType: 90,
   },
   {
      slug: 'ripple',
      network: _extensions.bitcoin,
      coinType: 144,
   },
   {
      slug: 'vcash',
      network: _extensions.vcash,
      coinType: 127,
   },
   {
      slug: 'verge',
      network: _extensions.verge,
      coinType: 77,
   },
   {
      slug: 'xuez',
      network: _extensions.xuez,
      coinType: 225,
   },
   {
      slug: 'whitecoin',
      network: _extensions.whitecoin,
      coinType: 559,
   },
   {
      slug: 'zcoin',
      network: _extensions.zcoin,
      coinType: 136,
   },
   {
      slug: 'zoobc',
      network: _extensions.zoobc,
      coinType: 883,
   },
   {
      slug: 'zclassic',
      network: _extensions.zclassic,
      coinType: 147,
   },
   {
      slug: 'zcash',
      network: _extensions.zcash,
      coinType: 133,
   },
   {
      slug: 'zencash',
      network: _extensions.zencash,
      coinType: 121,
   },
   {
      slug: 'tron',
      network: _extensions.bitcoin,
      coinType: 195,
   },
   {
      slug: 'ethereum',
      network: _extensions.bitcoin,
      coinType: 60,
   },
];

export type NetworkSlug =
    | 'asiacoin'
    | 'adcoin'
    | 'argoneum'
    | 'aryacoin'
    | 'cosmos'
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
    | 'bitcoin'
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
    | 'cannacoin_testnet'
    | 'canadaecoin'
    | 'clam'
    | 'callisto'
    | 'clubcoin'
    | 'compcoin'
    | 'cpuchain'
    | 'crave'
    | 'cranepay'
    | 'crown'
    | 'casinocoin'
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
    | 'dexon'
    | 'ecoin'
    | 'edrcoin'
    | 'egulden'
    | 'elastos'
    | 'ellaism'
    | 'einsteinium'
    | 'europecoin'
    | 'ether-core'
    | 'ethersocial'
    | 'ethereum-classic'
    | 'energyweb'
    | 'exclusivecoin'
    | 'exchangecoin'
    | 'expanse'
    | 'fio'
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
    | 'starname'
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
    | 'terra'
    | 'lynx'
    | 'maza'
    | 'megacoin'
    | 'mix'
    | 'minexcoin'
    | 'monacoin'
    | 'monkeyproject'
    | 'moac'
    | 'musicoin'
    | 'navcoin'
    | 'nebulas'
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
    | 'pirl'
    | 'pivx'
    | 'pivxtestnet'
    | 'poa'
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
    | 'thorchain'
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
    | 'jingtum'
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
    | 'vechain'
    | 'viacoin'
    | 'viacointestnet'
    | 'vivo'
    | 'vertcoin'
    | 'wagerr'
    | 'wincoin'
    | 'artax'
    | 'bitcoinplus'
    | 'myriadcoin'
    | 'ripple'
    | 'vcash'
    | 'verge'
    | 'xuez'
    | 'whitecoin'
    | 'zcoin'
    | 'zoobc'
    | 'zclassic'
    | 'zcash'
    | 'zencash'
    | 'tron'
    | 'ethereum';

export interface Network {
   slug: NetworkSlug;
   network?: object;
   coinType: number;
}

export default class Networks {
   static getNetworks() {
      return _networks;
   }

   static getNetworkInfo(slug: NetworkSlug) {
      return _networks.find((coin) => coin.slug === slug);
   }
}
