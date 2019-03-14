'use strict';

function findFibonacciIndex(digits) {
  let term1 = '1';
  let term2 = '1';
  let term3 = '2';
  let index = 3;
  while (term3.length < digits) {
    term1 = term2;
    term2 = term3;
    term3 = '';
    let carry = 0;
    for (let i = 0; i < term2.length; i++) {
      if (term1[i] === undefined && carry === 0) {
        term3 += term2.slice(i);
        break;
      }
      else if (term1[i] === undefined && carry === 1) {
        let sum = parseInt(term2[i]) + carry;
        if (sum > 9) {
          term3 += sum.toString()[1];
          carry = 1;
        }
        else {
          term3 += sum.toString();
          carry = 0;
        }
      }
      else {
        let sum = parseInt(term1[i]) + parseInt(term2[i]) + carry;
        if (sum > 9) {
          term3 += sum.toString()[1];
          carry = 1;
        }
        else {
          term3 += sum.toString();
          carry = 0;
        }
      }
    }
    if (carry === 1) {
      term3 += '1';
    }
    index++;
  }
  return index;
}

module.exports = findFibonacciIndex;
