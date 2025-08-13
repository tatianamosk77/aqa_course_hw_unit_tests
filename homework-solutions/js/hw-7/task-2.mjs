/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // Ваш код

  if(typeof word !== 'string') {
    return false
  }

  let string = ''
  let arrayOfCharacters = word.toLowerCase().split('')

  let reverse = []
  for(let i = arrayOfCharacters.length - 1; i >= 0; i-- ) {
    reverse.push(arrayOfCharacters[i])
  }

  string = reverse.toString().replaceAll(',', '')

  return string === word.toLowerCase()
  
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код

  if(sentence === '' || typeof sentence !== 'string') {
    return []
  }

  let arrayOfWords = sentence.split(' ')
  let arrayOfLength = []

  for(const el of arrayOfWords) {
    arrayOfLength.push(el.length)
  }

  for(let i = 0; i < arrayOfLength.length; i++) {
    
  }

  const max = Math.max(...arrayOfLength)

  let ourWord = []

  for(const el of arrayOfWords) {
    if(el.length === max) {
      ourWord.push(el)
    }
  }

  return ourWord
}
export { isPalindrom, findLongestWords };
