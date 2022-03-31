function solution(s, n) {
    const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const a = "abcdefghijklmnopqrstuvwxyz";
    let ans = "";
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] === " ") {
            ans += " ";
            continue
        }
        const check = A.includes(s[i]) ? A : a;
        let index = check.indexOf(s[i]) + n;
        if(index >= check.length) index -= check.length;
        ans += check[index]
    }
    return ans;
}