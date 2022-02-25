const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
    console.log(num.split(i).length - 1);
}
// 배열 개수 맞추기 위해서 -1