// 백준 11866번 요세푸스 문제 0
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');
const N = Number(input.shift());
const K = Number(input.shift());
const arr1 = [];
const arr2 = [];

for (let i = 1; i <= N; i++) {
  arr1.push(i);
}

while (arr1.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    const num = arr1.shift();
    arr1.push(num);
  }
  
  const num = arr1.shift();
  arr2.push(num);
}

console.log(`<${arr2.join(', ')}>`);