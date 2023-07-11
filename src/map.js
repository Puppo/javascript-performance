

import { performance } from 'perf_hooks';

const MAX_ITERATIONS = 1e7;

{
  let iterations = MAX_ITERATIONS;

  const obj = {};
  while (iterations--) {
    // const key = iterations % 2 === 0 ? iterations : iterations.toString();
    const key = iterations
    obj[key] = undefined;
  }

  iterations = MAX_ITERATIONS;
  performance.mark('start search');
  while (iterations--) {
    // const key = iterations % 2 === 0 ? iterations : iterations.toString();
    const key = iterations
    obj.hasOwnProperty(key);
  }
  performance.mark('end search');

  performance.measure('Object performance search', 'start search', 'end search');
  const [measureSearch] = performance.getEntriesByName('Object performance search');
  console.log(measureSearch);
}

{

  let iterations = MAX_ITERATIONS;

  const set = new Map();
  while (iterations--) {
    // const key = iterations % 2 === 0 ? iterations : iterations.toString();
    const key = iterations
    set.set(key, undefined);
  }

  iterations = MAX_ITERATIONS;
  performance.mark('start search');
  while (iterations--) {
    // const key = iterations % 2 === 0 ? iterations : iterations.toString();
    const key = iterations
    set.has(key);
  }
  performance.mark('end search');

  performance.measure('Map performance search', 'start search', 'end search');
  const [measureSearch] = performance.getEntriesByName('Map performance search');
  console.log(measureSearch);
}
