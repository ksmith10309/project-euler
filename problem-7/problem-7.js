'use strict';

function nthPrime(n) {
  let count = 1, i = 2;
  while (count < n) {
    i++;
    if (isPrime(i)) {
      count++;
    }
  }
  return i;
}

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

module.exports = nthPrime;
