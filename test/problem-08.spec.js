'use strict';

const expect = require('chai').expect;
const largestProduct = require('../problem-08/problem-08.js');

describe('Problem 8', function() {
  it('should return 5832 for the product of the four adjacent digits in the 1000-digit number that have the greatest product', function() {
    expect(largestProduct(4)).to.equal(5832);
  });
  it('should return 23514624000 for the product of the thirteen adjacent digits in the 1000-digit number that have the greatest product', function() {
    expect(largestProduct(13)).to.equal(23514624000);
  });
});
