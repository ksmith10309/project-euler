'use strict';

const expect = require('chai').expect;
const sumSquareDiff = require('../problem-6/problem-6.js');

describe('Problem 6', function() {
  it('should return 2640 for the difference between the sum of the squares of the first ten natural numbers and the square of the sum', function() {
    expect(sumSquareDiff(10)).to.equal(2640);
  });
  it('should return 25164150 for the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum', function() {
    expect(sumSquareDiff(100)).to.equal(25164150);
  });
});
