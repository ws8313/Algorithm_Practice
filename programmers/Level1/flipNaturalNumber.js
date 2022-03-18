function solution(n) {
    return n.toString().split('').map((value) => { return value = parseInt(value); }).reverse();
}