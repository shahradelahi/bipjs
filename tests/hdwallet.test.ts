import { expect, test } from "@jest/globals";
import { generateMnemonic } from "../src";
import HDWallet from "../src/hdwallet";

test('Generate a Bitcoin Wallet', () => {

   const mnemonic = generateMnemonic(128, "english");
   const wallet = HDWallet.fromMnemonic(mnemonic);
   const account = wallet.getAccount("bitcoin")

   expect(account.getAddress().startsWith("1")).toBe(true);
   expect(account.getAddress().length).toBeGreaterThanOrEqual(33);
   expect(wallet.getExtendedKey().startsWith("xprv")).toBe(true);
   expect(wallet.getExtendedPublicKey().startsWith("xpub")).toBe(true);

   console.table({
      mnemonic,
      address: account.getAddress(),
      xprv: wallet.getExtendedKey(),
      xpub: wallet.getExtendedPublicKey()
   });

});

test('Generate a Ethereum Wallet', () => {

   const mnemonic = generateMnemonic(256);
   const wallet = HDWallet.fromMnemonic(mnemonic);

   const path = "m/44'/60'/0'/0/0";
   const account = wallet.getAccount("ethereum", { derivationPath: path });

   expect(account.getAddress().startsWith("0x")).toBe(true);
   expect(account.getAddress().length).toBe(42);

   console.table({
      mnemonic,
      account: account.getAddress()
   });

});

test('Generate a Tron Wallet', () => {

   const mnemonic = generateMnemonic(256);
   const wallet = HDWallet.fromMnemonic(mnemonic);

   const account = wallet.getAccount("tron", { index: 20 });

   expect(account.getAddress().startsWith("T")).toBe(true);
   expect(account.getAddress().length).toBe(34);
   expect(account.getDerivationPath()).toBe("m/44'/195'/0'/0/20");
   expect(account.getPrivateKey().startsWith("0x")).toBe(true);
   expect(account.getPublicKey().startsWith("0x")).toBe(true);

   console.table({ mnemonic, ...account });

});

