// 프로그래머스 12946 하노이의 탑
const answer = [];

const hanoi = (n, src, dst, mid) => {
    if (n === 1) {
        answer.push([src, dst]);
    }
    else {
        hanoi(n - 1, src, mid, dst);
        answer.push([src, dst]);
        hanoi(n - 1, mid, dst, src);
    }
}

function solution(n) {
    hanoi(n, 1, 3, 2);
    
    return answer;
}