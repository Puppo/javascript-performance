import { performance } from 'perf_hooks';

class Person {
  constructor(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
  }
}

let iterations = 1e7;
const list = [];
while (iterations--) {
  list.push(new Person('John', 'Doe', 1990));
}

performance.mark('start');

// const result = list.reduce((r, p) => {
//   return r.concat([{
//     name: p.name,
//     surname: p.surname,
//   }])
// }, []);

// const result = list.reduce((r, p) => {
//   r.push({
//     name: p.name,
//     surname: p.surname,
//   })
//   return r;
// }, []);

// const result = [];
// for (const person of list) {
//   result.push({
//     name: person.name,
//     surname: person.surname,
//   })
// }

// const result = [];
// for (let i = 0, person = list[i]; i < list.length; i++) {
//   result.push({
//     name: person.name,
//     surname: person.surname,
//   })
// }

performance.mark('end');

performance.measure('Array Iterations', 'start', 'end');

const [measure] = performance.getEntriesByName('Array Iterations');
console.log(measure);