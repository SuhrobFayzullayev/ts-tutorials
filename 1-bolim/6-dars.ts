// // class
// class Person {
//   // propertiylar note: o'propertiylar  yaratish class ichida _[name] yoziladi yoki best practise
//   _name: string = "";
//   _age: number = 0;

//   // static fieldlar
//   // static fieldlar classning oziga teng yani undan yasalgan objectga emas
//   // static fieldlar class haqida malumot beradi
//   // misol uchun bu classdan nechta object yaratildi
//   // static field function va propertylar kiradi
//   static usingCount = 0;

//   static totalUsingCount(): string {
//     return `${Person.usingCount}`;
//   }

//   // constructor: bu bizga props berish imkoniyatini beradi
//   constructor(name: string, age: number) {
//     // kirib kelayotgan propslar // bularni type yoziladi va bular orqali propertylarni o'zgartirishimiz mumkin
//     // use cases _name => property name
//     //           name = > props name
//     // o'zgartirilishi kerak bolgan property bilan props nomi bir xil bo'lishi kerak ajratis uchun  propertyga _ belgi beriladi
//     // console.log(name); // suhrob
//     // console.log(age); // 19

//     // propertyni o'zgartirish
//     // propertyga murojat qilish this kalit sozi orqali amatga oshiriladi va . va property nomi
//     //  misollar
//     this._name = name; // this._name => property name name esa props nomi
//     this._age = age; // bu ham shunday
//     // bu holatda biz propsdagi qiymatlarni propertyga o'zlashtirgan holda property qiymatini o'zgartirdik

//     // increment using count by this class
//     // foydalanish class ichida
//     // class nomi chaqiriladi va . orqali static field nomi beriladi
//     Person.usingCount++;
//     // har shu class orqali object yasalganda usingCount qiymati oshib boradi
//   }

//   // clasda constructor bir marta yoziladi
//   // lekin hohlaguncha method yozishimiz mumkin
//   // class ichida yozilgan funcsionlar method deb ataladi

//   // methods
//   // sayAge = (): string => { signature
//   sayAge(): string {
//     // normal
//     return `${this._name}: ${this._age} yoshda`;
//   }

//   gotoWork(time: string): string {
//     // methodlarga props berishimiz mumkin va uni type beriladi
//     return `${this._name} ${time} da ishga boradi`;
//   }

//   // getter va setterlar
//   get name(): string {
//     return `${this._name}`; // bu orqali object propertysini olishimiz mumkin
//   }

//   set name(value: string) {
//     // setter funcga return yoki never yoki void kabi typelar yozilmaydi
//     this._name = value;
//   }
//   // best bractice set or get
//   // class orqali yaratilgan objectning biror qiymatini olish yoki ozgartirih uchun get va set ishlatiladi va ozgartirilishi yoki olinishi kerak bolgan
//   // property nomi beriladi yuqoridagi kabi
//   //
// } // class yozish

// const suhrob: Person = new Person("Suhrob", 19); // classdan object yaratish new kalit sozi orqali qliniadi
// const sherxon: Person = new Person("Sherxon", 21); // classdan object yaratish new kalit sozi orqali qliniadi
// // console.log(suhrob); // { _name: '', _age: 0 }

// // console.log(suhrob.sayAge()); say age method
// // console.log(suhrob.gotoWork("9:30"));
// // console.log(Person.totalUsingCount());
// // suhrob._age = 6; // bu yol bilan ham yozni ozgartirsak boladi
// // console.log(suhrob.name);
// // console.log((suhrob.name = "Suhrob 2"));

// // object propertysini get yoki set foydalanmasdan o'zgartirish
// // bunday o'zgartirsa ham boladi lekin tavsiya qilinmaydi
// // agar set orqali qanaqadur validatsiya qilmoqchi bolsangi class ichida set orqali qilish kerak kod ham chunarli va tartibli bolib kkorinadi
// // console.log({} instanceof Person); // instanse of orqali biror object daysidur classga tegishlimi yoki yoq shuni aniqlashimiz mumkin
// // suhrob instanceof Person; // true
// // {} instanceof Person; // false
// // // obj name // instanceof: key // class name
