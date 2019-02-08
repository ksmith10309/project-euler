'use strict';

const expect = require('chai').expect;
const sumMultiples = require('../problem-1/problem-1.js');

describe('Problem 1', function() {
  it('should return 23 for the sum of all natural numbers below 10 that are multiples of 3 or 5', function() {
    expect(sumMultiples(10)).to.equal(23);
  });
  it('should return 233168 for the sum of all natural numbers below 1000 that are multiples of 3 or 5', function() {
    expect(sumMultiples(1000)).to.equal(233168);
  });
});
