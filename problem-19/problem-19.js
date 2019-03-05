'use strict';

function countSundays() {
  const JAN = monthArr(31);
  const FEB = monthArr(28);
  const FEB_LEAP = monthArr(29);
  const MAR = monthArr(31);
  const APR = monthArr(30);
  const MAY = monthArr(31);
  const JUN = monthArr(30);
  const JUL = monthArr(31);
  const AUG = monthArr(31);
  const SEP = monthArr(30);
  const OCT = monthArr(31);
  const NOV = monthArr(30);
  const DEC = monthArr(31);

  let dates = [];
  for (let i = 1901; i <= 2000; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      dates = dates.concat(JAN, FEB_LEAP, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC);
    }
    else {
      dates = dates.concat(JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC);
    }
  }

  let sundays = 0;
  for (let i = 5; i < dates.length; i+=7) {
    if (dates[i] === 1) {
      sundays++;
    }
  }
  return sundays;
}

function monthArr(days) {
  let arr = [];
  for (let i = 1; i <= days; i++) {
    arr.push(i);
  }
  return arr;
}

module.exports = countSundays;
