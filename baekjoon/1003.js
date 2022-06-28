// 백준 1003번 피보나치 함수
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const len = input.shift();

for (let i = 0; i < len; i++) {
    const n = input[i];

    const fibonacci = [[1, 0], [0, 1]];
    
    for (let j = 2; j <= n; j++) {
        fibonacci[j] = [
            fibonacci[j - 1][0] + fibonacci[j - 2][0], 
            fibonacci[j - 1][1] + fibonacci[j - 2][1]
        ];
    }

    console.log(fibonacci[n].join(" "));
}