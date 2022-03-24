const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 테스트 케이스 갯수
const num = Number(input[0]);

// i 1부터 시작
for (let i = 1; i <= num; i++) {
    let score = 1;
    let total = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === "O") {
            total += score;
            score++;
        } else {
            score = 1;
        }
    }
    console.log(total)
}

// 변수 이름 확인 좀 해라