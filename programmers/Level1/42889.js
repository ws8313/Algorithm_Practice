// 프로그래머스 42889번 실패율
function solution(N, stages) {
    var answer = [];
    
    for (let i = 1; i <= N; i++) {
        let reach = stages.filter((x) => x >= i).length;
        let cur = stages.filter((x) => x == i).length;
        answer.push([i, cur / reach]);
    }
    answer.sort((a, b) => b[1] - a[1]);
    return answer.map((x) => x[0]);
}