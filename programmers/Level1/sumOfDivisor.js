function solution(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            ans += i
        }
    }
    return ans;
}