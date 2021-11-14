/**
 * Title: 전력망을 둘로 나누기
 * Content: n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다.
 *          당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다.
 *          이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.
 *          송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다.
 *          전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때,
 *          두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: n은 2 이상 100 이하인 자연수입니다.
 *                  wires는 길이가 n-1인 정수형 2차원 배열입니다.
 *                  wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며,
 *                  이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결되어 있다는 것을 의미합니다.
 *                  1 ≤ v1 < v2 ≤ n 입니다.
 *                  전력망 네트워크가 하나의 트리 형태가 아닌 경우는 입력으로 주어지지 않습니다.
 * Output Condition: None
 * Input Example: n = 9
 *                wires = [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]
 * Output Example: 3
 */
// *다시 풀기
// *트리를 다루는 정석적인 방법을 모르겠다.

{
  function solution(n, wires) {
    let answer;

    return answer;
  }

  /*
  // 테스트1 미통과
  class Node {
    constructor(id) {
      this.id = id;
      this.linkedIds = new Set();
    }

    addLinkedId(id) {
      this.linkedIds.add(id);
    }

    removeLinkedId(id) {
      this.linkedIds.delete(id);
    }

    getLinkedCnt() {
      return this.linkedIds.size;
    }
  }

  function solution(n, wires) {
    let answer;

    const nodes = new Map();
    const ids = new Set();

    wires.forEach(([a, b]) => {
      let nodeA = nodes.get(a);
      let nodeB = nodes.get(b);

      if (!nodeA) {
        ids.add(a);
        nodeA = new Node(a);
        nodes.set(a, nodeA);
      }
      if (!nodeB) {
        ids.add(b);
        nodeB = new Node(b);
        nodes.set(b, nodeB);
      }

      nodeA.addLinkedId(b);
      nodeB.addLinkedId(a);
    });

    let minDiff = n;
    for (const id of ids) {
      const node = nodes.get(id);
      let minDiffInNode = n;
      for (const cuttedId of [...node.linkedIds]) {
        node.removeLinkedId(cuttedId);
        const cuttedNode = nodes.get(cuttedId);
        cuttedNode.removeLinkedId(node.id);

        const nodeLinkedcnt = getLinkedCnt(node);
        const cuttedNodeLinkedcnt = getLinkedCnt(cuttedNode);

        const diff = Math.abs(nodeLinkedcnt - cuttedNodeLinkedcnt);
        if (diff < minDiffInNode) {
          minDiffInNode = diff;
        }
        node.addLinkedId(cuttedId);
        cuttedNode.addLinkedId(node.id);
      }
      if (minDiffInNode < minDiff) {
        minDiff = minDiffInNode;
      }
    }

    answer = minDiff;

    return answer;

    function getLinkedCnt(node, ids = new Set()) {
      ids.add(node.id);
      for (const linkedId of [...node.linkedIds]) {
        if (ids.has(linkedId)) {
          continue;
        }

        ids.add(linkedId);
        const linkedNode = nodes.get(linkedId);
        getLinkedCnt(linkedNode, ids);
      }

      return ids.size;
    }
  }
  */

  function testToExample1() {
    const testNum = 1;
    const inputN = 4;
    const inputWires = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(inputN, inputWires) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputN = 7;
    const inputWires = [
      [1, 2],
      [2, 7],
      [3, 7],
      [3, 4],
      [4, 5],
      [6, 7],
    ];
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(inputN, inputWires) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputN = 8;
    const inputWires = [
      [1, 2],
      [1, 3],
      [1, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [6, 8],
    ];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(inputN, inputWires) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputN = 2;
    const inputWires = [[4, 3]];
    const expectResult = 0;
    const testFunction = solution;
    const condition = testFunction(inputN, inputWires) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P81\n");

    const inputN = 9;
    const inputWires = [
      [1, 3],
      [2, 3],
      [3, 4],
      [4, 5],
      [4, 6],
      [4, 7],
      [7, 8],
      [7, 9],
    ];
    const output = this.solution(inputN, inputWires);

    // test();
    console.log(`Input: ${inputN}\n${inputWires.join("\n")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
  }

  main();
}
