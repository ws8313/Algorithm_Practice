// 백준 1620번 나는야 포켓몬 마스터 이다솜
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = + input[0].split(' ')[0];
const poketmon = input.slice(1, n + 1);
const question = input.slice(n + 1);

function solution (poketmon, question) {
  const map = new Map(poketmon.map((poketmon, index) => [poketmon, index + 1]));
  question.forEach(question => {
    if (Number.isNaN(+ question)) console.log(map.get(question));
    else console.log(poketmon[+ question - 1]);
  })
}

solution(poketmon, question);