import { expect, test } from "@jest/globals";
import { randomInt } from "crypto";
import WordLists from "../src/wordlists";

test('Get a English Wordlist', () => {
   const wordlist = WordLists.get('english');

   expect(wordlist).toBeInstanceOf(Array);
   expect(wordlist.length).toBe(2048);
   expect(/^[a-z]+$/i.test(wordlist[randomInt(0, 2048)])).toBeTruthy();

   console.log(wordlist[randomInt(0, 2048)]);
});

test('Get a French Wordlist', () => {
   const wordlist = WordLists.get('french');

   expect(wordlist).toBeInstanceOf(Array);
   expect(wordlist.length).toBe(2048);
   expect(/^[a-z]+$/i.test(wordlist[randomInt(0, 2048)])).toBeTruthy();

   console.log(wordlist[randomInt(0, 2048)]);
});

test('Detect a Spanish Wordlist', () => {
   const wordlist = WordLists.get('spanish');
   const word = wordlist[randomInt(0, 2048)];

   expect(WordLists.detectLocale(word)).toBe('spanish');
});
