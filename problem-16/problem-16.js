'use strict';

function digitSum(power) {
  let number = [1];
  for (let i = 1; i <= power; i++) {
    for (let j = 0; j < number.length; j++) {
      number[j] *= 2;
    }
    for (let k = 0; k < number.length; k++) {
      if (number[k] >= 10) {
        number[k] -= 10;
        (number[k+1] === undefined) ? number.push(1) : number[k+1] += 1;
      }
    }
  }
  return number.reduce((acc, cur) => acc + cur);
}

module.exports = digitSum;
