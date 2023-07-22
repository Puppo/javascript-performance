import { performance } from 'perf_hooks';

const length = 1e7;

performance.mark('start for');
const resultWithFor = []
for (let i = 0; i < length; i++) {
  resultWithFor.push(i);
}
performance.mark('end for');
performance.measure('For', 'start for', 'end for');
const [measureFor] = performance.getEntriesByName('For');

performance.mark('start arrayFillMap');
const arrayFillMap = Array(length).fill().map((_, i) => i);
performance.mark('end arrayFillMap');
performance.measure('ArrayFillMap', 'start arrayFillMap', 'end arrayFillMap');
const [measureArrayFillMap] = performance.getEntriesByName('ArrayFillMap');

performance.mark('start keys');
const arrayKeys = [...Array(length).keys()];
performance.mark('end keys');
performance.measure('Keys', 'start keys', 'end keys');
const [measureKeys] = performance.getEntriesByName('Keys');

console.log({
  measureFor,
  measureArrayFillMap,
  measureKeys,
});