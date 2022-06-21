// 백준 2581번 소수
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = [];
let sum = 0;
const M = Number(input[0]);
const N = Number(input[1]);

function primeNumber(n) {
    if (n < 2) {
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return;
        }
    }
    arr.push(n);
    sum += n;
}

for (let i = M; i <= N; i++) {
    primeNumber(i);
}

if (!arr.length) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(arr[0]);
}
