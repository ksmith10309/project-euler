'use strict';

const expect = require('chai').expect;
const sumFactorial = require('../problem-20/problem-20.js');

describe('Problem 20', function() {
  it('should return 27 for the sum of the digits in the number 10!', function() {
    expect(sumFactorial(10)).to.equal(27);
  });
  it('should return 648 for the sum of the digits in the number 100!', function() {
    expect(sumFactorial(100)).to.equal(648);
  });
});
