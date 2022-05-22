// 백준 2231번 분해합
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

let answer = 0;

for (let i = 0; i < input; i++) {
    let sum = 0; // 각 자리수와 후보값의 합을 구하기 위한 변수

    const value = i; // 0부터 시작하는 후보값
    const stringValue = value.toString(); // 각 자리수 구하기 위해 string으로 변환

    for (let j = 0; j < stringValue.length; j++) {
        sum += Number(stringValue[j]);
    }

    sum += value;

    if (sum == input) {
        answer = value;
        break;
    }
}

console.log(answer);