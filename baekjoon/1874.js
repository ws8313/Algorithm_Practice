let input= require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const N = input[0];

let arr = [];
let stack = [];
let answer = '';

for (let i = 0; i < N; i++) {
    arr[i] = 1 + i;
}

for (let j = 1; j <= N; j++) {
    let count = 1;

    while (count <= N && stack[stack.length - 1] != input[j]) {
        stack.push(arr.shift());
        count++;
        answer += '+\n';
    }
    if (stack[stack.length - 1] == input[j]) {
        stack.pop();
        answer += '-\n';
    } else {
        answer = 'NO';
        break;
    }
}

console.log(answer);