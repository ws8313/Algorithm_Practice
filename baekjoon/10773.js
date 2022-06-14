// 백준 10773번 제로
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const K = input.shift();
const stack = [];
let answer = 0;

for (let i = 0; i < K; i++) {
  if (input[i] === 0) {
    stack.pop();
  }
  else {
    stack.push(input[i]);
  }
}

for (let i = 0; i < stack.length; i++) {
  answer += stack[i];
}

console.log(answer);