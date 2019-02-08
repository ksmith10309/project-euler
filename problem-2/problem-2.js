'use strict';

function evenFibonacci(belowValue) {
  let next, sum = 0, a = 1, b = 2;
  while (b < belowValue) {
    if (b % 2 == 0) {
      sum += b;
    }
    next = a + b;
    a = b;
    b = next;
  }
  return sum;
}

module.exports = evenFibonacci;
