/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays() {
  let array = []
 
  for(const el of arguments) {
    array = [...array, ...el]
  }
  return array
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  // Ваш код

  if(sentence === '') {
    return sentence
  }
  let array = []
  array = sentence.split(' ')

  let string = ''

  
  for(let i = 0; i < array.length; i++) {
    if(array[i] === '') continue;

    let [firstChar] = array[i]

    if(i === 0) {
      array[i] = firstChar.toLowerCase() + array[i].substring(1).toLowerCase()
    } else  {
      array[i] = firstChar.toUpperCase() + array[i].substring(1).toLowerCase()
    }
    string += `${array[i]}_`

  }

  return string.slice(0, -1)

}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const arr = [0, 1]
  
  if(n === 0 || n === 1) {
    return arr[n]
  }  else
  {
    for(let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2] 
    }
  
  }
    return arr[n]
}
 export { mergeArrays, fibonacci, devideBy };
