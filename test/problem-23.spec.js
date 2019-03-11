'use strict';

const expect = require('chai').expect;
const sumNonAbundantSums = require('../problem-23/problem-23.js');

describe('Problem 23', function() {
  it('should return 4179871 for the sum of all the positive integers which cannot be wrtten as the sum of two abundant numbers', function() {
    expect(sumNonAbundantSums()).to.equal(4179871);
  });
});
