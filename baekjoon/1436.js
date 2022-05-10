// 백준 1436번 영화감독 숌
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
let count = 0;
// 666부터 시작
let current = 666;
let answer;

while (true) {
    if (String(current).includes("666")) {
        count++;
        if (count === N) {
            answer = current;
            break;
        }
    }
    current++;
}

console.log(answer);