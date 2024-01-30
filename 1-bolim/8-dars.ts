// type TName = {
//   name: string;
// };

// type TAge = {
//   age: number;
// };

// type TUser = TName &
//   (
//     | TAge
//     | {
//         info: () => string;
//       }
//   );

// type birlashtirish tartibi  = tyneName & bunda osha field bolihi majburiy typeAge | bunda ixtiyoriy
// type TUser = TName & {} // TUser ichki fieldi va TName field bajburuy
// type TUser = TName | {} // TUser ichki fieldi bajburiy, TName field esa ixtiyoriy
// type TUser = TName | TAge & {} // TUser ichki fieldi bajburiy, TName field ixtiyoriy TAge esa majburiy
// type TUser = TName & TAge & {} // TUser ichki fieldi bajburiy, TName field majburiy TAge esa majburiy
// type TUser = TName | TAge | {} // TUser ichki fieldi bajburiy, TName field ixtiyoruy TAge ham ixtiyoriy

// const obj: TUser = {
//   name: "Suhrob",
//   age: 19,
//   info: () => {
//     return ``;
//   },
// };

type IPerson2 = {
  _name: string;
  _age: number;

  seyHello: () => string;
};

abstract class Person2 implements IPerson2 {
  // abstract classlardan object yaratib bolmaydi faqat vorislik olish mumkin
  _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  abstract seyHello: () => string; // abstract methoddan foydalanish majburiy
}

class Student2 extends Person2 {
  constructor(name: string, age: number) {
    super(name, age);
  }

  seyHello = (): string => {
    return `Salom`;
  };
}

const s: IPerson2 = new Student2("Suhrob", 19);
// console.log(s.seyHello());
