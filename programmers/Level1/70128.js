// 프로그래머스 70128번 내적
function solution(a, b) {
    var answer = 0;
    
    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    return answer;
}