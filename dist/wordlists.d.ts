export declare type IWordlist = {
    [key in Language]: string[];
};
export declare type Language = 'english' | 'japanese' | 'spanish' | 'chinese_simplified' | 'chinese_traditional' | 'korean' | 'french' | 'italian';
export default class WordLists {
    static get(locale?: Language): string[];
    static detectLocale(word: string): Language;
}
