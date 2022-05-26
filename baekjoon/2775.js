// 백준 2775번 부녀회장이 될테야
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = input.shift();

for (let i = 0; i < T; i++) {
    const k = + input.shift();
    const n = + input.shift();

    // 각 방당 인원수를 저장할 2차원 배열
    const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

    // 0층 (0층의 i호에는 i명이 산다)
    for (let i = 1; i <= n; i++) {
        house[0][i] = i;
    }

    // 1 ~ k층 (k층 n호에는 k - 1층 n호 + k층 n - 1호만큼 산다)
    for (let i = 1; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            house[i][j] = house[i - 1][j] + house[i][j - 1];
        }
    }

    // k층 n호의 인원수 출력
    console.log(house[k][n]);
}