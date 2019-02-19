'use strict';

function largestPalindrome(digits) {
  let palindrome = -1;
  for (let i = Math.pow(10, digits - 1); i < Math.pow(10, digits); i++) {
    for (let j = Math.pow(10, digits - 1); j < Math.pow(10, digits); j++) {
      if (isPalindrome(i * j) && i * j > palindrome) palindrome = i * j;
    }
  }
  return palindrome;
}

function isPalindrome(number) {
  let string = number.toString();
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
}

module.exports = largestPalindrome;
