// 프로그래머스 12936 줄 서는 방법
function solution(n, k) {
    const answer = [];
    let arr = Array.from({length : n}, (_, i) => i + 1);
    let fac = arr.reduce((acc, val) => acc * val, 1);
    k--;
    
    while (answer.length !== n) {
        fac = fac / arr.length;
        let temp = arr[Math.floor(k / fac)];
        answer.push(temp);
        k = k % fac;
        arr = arr.filter(e => e !== temp);
    }
    
    return answer;
}