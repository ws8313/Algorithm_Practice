// 프로그래머스 86051번 없는 숫자 더하기
function solution(numbers) {
    var answer = 0;
    
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}