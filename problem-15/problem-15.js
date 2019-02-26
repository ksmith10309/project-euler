'use strict';

// Recursive solution takes too long for a 20x20 grid
function recursiveLatticePaths(width, height) {
  let paths = 0;
  function move(w, h) {
    if (w > 0) {
      move(w - 1, h);
    }
    if (h > 0) {
      move(w, h - 1);
    }
    if (w == 0 && h == 0) paths++;
  }
  move(width, height);
  return paths;
}

// Binomial coefficient solution
function latticePaths(width, height) {
  return factorial(width + height) / (factorial(width) * factorial(height));
}

function factorial(number) {
  if (number == 0) {
    return 1;
  }
  else {
    return number * factorial(number - 1);
  }
}

module.exports = latticePaths;
