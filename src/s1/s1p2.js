/**
 * Title: 삼각형 판별하기
 * Content: 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면, 이 세 막대로 삼각형을 만들 수 있으면 'YES'를 출력하고, 만들 수 없으면 'NO'를 출력
 * Input Condition: 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
 * Output Condition: 첫 번째 줄에 'YES', 'NO'를 출력한다.
 * Input Example: 6 7 11
 * Output Example: YES
 */
// *삼각형 길이 조건 검색 결과: 가장 큰 한 변의 길이는 다른 두 변의 합보다 작아야 한다.
// *해답에서는 sum - max > max로 판별했다.

{
  // 세 변들을 내림차순으로 정렬한 배열 출력
  function getSortedSides(side1, side2, side3) {
    let arr = [];
    arr.push(side1);
    arr.push(side2);
    arr.push(side3);
    arr.sort((x, y) => y - x);

    return arr;
  }

  function testGetSortedSides() {
    const testNum = 1;
    const input1 = 2;
    const input2 = 3;
    const input3 = 1;
    const expectResult = [input2, input1, input3];
    const result = getSortedSides(input1, input2, input3);
    const condition = arraysEqual(expectResult, result);
    validateTestResult(testNum, condition);
  }

  // 가장 큰 변이 다른 두 변의 합보다 작은 지 판별
  function isTheBiggestSideSmallerThanOthersSum(sortedSides) {
    if (sortedSides[0] < sortedSides[1] + sortedSides[2]) {
      return true;
    } else {
      return false;
    }
  }

  function testIsTheBiggestSideSmallerThanOthersSum() {
    const testNum = 2;
    let input = [40, 30, 20];
    let expectResult = true;
    let result = isTheBiggestSideSmallerThanOthersSum(input);
    let condition = result === expectResult;
    validateTestResult(testNum, condition);

    input = [3, 2, 1];
    expectResult = false;
    result = isTheBiggestSideSmallerThanOthersSum(input);
    condition = result === expectResult;
    validateTestResult(testNum, condition);
  }

  // 세 변으로 삼각형 만들 수 있는 지 판별
  function validateMakingTriangle(side1, side2, side3) {
    const sortedSides = getSortedSides(side1, side2, side3);
    return isTheBiggestSideSmallerThanOthersSum(sortedSides);
  }

  function testValidateMakingTriangle() {
    const testNum = 3;
    let input1 = 30;
    let input2 = 60;
    let input3 = 70;
    let expectResult = true;
    let result = validateMakingTriangle(input1, input2, input3);
    let condition = result === expectResult;
    validateTestResult(testNum, condition);

    input1 = 5;
    input2 = 2;
    input3 = 3;
    expectResult = false;
    result = validateMakingTriangle(input1, input2, input3);
    condition = result === expectResult;
    validateTestResult(testNum, condition);
  }

  function solution(num1, num2, num3) {
    let answer;
    const isTriangle = validateMakingTriangle(num1, num2, num3);
    if (isTriangle) {
      answer = "YES";
    } else {
      answer = "NO";
    }

    return answer;
  }

  function main() {
    const input1 = 6;
    const input2 = 7;
    const input3 = 11;
    const output = this.solution(input1, input2, input3);

    console.log("S1P2\n");
    // test();
    console.log(`Input: ${input1} ${input2} ${input3} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testGetSortedSides();
    testIsTheBiggestSideSmallerThanOthersSum();
    testValidateMakingTriangle();
  }

  main();
}
