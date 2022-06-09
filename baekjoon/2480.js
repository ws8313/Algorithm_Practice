// 백준 2480번 주사위 세개
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

input.sort((a, b) => a - b);

if (input[0] === input[1]) {
    if (input[1] === input[2]) {
        console.log(10000 + input[0] * 1000);
    }
    else {
        console.log(1000 + input[0] * 100);
    }
}
else if (input[1] === input[2]) {
    console.log(1000 + input[1] * 100);
}
else {
    console.log(input[2] * 100);
}