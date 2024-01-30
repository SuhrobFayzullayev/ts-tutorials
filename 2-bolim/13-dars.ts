// generiv types in classes

// class List<T> {
//   _elements: T[] = [];

//   // methods
//   add(element: T): void {
//     this._elements.push(element);
//   }
// }

// const myList = new List<number | string>();
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     myList.add(i);
//   } else {
//     myList.add(i + " hello");
//   }
// }

// console.log(myList);

// class Item<T> {
//   //   _item: T; // classlarda filedni initial qiymatini berish majburiy agar constructor bolmasa

//   constructor(public item: T) {} // accsess modificatorlarni berish majburiy constuctor ichida field elon qilinsa
// }

// const myList = new Item<number | string>("salom");
// // for (let i = 0; i < 10; i++) {
// //   if (i % 2 === 0) {
// //     myList.add(i);
// //   } else {
// //     myList.add(i + " hello");
// //   }
// // }

// console.log(myList);

// interface va type larda generic type
// interface IList<T> {
//   items: T[];
//   add(element: T): void;
// }

// type IList<T> = {
//   new (items: T[]): void;
// };

// type ListTypes = string | number | boolean;

// class List implements IList<ListTypes> {
//   constructor(public items: ListTypes[]) {}
// }

// const l: IList<ListTypes> = new List([12]);
// // l.add("hello");
// // l.add(12);
// // l.add(true);

// console.log(l);
