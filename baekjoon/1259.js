// 백준 1259번 팰린드롬수
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
input.pop();

for (let i = 0; i < input.length; i++) {
    let ans = input[i].split("").reverse().join("");
    console.log(input[i] === ans ? "yes" : "no");
}
