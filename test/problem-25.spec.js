'use strict';

const expect = require('chai').expect;
const findFibonnaciIndex = require('../problem-25/problem-25.js');

describe('Problem 25', function() {
  it('should return 12 for the first term in the Fibonacci sequence to contain three digits', function() {
    expect(findFibonnaciIndex(3)).to.equal(12);
  });
  it('should return 4782 for the first term in the Fibonacci sequence to contain 1000 digits', function() {
    expect(findFibonnaciIndex(1000)).to.equal(4782);
  });
});
