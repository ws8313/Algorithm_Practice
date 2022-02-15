let input = require('fs').readFileSync('/dev/stdin').toString().split(' '); 

let result = 0;

for (let i = 0; i < input.length; i++) {
    result += input[i] **2;
}

console.log(result % 10)