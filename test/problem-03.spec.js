'use strict';

const expect = require('chai').expect;
const largestPrime = require('../problem-03/problem-03.js');

describe('Problem 3', function() {
  it('should return 29 for the largest prime factor of 13195', function() {
    expect(largestPrime(13195)).to.equal(29);
  });
  it('should return 6857 for the largest prime factor of 600851475143', function() {
    expect(largestPrime(600851475143)).to.equal(6857);
  });
});
