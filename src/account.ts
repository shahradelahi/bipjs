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
  private readonly _ecNode: ethers.utils.HDNode;
  private readonly _network: NetworkSlug;
  private readonly _privateKey: string;
  private readonly _publicKey: string;
  private readonly _address: string;
  private readonly _path: string;

  constructor(params: IAccount) {
    this._ecNode = params.ECNode;
    this._network = params.network;
    this._path = params.path;
    this._privateKey = params.privateKey;
    this._publicKey = params.publicKey;
    this._address = params.address;
  }

  getDerivationPath(): string {
    return this._path;
  }

  getAddress(): string {
    return this._address;
  }

  getNetwork(): NetworkSlug {
    return this._network;
  }

  getExtendedKey(): string {
    return this._ecNode.extendedKey;
  }

  getExtendedPublicKey(): string {
    return this._ecNode.neuter().extendedKey;
  }

  getPrivateKey(): string {
    return this._privateKey;
  }

  getPublicKey(): string {
    return this._publicKey;
  }
}
