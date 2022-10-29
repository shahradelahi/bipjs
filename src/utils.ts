import basex from 'base-x';
import { Buffer } from 'buffer';
import crypto from 'crypto';
import base58 from 'bs58';
import { Language } from './wordlists';
import sjcl from 'sjcl';
import { bech32 } from 'bech32';

export interface IDerivationPathParams {
  purpose: number;
  coinType?: number;
  account?: number;
  change?: number;
  addressIndex?: number;
  hardened?: boolean;
}

export const Cosmos = {
  bufferToPublic: function (pubBuf: Buffer, hrp = 'cosmos') {
    const AminoSecp256k1PubkeyPrefix = Buffer.from('EB5AE987', 'hex');
    const AminoSecp256k1PubkeyLength = Buffer.from('21', 'hex');
    pubBuf = Buffer.concat([AminoSecp256k1PubkeyPrefix, AminoSecp256k1PubkeyLength, pubBuf]);
    return bech32.encode(`${hrp}pub`, bech32.toWords(pubBuf));
  },
  bufferToAddress: function (pubBuf: Buffer, hrp = 'cosmos') {
    const sha256_ed = crypto.createHash('sha256').update(pubBuf).digest();
    const ripemd160_ed = crypto.createHash('rmd160').update(sha256_ed).digest();
    return bech32.encode(hrp, bech32.toWords(ripemd160_ed));
  },
};

export const FIO = {
  bufferToPublic: function (pubBuf: Buffer) {
    const FIO_PUBLIC_PREFIX = 'FIO';

    let checksum = crypto.createHash('rmd160').update(pubBuf).digest('hex').slice(0, 8);
    pubBuf = Buffer.concat([pubBuf, Buffer.from(checksum, 'hex')]);
    return FIO_PUBLIC_PREFIX.concat(base58.encode(pubBuf));
  },
  bufferToPrivate: function (privBuf: Buffer) {
    const FIO_PRIVATE_PREFIX = '80';

    privBuf = Buffer.concat([Buffer.from(FIO_PRIVATE_PREFIX, 'hex'), privBuf]);
    let tmp = crypto.createHash('sha256').update(privBuf).digest();
    let checksum = crypto.createHash('sha256').update(tmp).digest('hex').slice(0, 8);
    privBuf = Buffer.concat([privBuf, Buffer.from(checksum, 'hex')]);
    return base58.encode(privBuf);
  },
};

export const EOS = {
  bufferToPublic: function (pubBuf: Buffer): string {
    const EOS_PUBLIC_PREFIX = 'EOS';
    let checksum = crypto.createHash('rmd160').update(pubBuf).digest('hex').slice(0, 8);
    pubBuf = Buffer.concat([pubBuf, Buffer.from(checksum, 'hex')]);
    return EOS_PUBLIC_PREFIX.concat(base58.encode(pubBuf));
  },
  bufferToPrivate: FIO.bufferToPrivate,
};

export const XWC = {
  bufferToAddress: function (pubBuf: Buffer) {
    const XWC_ADDRESS_PREFIX = 'XWC';
    const XWC_NORMAL_ADDRESS_VERSION = '35';
    let addrData = crypto.createHash('rmd160').update(crypto.createHash('sha512').update(pubBuf).digest()).digest();
    let addrBuf = Buffer.concat([Buffer.from(XWC_NORMAL_ADDRESS_VERSION, 'hex'), addrData]);
    let checksum = crypto.createHash('rmd160').update(addrBuf).digest('hex').slice(0, 8);
    addrBuf = Buffer.concat([addrBuf, Buffer.from(checksum, 'hex')]);
    return XWC_ADDRESS_PREFIX.concat(base58.encode(addrBuf));
  },
  bufferToPublic: function (pubBuf: Buffer) {
    const XWC_PUBLIC_PREFIX = 'XWC';
    let checksum = crypto.createHash('rmd160').update(pubBuf).digest('hex').slice(0, 8);
    pubBuf = Buffer.concat([pubBuf, Buffer.from(checksum, 'hex')]);
    return XWC_PUBLIC_PREFIX.concat(base58.encode(pubBuf));
  },
  bufferToPrivate: FIO.bufferToPrivate,
};

export const Ripple = {
  convertAddress: function (address: string): string {
    return basex('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz').encode(
      basex('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(address),
    );
  },
  convertPrivate: function (privateKey: string): string {
    return uint8ToHex(basex('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(privateKey)).slice(
      2,
      66,
    );
  },
};

export const CasinoCoin = { ...Ripple };
export const Jingtum = { ...Ripple };

export function getDerivationPath(params: IDerivationPathParams): string {
  const { purpose, coinType, account, change, addressIndex, hardened } = params;
  const hardenedStr = hardened ? "'" : '';
  return `m/${purpose}'/${coinType || 0}'/${account || 0}'/${change || 0}/${addressIndex || 0}${hardenedStr}`;
}

export function stripHexPrefix(address: string): string {
  const hasPrefix = address.substring(0, 2) === '0x' || address.substring(0, 2) === '0X';
  return hasPrefix ? address.slice(2) : address;
}

export function uint8ToHex(arr: Uint8Array): string {
  let s = '';
  for (let i = 0; i < arr.length; i++) {
    let h = arr[i].toString(16);
    while (h.length < 2) {
      h = '0' + h;
    }
    s = s + h;
  }
  return s;
}

export function splitWords(mnemonic: string): string[] {
  return mnemonic.split(/\s/g).filter(function (x) {
    return x.length;
  });
}

export function zFill(source: string, length: number): string {
  source = source.toString();
  while (source.length < length) {
    source = '0' + source;
  }
  return source;
}

export function joinWords(words: string[], language: Language): string {
  // Set space correctly depending on the language
  // see https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md#japanese
  let space = ' ';
  if (language == 'japanese') {
    space = '\u3000'; // ideographic space
  }
  return words.join(space);
}

export function normalizeString(str: string): string {
  return str.normalize('NFKD');
}

export function byteArrayToWordArray(data: Uint8Array): sjcl.BitArray {
  const a = [];
  for (let i = 0; i < data.length / 4; i++) {
    let v = 0;
    v += data[i * 4] << (8 * 3);
    v += data[i * 4 + 1] << (8 * 2);
    v += data[i * 4 + 2] << 8;
    v += data[i * 4 + 3] << 0;
    a.push(v);
  }
  return a;
}

export function byteArrayToBinaryString(data: Uint8Array): string {
  let bin = '';
  for (let i = 0; i < data.length; i++) {
    bin += zFill(data[i].toString(2), 8);
  }
  return bin;
}

export function hexStringToBinaryString(hexString: string): string {
  let binaryString = '';
  for (let i = 0; i < hexString.length; i++) {
    binaryString += zFill(parseInt(hexString[i], 16).toString(2), 4);
  }
  return binaryString;
}

export function binaryStringToHexString(binary: string): string {
  let hex = '';
  for (let i = 0; i < binary.length; i += 4) {
    const value = parseInt(binary.substring(i, i + 4), 2);
    hex += value.toString(16);
  }
  return hex;
}

export function addHexPrefix(str: string): string {
  return str.slice(0, 2) === '0x' ? str : '0x' + str;
}

export function bufferToHex(buffer: Buffer): string {
  return '0x' + buffer.toString('hex');
}
