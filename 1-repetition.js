"use strict";
// takrorlash
class Men {
    constructor(age) {
        this.age = age;
    }
}
class Men2 extends Men {
    constructor(name, age) {
        super(age);
        this.name = name;
        this.age = age;
        this.info = () => {
            return `${this.name}`;
        };
    }
}
// const suhrob2: Men2 = new Men2("Suhrobjon");
const suhrob2 = new Men2("Suhrobjon", 19);
console.log(suhrob2.name);
//# sourceMappingURL=1-repetition.js.map