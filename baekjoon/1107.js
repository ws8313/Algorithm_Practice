// 백준 1107번 리모컨
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const target = +input[0];
const N = +input[1];
let brokenButton = [];
if (N > 0) {
  brokenButton = input[2].split(' ').map(v => +v);
}

const check = (num, broken) => {
  while (true) {
    if (broken.includes(num % 10)) {
      return false;
    } else {
      num = Math.floor(num / 10);
    }
    if (num === 0) {
      break;
    }
  }
  return true;
};

const solution = (broken, target) => {
  let max = Math.abs(target - 100);
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i <= 999999; i++) {
    if (check(i, broken)) {
      let temp = i.toString().length + Math.abs(target - i);

      if (temp < min) {
        min = temp;
      } else if (temp > min) {
        break;
      }
    }
  }
  const answer = Math.min(min, max);
  return answer;
};

console.log(solution(brokenButton, target));

