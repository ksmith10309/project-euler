'use strict';

const expect = require('chai').expect;
const summationPrimes = require('../problem-10/problem-10.js');

describe('Problem 10', function() {
  it('should return 17 for the sum of the primes below 10', function() {
    expect(summationPrimes(10)).to.equal(17);
  });
  it('should return 142913828922 for the sum of the primes below 2000000', function() {
    expect(summationPrimes(2000000)).to.equal(142913828922);
  });
});
