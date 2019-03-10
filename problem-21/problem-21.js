'use strict';

function sumAmicable(number) {
  let sum = 0;
  let map = new Map();
  for (let i = 2; i < number; i++) {
    let sumDivisors = properDivisors(i).reduce((acc, cur) => acc + cur);
    map.set(i, sumDivisors);
    if (sumDivisors < i && i == map.get(sumDivisors)) {
      sum += i + sumDivisors;
    }
  }
  return sum;
}

function properDivisors(number) {
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = sumAmicable;
