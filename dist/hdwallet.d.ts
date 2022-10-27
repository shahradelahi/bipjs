/// <reference types="node" />
import { CoinSymbol, NetworkSlug } from './coins';
import { ethers } from 'ethers';
import { Buffer } from 'buffer';
export interface IAccountOpts {
    purpose?: number;
    index?: number;
    account?: number;
    useHardenedAddresses?: boolean;
    derivationPath?: string;
}
export interface Account {
    readonly privateKey: string;
    readonly publicKey: string;
    readonly address: string;
    readonly path: string;
}
export default class HDWallet {
    private readonly _ecnode;
    private readonly _extendedKey;
    constructor(ECNode: ethers.utils.HDNode);
    static fromMnemonic(mnemonic: string): HDWallet;
    static fromSeed(seed: Buffer): HDWallet;
    static fromExtendedKey(extendedKey: string): HDWallet;
    getExtendedKey(): string;
    getExtendedPublicKey(): string;
    getMnemonic(): string | undefined;
    private derivePath;
    getECNode(derivationPath?: string): ethers.utils.HDNode;
    getAccount(coinSymbol: CoinSymbol, networkSlug: NetworkSlug, options?: IAccountOpts): Account;
}
