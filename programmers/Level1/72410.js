// 프로그래머스 72410번 신규 아이디 추천
function solution(new_id) {
    let answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, '');
    
    return answer.length > 2 ? answer : answer + answer.charAt(answer.length - 1).repeat(3 - answer.length);
}