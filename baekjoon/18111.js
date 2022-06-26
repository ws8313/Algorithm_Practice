// 백준 18111번 마인크래프트
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M, B] = input.shift().split(' ').map(Number);
const arr = input.map(v => v.split(' ').map(Number));

let ansTime = Infinity;
let ansHeight = -1;

for (let i = 0; i <= 256; i++) {
  let inventory = 0;
  let removeCnt = 0;

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      let currentHeight = arr[j][k] - i;
      if (currentHeight < 0) {
        inventory -= currentHeight;
      } else {
        removeCnt += currentHeight;
      }
    }
  }

  if (removeCnt + B >= inventory) {
    let time = 2 * removeCnt + inventory;
    if (ansTime >= time) {
      ansTime = time;
      ansHeight = i;
    }
  }
}

console.log(ansTime, ansHeight);