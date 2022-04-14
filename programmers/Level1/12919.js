// 프로그래머스 12919번 서울에서 김서방 찾기
// for문 사용
function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            return `김서방은 ${i}에 있다`
        }
    }
}
// indexOf 사용
function solution(seoul) {
    const idx = seoul.indexOf("Kim")
    return `김서방은 ${idx}에 있다`
}