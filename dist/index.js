"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HDWallet = exports.validateMnemonic = exports.mnemonicToEntropy = exports.mnemonicToLocale = exports.mnemonicToSeed = exports.entropyToMnemonic = exports.generateMnemonic = void 0;
const wordlists_1 = require("./wordlists");
const sjcl_1 = require("sjcl");
const crypto_1 = require("crypto");
const utils_1 = require("./utils");
const buffer_1 = require("buffer");
const hdwallet_1 = require("./hdwallet");
exports.HDWallet = hdwallet_1.default;
function generateMnemonic(strength = 128, language = 'english') {
    strength = strength || 128;
    const r = strength % 32;
    if (r > 0) {
        throw 'Strength should be divisible by 32, but it is not (' + r + ').';
    }
    const buffer = new Uint8Array(strength / 8);
    const data = crypto_1.default.randomFillSync(buffer);
    return entropyToMnemonic(data, language);
}
exports.generateMnemonic = generateMnemonic;
function entropyToMnemonic(entropy, language = 'english') {
    if (entropy.length % 4 > 0) {
        throw `Data length in bits should be divisible by 32, but it is not (${entropy.length} bytes = ${entropy.length * 8} bits).`;
    }
    const data = (0, utils_1.byteArrayToWordArray)(entropy);
    const hash = sjcl_1.default.hash.sha256.hash(data);
    const h = sjcl_1.default.codec.hex.fromBits(hash);
    const a = (0, utils_1.byteArrayToBinaryString)(entropy);
    const c = (0, utils_1.zFill)((0, utils_1.hexStringToBinaryString)(h), 256);
    const d = c.substring(0, (entropy.length * 8) / 32);
    const b = a + d;
    const result = [];
    const blen = b.length / 11;
    for (let i = 0; i < blen; i++) {
        const idx = parseInt(b.substring(i * 11, (i + 1) * 11), 2);
        result.push(wordlists_1.default.get(language)[idx]);
    }
    return (0, utils_1.joinWords)(result, language);
}
exports.entropyToMnemonic = entropyToMnemonic;
function mnemonicToSeed(mnemonic, passphrase = '') {
    passphrase = passphrase || '';
    mnemonic = (0, utils_1.joinWords)((0, utils_1.splitWords)(mnemonic), mnemonicToLocale(mnemonic)); // removes duplicate blanks
    const mnemonicNormalized = (0, utils_1.normalizeString)(mnemonic);
    passphrase = (0, utils_1.normalizeString)(passphrase);
    passphrase = 'mnemonic' + passphrase;
    const mnemonicBits = sjcl_1.default.codec.utf8String.toBits(mnemonicNormalized);
    const passphraseBits = sjcl_1.default.codec.utf8String.toBits(passphrase);
    const sjclArray = sjcl_1.default.misc.pbkdf2(mnemonicBits, passphraseBits, 2048, 512, sjcl_1.default.misc.hmac);
    return buffer_1.Buffer.from(sjcl_1.default.codec.hex.fromBits(sjclArray));
}
exports.mnemonicToSeed = mnemonicToSeed;
function mnemonicToLocale(mnemonic) {
    return wordlists_1.default.detectLocale((0, utils_1.splitWords)(mnemonic)[0]);
}
exports.mnemonicToLocale = mnemonicToLocale;
function mnemonicToEntropy(mnemonic) {
    const words = (0, utils_1.splitWords)(mnemonic);
    if (words.length % 3 > 0) {
        throw `Word list should be a multiple of three words long, but it is not (${words.length} words).`;
    }
    const entropyBits = words
        .map((w) => {
        const idx = wordlists_1.default.get(mnemonicToLocale(mnemonic)).indexOf(w);
        if (idx === -1) {
            throw 'Word not found in wordlist: ' + w;
        }
        return (0, utils_1.zFill)(idx.toString(2), 11);
    })
        .join('');
    const l = entropyBits.length / 33;
    const entropy = entropyBits.substring(0, l * 32);
    return (0, utils_1.binaryStringToHexString)(entropy);
}
exports.mnemonicToEntropy = mnemonicToEntropy;
function validateMnemonic(mnemonic) {
    try {
        mnemonicToEntropy(mnemonic);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.validateMnemonic = validateMnemonic;
