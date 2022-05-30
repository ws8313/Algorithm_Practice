// 프로그래머스 92342번 양궁대회
function solution(n, info) {
    let answer = Array(11).fill(0);
    let maxCount = 0;
    
    function maxPoint(apeachScore, ryanScore, shots, point, arr) {
        if (n < shots) {
            return;
        }
        
        if (point > 10) {
            let diff = ryanScore - apeachScore;
            if (maxCount < diff) {
                arr[10] = n - shots;
                maxCount = diff;
                answer = arr;
            }
            return;
        }
        
        if (n > shots) {
            let current = [...arr];
            current[10 - point] = info[10 - point] + 1;
            maxPoint(apeachScore, ryanScore + point, shots + info[10 - point] + 1, point + 1, current);
        }
        
        if (info[10 - point] > 0) {
            maxPoint(apeachScore + point, ryanScore, shots, point + 1, arr);
        }
        else {
            maxPoint(apeachScore, ryanScore, shots, point + 1, arr);
        }
    }
    
    maxPoint(0, 0, 0, 0, answer);
    
    return maxCount <= 0 ? [-1] : answer;
}