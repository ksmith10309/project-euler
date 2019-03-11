'use strict';

function sumScores() {
  const fs = require('fs');
  const names = fs.readFileSync('./problem-22/names.txt', 'utf8');
  return names.split(',').sort().reduce((acc, cur, idx) => {
    let value = 0;
    for (let i = 1; i < cur.length - 1; i++) {
      value += cur.charCodeAt(i) - 64;
    }
    let score = value * (idx + 1);
    return acc + score;
  }, 0);
}

module.exports = sumScores;
