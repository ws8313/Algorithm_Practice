// 백준 10845번 큐
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v => v.trim());
const N = input.shift();
const arr = [];

let answer = '';

for (let i = 0; i < N; i++) {
  if (input[i].split(' ').length === 1) {
    if (input[i] === 'pop') {
      if (arr.length !== 0) {
        answer = answer + arr.shift() + '\n';
      } else {
        answer = answer +'-1\n';
      }
    } else if (input[i] === 'size') {
      answer = answer + arr.length + '\n';
    } else if (input[i] === 'empty') {
      if (arr.length === 0) {
        answer = answer + '1\n';
      } else {
        answer = answer + '0\n';
      }
    } else if (input[i] === 'front') {
      if (arr.length !== 0) {
        answer = answer + arr[0] + '\n';
      } else {
        answer = answer + '-1\n';
      }
    } else if (input[i] === 'back') {
      if (arr.length !== 0) {
        answer = answer + arr[arr.length - 1] + '\n';
      } else {
        answer = answer + '-1\n';
      }
    }
  } else {
    arr.push(input[i].split(' ')[1]);
  }
}

console.log(answer);