// // namespace

// // namespace elon qilish namespace kalit so'zi yoziladi va uning nomi birinchi harfi va va boshliq yani text orasida 'space' bolsa ular birlashtirilib keyingi soz birinchi harfi katta harfd yoziladi yani // HelloWorld // BuMeningUyim hokozo va {} orqali block hosil qilinadi
// namespace Utils {
//   // namespace ichidagi methodlarni namespace tashqarisida ishltish uchun uni export qilib yuboramiz
//   export function log(text: string, color: string, fontSize?: string): void {
//     if (fontSize) {
//       // console ga style berish uchun `%c` yoziladi va davomidan text yoziladi yani `%c%{text_here}` va vergul keyin css kodelari yoziladi string ichida
//       console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
//     } else {
//       console.log(`%c${text}`, `color: ${color}`);
//     }
//   }

//   // namespace ichidagi methodlarni namescpace ichida chaqirib ishlatsa boladi
//   //   log("Salom TS", "red", "24px");
//   //   log("Salom TS", "red");
// }

// // namespace ichdigagi methodlarni tashqarida ishlatish uchun o'sha namespace nomi yoziladi va . orqali ichidagi export qilingan methodlar chaqiriladi

// // Utils.log("Salom Dunyo", "green", "32px");

// namespace Animals {
//   export abstract class Animal {
//     constructor(protected name: string) {}

//     abstract say(): void;
//   }
// }

// // bir xil nomli namespace yaratsa boladi natijada ichidagi barcha method, class va boshqa filedlar bir nom ostida birlashadi
// namespace Animals {
//   export class Tiger extends Animals.Animal {
//     #sound: string = ""; // private sound bir xil bu es6 dan chiqqan bunda js compile bolsa agar private fileni foydalansa compile error beradi agar privae qilib elon qilinsa error bermaydi
//     constructor(name: string, sound: string) {
//       super(name);

//       this.#sound = sound;
//     }

//     // methods
//     say(): void {
//       Utils.log(`${this.name}'s sound is ${this.#sound}`, "blue", "32px");
//     }
//   }

//   // namespace ichida namespace elon qilsa boladi faqat foydalanish uchun export qilinadi uning ichidagi datani foydalanish uchun esa uni ham export qilib yuborish kerak boladi
//   export namespace Pets {
//     export class Cat extends Animal {
//       // namespace Animals namespace ichida bolgani uchun va u Animals namespace bolasi bolgni uchun uning ichidagi datalarni toggridan togri chaqirib ishlatsak boladi yoki namespace nomi va data nomi ikki yol ham to'g'ri
//       constructor(name: string, private sound: string) {
//         super(name);
//       }

//       // methods
//       say(): void {
//         Utils.log(`${this.name}'s sound is ${this.sound}`, "blue", "32px");
//       }
//     }
//   }
// }

// const tiger: Animals.Tiger = new Animals.Tiger("Tiger", "RRRR");
// tiger.say();

// // const cat: Animals.Pets.Cat = new Animals.Pets.Cat("Mushul", "myau");
// // cat.say();

// // console.log(tiger.#sound); // error compile js tiger. error
