'use strict';

function summationPrimes(number) {
  let sum = 0;
  for (let i = 2; i < number; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

module.exports = summationPrimes;
