// 백준 1316번 그룹 단어 체커
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
let count = 0;

const isGroup = (str) => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (!arr.includes(str[i])) {
            arr.push(str[i]);
        }
        if (str[i - 1] === str[i]) {
            arr.push(str[i]);
        }
    }
    return arr;
}

for (let i = 0; i < N; i++) {
    if (input[i] === isGroup(input[i]).join("")) {
        count++;
    }
}

console.log(count);