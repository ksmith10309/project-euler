'use strict';

const expect = require('chai').expect;
const nthPermutation = require('../problem-24/problem-24.js');

describe('Problem 24', function() {
  it('should return 210 for the sixth lexicographic permutation of the digits 0, 1 and 2', function() {
    expect(nthPermutation('012', 6)).to.equal(210);
  });
  it('should return 2783915460 for the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9', function() {
    expect(nthPermutation('0123456789', 1000000)).to.equal(2783915460);
  });
});
