/**
 * 프로그래머스 DFS/BFS Level 3
 * Title: 네트워크
 * Content: 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
 *          예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고,
 *          컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
 *          따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
 *          컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때,
 *          네트워크의 개수를 return 하도록 solution 함수를 작성하시오.
 * Input Condition: 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
 *                  각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
 *                  i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
 *                  computer[i][i]는 항상 1입니다.
 * Output Condition: None
 * Input Example: n = 3
 *                computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
 * Output Example: 2
 */
// *다시 풀기

{
  function solution(n, computers) {
    let answer = 0;

    // 인덱스가 네트워크 번호이고 값이 방문 여부를 의미하는 배열 정의
    const visited = Array.from({ length: n }, () => 0);

    // 모든 네트워크를 반복
    for (let i = 0; i < n; i++) {
      // 방문하지 않은 경우 연결된 네트워크 탐색하고 네트워크 개수 증가
      if (visited[i] === 0) {
        dfs(i);
        answer += 1;
      }
    }

    return answer;

    function dfs(num) {
      // 방문한 네트워크 인덱스의 값을 방문으로 변경
      visited[num] = 1;
      for (let i = 0; i < n; i++) {
        // 네트워크 정보에서 현재 네트워크와 연결된 다른 네트워크인 경우 해당 네트워크도 탐색
        if (computers[num][i] === 1 && visited[i] === 0) {
          dfs(i);
        }
      }
    }
  }

  function testToExample1() {
    const testNum = 1;
    const inputN = 3;
    const inputComputers = [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputComputers) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputN = 3;
    const inputComputers = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(inputN, inputComputers) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputN = 6;
    const inputComputers = [
      [1, 0, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1],
    ];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputComputers) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P12\n");

    const inputN = 3;
    const inputComputers = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ];
    const output = this.solution(inputN, inputComputers);

    // test();
    console.log(`Input: ${inputN}\n ${inputComputers.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
  }

  main();
}
