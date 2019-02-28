'use strict';

const expect = require('chai').expect;
const digitSum = require('../problem-16/problem-16.js');

describe('Problem 16', function() {
  it('should return 26 for the sum of the digits of 2 to the power of 15', function() {
    expect(digitSum(15)).to.equal(26);
  });
  it('should return 1366 for the sum of the digits of 2 to the power of 1000', function() {
    expect(digitSum(1000)).to.equal(1366);
  });
});
