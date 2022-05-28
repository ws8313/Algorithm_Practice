// 백준 1271번 엄청난 부자2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

// 1 ≤ m ≤ n ≤ 10^1000, m과 n은 10진수 정수 때문에 큰 숫자를 다룰 수 있는 자료형인 BigInt 사용
const n = BigInt(input[0]);
const m = BigInt(input[1]);

console.log((n / m).toString()); // 10n 뒤의 n을 제거해주기 위해 toString 사용
console.log((n % m).toString()); // 0n