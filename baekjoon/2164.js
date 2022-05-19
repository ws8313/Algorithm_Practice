// 백준 2164번 카드2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

// 시간초과
// const arr = [];
// for (let i = 0; i < input; i++) {
//     arr[i] = i + 1;
// }

// while(arr.length != 1) {
//     arr.shift();
//     arr.push(arr.shift());
// }

// console.log(arr[0]);

// 규칙 (2진법 사용)
// 1. n이 2^x 일 경우 값은 n
// 2. (n - (n보다 작은 2^x)) * 2
function solution(n) {
    const arr = n.toString(2).split("");
    arr.shift();

    const answer = parseInt(arr.join(""), 2);

    return answer ? answer * 2 : n;
}

console.log(solution(input));