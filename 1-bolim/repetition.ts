abstract class Persons {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract find(name: string): string;
}

class Employee extends Persons {
  empCode: number;

  constructor(name: string, code: number) {
    super(name); // must call super()
    this.empCode = code;
  }

  find(name: string): string {
    // execute AJAX request to find an employee from a db
    return `new Employee(name, 1)`;
  }
}

let emp: Persons = new Employee("James", 100);

// let emp2: Persons = emp.find("Steve");
