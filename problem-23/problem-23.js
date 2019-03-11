'use strict';

function sumNonAbundantSums() {
  let abundantNums = findAbundantNums();
  let abundantSums = findAbundantSums(abundantNums);
  let sum = 0;
  for (let i = 1; i < 28123; i++) {
    if (!abundantSums.has(i)) {
      sum += i;
    }
  }
  return sum;
}

function findAbundantNums() {
  let abundantNums = [];
  for (let i = 12; i < 28123; i++) {
    let sumDivisors = properDivisors(i).reduce((acc, cur) => acc + cur);
    if (sumDivisors > i) {
      abundantNums.push(i);
    }
  }
  return abundantNums;
}

function properDivisors(number) {
  let arr = [1];
  if (number % Math.sqrt(number) == 0) {
    arr.push(Math.sqrt(number));
  }
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      arr.push(i);
      arr.push(number / i);
    }
  }
  return arr;
}

function findAbundantSums(abundantNums) {
  let set = new Set();
  for (let i = 0; i < abundantNums.length; i++) {
    for (let j = i; j < abundantNums.length; j++) {
      if (abundantNums[i] + abundantNums[j] < 28123) {
        set.add(abundantNums[i] + abundantNums[j]);
      } else {
        break;
      }
    }
  }
  return set;
}

module.exports = sumNonAbundantSums;
