'use strict';

const expect = require('chai').expect;
const largeSum = require('../problem-13/problem-13.js');

describe('Problem 13', function() {
  it('should return 553 for the first three digits of the sum of the one-hundred 50-digit numbers', function() {
    expect(largeSum(3)).to.equal(553);
  });
  it('should return 5537376230 for the first ten digits of the sum of the one-hundred 50-digit numbers', function() {
    expect(largeSum(10)).to.equal(5537376230);
  });
});
