import { performance } from 'perf_hooks';

class Person {
  constructor(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
  }
}


let iterations = 1e7;

performance.mark('start');

let result = []
while (iterations--) {
  const person = new Person('John', 'Doe', 1990);
  delete person.birthYear;
  result.push(person);
  // result.push({
  //   name: person.name,
  //   surname: person.surname,
  // })
}

performance.mark('end');

performance.measure('Delete prop', 'start', 'end');

const [measure] = performance.getEntriesByName('Delete prop');
console.log(measure);