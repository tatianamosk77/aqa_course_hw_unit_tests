// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению.
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object, K>(obj: T, value: K): keyof T | undefined {
    let key: keyof T;
    for (key in obj) {
        if (obj[key] === value)
            return key

    }

}
const obj = {
    name: 'Alex',
    age: 30,
    salary: 5000
}
console.log(getKeyByValue(obj, 5000))