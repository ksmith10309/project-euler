'use strict';

const expect = require('chai').expect;
const letterCount = require('../problem-17/problem-17.js');

describe('Problem 17', function() {
  it('should return 19 for the number of letters from 1 to 5', function() {
    expect(letterCount(5)).to.equal(19);
  });
  it('should return 21124 for the number of letters from 1 to 1000', function() {
    expect(letterCount(1000)).to.equal(21124);
  });
});
