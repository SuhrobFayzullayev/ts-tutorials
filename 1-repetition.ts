// takrorlash
abstract class Men {
  abstract name: string; // initial qiymat berilmaydi abstact fieldda

  constructor(public age: number) {}
}

class Men2 extends Men {
  constructor(public name: string, public age: number) {
    super(age);
  }

  info = (): string => {
    return `${this.name}`;
  };
}

// const suhrob2: Men2 = new Men2("Suhrobjon");
const suhrob2: Men2 = new Men2("Suhrobjon", 19);
console.log(suhrob2.name);
