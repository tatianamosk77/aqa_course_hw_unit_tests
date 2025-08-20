/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr = []) {
  // Ваш код
  const vowels = 'aeiouаеёиоуыэюя'.split('');
  return [...wordsArr].sort((a, b) => {
    const first = [...a].filter(el => vowels.includes(el)).length;
    const next = [...b].filter(el => vowels.includes(el)).length;

    return first - next
  });

}

 export { sortedByVowels };
