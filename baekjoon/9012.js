// 백준 9012번 괄호
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = Number(input.shift());

// const answer = [];

// for (let i = 0; i < T; i++) {
//   let count = 0;
//   for (let j = 0; j < input[i].length; j++) {
//     if (input[i][j] === "(") {
//       count++;
//     }
//     else if (input[i][j] === ")") {
//       count--;
//     }
//     if (count < 0) {
//       break;
//     }
//   }
//   if (count === 0) {
//     answer.push("YES")
//   }
//   else {
//     answer.push("NO")
//   }
// }

// console.log(answer.join('\n'));

for (let i = 0; i < T; i++) {
  const stack = [];
  let answer = "YES";

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      stack.push("(");
    }
    else {
      if (!stack.pop()) {
        answer = "NO";
        break;
      }
    }
  }

  if (stack.length !== 0) {
    answer = "NO";
  }

  console.log(answer);
}