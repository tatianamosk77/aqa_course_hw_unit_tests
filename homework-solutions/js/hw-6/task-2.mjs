/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

*/
let resultUnique = [];
let resultNull;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

for(const pizza of myPizzasT1) { 
  let flag = false;

for(const comp of competitorPizzas) {
  if(comp.toLowerCase() === pizza.toLowerCase()) {
    flag = true;
    break;
  }
} 
  if(!flag) {
        resultUnique.push(pizza)
  }  
}
 
let isIdentical = true;
if (myPizzasT1.length !== competitorPizzas.length) {
  isIdentical = false;
} else {
  for (let i = 0; i < myPizzasT1.length; i++) {
    if (myPizzasT1[i].toLowerCase() !== competitorPizzas[i].toLowerCase()) {
      isIdentical = false;
      break;
    }
  }
}

if (isIdentical) {
  resultNull = null;
}

for(const pizza2 of myPizzasT2) { 
  let flag = false;

for(const comp of competitorPizzas) {
  if(comp.toLowerCase() === pizza2.toLowerCase()) {
    flag = true;
    break;
  }
} 
  if(!flag) {
        resultUnique.push(pizza2)
  }    
  
}

let isIdentical2 = true;
if (myPizzasT2.length !== competitorPizzas.length) {
  isIdentical2 = false;
} else {
  for (let i = 0; i < myPizzasT2.length; i++) {
    if (myPizzasT2[i].toLowerCase() !== competitorPizzas[i].toLowerCase()) {
      isIdentical2 = false;
      break;
    }
  }
}

if (isIdentical2) {
  resultNull = null;
}
export { resultNull, resultUnique };
