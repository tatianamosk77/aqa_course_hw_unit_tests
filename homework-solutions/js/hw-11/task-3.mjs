class Employee {
  // Ваш код
  #salary;
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
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
class Developer extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary), (this.programmingLanguages = programmingLanguages);
  }
  addProgrammingLanguage(language) {
    if (typeof language != 'string' || language.length === 0) {
      throw new Error();
    } else this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary), (this.teamSize = teamSize);
  }
  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary), (this.designTools = designTools);
  }
  addDesignTool(tool) {
    if (typeof tool != 'string' || tool.length === 0) {
      throw new Error();
    } else this.designTools.push(tool);
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
    const firstName = employee.firstName;
    const lastName = employee.lastName;
    let isIncluded = false;

    for (const el of this.#employees) {
      if (Object.values(el).includes(firstName) && Object.values(el).includes(lastName)) {
        isIncluded = true;
      }
    }
    if (!(employee instanceof Employee) || isIncluded) {
      throw new Error();
    }
    this.#employees.push(employee);
  }
  getEmployees() {
    return this.#employees;
  }
  getEmployeesByProfession(profession) {
    return this.#employees.filter((el) => el.constructor.name === profession);
  }
}

export { Employee, Company, Designer, Developer, Manager };
