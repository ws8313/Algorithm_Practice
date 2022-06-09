// 백준 5622번 다이얼
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const dial = {
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ",
};
let time = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 2; j <= 9; j++) {
        if (dial[j].includes(input[i])) {
            time += j + 1;
            break;
        }
    }
}

console.log(time);