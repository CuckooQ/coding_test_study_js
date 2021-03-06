/**
 * Problem file template
 *  */
/**
 * Title:
 * Content:
 * Input Condition:
 * Output Condition:
 * Input Example:
 * Output Example:
 */
// Expected:
// Actual:

{
  function solution(param) {
    let answer;
    return answer;
  }

  function test() {
    const testNum = 1;
    const input = 0;
    const expectResult = 1;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("SnPn\n");

    const input = 0;
    const output = this.solution(input);

    test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {}

  main();
}
