'use strict';

const expect = require('chai').expect;
const triangleDivisors = require('../problem-12/problem-12.js');

describe('Problem 12', function() {
  it('should return 28 for the first triangle number to have over five divisors', function() {
    expect(triangleDivisors(5)).to.equal(28);
  });
  it('should return 76576500 for the first triangle number to have over five hundred divisors', function() {
    expect(triangleDivisors(500)).to.equal(76576500);
  });
});
