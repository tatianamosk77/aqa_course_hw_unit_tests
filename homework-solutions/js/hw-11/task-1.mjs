class Employee {
  // Ваш код
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value != 'string') {
      return;
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value != 'string') {
      return;
    }
    this._lastName = value;
  }
  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value != 'string') {
      return;
    }
    this._profession = value;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value != 'number' || value < 0) {
      throw new Error();
    }
    this.#salary = value;
  }
}

class Company {
  // Ваш код
  #employees;
  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value != 'string') {
      return;
    }
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  set phone(value) {
    if (typeof value != 'number') {
      return;
    }
    return this._phone;
  }
  get address() {
    return this._address;
  }
  set phone(value) {
    if (typeof value != 'string') {
      return;
    }
    return this._phone;
  }
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else throw new Error();
  }
  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
