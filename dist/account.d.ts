import { ethers } from 'ethers';
import { NetworkSlug } from './networks';
interface IAccount {
    ECNode: ethers.utils.HDNode;
    network: NetworkSlug;
    path: string;
    privateKey: string;
    publicKey: string;
    address: string;
}
export default class Account {
    private readonly _ecNode;
    private readonly _network;
    private readonly _privateKey;
    private readonly _publicKey;
    private readonly _address;
    private readonly _path;
    constructor(params: IAccount);
    getDerivationPath(): string;
    getAddress(): string;
    getNetwork(): NetworkSlug;
    getExtendedKey(): string;
    getExtendedPublicKey(): string;
    getPrivateKey(): string;
    getPublicKey(): string;
}
export {};
