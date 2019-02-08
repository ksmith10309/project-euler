'use strict';

function sumMultiples(belowValue) {
  let sum = 0;
  for (let i = 0; i < belowValue; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

module.exports = sumMultiples;
