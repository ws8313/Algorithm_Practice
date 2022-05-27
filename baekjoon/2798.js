// 백준 2798번 블랙잭
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const NM = input[0].split(' ').map(Number);
const N = NM[0];
const M = NM[1];
const cards = input[1].split(' ').map(Number);
let max = 0;

for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            let sum = cards[i] + cards[j] + cards[k];
            if (sum > max && sum <= M) {
                max = sum;
            }
        }
    }
}

console.log(max);