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

const evaluate = compose(addFive, substractTwo, multiplyFour);

console.log(evaluate(5)); //Output: 23
