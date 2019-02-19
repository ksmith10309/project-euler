'use strict';

const expect = require('chai').expect;
const pythagoreanTriplet = require('../problem-09/problem-09.js');

describe('Problem 9', function() {
  it('should return 60 for the product of the Pythagorean triplet with the sum of 12', function() {
    expect(pythagoreanTriplet(12)).to.equal(60);
  });
  it('should return 31875000 for the product of the Pythagorean triplet with the sum of 1000', function() {
    expect(pythagoreanTriplet(1000)).to.equal(31875000);
  });
});
