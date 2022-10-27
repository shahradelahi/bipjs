import WordLists, { Language } from './wordlists';
import sjcl from 'sjcl';
import crypto from 'crypto';
import {
  binaryStringToHexString,
  byteArrayToBinaryString,
  byteArrayToWordArray,
  hexStringToBinaryString,
  joinWords,
  normalizeString,
  splitWords,
  zFill,
} from './utils';
import { Buffer } from 'buffer';
import HDWallet from './hdwallet';

export function generateMnemonic(strength: number = 128, language: Language = 'english'): string {
  strength = strength || 128;
  const r = strength % 32;
  if (r > 0) {
    throw 'Strength should be divisible by 32, but it is not (' + r + ').';
  }
  const buffer = new Uint8Array(strength / 8);
  const data = crypto.randomFillSync(buffer);
  return entropyToMnemonic(data, language);
}

export function entropyToMnemonic(entropy: Uint8Array, language: Language = 'english'): string {
  if (entropy.length % 4 > 0) {
    throw `Data length in bits should be divisible by 32, but it is not (${entropy.length} bytes = ${
      entropy.length * 8
    } bits).`;
  }

  const data = byteArrayToWordArray(entropy);
  const hash = sjcl.hash.sha256.hash(data);
  const h = sjcl.codec.hex.fromBits(hash);

  const a = byteArrayToBinaryString(entropy);
  const c = zFill(hexStringToBinaryString(h), 256);
  const d = c.substring(0, (entropy.length * 8) / 32);
  const b = a + d;

  const result = [];
  const blen = b.length / 11;
  for (let i = 0; i < blen; i++) {
    const idx = parseInt(b.substring(i * 11, (i + 1) * 11), 2);
    result.push(WordLists.get(language)[idx]);
  }
  return joinWords(result, language);
}

export function mnemonicToSeed(mnemonic: string, passphrase: string = ''): Buffer {
  passphrase = passphrase || '';
  mnemonic = joinWords(splitWords(mnemonic), mnemonicToLocale(mnemonic)); // removes duplicate blanks
  const mnemonicNormalized = normalizeString(mnemonic);
  passphrase = normalizeString(passphrase);
  passphrase = 'mnemonic' + passphrase;
  const mnemonicBits = sjcl.codec.utf8String.toBits(mnemonicNormalized);
  const passphraseBits = sjcl.codec.utf8String.toBits(passphrase);
  const sjclArray = sjcl.misc.pbkdf2(mnemonicBits, passphraseBits, 2048, 512, sjcl.misc.hmac);
  return Buffer.from(sjcl.codec.hex.fromBits(sjclArray));
}

export function mnemonicToLocale(mnemonic: string): Language {
  return WordLists.detectLocale(splitWords(mnemonic)[0]);
}

export function mnemonicToEntropy(mnemonic: string): string {
  const words = splitWords(mnemonic);
  if (words.length % 3 > 0) {
    throw `Word list should be a multiple of three words long, but it is not (${words.length} words).`;
  }
  const entropyBits = words
    .map((w) => {
      const idx = WordLists.get(mnemonicToLocale(mnemonic)).indexOf(w);
      if (idx === -1) {
        throw 'Word not found in wordlist: ' + w;
      }
      return zFill(idx.toString(2), 11);
    })
    .join('');
  const l = entropyBits.length / 33;
  const entropy = entropyBits.substring(0, l * 32);
  return binaryStringToHexString(entropy);
}

export function validateMnemonic(mnemonic: string): boolean {
  try {
    mnemonicToEntropy(mnemonic);
    return true;
  } catch (e) {
    return false;
  }
}

export { HDWallet };
