const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const num1 = input.shift();
// 테스트 케이스의 개수를 구하기 위해서 shift 사용

for (let i = 0; i < num1; i++) {
    let ans = "";

    const [num2, str] = input[i].split(" ");

    for (let j = 0; j < str.length; j++) {
        for (let c = 0; c < num2; c++) {
            ans += str[j];
        }
    }
    // 반복 횟수와 문자열을 split 해서 각각 변수로 선언
    // 문자 하나마다 반복 횟수만큼 for문 돌려서 ans에 더함

    console.log(ans);
}