import {expect, test} from "@jest/globals";
import {generateMnemonic} from "../src";
import HDWallet from "../src/hdwallet";

test('Generate a Bitcoin Wallet', () => {

   const mnemonic = generateMnemonic(128);
   const wallet = HDWallet.fromMnemonic(mnemonic);
   const {address} = wallet.getAccount("bitcoin")

   expect(address.startsWith("1")).toBe(true);
   expect(address.length).toBe(34);
   expect(wallet.getExtendedKey().startsWith("xprv")).toBe(true);
   expect(wallet.getExtendedPublicKey().startsWith("xpub")).toBe(true);

   console.table({
      mnemonic,
      address,
      xprv: wallet.getExtendedKey(),
      xpub: wallet.getExtendedPublicKey(),
   });

});

test('Generate a Ethereum Wallet', () => {

   const mnemonic = generateMnemonic(256);
   const wallet = HDWallet.fromMnemonic(mnemonic);

   const path = "m/44'/60'/0'/0/0";
   const {address} = wallet.getAccount("ethereum", {derivationPath: path});

   expect(address.startsWith("0x")).toBe(true);
   expect(address.length).toBe(42);

   console.table({
      mnemonic,
      address,
   });

});

test('Generate a Tron Wallet', () => {

   const mnemonic = generateMnemonic(256);
   const wallet = HDWallet.fromMnemonic(mnemonic);

   const account = wallet.getAccount("tron", {index: 20});

   expect(account.address.startsWith("T")).toBe(true);
   expect(account.address.length).toBe(34);
   expect(account.path).toBe("m/44'/195'/0'/0/20");
   expect(account.privateKey.startsWith("0x")).toBe(true);
   expect(account.publicKey.startsWith("0x")).toBe(true);

   console.table({mnemonic, ...account});

});

