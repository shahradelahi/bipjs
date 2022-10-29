"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wordlist_english_1 = require("./wordlists/wordlist_english");
const wordlist_japanese_1 = require("./wordlists/wordlist_japanese");
const wordlist_spanish_1 = require("./wordlists/wordlist_spanish");
const wordlist_chinese_simplified_1 = require("./wordlists/wordlist_chinese_simplified");
const wordlist_chinese_traditional_1 = require("./wordlists/wordlist_chinese_traditional");
const wordlist_korean_1 = require("./wordlists/wordlist_korean");
const wordlist_french_1 = require("./wordlists/wordlist_french");
const wordlist_italian_1 = require("./wordlists/wordlist_italian");
const _wordLists = {
    japanese: wordlist_japanese_1.default,
    spanish: wordlist_spanish_1.default,
    chinese_simplified: wordlist_chinese_simplified_1.default,
    chinese_traditional: wordlist_chinese_traditional_1.default,
    korean: wordlist_korean_1.default,
    french: wordlist_french_1.default,
    italian: wordlist_italian_1.default,
    english: wordlist_english_1.default,
};
class WordLists {
    static get(locale = 'english') {
        return _wordLists[locale];
    }
    static detectLocale(word) {
        for (const locale in _wordLists) {
            if (_wordLists[locale].join('').includes(word)) {
                return locale;
            }
        }
        throw new Error('Unknown wordlist');
    }
}
exports.default = WordLists;
