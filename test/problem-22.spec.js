'use strict';

const expect = require('chai').expect;
const sumScores = require('../problem-22/problem-22.js');

describe('Problem 22', function() {
  it('should return 871198282 for the total of all the name scores in the file', function() {
    expect(sumScores()).to.equal(871198282);
  });
});
