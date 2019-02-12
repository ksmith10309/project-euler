'use strict';

const expect = require('chai').expect;
const smallestMultiple = require('../problem-5/problem-5.js');

describe('Problem 5', function() {
  it('should return 2520 for the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder', function() {
    expect(smallestMultiple(10)).to.equal(2520);
  });
  it('should return 232792560 for the smallest number that can be divided by each of the numbers from 1 to 20 without any remainder', function() {
    expect(smallestMultiple(20)).to.equal(232792560);
  });
});
