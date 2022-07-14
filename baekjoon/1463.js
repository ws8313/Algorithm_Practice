// 백준 1463번 1로 만들기
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = Number(require('fs').readFileSync(filePath).toString());

const dp = new Array(input + 1).fill(0);

for (let i = 2; i < dp.length; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1)
  }

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1)
  }
}

console.log(dp[input]);
