// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:).
// Функция принимеют на вход массив и колбэк. Используйте дженерик типы.
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type MapCallBack<T, U> = (element: T, index: number, array: T[]) => U

function map<T, U>(array: T[], callback: MapCallBack<T, U>) {
    let newArr: U[] = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], i, array))
    }
    return newArr
}

const result = map([1, 2, 3, 4, 5], (el, i) => el * i)

console.log(result)
