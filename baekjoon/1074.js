// 백준 1074번 Z
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [N, r, c] = input.map(Number);
const size = Math.pow(2, N);
let count = 0;

function answer(x, y, depth) {
  if (depth === 0) {
    console.log(count);
    return;
  }

  const size = Math.floor(Math.pow(2, depth - 1) / 2);
  const skip = Math.pow(4, depth - 1);

  if (r < x && c < y) {
    answer(x - size, y - size, depth - 1);
  } else if (r < x && c >= y) {
    count += skip;
    answer(x - size, y + size, depth - 1);
  } else if (r >= x && c < y) {
    count += skip * 2;
    answer(x + size, y - size, depth - 1);
  } else {
    count += skip * 3;
    answer(x + size, y + size, depth - 1);
  }
}

answer(size / 2, size / 2, N);