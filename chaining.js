const calc = {
  total: 0,
  add(val) {
    this.total += val;
    return this;
  },
  multiply(val) {
    this.total *= val;
    return this;
  },
  substract(val) {
    this.total -= val;
    return this;
  },
  divide(val) {
    this.total /= val;
    return this;
  },
  square() {
    this.total **= 2;
    return this;
  },
};

const result = calc
  .add(10)
  .multiply(5)
  .substract(30)
  .add(10)
  .divide(3)
  .square();
console.log(result.total); // Output: 100
