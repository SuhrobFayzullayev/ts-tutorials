"use strict";
// // // Arrays
// // let a = [1] // default array number
// // a = [1, 2, 3] //bu holatda array faqat numberdan tashkil topdan
// // // a = [true] // error bu faqat number type oladi
// let b: number | string[]; // b faqat number va string array oladi
// b = 5; // togri
// b = ["str", "hello"]; // to'gri
// // b = [true, 1] // error faqat number yoki array ichida string olishi mumkin
// let c: number[] | string[]; // bu holatda yoki string array yoki number array oladi
// // c = 1 // error
// // c = 'str' // error
// // c = [1, 2, 3, 'hello', 'world'] error
// c = [1, 2]; // togri
// c = ["hello", "world"]; // togri
// // let d: number[] & string[] // bundyay ishlatib bolamaydi
// // d = ['hello', 12] // error
// let f: (number | string)[]; // bu holatda array ichida yoki number yo string yoki ikklasi ham bo'lishi mumki
// let t: Array<boolean> = [true]; // buni ham ishlatish mumkin matafsil keyingi darslarda
// f = [1, 2, 3]; // togri
// f = ["hello", "world"]; // to'gri
// f = [1, 2, 3, "hello", "world"]; // togri
// typles
// let arr: [number, string, ...any]; // bu orqali array indexlari ketma-ketlikda qanday type olishini aytishimiz mumkin
// ...type orqali osha va keyingi malumotlar qaysi typeda bolishini aytishimiz mumkin
// arr =  [1] // error 1 index string bolishi kerak lekin kitirilmagan
// arr = ['hello', 1] // eror 0 index number, 1 index string bolishi kerak
// arr = [1, 'hello', true] // fqat 0 va 1 index kiritish mumkin
// arr = [1, 'hello'] // togri
// arr = [1, 'hello', true, false] // erro 2 index any type va 3 index mavjud emas
// arr = [1, "s", true, false]; // 2 index va qolganlari ishtiyoriy type any orniga boshq type qoysa boladi
// Enums
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 2] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender || (Gender = {}));
// enum G {
//   A = 10, // boshlangiz qiymat berildi // 10
//   B, // A dan keingi keladigan qiymat oladi agar qiymat berilamsa // 11
// }
// enum G {
//   A, // bunda qiymat berilmagani uchun 0
//   B = 11, // 11
// }
// enum G {
//   A = 5, // 5
//   B = 11, // 11
// }
//
// enum G {
//   A, // 0
//   B = 11, // 11
//   C, // 12
// }
// bu holatlarning barchasida biz key orqali valueni olyapmi
// console.log(G.A, G.B);
// bu holatda keyni value boyicha olyapmiz
// console.log(Gender[Gender.Male]); // Male
// console.log(Gender[Gender.Female]); // Female
// console.log(Gender[0], Gender[1]); // Male, Female
// console.log(Gender[1], Gender[0]); // Female, Male
// console.log(Gender[1], Gender[1]); // Female, Female
// console.log(Gender[3]); // Female chunki 3 qiymat Female key ozlashtirgan
// console.log(Gender[5]); // undefined chunki 5 ni hech qaysi Key o'zlashtirmagan
var User;
(function (User) {
    User["name"] = "Suhrob";
    User[User["age"] = 19] = "age";
})(User || (User = {}));
// let f: number[] & string[] = [1, 2, 3] // hato
let f = ["w"]; // bunda yo array number yoki string array bolishi kerak
// let tt: Array<number | string> = [1, 2, 3, '55'] // bunda array ichida number hm string ham kiritsa boladi
let tt = [1, 2, 3, "55"]; // bunda array ichida number hm string ham kiritsa boladi
//# sourceMappingURL=index.js.map