// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

interface IDepartment {
    getEmployeesCount(): number;
    getDepartmentInfoAboutEmployees(): string;
    id: number,
    name: string,
    employees_count: number
}

interface IEnterprise {
    id: number,
    name: string,
    departments: IDepartment[]
}

class Department implements IDepartment {
    constructor(public id: number, public name: string, public employees_count: number) {

    }
    public getDepartmentInfoAboutEmployees(): string {
        const lastNumber = this.employees_count;

        if (lastNumber === 0) {
            return "(нет сотрудников)";
        }
        else if (lastNumber === 1) {
            return `- ${this.name} (${lastNumber} - сотрудник)`;
        }
        else if (lastNumber >= 2 && lastNumber <= 4) {
            return `- ${this.name} (${lastNumber} - сотрудника)`;
        }
        else {
            return `- ${this.name} (${lastNumber} - сотрудников)`;
        }
    }
    //return `- ${this.name} (${this.employees_count} сотрудников)`;



    public getEmployeesCount(): number {
        return this.employees_count
    }


}

class Enterprise implements IEnterprise {

    constructor(public id: number, public name: string, public departments: IDepartment[]) {

    }
    isDepartmentExist(value: number | string): boolean {
        if (typeof value === "number") {
            const isExist = this.departments.some(el => el.id === value)
            return isExist;
        }
        if (typeof value === "string") {
            const isExist = this.departments.some(el => el.name === value)
            return isExist;
        }
        return false

    }
    getDepartmentsInfo(): string {
        return this.departments.map(el => ` ${el.name} ` + el.getDepartmentInfoAboutEmployees()).join('\n');

    }

    getTotalNumbersOfEmployees(): string {
        const total = this.departments.reduce((acc, el) =>
            acc + el.getEmployeesCount(), 0
        );

        return total > 0 ? ` (${total} сотрудников)` : `(нет сотрудников)`;
    }

    addDepartment(newDepId: number, departmentName: string, employees_count: number) {
        const newDep = new Department(newDepId, departmentName, employees_count)
        this.departments.push(newDep)
    }

    editDepartmentName(depId: number, newName: string): boolean {
        const department = this.findDepartment(depId);
        if (department) {
            department.name = newName;
            return true;
        }
        return false;
    }

    findDepartment(idDep: number): Department | undefined {
        const department = this.departments.find(dep => dep.id === idDep)
        if (department) {
            return department
        }

    }

    removeDepartment(depId: number) {
        const index = this.departments.findIndex(dep => dep.id === depId);
        if (index > -1 && this.departments[index].employees_count == 0) {
            this.departments.splice(index, 1);
            return true;
        }
        return false;
    }

    moveEmployeesBetweenDeps(fromId: number, toId: number): boolean {
        const fromDepartment = this.departments.find(dep => dep.id === fromId)
        const toDepartment = this.departments.find(dep => dep.id === toId)

        if (fromDepartment && toDepartment) {
            const fromEmployees = fromDepartment.employees_count
            const toEmployees = toDepartment.employees_count

            toDepartment.employees_count += fromDepartment.employees_count;
            fromDepartment.employees_count = 0;

            return true

        }
        return false

    }
}

class EnterpriseCollection {
    private enterprises: Enterprise[] = []

    // 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
    // Для предприятия посчитать сумму всех сотрудников во всех отделах.

    getAllAboutCollection(): string {
        const result = this.enterprises.map(ent => {
            return ent.name + ent.getTotalNumbersOfEmployees() + `\n` + ent.getDepartmentsInfo()
        }).join('\n');
        return result
    }

    // 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие,
    // к которому относится).

    getEnterpriseNameByDep(value: number | string): string | undefined {
        for (const enterprise of this.enterprises) {
            if (enterprise.isDepartmentExist(value)) {
                return enterprise.name
            }
        }
    }

    // 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

    addEnterpriseIntoCollection(enterpriseName: string) {
        const newEnterprise = new Enterprise(this.generateId(), enterpriseName, [])

        this.enterprises.push(newEnterprise)

    }


    // 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия,
    // в которое будет добавлен отдел и название отдела.

    addDepIntoEnterprise(enterpriseId: number, departmentName: string, employees_count: number): boolean {
        const enterprise = this.enterprises.find(ent => ent.id === enterpriseId)

        if (!enterprise) return false

        const newDepId = this.generateId()

        enterprise.addDepartment(newDepId, departmentName, employees_count)
        return true

    }

    // 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия
    // и новое имя предприятия.

    editEnterpriseName(enterpriseId: number, newName: string): boolean {
        const enterprise = this.enterprises.find(ent => ent.id === enterpriseId)

        if (!enterprise) return false

        enterprise.name = newName
        return true

    }
    // 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

    editDepartmentName(depId: number, newName: string): boolean {
        for (const enterprise of this.enterprises) {
            if (enterprise.editDepartmentName(depId, newName)) {
                return true;
            }
        }
        return false;
    }

    // 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

    deleteEnterprise(entId: number): boolean {
        const enterprise = this.enterprises.find(ent => ent.id === entId)
        if (!enterprise) return false

        const index = this.enterprises.indexOf(enterprise)

        this.enterprises.splice(index, 1)
        return true
    }

    // 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела.
    // Удалить отдел можно только, если в нем нет сотрудников.

    removeDepartmentFromEnterprise(depId: number) {
        for (const enterprise of this.enterprises) {

            if (enterprise.removeDepartment(depId)) {
                return true
            }

        }
        return false;
    }

    // 9. Написать функцию для переноса сотрудников между отделами одного предприятия.
    // В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела,
    // в который будут переноситься сотрудники).

    moveEmployees(fromId: number, toId: number) {
        for (const enterprise of this.enterprises) {
            if (enterprise.moveEmployeesBetweenDeps(fromId, toId)) {
                return true
            }

        }
        return false

    }

    // метод для просмотра предприятия по индексу массива
    getEnterprise(index: number) {
        return this.enterprises[index]
    }


    // генерация id на основе уже существующих
    private generateId(): number {

        const enterpriseIds = this.enterprises.map(ent => ent.id);
        const departmentIds = this.enterprises.flatMap(ent =>
            ent.departments.map(dept => dept.id)
        );

        const unionIds = [...enterpriseIds, ...departmentIds]

        if (unionIds.length === 0) return 1

        const maxId = Math.max(...unionIds)
        return maxId + 1
    }

}

const enterprises = new EnterpriseCollection()

enterprises.addEnterpriseIntoCollection("Предприятие 1")
enterprises.addEnterpriseIntoCollection("Предприятие 2")
enterprises.addEnterpriseIntoCollection("Предприятие 3")

enterprises.addDepIntoEnterprise(1, "Отдел тестирования", 2)
enterprises.addDepIntoEnterprise(1, "Отдел маркетинга", 21)
enterprises.addDepIntoEnterprise(1, "Администрация", 15)

enterprises.addDepIntoEnterprise(2, "Отдел разработки", 50)
enterprises.addDepIntoEnterprise(2, "Отдел маркетинга", 20)
enterprises.addDepIntoEnterprise(2, "Отдел охраны труда", 5)

enterprises.addDepIntoEnterprise(3, "Отдел аналитики", 0)

// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

console.log(enterprises.getAllAboutCollection())

// 2. Возвращает предприятие, к которому относится отдел.

console.log(enterprises.getEnterpriseNameByDep('Отдел аналитики')) // Предприятие 3

// 3. Добавляет предприятие в коллекцию 

enterprises.addEnterpriseIntoCollection("Предприятие шуток")
console.log(enterprises.getAllAboutCollection())

// 4. Добавляет отдел в предприятие
enterprises.addDepIntoEnterprise(11, "Отдел мемов", 0)
console.log(enterprises.getAllAboutCollection())

console.log(enterprises.getEnterprise(3))

// 5. Изменяет название предприятия.

enterprises.editEnterpriseName(11, "Предприятие радости")
console.log(enterprises.getAllAboutCollection())

// 6. Изменяет название отдела
enterprises.editDepartmentName(12, "Отдел бухгалтэрии")
console.log(enterprises.getEnterprise(3))

// 7. Удаляет предприятие
enterprises.deleteEnterprise(11)
console.log(enterprises.getAllAboutCollection())

// 8. Удаляет отдел
enterprises.removeDepartmentFromEnterprise(10)
console.log(enterprises.getAllAboutCollection())

// 9. Переносит сотрудников между отделами одного предприятия
enterprises.moveEmployees(4, 5)
console.log(enterprises.getAllAboutCollection()) 
