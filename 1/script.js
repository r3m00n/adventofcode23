import { input1, input2 } from './input.js';

const digitMapping = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const firstDigit1 = str => {
  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) return str[i];
  }
};

const lastDigit1 = str => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (/\d/.test(str[i])) return str[i];
  }
};

const add1 = values => {
  const lines = values.trim().split('\n');
  let sum = 0;

  for (const line of lines) {
    sum += parseInt(firstDigit1(line) + lastDigit1(line));
  }
  return sum;
};

const firstDigit2 = str => {
  const digitMatches = str.match(/(?:zero|one|two|three|four|five|six|seven|eight|nine|\d)/i);
  if (digitMatches) {
    const matchedDigit = digitMatches[0].toLowerCase();
    return digitMapping[matchedDigit] || matchedDigit;
  }
};

const lastDigit2 = str => {
  const digitMatches = str.match(/(?:zero|one|two|three|four|five|six|seven|eight|nine|\d)/gi);

  if (digitMatches) {
    const lastMatchedDigit = digitMatches[digitMatches.length - 1].toLowerCase();
    return digitMapping[lastMatchedDigit] || lastMatchedDigit;
  }
};

const add2 = values => {
  const lines = values.trim().split('\n');
  let sum = 0;

  for (const line of lines) {
    sum += parseInt(firstDigit2(line) + lastDigit2(line));
  }
  return sum;
};

console.log('1: ' + add1(input1));
console.log('2: ' + add2(input2));
