function solution(n, m) {
    let max, min;
    
    // n, m을 나눠서, 모두 나머지가 0이 될 때 true && true가 됨.
    // (i가 0일 때 !NaN === true 라서 true && true가 되는 경우 제외)
    // 이것을 만족시키는 값 중 가장 큰 i값이 max값이 된다 (최대 공약수)
    for (let i = 0; i <= m; i++) {
        max = !(n % i) && !(m % i) ? i : max;
    }

    min = (n * m) / max;
    
    return [max, min];
}