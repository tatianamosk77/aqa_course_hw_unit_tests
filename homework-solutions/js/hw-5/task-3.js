/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

let massiveOfChars = word.toLowerCase().split('')
let vowels = 0;
let consonants = 0;

for(let i = 0; i < massiveOfChars.length; i++) {
    if(/^[bcdfghjklmnpqrstvwxyz]$/i.test(massiveOfChars[i])) {
        consonants++;
    } else vowels++;
}
vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`

export { vowelsAndConsonantsResult };
