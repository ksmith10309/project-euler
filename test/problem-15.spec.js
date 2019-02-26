'use strict';

const expect = require('chai').expect;
const latticePaths = require('../problem-15/problem-15.js');

describe('Problem 15', function() {
  it('should return 6 for the number of routes through a 2x2 grid', function() {
    expect(latticePaths(2, 2)).to.equal(6);
  });
  it('should return 137846528820 for the number of routes through a 20x20 grid', function() {
    expect(latticePaths(20, 20)).to.equal(137846528820);
  });
});
