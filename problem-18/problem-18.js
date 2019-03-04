'use strict';

function maxSum(triangle) {
  let max = 0;
  function path(row, col, sum) {
    sum += triangle[row][col];
    if (triangle[row + 1] !== undefined) {
      path(row + 1, col, sum);
      path(row + 1, col + 1, sum);
    }
    else {
      if (sum > max) max = sum;
    }
  }
  path(0, 0, 0);
  return max;
}

module.exports = maxSum;
