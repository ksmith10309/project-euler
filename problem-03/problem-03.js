'use strict';

function largestPrime(number) {
  let prime = -1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      if (isPrime(i) && i > prime) prime = i;
      if (isPrime(number / i) && number / i > prime) prime = number / i;
    }
  }
  return prime;
}

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

module.exports = largestPrime;
