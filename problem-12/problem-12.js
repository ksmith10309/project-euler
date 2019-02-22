'use strict';

function triangleDivisors(number) {
  let triangle = 1;
  let divisors = 1;
  let i = 2;
  while (divisors <= number) {
    triangle += i;
    divisors = findDivisors(triangle);
    i++;
  }
  return triangle;
}

function findDivisors(number) {
  let divisors = 0;
  if (number % Math.sqrt(number) == 0) divisors++;
  for (let i = 1; i < Math.sqrt(number); i++) {
    if (number % i == 0) divisors += 2;
  }
  return divisors;
}

module.exports = triangleDivisors;
