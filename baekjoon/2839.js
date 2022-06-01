// 백준 2839번 설탕 배달
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
let count = 0;

while (true) {
    if (input % 5 === 0) {
        console.log(input / 5 + count);
        break;
    }

    if (0 > input) {
        console.log(-1);
        break;
    }

    count++;
    input -= 3;
}