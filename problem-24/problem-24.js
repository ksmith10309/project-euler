'use strict';

function nthPermutation(str, n) {
  let permutations = [];
  function permute(inputStr, outputStr) {
    if (inputStr.length == 0) {
      permutations.push(outputStr);
    }
    else if (inputStr.length > 0) {
      for (let i = 0; i < inputStr.length; i++) {
        permute(inputStr.slice(0, i) + inputStr.slice(i + 1), outputStr + inputStr[i]);
      }
    }
  }
  permute(str, '');
  return parseInt(permutations[n - 1]);
}

module.exports = nthPermutation;
