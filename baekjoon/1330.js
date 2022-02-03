let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ')

// 문자열 타입의 두 숫자를 비교하기 위해 Number 타입으로 변경해야해서 Number 함수 사용
const a = Number(input[0])
const b = Number(input[1])

if (a > b) {
    console.log(">")
} else if (a < b) {
    console.log("<")
} else {
    console.log("==")
}