'use strict';

function sumSquareDiff(number) {
  return squareSum(number) - sumSquares(number);
}

function sumSquares(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i * i;
  }
  return sum;
}

function squareSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum * sum;
}

module.exports = sumSquareDiff;
