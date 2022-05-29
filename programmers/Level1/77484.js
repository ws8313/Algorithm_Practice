// 프로그래머스 77484번 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;
    const zero = lottos.filter((lotto) => lotto === 0).length;
    const min = 7 - correct > 6 ? 6 : 7 - correct;
    const max = min - zero < 1 ? 1 : min - zero;
    const answer = [max, min];
    
    return answer;
}