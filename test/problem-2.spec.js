'use strict';

const expect = require('chai').expect;
const evenFibonacci = require('../problem-2/problem-2.js');

describe('Problem 2', function() {
  it('should return 44 for the sum of the even-valued terms of the Fibonacci sequence below 100', function() {
    expect(evenFibonacci(100)).to.equal(44);
  });
  it('should return 4613732 for the sum of the even-valued terms of the Fibonacci sequence below 4000000', function() {
    expect(evenFibonacci(4000000)).to.equal(4613732);
  });
});
