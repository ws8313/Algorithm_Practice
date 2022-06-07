// 프로그래머스 92335 k진수에서 소수 개수 구하기
function solution(n, k) {
    let answer = 0;
    let num = n.toString(k);
    let numArr = num.split('0');
    
    for (let i = 0; i < numArr.length; i++) {
        if (isPrime(Number(numArr[i]))) {
            answer++;
        }
    }
    return answer;
}

const isPrime = (nums) => {
    if (nums <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(nums); i++) {
        if (nums % i === 0) {
            return false;
        }
    }
    
    return true;
}