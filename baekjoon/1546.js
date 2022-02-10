let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num = Number(input[0]); // input[0] * 1 도 같은 결과
const score = input[1].split(" ");

const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < num; i++) {
    sum += score[i] / max * 100;
}

console.log(sum / num)