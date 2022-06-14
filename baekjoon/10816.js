// 백준 10816번 숫자 카드 2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const numCards = input.shift().split(' ').map(Number);
const M = Number(input.shift());
const countCards = input.shift().split(' ').map(Number);

// 시간 초과
// const arr = new Array(M).fill(0);

// for (let i = 0; i < M; i++) {
//   for (let j = 0; j < N; j++) {
//     if (countCards[i] === numCards[j]) {
//       arr[i]++;
//     }
//   }
// }

// console.log(arr.join(' '));

// Map 사용
const arr = [];
const cardMap = new Map();

for (number of numCards) {
  if (cardMap.has(number)) {
    cardMap.set(number, cardMap.get(number) + 1);
  }
  else {
    cardMap.set(number, 1);
  }
}

for (number of countCards) {
  if (cardMap.has(number)) {
    arr.push(cardMap.get(number));
  }
  else {
    arr.push(0);
  }
}

console.log(arr.join(' '));