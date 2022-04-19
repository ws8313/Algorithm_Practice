// 백준 11654번 아스키 코드
const input = require('fs').readFileSync('/dev/stdin')

console.log(input[0])

// toString, charCodeAt, fromCharCode
const input2 = require('fs').readFileSync('/dev/stdin').toString()

console.log(input2[0].charCodeAt())