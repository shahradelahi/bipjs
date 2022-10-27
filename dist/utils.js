"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryStringToHexString = exports.hexStringToBinaryString = exports.byteArrayToBinaryString = exports.byteArrayToWordArray = exports.normalizeString = exports.joinWords = exports.zFill = exports.splitWords = exports.uint8ToHex = exports.stripHexPrefix = exports.getDerivationPath = exports.Jingtum = exports.CasinoCoin = exports.Ripple = exports.XWC = exports.EOS = exports.FIO = exports.Cosmos = void 0;
const base_x_1 = require("base-x");
const buffer_1 = require("buffer");
const crypto_1 = require("crypto");
const bs58_1 = require("bs58");
const bech32_1 = require("bech32");
exports.Cosmos = {
    bufferToPublic: function (pubBuf, hrp = 'cosmos') {
        const AminoSecp256k1PubkeyPrefix = buffer_1.Buffer.from('EB5AE987', 'hex');
        const AminoSecp256k1PubkeyLength = buffer_1.Buffer.from('21', 'hex');
        pubBuf = buffer_1.Buffer.concat([AminoSecp256k1PubkeyPrefix, AminoSecp256k1PubkeyLength, pubBuf]);
        return bech32_1.bech32.encode(`${hrp}pub`, bech32_1.bech32.toWords(pubBuf));
    },
    bufferToAddress: function (pubBuf, hrp = 'cosmos') {
        const sha256_ed = crypto_1.default.createHash('sha256').update(pubBuf).digest();
        const ripemd160_ed = crypto_1.default.createHash('rmd160').update(sha256_ed).digest();
        return bech32_1.bech32.encode(hrp, bech32_1.bech32.toWords(ripemd160_ed));
    },
};
exports.FIO = {
    bufferToPublic: function (pubBuf) {
        const FIO_PUBLIC_PREFIX = 'FIO';
        let checksum = crypto_1.default.createHash('rmd160').update(pubBuf).digest('hex').slice(0, 8);
        pubBuf = buffer_1.Buffer.concat([pubBuf, buffer_1.Buffer.from(checksum, 'hex')]);
        return FIO_PUBLIC_PREFIX.concat(bs58_1.default.encode(pubBuf));
    },
    bufferToPrivate: function (privBuf) {
        const FIO_PRIVATE_PREFIX = '80';
        privBuf = buffer_1.Buffer.concat([buffer_1.Buffer.from(FIO_PRIVATE_PREFIX, 'hex'), privBuf]);
        let tmp = crypto_1.default.createHash('sha256').update(privBuf).digest();
        let checksum = crypto_1.default.createHash('sha256').update(tmp).digest('hex').slice(0, 8);
        privBuf = buffer_1.Buffer.concat([privBuf, buffer_1.Buffer.from(checksum, 'hex')]);
        return bs58_1.default.encode(privBuf);
    },
};
exports.EOS = {
    bufferToPublic: function (pubBuf) {
        const EOS_PUBLIC_PREFIX = 'EOS';
        let checksum = crypto_1.default.createHash('rmd160').update(pubBuf).digest('hex').slice(0, 8);
        pubBuf = buffer_1.Buffer.concat([pubBuf, buffer_1.Buffer.from(checksum, 'hex')]);
        return EOS_PUBLIC_PREFIX.concat(bs58_1.default.encode(pubBuf));
    },
    bufferToPrivate: exports.FIO.bufferToPrivate,
};
exports.XWC = {
    bufferToAddress: function (pubBuf) {
        const XWC_ADDRESS_PREFIX = 'XWC';
        const XWC_NORMAL_ADDRESS_VERSION = '35';
        let addrData = crypto_1.default.createHash('rmd160').update(crypto_1.default.createHash('sha512').update(pubBuf).digest()).digest();
        let addrBuf = buffer_1.Buffer.concat([buffer_1.Buffer.from(XWC_NORMAL_ADDRESS_VERSION, 'hex'), addrData]);
        let checksum = crypto_1.default.createHash('rmd160').update(addrBuf).digest('hex').slice(0, 8);
        addrBuf = buffer_1.Buffer.concat([addrBuf, buffer_1.Buffer.from(checksum, 'hex')]);
        return XWC_ADDRESS_PREFIX.concat(bs58_1.default.encode(addrBuf));
    },
    bufferToPublic: function (pubBuf) {
        const XWC_PUBLIC_PREFIX = 'XWC';
        let checksum = crypto_1.default.createHash('rmd160').update(pubBuf).digest('hex').slice(0, 8);
        pubBuf = buffer_1.Buffer.concat([pubBuf, buffer_1.Buffer.from(checksum, 'hex')]);
        return XWC_PUBLIC_PREFIX.concat(bs58_1.default.encode(pubBuf));
    },
    bufferToPrivate: exports.FIO.bufferToPrivate,
};
exports.Ripple = {
    convertAddress: function (address) {
        return (0, base_x_1.default)('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz').encode((0, base_x_1.default)('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(address));
    },
    convertPrivate: function (privateKey) {
        return uint8ToHex((0, base_x_1.default)('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz').decode(privateKey)).slice(2, 66);
    },
};
exports.CasinoCoin = Object.assign({}, exports.Ripple);
exports.Jingtum = Object.assign({}, exports.Ripple);
function getDerivationPath(params) {
    const { purpose, coinType, account, change, addressIndex, hardened } = params;
    const hardenedStr = hardened ? "'" : '';
    return `m/${purpose}'/${coinType || 0}'/${account || 0}'/${change || 0}/${addressIndex || 0}${hardenedStr}`;
}
exports.getDerivationPath = getDerivationPath;
function stripHexPrefix(address) {
    const hasPrefix = address.substring(0, 2) === '0x' || address.substring(0, 2) === '0X';
    return hasPrefix ? address.slice(2) : address;
}
exports.stripHexPrefix = stripHexPrefix;
function uint8ToHex(arr) {
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
exports.uint8ToHex = uint8ToHex;
function splitWords(mnemonic) {
    return mnemonic.split(/\s/g).filter(function (x) {
        return x.length;
    });
}
exports.splitWords = splitWords;
function zFill(source, length) {
    source = source.toString();
    while (source.length < length) {
        source = '0' + source;
    }
    return source;
}
exports.zFill = zFill;
function joinWords(words, language) {
    // Set space correctly depending on the language
    // see https://github.com/bitcoin/bips/blob/master/bip-0039/bip-0039-wordlists.md#japanese
    let space = ' ';
    if (language == 'japanese') {
        space = '\u3000'; // ideographic space
    }
    return words.join(space);
}
exports.joinWords = joinWords;
function normalizeString(str) {
    return str.normalize('NFKD');
}
exports.normalizeString = normalizeString;
function byteArrayToWordArray(data) {
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
exports.byteArrayToWordArray = byteArrayToWordArray;
function byteArrayToBinaryString(data) {
    let bin = '';
    for (let i = 0; i < data.length; i++) {
        bin += zFill(data[i].toString(2), 8);
    }
    return bin;
}
exports.byteArrayToBinaryString = byteArrayToBinaryString;
function hexStringToBinaryString(hexString) {
    let binaryString = '';
    for (let i = 0; i < hexString.length; i++) {
        binaryString += zFill(parseInt(hexString[i], 16).toString(2), 4);
    }
    return binaryString;
}
exports.hexStringToBinaryString = hexStringToBinaryString;
function binaryStringToHexString(binary) {
    let hex = '';
    for (let i = 0; i < binary.length; i += 4) {
        const value = parseInt(binary.substring(i, i + 4), 2);
        hex += value.toString(16);
    }
    return hex;
}
exports.binaryStringToHexString = binaryStringToHexString;
