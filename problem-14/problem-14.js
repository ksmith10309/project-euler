'use strict';

function longestCollatz(max) {
  let starting, longest = 0;
  for (let i = Math.floor(max/3); i < max; i+=2) {
    let num = i;
    let length = 1;
    while (num > 1) {
      if (num % 2 == 0) {
        num = num / 2;
        length++;
      } else {
        num = 3 * num + 1;
        length++;
      }
    }
    if (length > longest) {
      longest = length;
      starting = i;
    }
  }
  return starting;
}

module.exports = longestCollatz;
