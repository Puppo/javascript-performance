import { performance } from 'perf_hooks';

const MAX_ITERATIONS = 1e8;

let iterations = MAX_ITERATIONS;

const array = [];
while (iterations--) {
  array.push(iterations)
}

iterations = MAX_ITERATIONS;
performance.mark('start at');
while (iterations--) {
  array.at(iterations);
}
performance.mark('end at');

performance.measure('Array at performance', 'start at', 'end at');
const [measureAt] = performance.getEntriesByName('Array at performance');
console.log(measureAt);

iterations = MAX_ITERATIONS;
performance.mark('start index');
while (iterations--) {
  array[iterations];
}
performance.mark('end index');

performance.measure('Array index performance', 'start index', 'end index');
const [measureIndex] = performance.getEntriesByName('Array index performance');
console.log(measureIndex);

performance.mark('start at last');
array.at(array.length - 1);
performance.mark('end at last');
performance.measure('Array at last performance', 'start at last', 'end at last');
const [measureAtLast] = performance.getEntriesByName('Array at last performance');
console.log(measureAtLast);

performance.mark('start at last -1');
array.at(-1);
performance.mark('end at last -1');
performance.measure('Array at last -1 performance', 'start at last', 'end at last');
const [measureAtLastMinusOne] = performance.getEntriesByName('Array at last -1 performance');
console.log(measureAtLastMinusOne);

performance.mark('start index last');
array.at(array.length - 1);
performance.mark('end index last');
performance.measure('Array index last performance', 'start index last', 'end index last');
const [measureIndexLast] = performance.getEntriesByName('Array index last performance');
console.log(measureIndexLast);