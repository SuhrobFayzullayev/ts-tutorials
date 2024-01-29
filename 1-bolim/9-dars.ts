// // class Odam {
// //   // default holatda propertylar methodlar public boladi yani bemalol foydalansa boladi
// //   //   _name: string = ""; // public _name: string = '' => _name: string = '' // default public
// //   //   private _age: number = 0;

// //   constructor(name: string, private age: number) {} // constuctor ichiga public, private, protected va readonly yozish argument oldidan yoshish tepadago _name va constructor ichida this._name = name degan bila birxil
// // }

// // class Talaba extends Odam {
// //   //   protected _course: number = 0;

// //   constructor(name: string, age: number, protected course: number) {
// //     super(name, age); // lekin constuctorda va superda berish majburiy hisoblanadi
// //     // this._course = course;
// //     // this._age = 0; // error Odam classidagi _age property private bolgani uchun foydalana olmaymiz lekin constructorda va superda berish majburiy
// //   }

// //   //   seyAge(): string {
// //   //     return `${this._age}` // error chunki age methodi private bolgani uchun faqat Odam objectida foydalanishimiz mumkin
// //   //     // talaba class ichida foydalana olmaymiz
// //   //   }

// //   //   private seyHello(): string {
// //   //     return `Hello`;
// //   //   }

// //   protected seyHello(): string {
// //     return `Hello`;
// //   }
// // }

// // class Gadoy extends Talaba {
// //   //   _working: boolean;

// //   constructor(name: string, age: number, course: number, working: boolean) {
// //     super(name, age, course);

// //     // this._working = working;
// //   }

// //   seyInfo(): string {
// //     // methodlarda ham public, private, protected va readonly larni foydalanishimiz mumkin
// //     return `Men ${this.name} ${this.course} da o'qiyman`;
// //   }

// //   //   seyHello(): string { // ota class shu method private bolgani uchun bola class shu method ham private boladi
// //   //     return ``;
// //   //   }

// //   seyHello(): string {
// //     // ota class shu method private bolgani uchun bola class shu method ham private boladi
// //     return ``;
// //   }
// // }

// // const suhrobjon: Odam = new Odam("Suhrob", 19);
// // // suhrobjon._age; // bunda ham erro Odam classidan yasalgan objectda ham foydalana olmaymiz
// // const sherxonbek: Talaba = new Talaba("Sherxon", 20, 1);
// // // sherxonbek.seyHello(); // bu method private bolgani uchun undan foydalana olmaymiz
// // // console.log(suhrobjon);
// // // console.log(sherxonbek);
// // // sherxonbek.seyHello(); // bu method protected bolgani uchun objecda foydalana olmaymiz
// // const mirolim: Gadoy = new Gadoy("Mirolim", 18, 3, true);
// // console.log(mirolim.seyHello());
// // // console.log(mirolim._course); // talaba classi _course properysi protected bolgani sababli biz objectlarda foydalana olmaymiz lekin classlarda yoki ichida yoydalana olamiz

// class Odam {
//   //   constructor(name: string) {} // { name: '' }
//   //   // yani agar accsess modificator berilsa objectga kiritilgan qiymat yoziladi aks holda '' bolib qoladi

//   //   seyHello(): string {
//   //     return `hello ${this.name}`; // name is undefined because name have not accsess modificator
//   //   }

//   constructor(public readonly names: string) {} // { name: ' entering name ' }

//   get _names(): string {
//     return `${this.names}`;
//   }
//   set _names(value: string) {
//     this.names = value; // bu holtda ham error beradi chunki readonly
//   }

//   //   seyHello(): string {
//   //     return `hello ${this.name2}`; // name is entering name
//   //   }
// }

// // class Talaba extends Odam {
// //   constructor(name: string, public course: number) {
// //     // extend cilinayotgan fieldlarini constuctor ichida accsess modificatorini yozish shart emas default bolib otasidan oladi
// //     super(name);
// //   }

// //   seyInfo(): string {
// //     return `Men ${this.name2}`;
// //   }
// // }
// const suhrobjon: Odam = new Odam("Suhrobjon");
// console.log((suhrobjon._names = "Suhrob 2"));

// // console.log((suhrobjon.name2 = "Suhrobjon 2")); // bu error chunki bu fild faqat oqish uchun
