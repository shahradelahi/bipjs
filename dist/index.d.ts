/// <reference types="node" />
import { Language } from './wordlists';
import { Buffer } from 'buffer';
import HDWallet from './hdwallet';
export declare function generateMnemonic(strength?: number, language?: Language): string;
export declare function entropyToMnemonic(entropy: Uint8Array, language?: Language): string;
export declare function mnemonicToSeed(mnemonic: string, passphrase?: string): Buffer;
export declare function mnemonicToLocale(mnemonic: string): Language;
export declare function mnemonicToEntropy(mnemonic: string): string;
export declare function validateMnemonic(mnemonic: string): boolean;
export { HDWallet };
