"use strict";
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        // methods
        // seyHello(): string {
        this.seyHello = () => {
            return `Salom Hammaga`;
        };
        this._name = name;
        this._age = age;
    }
}
class Student extends Person {
    constructor(name, age, course) {
        // constructor ichida Person classidagi barcha propslar kelishi shart agr bazilarini kelishini hohlamasangiz person yoki voris berayotgan class propertyni ixtiyoriy qilishingiz mumkin
        super(name, age); // ketmaketlik muhim
        this._course = course;
    }
    seyAge() {
        return `Men ${this._age} yoshdaman`;
    }
}
// const suhrob: Student = new Student("Suhrob", 19, "4-kurs");
// const sherxon: Person = <Person>suhrob; // sherxon objga suhrob obj birlashtirildi
// sherxonga type siftida Person berildi bir xaqat Person fieldlaridan foydalana olamiz
// lekin sherxonda Student fieldi ham bor, biroq ts bu dev uchun bolgani sababli bizga imkoniyat beradi
// console.log(sherxon._course); // error tsda faqat chunki faqat Person class foydalanilyapti
// const sherxon: Student = <Student>suhrob; // bu holaada suhrobning Student class ozlashtirildi
// endi sherxon Student classi malumotlarini foydalanishi mumkin
// sherxon._course = "6 - kurs"; //
// console.log(sherxon._course); // 6 - kurs
// console.log(suhrob._course); // 6 - kurs chunki object bitta xotiraga murojat qiladi
class Teacher extends Student {
    constructor(name, age, course, salary) {
        // Student Persondan vorislikolgani sababli constructorda Person va Student propslari keladi
        super(name, age, course); // bunda ham Person va Student fieldlari keladi
        // methods
        this.seyHello = () => {
            // bu holatda mana su classdan foydalaniyotgan obj methodi o'zgaradi
            return `Men ${this._name}`;
        };
        // agar ota class bilan bola class methodi nomi bir xil bolsa ozini methodini oladi
        // agar ham ota class methodini va bolsa methodni ishlatmoqchi bolsa
        this.seyAge = () => {
            // otha method return qilayotdan type
            const parentMethod = super.seyAge();
            return `${parentMethod} shunaqa`;
        };
        this._salary = salary;
    }
}
const suhrob = new Teacher("Suhrob", 19, "4 - kurs", 300);
console.log(suhrob.seyHello()); // vorislik olinayotdan classning methodlaridan foydalanish uchun constuctor yoki super ichida chaqirish shart emas qolganlarida ham ishlaydi
console.log(suhrob.seyAge()); // vorislik olinayotdan classning methodlaridan foydalanish uchun constuctor yoki super ichida chaqirish shart emas qolganlarida ham ishlaydi
//# sourceMappingURL=7-dars.js.map