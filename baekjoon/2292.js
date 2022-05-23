// 백준 2292번 벌집
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

let range = 1;
let block = 1;

while (block < input) {
    block += 6 * range;
    range++;
}

console.log(range);