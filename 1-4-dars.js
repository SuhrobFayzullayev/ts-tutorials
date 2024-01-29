"use strict";
// // // // // let f: { name: string } = { name: "" };
// // // // // f.name = "s";
// // // // // SIHNATURE FUNCTIONS
// // // // // let f: (a: string, b: string) => string;
// // // // // f = function (a: string, b: string): string {
// // // // //   return `${a} ${b}`;
// // // // // };
// // // // // console.log(f("Suhrob", "fayzullayev"));
// // // // // signature function oldindan funcsiyamiz qanday tip qaytarishimi aytamiz va argumentlari ham
// // // // // void
// // // // // vod funcsiya hech qanday malumot yoki malumot type qaytarmaydi va bular avtomatik void typeno oladi lekin
// // // // // function voidFunc(): void {
// // // // //     console.log('hello world');
// // // // // }
// // // // // never
// // // // // never funcsiyalar qachon ishlaydi,
// // // // // 1. agar sizda tohtovsiy sikl bolsa va hech qachon tohtamasa
// // // // // bu never function yani shu functiyadan boshqa joyda chiqmaydi dastur shu joyda tohtaydi va faqat shu funcsiya ishlaydi va hech qachon tohtamaydi
// // // // // 2. sizning dasturingiz malum bir joyga keldi va hatolikka uchradi va bunaqa paytda siz throwError functiya foydalanishingiz mumkin dastur shu joyda hatolikni ushlaydi va shu blockdan
// // // // //  boshqa joyda chiqmaydi bu holatda ham never funcsiya foydalanish mumkin
// // // // // 3. sizda shunday funcsiya bor
// // // // // function unreachableCodeExample(x: string | number): number {
// // // // //     if (typeof x === "string") {
// // // // //         return x.length;
// // // // //     } else if (typeof x === "number") {
// // // // //         return x;
// // // // //     } else {
// // // // //         // Bu durumda, x'in string veya number türünden başka bir tür olmadığı bilinir.
// // // // //         // Dolayısıyla bu kod bloğuna asla ulaşılamaz.
// // // // //         throw new Error("Ulaşılamaz kod!");
// // // // //     }
// // // // // }
// // // // // bu holatda funsiya string yoki number type argument qabul qilishi kerak va bu number qaytarib berad agar x ga hech qanday string yoki number yoki umuman qiymat berilmasa esle block ishlaydi va functisy avtamativ ravishda never
// // // // // funksiyaga aylanadi va dastur boshqa boshqa otmaydi yani keyingi kodlarnni oqimaydi va bu narsa tohtamaydi bunda ham never ishlatish mumkin
// // // // // signature functions
// // // // // function add(x: number, y: number): number {
// // // // //     return x + y;
// // // // // }
// // // // // type AddFunction = (x: number, y: number) => number;
// // // // // const add: AddFunction = function (x, y) {
// // // // //   return x + y;
// // // // // };
// // // // // console.log(add(5, 4));
// // // // // bu yerda 2 ta bir xil vazifani bajaruvchi misol keltirilgan birinchisi oddiy qandaydur argument qabul qilib qaytarib beruvchi funksiya
// // // // //  2 dat esa funcsiya type orqali funckisyaga birlashtirilyapti va bularning foydali va zararli taraflari
// // // // // 1 misoli, qisqa kod chunarli va sodda, yomon tomoni shu kabi bir xil funcsiya argument va return qilivchi funckiya type alohida yoziladi
// // // // // 2 misol type orqali ancha chunarli va detaalli qilib chuntirilgan va boshqa funcsiyalarda foydalansa boladi kop cod yoziladi yaxshi tomoni katta projectlarda bemalol typeni foydalanish mumkin
// // // // // function  (x: any, y: any): any {
// // // // //   // x. bu holatda x yki y  arg qaysi type ekanligini bilmaganligimiz uchun hech qanday methodlarda foydalana olmaymiz
// // // // //   // x.toFixed() bbu holatda eror qaytarmaydi lekin number orniga boshqa type kelsa error qaytaradi
// // // // //   if (typeof x === "number" && typeof y === "number") {
// // // // //     // bu orqali biz arg type number akanligini amin boldik
// // // // //     // engi number methodlaridan foydalansay boladi
// // // // //     // x.toFixed() // number method
// // // // //     return x + y;
// // // // //   }
// // // // // }
// // // // // console.log(overloadFunc(1, 3)); // bu holatda arg va return ham qaysi turda ekanligini aniqlay lmaymiz
// // // // // function overloadslarga qoshimcha typelar berish
// // // // function overloadFunc(x: number, y: number): number; // bu orqali qoshimcha type berdi agar x va y number bolsa nuber return qiladi
// // // // function overloadFunc(x: string, y: number): string; // bu holatda bizda 2 ta type bor birinchisi x, y number 2: x: number : y: number return number
// // // // function overloadFunc(x: any, y: any): any {
// // // //   if (typeof x === "number" && typeof y === "number") {
// // // //     return x + y; // return number arg: x: number, y: number
// // // //   } else {
// // // //     return `${x} ${y}`; // return string arg: x:any, y: any
// // // //   }
// // // // }
// // // // // console.log(overloadFunc('1', '2')); // endigi holatda biz faqat number type kirita olamiz chun birinchi kiritilgan qoshimcha type faqat number type endi any type funcksiya ishlamaydi
// // // // // console.log(overloadFunc("1", 2)); // endigi holatdi  biz 2 chi qoshimcha typedan foydalanayapmiz bunda birinchi x: string, y: number bolishi return string bolishi kerak
// // // // //  bu orqali biz nomalum yoki arg va ruturn qiluvchi qaysi typeda bolishini bilmasak shu overload function orqali qnday typeda ekanligini qoshimcha typelar orqali qaysi typeda ekanligini aniqlashimiz mumkin
// // // // 2-dars
// // // // TS typelarni orgartirish
// // // // // havfli
// // // // let a: any = 10; // bu holatda a variable any typeda va har qanday typeni olishi mumkin
// // // // let b: number = a; // bu holatda b variablega a varibleni qiymatini o'zlashtirdik va a ni qiymatini numberga o'girdik,]
// // // // // lekin bu usul yaxshi usul emas tavsiya qilinmaydi
// // // // // havfsiz
// // // // // biz any type orniga unknown typeni ishlatishimiz mumkin yani type aniq emas
// // // // let c: unknown = 5;
// // // // // let d: number = c // bu holatda bizda error qaytaradi
// // // // // yechim
// // // // let d: number = <number>c; // bu holatda <> operatorlaridan hoydalangan holda c varibleni number typega ozgirib d variablega o'zlashtirdim
// // // // let e: number = c as number; // bu holatda ham c ni umber type ekanligini aytib e ga o'zlashtirdik
// // // // let f: number = c as number
// // // // // c ni qaysidur typega o'girib uni o'sha type methodlaridan foydalanish
// // // // // 1- usul
// // // // // (c as number).toFixed(1) // number method
// // // // // 2- usul
// // // // (<string>c).toLowerCase() // string method ishlatish
// // // // console.log(typeof e);
// // // // union type
// // // let a : number | string | boolean = 5 // bu orqali biror variablega turlicha typelarni biriktirishim mumkin
// // // a = 5 // togri
// // // a = 'salom' // tog'ri
// // // a = true // to'g'ri
// // // // a = null // error chunki tepada null type kiritilmagan
// // // // literal type
// // // let b : 12 | 'md' | boolean | number
// // // //  literal type orqali biz biror js typelarni yoki turli shakl turlarni berishimiz mumkin
// // // //  ishlatish faqat yuqorida takidlab o'tilgan type yoki ishoralarni ishlatishimi mumkin
// // // // type aliases
// // // type Sizes = 'sm' | 'md' | 'lg'
// // // let s2: Sizes
// // // s2 = "lg"
// // // // type aliases orqali yaratilgan type turli o'zgaruvchi va boshqa narsalarda ishlatishim mumkin
// // type OBJ = { name: string } | { age: number }; // bunda | 'yoki' operatori orqali yo name bolishi yoki age bilishi mumkin va bular biriktirilgan typeda
// //  bu holatda obj ishlatilsa yo name berish kerak yoki age berish kerak
// // let obj: OBJ;
// // // obj.name = "suhrob" // eror
// // obj = { name: "suhrob" };
// // obj = { age: 19 };
// // obj = { name: "Suhrob", age: 19 };
// // //  bu usullar to'gri
// // type OBJ2 = { name: string } & { age: number }; // bu orqali & va operatori orqali obj o'zgartirish kiritilga name berish va age berish majburish kiritilgan typelar orqali
// // {name: string, age: number} // bunda name age age berish kerak
// // optional type ? operatori
// type OBJ = { name: string; age?: number }; // age berish ishtiyoriy
// let obj: OBJ;
// obj = { name: "Suhrob" }; // bu holatda  name string age esa undefined boldi age yoki number yoki undefined boladi yani undefined bolsa qiymat berish shart emas
// obj = { name: "Suhrob", age: 19 }; // ishladi0
// obj = { name: "Suhrob", age: undefined }; // ishladi
// obj = { name: "Suhrob" }; // ishladi
// // obj = {name: 'Suhrob' , age: '19'} // error age faqat undefined yoki number boladi
// //
// in operatore orqali objectda biror key bormi tekshiramiz
// if ("name" in { age: 19 }) {
//   console.log(false);
// } else {
//   console.log(true);
// }
let a = 5; // any ga teng bolgan lekin havfsiz bolgan type hisoblanadi
// let b: number = <number>a
// let c: string = a as string
//  unknown typedagi malumotning qaysidur methodini foydalanish
// deylik bitta unknown typedagi malumot bor va uni qaysidur typega ugirmoqchisiz
// <number>a yoki a as number bu holatda a o'zgaruvchi qaysidur typega o'gitilmadi
// console.log(typeof a); // js jomondan qaralsa uning qiymatidan kelib chiqqan holda type oladi, any da ham shunday lekin ts tomondan qaralsa bu hato ish
// unknown type datani qaysidur typega ogirish uchun uni qaysidur variablega o'zlashtirish kerak
// (a as number).toFixed(2); // unknown typedagi malumotni faqat bitta typedagi malumotga birlashtirishimiz mumkin va methodidan foydalanish mumkin
let b = a; // bu holatda a variable number typega o'girilib keyin b variablega o'zlashtirildi
// (a as string).toUpperCase() // methodidan foydalanis tepada elon qilingan typega nisbatan oladi
let d = a;
//# sourceMappingURL=1-4-dars.js.map