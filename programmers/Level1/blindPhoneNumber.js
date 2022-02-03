function solution(phone_number) {
    // 번호 길이에서 4를 뺀 만큼 *를 만들어주고, 번호에서 마지막 4자리를 추출하기 위해서 substr()을 사용한다.
    // (substr() 외에도 slice(-4)를 사용해도 같은 결과가 나온다.)
    return "*".repeat(phone_number.length - 4) + phone_number.substr(-4, 4);
}