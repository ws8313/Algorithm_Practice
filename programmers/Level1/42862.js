// 프로그래머스 42862번 체육복
function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let tmp = [];
    
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            reserve = reserve.filter(el => el !== lost[i]);
            answer++;
        }
        else {
            tmp.push(lost[i]);
        }
    }
    lost = tmp;
    lost.sort((a, b) => a - b);
    
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i] - 1)) {
            reserve = reserve.filter((e) => e !== lost[i] - 1);
            answer++;
        }
        else if (reserve.includes(lost[i] + 1)) {
            reserve = reserve.filter((e) => e !== lost[i] + 1);
            answer++;
        }
    }
    return answer;
}