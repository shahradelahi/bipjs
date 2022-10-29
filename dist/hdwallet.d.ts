/// <reference types="node" />
import { NetworkSlug } from './networks';
import { ethers } from 'ethers';
import { Buffer } from 'buffer';
import Account from './account';
export interface IAccountOpts {
    purpose?: number;
    index?: number;
    account?: number;
    useHardenedAddresses?: boolean;
    derivationPath?: string;
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
    getAccount(networkSlug: NetworkSlug, options?: IAccountOpts): Account;
}
