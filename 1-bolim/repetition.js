"use strict";
class Persons {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Persons {
    constructor(name, code) {
        super(name); // must call super()
        this.empCode = code;
    }
    find(name) {
        // execute AJAX request to find an employee from a db
        return `new Employee(name, 1)`;
    }
}
let emp = new Employee("James", 100);
// let emp2: Persons = emp.find("Steve");
//# sourceMappingURL=repetition.js.map