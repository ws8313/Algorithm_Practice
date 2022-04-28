// 프로그래머스 12912번 두 정수 사이의 합
// 첫번째 풀이
function solution(a, b) {
    let ans = 0;
    if (a > b) {
        for (let i = b; i <= a; i++) {
            ans += i
        }
    } else {
        for (let i = a; i <= b; i++) {
        ans += i
    }
    }
    return ans;
}

// 두번째 풀이 Math.max, Math.min
function solution(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    let ans = 0;

    for (let i = min; i <= max; i++) {
        ans += i
    }
    return ans;
}

// 세번째 풀이 등차수열의 합
function solution(a, b) {
    let ans = 0
    return (a + b) * (Math.abs(b - a) + 1) / 2;
}