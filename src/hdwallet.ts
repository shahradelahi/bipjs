import * as ethUtil from 'ethereumjs-util';
import { bufferToHex } from 'ethereumjs-util';
import * as bitcoin from 'bitcoinjs-lib';
import Coins, { CoinSymbol, NetworkSlug } from './coins';
import { getDerivationPath, stripHexPrefix } from './utils';
import { ethers } from 'ethers';
import * as buffer from 'buffer';
import { Buffer } from 'buffer';

function isEthereumNetwork(symbol: string): boolean {
  return (
    symbol === 'ETH' ||
    symbol === 'ETC' ||
    symbol === 'EWT' ||
    symbol === 'PIRL' ||
    symbol === 'MIX' ||
    symbol === 'MOAC' ||
    symbol === 'MUSIC' ||
    symbol === 'POA' ||
    symbol === 'EXP' ||
    symbol === 'CLO' ||
    symbol === 'DXN' ||
    symbol === 'ELLA' ||
    symbol === 'ESN' ||
    symbol === 'VET' ||
    symbol === 'ERE' ||
    symbol === 'BSC' ||
    symbol === 'HECO' ||
    symbol === 'OKEX' ||
    symbol === 'FUSE' ||
    symbol === 'RSK' ||
    symbol === 'TOMO' ||
    symbol === 'WAN'
  );
}

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
  private readonly _ecnode: ethers.utils.HDNode;
  private readonly _extendedKey: string;

  constructor(ECNode: ethers.utils.HDNode) {
    this._ecnode = ECNode;
    this._extendedKey = ECNode.extendedKey;
  }

  static fromMnemonic(mnemonic: string): HDWallet {
    return new HDWallet(ethers.utils.HDNode.fromMnemonic(mnemonic));
  }

  static fromSeed(seed: Buffer): HDWallet {
    return new HDWallet(ethers.utils.HDNode.fromSeed(seed));
  }

  static fromExtendedKey(extendedKey: string): HDWallet {
    return new HDWallet(ethers.utils.HDNode.fromExtendedKey(extendedKey));
  }

  public getExtendedKey(): string {
    return this._extendedKey;
  }

  public getExtendedPublicKey(): string {
    return this._ecnode.neuter().extendedKey;
  }

  public getMnemonic(): string | undefined {
    return this._ecnode.mnemonic?.phrase;
  }

  private derivePath(derivationPath: string): HDWallet {
    return HDWallet.fromExtendedKey(this._ecnode.derivePath(derivationPath).extendedKey);
  }

  public getECNode(derivationPath?: string): ethers.utils.HDNode {
    return derivationPath ? this._ecnode.derivePath(derivationPath) : this._ecnode;
  }

  public getAccount(coinSymbol: CoinSymbol, networkSlug: NetworkSlug, options?: IAccountOpts): Account {
    const defaultOptions = {
      purpose: 44,
      index: 0,
      account: 0,
      useHardenedAddresses: false,
    };

    const useOptions = { ...defaultOptions, ...(options ? options : {}) };

    const coinInfo = Coins.getCoinInfo(coinSymbol, networkSlug);
    if (!coinInfo) {
      throw new Error(`Coin ${coinSymbol} not found`);
    }

    const path =
      options?.derivationPath ||
      getDerivationPath({
        hardened: useOptions.useHardenedAddresses,
        purpose: useOptions.purpose,
        account: useOptions.account,
        addressIndex: useOptions.index,
        coinType: coinInfo.coinType,
      });

    let keyPair = this.getECNode().derivePath(path);
    if (!keyPair.privateKey) {
      throw new Error('Private key not found');
    }

    const privateKeyBuffer = buffer.Buffer.from(stripHexPrefix(keyPair.privateKey), 'hex');
    const publicKeyBuffer = buffer.Buffer.from(stripHexPrefix(keyPair.publicKey), 'hex');

    let prebuiltAccount = {
      privateKey: ethUtil.addHexPrefix(bufferToHex(privateKeyBuffer)),
      publicKey: ethUtil.addHexPrefix(bufferToHex(publicKeyBuffer)),
      address: '',
      path: path,
    };

    if (isEthereumNetwork(coinInfo.symbol)) {
      const ethPubkey = ethers.utils.computePublicKey(keyPair.publicKey, true);
      const addressBuffer = buffer.Buffer.from(ethers.utils.computeAddress(ethPubkey));
      const hexAddress = addressBuffer.toString();
      const checksumAddress = ethers.utils.getAddress(hexAddress);
      return { ...prebuiltAccount, address: ethUtil.addHexPrefix(checksumAddress) };
    }

    if (coinInfo.symbol === 'TRX') {
      const ethPubkey = ethers.utils.computePublicKey(keyPair.publicKey, true);
      const ethAddress = ethers.utils.computeAddress(ethPubkey);
      const addressBuffer = buffer.Buffer.from(ethAddress.slice(2), 'hex');
      return { ...prebuiltAccount, address: bitcoin.address.toBase58Check(addressBuffer, 0x41) };
    }

    /** Bitcoin and other similar coins */

    const Payment: bitcoin.payments.Payment = {
      pubkey: publicKeyBuffer,
      network: coinInfo.network as any,
    };

    const { address } = bitcoin.payments.p2pkh(Payment);

    if (address) {
      return { ...prebuiltAccount, address };
    }

    throw new Error(`Coin ${coinSymbol} not supported`);
  }
}
