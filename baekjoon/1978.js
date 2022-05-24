// 백준 1978번 소수 찾기
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const nums = input[1].split(' ');
let answer = 0;

function primeNumber(n) {
    if (n < 2) {
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return;
        }
    }
    answer += 1;
}

for (let i = 0; i < N; i++) {
    primeNumber(nums[i]);
}

console.log(answer);