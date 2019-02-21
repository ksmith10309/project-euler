'use strict';

function largestProduct(grid) {
  let largest = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      let product1 = grid[r][c] * grid[r][c+1] * grid[r][c+2] * grid[r][c+3];
      if (product1 > largest) largest = product1;
      if (grid[r+1] && grid[r+2] && grid[r+3]) {
        let product2 = grid[r][c] * grid[r+1][c] * grid[r+2][c] * grid[r+3][c];
        if (product2 > largest) largest = product2;
        let product3 = grid[r][c] * grid[r+1][c+1] * grid[r+2][c+2] * grid[r+3][c+3];
        if (product3 > largest) largest = product3;
        let product4 = grid[r][c] * grid[r+1][c-1] * grid[r+2][c-2] * grid[r+3][c-3];
        if (product4 > largest) largest = product4;
      }
    }
  }
  return largest;
}

module.exports = largestProduct;
