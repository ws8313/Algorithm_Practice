// 백준 1920번 수 찾기
const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let arrN = input[1].split(' ').map(v=>+v);
let arrM = input[3].split(' ').map(v=>+v);
let answer = [];

arrN.sort((a,b) => a - b);

arrM.forEach(e => {
    let left = 0;
    let right = arrN.length - 1;
    let res = false;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);

        if (e < arrN[mid]) {
            right = mid - 1;
        } else if (e > arrN[mid]) {
            left = mid + 1;
        } else {
            res = true;
            break;
        }
    }
    if (res === true) {
        answer.push(1);
    } else {
        answer.push(0);
    }
    })
console.log(answer.join('\n'));
