let input= require('fs').readFileSync('예제.txt').toString().trim().split("\n");

// const N = Number(input.shift());
const [N, ...numbers] = input;
const nums = numbers.map(i => Number(i));

let stack = [];
let answer = '';
let count = 1;

for (let i = 0; i < N; i++) {
    const num = nums.shift(); // 4, 3, 6, 8, 7, 5, 2, 1

    while (count <= num) { // 1 <= 4
        stack.push(count); // stack [ 1, 2, 3, 4 ]
        count++;
        answer += '+\n'; // answer = '+ + + +'
    }

    const popNum = stack.pop(); // 4 [ 1, 2, 3 ]
    answer += '-\n'; // answer = '+ + + + -'
    if (popNum !== num) { // 4 4
        answer = 'NO';
    }
}

console.log(answer.trim());