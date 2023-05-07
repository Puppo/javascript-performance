import { performance } from 'perf_hooks';

class Hello {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello ${this.name}`
  }
}

function makeSayHello(name) {
  return new Hello(name);
}

let iterations = 1e7;

performance.mark('start');

while (iterations--) {
  makeSayHello('world');
}

performance.mark('end');

performance.measure('Scope', 'start', 'end');

const [measure] = performance.getEntriesByName('Scope');
console.log(measure);