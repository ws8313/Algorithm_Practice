// 백준 1193번 분수찾기
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = Number(require('fs').readFileSync(filePath).toString().trim());
let count = 0;

while (input > 0) {
    count++;
    input = input - count;
}

if (count % 2 === 0) {
    console.log(`${count + input}/${1 + -input}`);
}
else {
    console.log(`${1 + -input}/${count + input}`);
}