// 프로그래머스 12909 올바른 괄호
function solution(s){
    if (s[0] === ')') return false;
    if (s[s.length - 1] === '(') return false;
    
    let cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            cnt++;
        }
        if (!cnt && s[i] === ')') {
            return false;
        }
        if (s[i] === ')') {
            cnt--;
        }
    }
    
    return !cnt;
}