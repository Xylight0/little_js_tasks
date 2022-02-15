function addFive(val) {
  return val + 5;
}

function substractTwo(val) {
  return val - 2;
}

function multiplyFour(val) {
  return val * 4;
}

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

const pipe = (...functions) => {
  return (args) => {
    return functions.reduce((arg, fn) => fn(arg), args);
  };
};

const evaluateCompose = compose(addFive, substractTwo, multiplyFour);
const evaluatePipe = pipe(addFive, substractTwo, multiplyFour);

console.log(evaluateCompose(5)); //Output: 23 (From right to left: 5 -> 5*4 -> 20-2 -> 18+5 = 23)
console.log(evaluatePipe(5)); //Output: 32 (From left to right: 5 -> 5+5 -> 10-2 -> 8*4 = 32)
