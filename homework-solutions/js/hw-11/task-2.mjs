class Employee {
  // Ваш код
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value != 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) {
      throw new Error();
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value != 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) {
      throw new Error();
    }
    this._lastName = value;
  }
  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value != 'string' || value.length === 0 || !/^[A-Za-z\s]+$/.test(value.trim())) {
      throw new Error();
    }
    this._profession = value;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value != 'number' || value <= 0 || value >= 10000 || isNaN(value)) {
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
  findEmployeeByName(name) {
    if (typeof name !== 'string') {
      return;
    }
    const employee = this.#employees.find((el) => el._firstName === name);
    if (employee.length != 0) {
      return employee;
    } else throw new Error();
  }
  getEmployeeIndex(name) {
    return this.#employees.findIndex((el) => el._firstName === name);
  }
  removeEmployee(name) {
    const index = this.getEmployeeIndex(name);
    if (index != -1) {
      this.#employees.splice(this.getEmployeeIndex(name), 1);
    } else throw new Error();
  }
  getTotalSalary() {
    return this.#employees.reduce((result, el) => result + el.salary, 0);
  }
}

export { Employee, Company };
