"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethUtil = require("ethereumjs-util");
const ethereumjs_util_1 = require("ethereumjs-util");
const bitcoin = require("bitcoinjs-lib");
const coins_1 = require("./coins");
const utils_1 = require("./utils");
const ethers_1 = require("ethers");
const buffer = require("buffer");
function isEthereumNetwork(symbol) {
    return (symbol === 'ETH' ||
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
        symbol === 'WAN');
}
class HDWallet {
    constructor(ECNode) {
        this._ecnode = ECNode;
        this._extendedKey = ECNode.extendedKey;
    }
    static fromMnemonic(mnemonic) {
        return new HDWallet(ethers_1.ethers.utils.HDNode.fromMnemonic(mnemonic));
    }
    static fromSeed(seed) {
        return new HDWallet(ethers_1.ethers.utils.HDNode.fromSeed(seed));
    }
    static fromExtendedKey(extendedKey) {
        return new HDWallet(ethers_1.ethers.utils.HDNode.fromExtendedKey(extendedKey));
    }
    getExtendedKey() {
        return this._extendedKey;
    }
    getExtendedPublicKey() {
        return this._ecnode.neuter().extendedKey;
    }
    getMnemonic() {
        var _a;
        return (_a = this._ecnode.mnemonic) === null || _a === void 0 ? void 0 : _a.phrase;
    }
    derivePath(derivationPath) {
        return HDWallet.fromExtendedKey(this._ecnode.derivePath(derivationPath).extendedKey);
    }
    getECNode(derivationPath) {
        return derivationPath ? this._ecnode.derivePath(derivationPath) : this._ecnode;
    }
    getAccount(coinSymbol, networkSlug, options) {
        const defaultOptions = {
            purpose: 44,
            index: 0,
            account: 0,
            useHardenedAddresses: false,
        };
        const useOptions = Object.assign(Object.assign({}, defaultOptions), (options ? options : {}));
        const coinInfo = coins_1.default.getCoinInfo(coinSymbol, networkSlug);
        if (!coinInfo) {
            throw new Error(`Coin ${coinSymbol} not found`);
        }
        const path = (options === null || options === void 0 ? void 0 : options.derivationPath) ||
            (0, utils_1.getDerivationPath)({
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
        const privateKeyBuffer = buffer.Buffer.from((0, utils_1.stripHexPrefix)(keyPair.privateKey), 'hex');
        const publicKeyBuffer = buffer.Buffer.from((0, utils_1.stripHexPrefix)(keyPair.publicKey), 'hex');
        let prebuiltAccount = {
            privateKey: ethUtil.addHexPrefix((0, ethereumjs_util_1.bufferToHex)(privateKeyBuffer)),
            publicKey: ethUtil.addHexPrefix((0, ethereumjs_util_1.bufferToHex)(publicKeyBuffer)),
            address: '',
            path: path,
        };
        if (isEthereumNetwork(coinInfo.symbol)) {
            const ethPubkey = ethers_1.ethers.utils.computePublicKey(keyPair.publicKey, true);
            const addressBuffer = buffer.Buffer.from(ethers_1.ethers.utils.computeAddress(ethPubkey));
            const hexAddress = addressBuffer.toString();
            const checksumAddress = ethers_1.ethers.utils.getAddress(hexAddress);
            return Object.assign(Object.assign({}, prebuiltAccount), { address: ethUtil.addHexPrefix(checksumAddress) });
        }
        if (coinInfo.symbol === 'TRX') {
            const ethPubkey = ethers_1.ethers.utils.computePublicKey(keyPair.publicKey, true);
            const ethAddress = ethers_1.ethers.utils.computeAddress(ethPubkey);
            const addressBuffer = buffer.Buffer.from(ethAddress.slice(2), 'hex');
            return Object.assign(Object.assign({}, prebuiltAccount), { address: bitcoin.address.toBase58Check(addressBuffer, 0x41) });
        }
        /** Bitcoin and other similar coins */
        const Payment = {
            pubkey: publicKeyBuffer,
            network: coinInfo.network,
        };
        const { address } = bitcoin.payments.p2pkh(Payment);
        if (address) {
            return Object.assign(Object.assign({}, prebuiltAccount), { address });
        }
        throw new Error(`Coin ${coinSymbol} not supported`);
    }
}
exports.default = HDWallet;
