// 프로그래머스 12922번 수박수박수박수박수박수?
function solution(n) {
    let ans = ""
    for(let i = 0; i < n; i++){
        if(i % 2 === 0){
            ans += "수";
        } else {
            ans += "박";
        }
    }
    return ans;
}

substring, substr, slice, repeat