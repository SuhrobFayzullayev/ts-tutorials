"use strict";
// type TName = {
//   name: string;
// };
class Person2 {
    constructor(name, age) {
        // abstract classlardan object yaratib bolmaydi faqat vorislik olish mumkin
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
}
class Student2 extends Person2 {
    constructor(name, age) {
        super(name, age);
        this.seyHello = () => {
            return `Salom`;
        };
    }
}
const s = new Student2("Suhrob", 19);
console.log(s.seyHello());
//# sourceMappingURL=8-dars.js.map