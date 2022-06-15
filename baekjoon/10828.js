// 백준 10828번 스택
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const N = input.shift();
const stack = [];
// 경우마다 console.log를 찍어서 출력하면, 시간 초과
let answer = '';

for (let i = 0; i < N; i++) {
  if (input[i].split(' ').length === 1) {
    if (input[i].trim() === 'pop') {
      if (stack.length !== 0) {
        answer = answer + stack.pop() + '\n';
      } else {
        answer = answer + '-1\n';
      }
    } else if (input[i].trim() === 'size') {
      answer = answer + String(stack.length) + '\n';
    } else if (input[i].trim() === 'empty') {
      if (stack.length === 0) {
        answer = answer + '1\n';
      } else {
        answer = answer + '0\n';
      }
    } else if (input[i].trim() === 'top') {
      if (stack.length !== 0) {
        answer = answer + stack[stack.length - 1] + '\n';
      } else {
        answer = answer + '-1\n';
      }
    }
  } 
  else {
    stack.push(input[i].split(' ')[1]);
  }
}

console.log(answer);