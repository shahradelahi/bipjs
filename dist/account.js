"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(params) {
        this._ecNode = params.ECNode;
        this._network = params.network;
        this._path = params.path;
        this._privateKey = params.privateKey;
        this._publicKey = params.publicKey;
        this._address = params.address;
    }
    getDerivationPath() {
        return this._path;
    }
    getAddress() {
        return this._address;
    }
    getNetwork() {
        return this._network;
    }
    getExtendedKey() {
        return this._ecNode.extendedKey;
    }
    getExtendedPublicKey() {
        return this._ecNode.neuter().extendedKey;
    }
    getPrivateKey() {
        return this._privateKey;
    }
    getPublicKey() {
        return this._publicKey;
    }
}
exports.default = Account;
