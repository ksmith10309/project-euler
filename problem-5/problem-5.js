'use strict';

function smallestMultiple(number) {
  let allFactors = [];
  for (let i = 2; i <= number; i++) {
    let copy = allFactors.slice();
    let factors = findFactors(i);
    for (let j = 0; j < factors.length; j++) {
      if (copy.includes(factors[j])) {
        copy.splice(copy.indexOf(factors[j]), 1);
      }
      else {
        allFactors.push(factors[j]);
      }
    }
  }
  return allFactors.reduce((acc, cur) => acc * cur);
}

function findFactors(number) {
  let factors = [];
  for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
      factors.push(i);
      number = number / i;
      i = 1;
    }
  }
  return factors;
}

module.exports = smallestMultiple;
