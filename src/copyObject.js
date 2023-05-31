import { performance } from 'perf_hooks';

let iterations = 1e7;
const people = [];
while (iterations--) {
  people.push({
    name: 'John',
    surname: 'Doe',
    birthYear: 1990,
    addresses: [{
      street: '123 main street',
      city: 'London',
      country: 'United Kingdom',
    }, {
      street: '123 second street',
      city: 'Paris',
      country: 'France'
    }]
  });
}

performance.mark('start');

const peopleCopy = [];
for (let i = 0, person = people[i]; i < people.length; i++) {
  const personCopy = { ...person };
  // const personCopy = Object.assign({}, person);
  // const personCopy = JSON.parse(JSON.stringify(person));
  // const personCopy = structuredClone(person);

  peopleCopy.push(personCopy);
}

performance.mark('end');

console.log('people are equals', peopleCopy[0] === people[0]);
console.log('addresses are equals', peopleCopy[0].addresses === people[0].addresses);

performance.measure('Copy', 'start', 'end');

const [measure] = performance.getEntriesByName('Copy');
console.log(measure);