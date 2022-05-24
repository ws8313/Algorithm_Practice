// 백준 2609번 최대공약수와 최소공배수
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
let A = input[0];
let B = input[1];

// 유클리드 호제법
// 1. 먼저 두개의 수를 서로 나눈 나머지를 구한다. ex) 1071 % 1029 = 42
// 2. 두 수중 작은 수를 다시 나머지로 나눈다. ex) 1029 % 42 = 21
// 3. 나누어 떨어질때까지 반복한다.
// 4. 나누어떨어지면 나눈 수가 최대공약수가 된다. ex) 42 % 21 = 0 최대공약수는 21

// 최소공배수 = A X B / 최대공약수

while (A % B !== 0) {
    let n = A % B;
    if (n !== 0) {
        A = B;
        B = n;
    }
}

console.log(B);
console.log((input[0] * input[1]) / B);