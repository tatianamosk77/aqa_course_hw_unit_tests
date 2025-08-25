/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // Ваш код
  if(Object.keys(character).length === 0 || Object.keys(character).length === 1) { 
    throw new Error('Received invalid character!')

  } else characters.push(character)
}

function getCharacter(name) {
  // Ваш код
   return characters.find(el => el.name === name)
}

function getCharactersByAge(minAge) {
  // Ваш код
  if(typeof minAge != 'number') {
        throw new Error('Received invalid type of name!')
  } else return characters.filter(el => el.age >= minAge)
}

function updateCharacter(name, newCharacter) {
  // Ваш код
  const foundCharacter = getCharacter(name)

  if(foundCharacter === undefined) {
    throw new Error('The character wasn\'t found!')
  }
  foundCharacter.name = newCharacter.name ?? foundCharacter.name;
  ....
  foundCharacter.age = newCharacter.age
}

function removeCharacter(name) {
  // Ваш код
  const index = characters.findIndex(el => el.name === name);

  if (index === -1) {
    throw new Error('Can\'t find the name');
  }

  characters.splice(index, 1);
}

 export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
