function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

function add2(...args) {
  return args.reduce((val, next) => (val += next));
}

console.log(add(5)(2)(4)(8)());
console.log(add2(5, 2, 4, 8));
