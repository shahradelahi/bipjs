import { expect, test } from "@jest/globals";
import { Buffer } from "buffer";
import { entropyToMnemonic, generateMnemonic, mnemonicToEntropy, mnemonicToLocale, validateMnemonic } from "../src";

test('Generate a English Mnemonic', () => {
   const englishMnemonic = generateMnemonic(128, "english");
   expect(typeof englishMnemonic).toBe('string');
   expect(englishMnemonic.split(' ').length).toBe(12);

   console.log(englishMnemonic);
});

test('Convert Mnemonic to Entropy', () => {
   const mnemonic = generateMnemonic();
   const entropy = mnemonicToEntropy("utility day odor top chief metal access ivory scare slender brown manual");

   expect(typeof entropy).toBe('string');
   expect(entropy.length).toBeGreaterThanOrEqual(32);

   console.table({
      mnemonic,
      entropy
   });
});

test('Generate Validation of a Mnemonic', () => {
   const mnemonic = generateMnemonic();
   const isValid = validateMnemonic(mnemonic);

   expect(isValid).toBe(true);

   console.table({
      mnemonic,
      isValid
   });
});

test('Generate a Japanese Mnemonic', () => {

   const japaneseMnemonic = generateMnemonic(256, "japanese");

   expect(typeof japaneseMnemonic).toBe('string');
   expect(japaneseMnemonic.split('\u3000').length).toBe(24);
   expect(/\u3000/.test(japaneseMnemonic)).toBe(true);

   console.log(japaneseMnemonic.replace(/\u3000/g, ' '));
});

test('Generate a Mnemonic from a given Entropy', () => {

   const entropy = '00000000000000000000000000000000';
   const mnemonic = entropyToMnemonic(Uint8Array.from(Buffer.from(entropy, 'hex')));

   expect(typeof mnemonic).toBe('string');
   expect(mnemonic.split(' ').length).toBe(12);

   console.log(mnemonic);
});

test('Detect a Spanish Mnemonic', () => {
   const spanishMnemonic = generateMnemonic(128, "spanish");

   expect(mnemonicToLocale(spanishMnemonic)).toBe('spanish');

   console.log(spanishMnemonic);
});
