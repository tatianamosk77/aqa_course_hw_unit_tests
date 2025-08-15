/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/


function findMissingNumber(numbers = []) {
  // Ваш код
  let tempArray = [...numbers].sort((a, b) => a - b).find((el, i) => el !== i + 1) 

  return tempArray === undefined ? numbers[numbers.length - 1] + 1 : tempArray - 1

}
export { findMissingNumber };
