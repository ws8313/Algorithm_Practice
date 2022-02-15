let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
// input 값들을 서로 비교하기 위해 map을 사용해서 input 값들의 타입을 Number(숫자) 타입으로 바꿔준다.

let max = input[0];
let idx = 0;

for (let i = 0; i < 9; i++) {
    if (input[i] > max) {
        max = input[i]
        idx = i;
    }
}

console.log(max);
console.log(idx + 1);
// idx가 몇번인지 출력하는 것이 아니라 몇번째에 위치 하는지를 출력하는 것이기 때문에 +1을 해줘야 정답

// console.log(max + "\n" + idx + 1)로 출력하면 백준 사이트에서 오답으로 나와서 각각 출력했다.