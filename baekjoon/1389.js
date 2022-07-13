// 백준 1389번 케빈 베이컨의 6단계 법칙
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [ N, M ] = input.shift().split(' ').map(v => + v);
const bacon = new Array(N + 1).fill(0);
const graph = [...new Array(N + 1)].map(() => []);

input.forEach(v => {
  const [ start, end ] = v.split(' ').map(v => + v);
  graph[start].push(end);
  graph[end].push(start);
});

const BFS = start => {
  const visited = new Array(N + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) {
    let [ node, count ] = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      bacon[start] += count++;
      graph[node].forEach(v => queue.push([v, count]));
    }
  }
};

for (let i = 1; i <= N; i++) {
  BFS(i);
}

bacon.shift();
console.log(bacon.indexOf(Math.min(...bacon)) + 1);