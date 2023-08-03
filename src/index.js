import { performance } from 'perf_hooks';

const length = 10;

async function doingSomething(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 300);
  });
}

async function asyncTest() {
  performance.mark('start async');
  let res = [];
  for (let i = 0; i < length; i++)
    res.push(await doingSomething(i));

  performance.mark('end async');
  performance.measure('Async', 'start async', 'end async');
  return performance.getEntriesByName('Async');
}

async function promiseAllTest() {
  performance.mark('start PromiseAll');
  let promises = [];
  for (let i = 0; i < length; i++) {
    promises.push(doingSomething(i));
  }

  const res = await Promise.all(promises);

  performance.mark('end PromiseAll');
  performance.measure('PromiseAll', 'start PromiseAll', 'end PromiseAll');
  return performance.getEntriesByName('PromiseAll');
}

async function main() {
  const [measureAsync] = await asyncTest();
  const [measurePromiseAll] = await promiseAllTest();


  console.log({
    measureAsync,
    measurePromiseAll,
  });
};

main();
