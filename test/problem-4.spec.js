'use strict';

const expect = require('chai').expect;
const largestPalindrome = require('../problem-4/problem-4.js');

describe('Problem 4', function() {
  it('should return 9009 for the largest palindrome made from the product of two 2-digit numbers', function() {
    expect(largestPalindrome(2)).to.equal(9009);
  });
  it('should return 906609 for the largest palindrome made from the product of two 3-digit numbers', function() {
    expect(largestPalindrome(3)).to.equal(906609);
  });
});
