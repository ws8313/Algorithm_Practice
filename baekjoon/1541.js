// 백준 1541번 잃어버린 괄호
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString();

const solution = (arr) => {
  const splitted = arr.split("-");
  let answer = 0;
  if (splitted[0].includes("+")) {
    answer += splitted[0].split("+").reduce((acc, item) => Number(acc) + Number(item), 0);
  } else {
    answer = Number(splitted[0]);
  }

  for (let i = 1; i < splitted.length; i++) {
    if (splitted[i].includes("+")) {
      const splittedPlus = splitted[i].split("+");
      const sum = splittedPlus.reduce((acc, item) => Number(acc) + Number(item), 0);
      answer -= sum;
    } else {
      answer -= Number(splitted[i]);
    }
  }
  console.log(answer);
}

solution(input);