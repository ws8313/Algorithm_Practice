// 프로그래머스 12982번 예산
function solution(d, budget) {
    var answer = 0;
    var sum = 0;
    d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++) {
        sum += d[i]
        answer += 1;
        if (sum > budget) {
            answer -= 1;
        }
    }
    return answer;
}