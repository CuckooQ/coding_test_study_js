/**
 * Title: 큰 수 만들기
 * Content: 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
 *          예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다.
 *          이 중 가장 큰 숫자는 94 입니다.
 *          문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다.
 *          number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.
 * Input Condition: number는 1자리 이상, 1,000,000자리 이하인 숫자입니다.
 *                  k는 1 이상 number의 자릿수 미만인 자연수입니다.
 * Output Condition: None
 * Input Example: number = "1924"
 *                k = 2
 * Output Example: 94
 */
// *다시 풀기
// *매우 긴 문자열을 배열로 변환해서 처리하는 경우 시간 초과가 발생했다.

{
  function getMaxSubNum(number, k) {
    let maxSubNum = 0;

    let stack = [];
    for (let i = 0; i < number.length; i++) {
      const num = Number(number[i]);
      if (stack.length && k) {
        let isSmall = true;
        while (isSmall && k > 0) {
          const curNum = stack.pop();
          isSmall = curNum < num;
          if (!isSmall) {
            stack.push(curNum);
          } else {
            k--;
          }
        }
      }
      stack.push(num);
    }

    stack = stack.slice(0, number.length - k);
    maxSubNum = stack.join("");

    return maxSubNum;
  }

  function solution(number, k) {
    const answer = getMaxSubNum(number, k);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const inputNumber = "1231234";
    const inputK = 3;
    const expectResult = "3234";
    const testFunction = solution;
    const condition = testFunction(inputNumber, inputK) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const inputNumber = "4177252841";
    const inputK = 4;
    const expectResult = "775841";
    const testFunction = solution;
    const condition = testFunction(inputNumber, inputK) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const inputNumber = "1";
    const inputK = 0;
    const expectResult = "1";
    const testFunction = solution;
    const condition = testFunction(inputNumber, inputK) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const inputNumber = "333333";
    const inputK = 3;
    const expectResult = "333";
    const testFunction = solution;
    const condition = testFunction(inputNumber, inputK) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P57\n");

    const inputNumber = "1924";
    const inputK = 2;
    const output = this.solution(inputNumber, inputK);

    // test();
    console.log(`Input: ${inputNumber} ${inputK}`);
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
