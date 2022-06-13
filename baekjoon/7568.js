// 백준 7568번 덩치
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift();
const table = input.map(v => v.split(' ').map(Number));
const rank = [];

for (let i = 0; i < T; i++) {
  let count = 0;
  for (let j = 0; j < T; j++) {
    if (i !== j) {
      if (table[i][0] < table[j][0] && table[i][1] < table[j][1]) {
        count++;
      }
    }
  }
  rank.push(count + 1);
}

console.log(rank.join(' '));