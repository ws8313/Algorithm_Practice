// 프로그래머스 76501번 음양 더하기
function solution(absolutes, signs) {
    var answer = 0;
    
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i];
        }
        else {
            answer -= absolutes[i];
        }
    }
    return answer;
}