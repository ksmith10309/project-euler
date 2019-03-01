'use strict';

function letterCount(number) {
  let words = {
    '0': '',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
    '100': 'hundred',
    '1000': 'thousand',
  };
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (i < 20) {
      let word1 = words[i];
      count += word1.length;
    }
    else if (i < 100) {
      let word1 = words[i.toString()[0] + '0'];
      let word2 = words[i.toString()[1]];
      count += word1.length + word2.length;
    }
    else if (i < 1000) {
      let word1 = words[i.toString()[0]];
      let word2 = words[100];
      let word3 = '';
      let word4 = '';
      let word5 = '';
      let j = parseInt(i.toString().slice(-2));
      if (j != 0) {
        word3 = 'and';
        if (j < 20) {
          word4 = words[j];
        }
        else {
          word4 = words[j.toString()[0] + '0'];
          word5 = words[j.toString()[1]];
        }
      }
      count += word1.length + word2.length + word3.length + word4.length + word5.length;
    }
    else if (i == 1000) {
      let word1 = words[1];
      let word2 = words[1000];
      count += word1.length + word2.length;
    }
  }
  return count;
}

module.exports = letterCount;
