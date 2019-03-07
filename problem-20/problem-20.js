'use strict';

function sumFactorial(number) {
  return factorial(number).reduce((acc, cur) => acc + cur);
}

function factorial(number) {
  let arr = [1];
  for (let i = 1; i <= number; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[j] *= i;
    }
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] >= 100) {
        let str = arr[k].toString();
        arr[k] = parseInt(str[2]);
        (arr[k+1] !== undefined) ? arr[k+1] += parseInt(str[1]) : arr[k+1] = parseInt(str[1]);
        (arr[k+2] !== undefined) ? arr[k+2] += parseInt(str[0]) : arr[k+2] = parseInt(str[0]);
      }
      else if (arr[k] >= 10) {
        let str = arr[k].toString();
        arr[k] = parseInt(str[1]);
        (arr[k+1] !== undefined) ? arr[k+1] += parseInt(str[0]) : arr[k+1] = parseInt(str[0]);
      }
    }
  }
  return arr;
}

module.exports = sumFactorial;
