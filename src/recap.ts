const myName = 'Nestor';
const myAge = 12;

const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 13);

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}

const nestor = new Persona(40, 'Nestor');
nestor.getSummary();
