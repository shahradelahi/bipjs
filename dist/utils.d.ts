import { Buffer } from 'buffer';
import { Language } from './wordlists';
import sjcl from 'sjcl';
export interface IDerivationPathParams {
    purpose: number;
    coinType?: number;
    account?: number;
    change?: number;
    addressIndex?: number;
    hardened?: boolean;
}
export declare const Cosmos: {
    bufferToPublic: (pubBuf: Buffer, hrp?: string) => string;
    bufferToAddress: (pubBuf: Buffer, hrp?: string) => string;
};
export declare const FIO: {
    bufferToPublic: (pubBuf: Buffer) => string;
    bufferToPrivate: (privBuf: Buffer) => string;
};
export declare const EOS: {
    bufferToPublic: (pubBuf: Buffer) => string;
    bufferToPrivate: (privBuf: Buffer) => string;
};
export declare const XWC: {
    bufferToAddress: (pubBuf: Buffer) => string;
    bufferToPublic: (pubBuf: Buffer) => string;
    bufferToPrivate: (privBuf: Buffer) => string;
};
export declare const Ripple: {
    convertAddress: (address: string) => string;
    convertPrivate: (privateKey: string) => string;
};
export declare const CasinoCoin: {
    convertAddress: (address: string) => string;
    convertPrivate: (privateKey: string) => string;
};
export declare const Jingtum: {
    convertAddress: (address: string) => string;
    convertPrivate: (privateKey: string) => string;
};
export declare function getDerivationPath(params: IDerivationPathParams): string;
export declare function stripHexPrefix(address: string): string;
export declare function uint8ToHex(arr: Uint8Array): string;
export declare function splitWords(mnemonic: string): string[];
export declare function zFill(source: string, length: number): string;
export declare function joinWords(words: string[], language: Language): string;
export declare function normalizeString(str: string): string;
export declare function byteArrayToWordArray(data: Uint8Array): sjcl.BitArray;
export declare function byteArrayToBinaryString(data: Uint8Array): string;
export declare function hexStringToBinaryString(hexString: string): string;
export declare function binaryStringToHexString(binary: string): string;
