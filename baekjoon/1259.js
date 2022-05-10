// 백준 1259번 팰린드롬수
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
input.pop();
// pop, shift

for (let i = 0; i < input.length; i++) {
    let ans = input[i].split("").reverse().join("");
    console.log(input[i] === ans ? "yes" : "no");
}

// vscode에서는 "no", "no", "no" 나옴 백준에서는 정답 codesandbox 같은 사이트에선 정답
