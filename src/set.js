import { performance } from 'perf_hooks';

const MAX_ITERATIONS = 1e5;

{
  let iterations = MAX_ITERATIONS;

  const array = [];
  while (iterations--) {
    array.push(iterations)
  }

  iterations = MAX_ITERATIONS;
  performance.mark('start search');
  while (iterations--) {
    array.includes(1);
  }
  performance.mark('end search');

  performance.measure('Array performance search', 'start search', 'end search');
  const [measureSearch] = performance.getEntriesByName('Array performance search');
  console.log(measureSearch);
}

{

  let iterations = MAX_ITERATIONS;

  const set = new Set();
  while (iterations--) {
    set.add(iterations);
  }

  iterations = MAX_ITERATIONS;
  performance.mark('start search');
  while (iterations--) {
    set.has(1);
  }
  performance.mark('end search');

  performance.measure('Set performance search', 'start search', 'end search');
  const [measureSearch] = performance.getEntriesByName('Set performance search');
  console.log(measureSearch);
}