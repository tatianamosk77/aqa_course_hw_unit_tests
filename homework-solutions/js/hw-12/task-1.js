// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать
// спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => {
  console.log('Completed in 2 seconds');
});

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1.
// Обработайте промис методом .then и выведите результат его резолва в консоль

const resolvedPromise = new Promise((resolve) => {
  resolve(1);
});

resolvedPromise.then((result) => {
  console.log('Promise resolve:', result);
});

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const rejectedPromise = new Promise((resolve, reject) => {
  reject('Promise failed');
});

rejectedPromise.catch((error) => {
  console.log('Promise error:', error);
});

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number) {
  return new Promise((resolve) => {
    resolve(number);
  });
}

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты
// и последовательно выведите в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  console.log('Promise.all results:');

  results.forEach((result, index) => {
    console.log(`Promise ${index + 1}:`, result);
  });
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]),
// обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  console.log('Promise.allSettled results:');

  results.forEach((result, index) => {
    console.log(
      `Promise ${index + 1}:`,
      `Status: ${result.status}`,
      result.status === 'fulfilled' ? `Value: ${result.value}` : `Reason: ${result.reason}`,
    );
  });
});

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function handlePromiseAll() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    console.log('Async Promise.all results:');
    results.forEach((result, index) => {
      console.log(`Promise ${index + 1}:`, result);
    });
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }
}

handlePromiseAll();
