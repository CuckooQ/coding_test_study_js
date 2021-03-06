/**
 * Title: 구명보트
 * Content: 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다.
 *          구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
 *          예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면,
 *          2번째 사람과 4번째 사람은 같이 탈 수 있지만,
 *          1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
 *          구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
 *          사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때,
 *          모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
 * Input Condition: 무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
 *                  각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
 *                  구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
 *                  구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
 * Output Condition: None
 * Input Example: people = [70, 50, 80, 50]
 *                limit = 100
 * Output Example: 3
 */
// *다시 풀기
// *요소가 많은 경우 배열을 사용하는 것은 비효율적이다. (시간초과 발생)

{
  function solution(people, limit) {
    let answer;

    const dangerPeople = [...people].sort((a, b) => b - a);
    let cnt = 0;
    let leftIdx = 0;
    let rightIdx = dangerPeople.length - 1;
    while (leftIdx <= rightIdx) {
      cnt++;
      if (dangerPeople[leftIdx] + dangerPeople[rightIdx] > limit) {
        leftIdx++;
      } else {
        leftIdx++;
        rightIdx--;
      }
    }
    answer = cnt;

    return answer;
  }

  function testToExample() {
    const testNum = 1;
    const inputPeople = [70, 80, 50];
    const inputLimit = 100;
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(inputPeople, inputLimit) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P75\n");

    const inputPeople = [70, 50, 80, 50];
    const inputLimit = 100;
    const output = this.solution(inputPeople, inputLimit);

    // test();
    console.log(`Input: ${inputPeople.join(" ")}\n${inputLimit}`);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample();
  }

  main();
}
