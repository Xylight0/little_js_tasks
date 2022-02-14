function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

function add2(...args) {
  return args.reduce((val, next) => (val += next));
}

console.log(add(2)(8)(5)(10)()); //Output: 25
console.log(add2(2, 8, 5, 10)); //Output: 25
