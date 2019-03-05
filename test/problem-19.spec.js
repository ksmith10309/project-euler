'use strict';

const expect = require('chai').expect;
const countSundays = require('../problem-19/problem-19.js');

describe('Problem 19', function() {
  it('should return 171 for the number of Sundays that fell on the first of the month during the twentieth century', function() {
    expect(countSundays()).to.equal(171);
  });
});
