'use strict';

const expect = require('chai').expect;
const sumAmicable = require('../problem-21/problem-21.js');

describe('Problem 21', function() {
  it('should return 504 for the sum of all the amicable numbers under 1000', function() {
    expect(sumAmicable(1000)).to.equal(504);
  });
  it('should return 31626 for the sum of all the amicable numbers under 10000', function() {
    expect(sumAmicable(10000)).to.equal(31626);
  });
});
