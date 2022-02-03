let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// input 값 맨 앞에 공백값이 들어올 경우를 대비해서 trim 사용

let count = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') {
        count++;
    }
}

console.log(count);