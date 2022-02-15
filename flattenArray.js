let array = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8], 9],
  [10, 11, 12],
];

const flatArray = (arr, depth = 1) => {
  let result = [];
  arr.forEach((e) => {
    if (Array.isArray(e) && depth > 0) {
      result.push(...flatArray(e, depth - 1));
    } else result.push(e);
  });

  return result;
};

console.log([].concat(...array)); //Output: [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10, 11, 12 ]

console.log(array.flat()); //Output: [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10, 11, 12 ]
console.log(array.flat(2)); //parameter = depth //Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

console.log(flatArray(array)); //Output: [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10, 11, 12 ]
console.log(flatArray(array, 2)); //parameter = depth //Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
