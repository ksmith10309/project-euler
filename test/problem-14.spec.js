'use strict';

const expect = require('chai').expect;
const longestCollatz = require('../problem-14/problem-14.js');

describe('Problem 14', function() {
  it('should return 9 for the starting number under 10 that produces the longest chain', function() {
    expect(longestCollatz(10)).to.equal(9);
  });
  it('should return 837799 for the starting number under 1000000 that produces the longest chain', function() {
    expect(longestCollatz(1000000)).to.equal(837799);
  });
});
