// 백준 11651번 좌표 정렬하기 2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const nums = input.map((i) => i.split(' ').map((j) => Number(j)));
let answer = '';

nums.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
})

nums.map((i) => {
  answer += `${i[0]} ${i[1]}\n`;
});

console.log(answer);