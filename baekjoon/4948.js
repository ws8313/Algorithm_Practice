// 백준 4948번 베르트랑 공준
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

let TC = 0;

function solution() {
  let answer = "";

  while (true) {
    let n = +input[TC++];
    if (n === 0) {
      break;
    }

    let cnt = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
      if (isPrime(i)) {
        cnt++;
      }
    }
    answer += `${cnt}\n`;
  }
  return answer;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution().trim());