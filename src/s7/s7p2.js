/**
 * Title: 버블 정렬
 * Content: N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하기.
 * Input Condition: 첫 번째 줄에 자연수 N(1<=N<=100)이 주어진다.
 *                  두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력된다.
 *                  각 자연수는 정수형 범위 안에 있다.
 * Output Condition: 오름차순으로 정렬된 수열 출력하기.
 * Input Example: 6
 *                13 5 11 7 23 15
 * Output Example: 5 7 11 13 15 23
 */

{
  const MAX_NUM_COUNT = 100;
  const MIN_NUM_COUNT = 1;

  // 버블 정렬을 사용한 오름차순 정렬 함수
  function sortNumsAsc(numbers) {
    const sortedNums = Array.from(numbers);
    for (let i = 0; i < sortedNums.length - 1; i++) {
      for (let j = 0; j < sortedNums.length - 1; j++) {
        if (sortedNums[j] > sortedNums[j + 1]) {
          [sortedNums[j], sortedNums[j + 1]] = [
            sortedNums[j + 1],
            sortedNums[j],
          ];
        }
      }
    }

    return sortedNums;
  }
  /*
    function sortNumsAsc(numbers) {
        return Array.from(numbers).sort((prev, post) => prev - post);
    }
    */
  function solution(numbers) {
    const sortedNums = sortNumsAsc(numbers);
    const answer = sortedNums.join(" ");
    return answer;
  }

  function testToMaxCnt() {
    const testNum = 1;
    const input = Array.from(
      { length: MAX_NUM_COUNT },
      (_, idx) => idx + 1
    ).reverse();
    const expectResult = input.reverse().join(" ");
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToMinCnt() {
    const testNum = 2;
    const input = Array.from(
      { length: MIN_NUM_COUNT },
      (_, idx) => idx + 1
    ).reverse();
    const expectResult = input.reverse().join(" ");
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    const input = [13, 5, 11, 7, 23, 15];
    const output = this.solution(input);

    console.log("S7P2\n");
    // test();
    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToMaxCnt();
    testToMinCnt();
  }

  main();
}
