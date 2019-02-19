'use strict';

const expect = require('chai').expect;
const nthPrime = require('../problem-07/problem-07.js');

describe('Problem 7', function() {
  it('should return 13 for the 6th prime number', function() {
    expect(nthPrime(6)).to.equal(13);
  });
  it('should return 104743 for the 10001th prime number', function() {
    expect(nthPrime(10001)).to.equal(104743);
  });
});
