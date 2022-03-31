//백준 10809번 알파벳 찾기
const input = require("fs").readFileSync("/dev/stdin").toString().split("");

const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
const ans = [];

for (let i = 0; i < alphabet.length; i++) {
    ans.push(input.findIndex(item => item == alphabet[i]));
}

console.log(ans.join(" "))