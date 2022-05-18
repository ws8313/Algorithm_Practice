// 백준 1966번 프린터 큐
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [n, ...arr] = input;
arr = arr.map((v) => v.split(' ').map(Number));
let answer = '';

for (let i = 0; i < arr.length; i += 2) {
    let count = 0;
    const a = arr[i + 1];
    let location = arr[i][1];

    while (true) {
        const max = Math.max(...a);
        const num = a.shift();
        if (num === max) {
            count++;
            if (location === 0) {
                answer += count + '\n';
                break;
            }
        } else {
            a.push(num);
        }
        if (location === 0) {
            location = a.length - 1;
        } else {
            location--;
        }
    }
}
console.log(answer.trim());