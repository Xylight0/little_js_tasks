function cache(fn, context) {
  const res = {};
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const bigData = (num1, num2) => {
  for (let i = 0; i < 10000000; i++) {}
  return num1 * num2;
};

const cachedData = cache(bigData);

console.time("First call");
console.log(cachedData(9876, 5432)); // Output: 17.169ms
console.timeEnd("First call");

console.time("First call");
console.log(cachedData(9876, 5432)); // Output: 0.815ms
console.timeEnd("First call");
