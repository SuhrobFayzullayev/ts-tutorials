// // generic types
// // generic type orqali biz ozimiz type gerenatsiya qilishimiz mumkin
// // 1. type kalit sozi va nome birinchi va boshlikli textlar yopilib uning ham bsh harfi hatta harfda yoziladi // HelloWorld
// // 2. keyin nomidan keyin boshliq tahlamasdan '<>' belgi yoziladi va ichiga nom beriladi bu ham typega nom beril kabi boladi odatda no bersh latta T yani <T> qilib beriladi bu yozilmagan qoida
// // 3. bolib keyin '=' ishorasi va osha <> ichida bergan nomimiz o'zlashtiriladi huddi pastdagi kabi

// type A<T> = T;
// type B<T> = T;

// // foydalanish
// // type yaratiladi va unga nom = biz yaratgan generic type chaqiriladi va davomidan boshliq tashlamagan holda <> ishora va type beriladi misol uchun pastdagi misol

// // bu holatda C type biz yaratgan A generic type orqali oshiga string typeni ozlashtirib oldi
// type C = A<string>; // string
// type D = A<number>; // number
// type E = A<boolean | undefined>; // boolean yoki undefined typelar qabul qiladi bu hohlaguncha yozish mumkin

// // bu jarayon qanday sodir bolyapti biz berayotgan <> ichidagi type A<T = kiritilgan_type> = kiritilgan type
// // yani T biz bergan typeni o'zlashtiradi

// type Ts = A<"TS">; // biz js da bor bolgan typelarni balki simbol text va boshqa qiymatlarni berishimiz mumkin

// // generic types in array
// // oldingi kabi generic type yaratiladi bitta harqi = T // bu primitive type bolsa = T[] bu array dan tashlik topgan primivive type hisoblanadi
// type MyArr<T> = T[];
// let testArr: MyArr<number | "s"> = ["s"];

// // gereric type in functions

// // <T> orqali generic type elon qildin va endi props x ga ham biz kiritadigan qiymatda qarab type oladi va return qilish ham kirtilgan typeni return qiladi yani return bolayotgan data biz bergan generic typeda boladi
// function echo<T>(x: T): T {
//   return x;
// }

// // echo('string') // echo string typeda emas balki 'string' textidan tashkil topgan custom type ga ega
// echo<number | "2">("2"); // endigi holatda biz qanday typedagi datani kiritishimiz mumkinligini aytib o'tdik
// echo<2>(2); // bu holatda echo 2 dan tashkil topgan custom typega ega va shu custom typedagi props qiymat sorayapti va shu typedagi custom type kiritilgani uchun error qaytarmadi
// echo<number>(2); // bu holatda echo 2 dan tashkil topgan custom typega ega va shu custom typedagi props qiymat sorayapti va shu typedagi custom type kiritilgani uchun error qaytarmadi

// const myFunc: string = echo<string>("salom"); // myFunc ga o'zlashuvchi data string typeda va echo kiruvchi va qaytuvchi string typeda bolishi kerak
// const myFunc2: string = echo("salom"); // myFunc ga o'zlashunvchi qiymat string typeda bolishi kerak, lekin echo 'salom' typega ega bu 'salom' string bolgani uchun error qaytarmadi
// // const myFunc3: number = echo('salom') // bu holatda echo 'salom' typega ega boldi va shu typeni return qilmoqda myFunc ga o'zlashunchi data number typeda bolishi kerak bu error chunki 'salom' bu custom 'salom' type va string type hisoblanadi lekin myFunc o'zlashunchi data number bolishi kerak
// // const myFunc4: number = echo("number"); // bu holatda echo 'number' custom typega ega myFunc esa number soragani uchun error qaytaryapti
// const myFunc5: number = echo(1); // bu holatda echo 1 dan tashkil topgan custom typega ega va bu number typega teng shuning uchun error chiqmadi
// const myFunc6 = echo(12); // bu custom 12 type
// const myFunc7 = echo<number>(12); // bu number type
// // bu ikki holatda myFuncN echoni typeni ozlashtirib olmoqda

// const myFunc10 = echo(12);

// generic types using signature functions

// uzun signature function and usage
//          -- signature --, -- usage --
// const echo: <T>(x: T) => T = <T>(x: T): T => {
//   return x;
// };

// type ECHO = <T>(x: T) => T;
// type ECHO2 = <T>(x: T) => T;

// const echo2: ECHO = <T>(x: T): T => x;
