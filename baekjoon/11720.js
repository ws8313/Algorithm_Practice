// 백준 11720번 숫자의 합
const input = require('fs').readFileSync('/dev/stdin').toString().split("\n")
const N = input[0]
const num = input[1].split("").map(Number)
let ans = 0

for (let i = 0; i < N; i++) {
    ans += num[i]
}

console.log(ans)