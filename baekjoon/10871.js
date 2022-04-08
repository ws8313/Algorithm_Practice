// 백준 10871번 X보다 작은 수
const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const a = input[0].split(" ").map(Number)
const b = input[1].split(" ").map(Number)

const ans = []

for(let i = 0; i <= a[0]; i++){
    if(b[i] < a[1]) {
        ans.push(b[i]);
    }
}
console.log(ans.join(" "));