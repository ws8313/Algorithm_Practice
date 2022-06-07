// 프로그래머스 12945 피보나치 수
const getFibonacci = (n) => {
    let nums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        nums[i] = (nums[i - 1] + nums[i - 2]) % 1234567;
    }
    
    return nums[n];
}

function solution(n) {
    const answer = getFibonacci(n) % 1234567;
    
    return answer;
}