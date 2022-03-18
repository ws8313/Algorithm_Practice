function solution(n, a = 0, b = 0) {
    return String(n).length == a ? b : solution(n, a + 1, b += String(n)[a] * 1);
}