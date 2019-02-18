'use strict';

function pythagoreanTriplet(sum) {
  for (let a = 1; a < sum; a++) {
    for (let b = a; b < sum; b++) {
      let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (a + b + c == sum) {
        return a * b * c;
      }
    }
  }
}

module.exports = pythagoreanTriplet;
