/**
 * Title: 실패율
 * Content: 슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다.
 *          그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다.
 *          원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
 *          이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다.
 *          역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다.
 *          오렐리를 위해 실패율을 구하는 코드를 완성하라.
 *          실패율은 다음과 같이 정의한다.
 *          스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 *          전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
 *          실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
 * Input Condition: 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
 *                  stages의 길이는 1 이상 200,000 이하이다.
 *                  stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
 *                  각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
 *                  단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
 *                  만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
 *                  스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
 * Output Condition: None
 * Input Example: N = 5
 *                stages = [2, 1, 2, 6, 2, 4, 3, 3]
 * Output Example: [3,4,2,1,5]
 */
// Expected: 11:48 - 12:28
// Actual: 11:48 - 12:48
// *sort함수에서 비교할 값이 0일 경우 무조건 0번째 인덱스로 가는 듯한 동작이 있었는데 사라졌다.

{
  function getStagesSortedToFailRateDesc(n, stages) {
    let sortedArr = [];

    const stageInfo = Array.from({ length: n + 2 }, () => 0);
    stages.forEach((challengeStage) => {
      stageInfo[challengeStage] = stageInfo[challengeStage] + 1;
    });

    let result = [];
    let cnt = 0;
    for (let i = stageInfo.length - 1; i > 0; i--) {
      let stage = i;
      let challengerCnt = stageInfo[stage];
      cnt += challengerCnt;

      if (stage <= n) {
        const failureRate = cnt === 0 ? 0 : (challengerCnt / cnt) * 100;
        result.push([stage, failureRate]);
      }
    }

    result.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return b[1] - a[1];
    });

    sortedArr = [...new Map(result).keys()];

    return sortedArr;
  }

  function solution(n, stages) {
    const answer = getStagesSortedToFailRateDesc(n, stages);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputN = 4;
    const inputStages = [4, 4, 4, 4, 4];
    const expectResult = [4, 1, 2, 3];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputStages),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputN = 1;
    const inputStages = [2, 2, 2, 2, 2];
    const expectResult = [1];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputStages),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputN = 1;
    const inputStages = [1, 1, 1, 1, 1];
    const expectResult = [1];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputStages),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputN = 3;
    const inputStages = [4, 4, 4, 4, 4];
    const expectResult = [1, 2, 3];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputStages),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const inputN = 3;
    const inputStages = [2, 2, 2, 2, 2];
    const expectResult = [2, 1, 3];
    const testFunction = solution;
    const condition = arraysEqual(
      testFunction(inputN, inputStages),
      expectResult
    );
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P30\n");

    const inputN = 5;
    const inputStages = [2, 1, 2, 6, 2, 4, 3, 3];
    const output = this.solution(inputN, inputStages);

    // test();
    console.log(`Input: ${inputN}\n${inputStages.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
  }

  main();
}
