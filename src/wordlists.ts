import wordlist_english from './wordlists/wordlist_english';
import wordlist_japanese from './wordlists/wordlist_japanese';
import wordlist_spanish from './wordlists/wordlist_spanish';
import wordlist_chinese_simplified from './wordlists/wordlist_chinese_simplified';
import wordlist_chinese_traditional from './wordlists/wordlist_chinese_traditional';
import wordlist_korean from './wordlists/wordlist_korean';
import wordlist_french from './wordlists/wordlist_french';
import wordlist_italian from './wordlists/wordlist_italian';

export type IWordlist = { [key in Language]: string[] };

export type Language =
  | 'english'
  | 'japanese'
  | 'spanish'
  | 'chinese_simplified'
  | 'chinese_traditional'
  | 'korean'
  | 'french'
  | 'italian';

const _wordLists: IWordlist = {
  japanese: wordlist_japanese,
  spanish: wordlist_spanish,
  chinese_simplified: wordlist_chinese_simplified,
  chinese_traditional: wordlist_chinese_traditional,
  korean: wordlist_korean,
  french: wordlist_french,
  italian: wordlist_italian,
  english: wordlist_english,
};

export default class WordLists {
  static get(locale: Language = 'english'): string[] {
    return _wordLists[locale];
  }

  static detectLocale(word: string): Language {
    for (const locale in _wordLists) {
      if (_wordLists[locale as Language].join('').includes(word)) {
        return locale as Language;
      }
    }
    throw new Error('Unknown wordlist');
  }
}
