// 백준 2525번 오븐 시계
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const time = input[0].split(' ').map(Number);
let A = time[0];
let B = time[1];
let C = Number(input[1]);

const hour = parseInt((A * 60 + B + C) / 60);
const minute = parseInt((A * 60 + B + C) % 60);

console.log(hour >= 24 ? hour - 24 : hour, minute);