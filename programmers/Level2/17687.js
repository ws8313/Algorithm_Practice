// 프로그래머스 17687 n진수 게임
function solution(n, t, m, p) {
    let answer = '';
    let candidate = '';
    
    for (let i = 0; i < t * m; i++) {
        candidate += (i.toString(n).toUpperCase());
    }
    
    for (let i = p - 1; i < t * m; i += m) {
        answer += candidate[i];
    }
    
    return answer;
}