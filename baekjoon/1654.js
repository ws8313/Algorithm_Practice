// 백준 1654번 랜선 자르기
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
let input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
let KN = input.shift();
const K = Number(KN.split(" ")[0]);
const N = Number(KN.split(" ")[1]);

let left = 0;
let right = input[input.length - 1];

let answer = Number.MIN_SAFE_INTEGER;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let line = input.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

    if (line >= N) {
        if (mid > answer) answer = mid;

        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);



