// 백준 2164번 카드2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

// 시간초과
// const arr = [];
// for (let i = 0; i < input; i++) {
//     arr[i] = i + 1;
// }

// while(arr.length != 1) {
//     arr.shift();
//     arr.push(arr.shift());
// }

// console.log(arr[0]);

// 규칙 (2진법 사용)
// 1. n이 2^x 일 경우 값은 n
// 2. (n - (n보다 작은 2^x)) * 2
// function solution(n) {
//     const arr = n.toString(2).split("");
//     arr.shift();

//     const answer = parseInt(arr.join(""), 2);

//     return answer ? answer * 2 : n;
// }

// console.log(solution(input));

// 링크드 리스트 사용
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// LinkedList 클래스 설정
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length++;

        return newNode;
    }

    // 첫 노드 가져오기
    getHead() {
        return this.head.val;
    }

    // 첫 노드를 링크드 리스트에서 지우기
    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    // 링크드 리스트 길이
    getLength() {
        return this.length;
    }
}

const cards = new LinkedList();

for (let i = 1; i <= input; i++) {
    cards.push(i);
}

// 길이가 0이 아니라면
while (cards.getLength() !== 1) {
    cards.removeHead(); // 맨 앞 노드를 지움
    cards.push(cards.getHead()); // 맨 앞 노드를 맨 뒤로 붙임
    cards.removeHead(); // 다시 맨 앞 노드를 지움
}

console.log(cards.getHead());