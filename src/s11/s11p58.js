/**
 * Title: [카카오 인턴] 보석 쇼핑
 * Content: 개발자 출신으로 세계 최고의 갑부가 된 어피치는 스트레스를 받을 때면 이를 풀기 위해 오프라인 매장에 쇼핑을 하러 가곤 합니다.
 *          어피치는 쇼핑을 할 때면 매장 진열대의 특정 범위의 물건들을 모두 싹쓸이 구매하는 습관이 있습니다.
 *          어느 날 스트레스를 풀기 위해 보석 매장에 쇼핑을 하러 간 어피치는 이전처럼 진열대의 특정 범위의 보석을 모두 구매하되 특별히 아래 목적을 달성하고 싶었습니다.
 *          *진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매
 *          예를 들어 아래 진열대는 4종류의 보석(RUBY, DIA, EMERALD, SAPPHIRE) 8개가 진열된 예시입니다.
 *          진열대 번호	1	   2	  3	    4	  5	  6	      7	        8
 *          보석 이름	  DIA	RUBY	RUBY	DIA	DIA	EMERALD	SAPPHIRE	DIA
 *          진열대의 3번부터 7번까지 5개의 보석을 구매하면 모든 종류의 보석을 적어도 하나 이상씩 포함하게 됩니다.
 *          진열대의 3, 4, 6, 7번의 보석만 구매하는 것은 중간에 특정 구간(5번)이 빠지게 되므로 어피치의 쇼핑 습관에 맞지 않습니다.
 *          진열대 번호 순서대로 보석들의 이름이 저장된 배열 gems가 매개변수로 주어집니다.
 *          이때 모든 보석을 하나 이상 포함하는 가장 짧은 구간을 찾아서 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: gems 배열의 크기는 1 이상 100,000 이하입니다.
 *                  gems 배열의 각 원소는 진열대에 나열된 보석을 나타냅니다.
 *                  gems 배열에는 1번 진열대부터 진열대 번호 순서대로 보석이름이 차례대로 저장되어 있습니다.
 *                  gems 배열의 각 원소는 길이가 1 이상 10 이하인 알파벳 대문자로만 구성된 문자열입니다.
 * Output Condition: 가장 짧은 구간의 시작 진열대 번호와 끝 진열대 번호를 차례대로 배열에 담아서 return 하도록 하며,
 *                   만약 가장 짧은 구간이 여러 개라면 시작 진열대 번호가 가장 작은 구간을 return 합니다.
 * Input Example: gems = ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"]
 * Output Example: [3, 7]
 */
// *다시 풀기
// *투 포인터를 더 유연하게 활용하는 것이 중요한 문제였다.
// *map의 키의 값이 0일 경우 (없을 경우) delete를 사용해서 개수를 비교하는 것도 할 수 있다.
{
  function solution(gems) {
    let answer;

    const gemsLen = new Set(gems).size;
    let maxLen = gems.length;
    let leftIdx = 0;
    let rightIdx = 0;
    answer = [0, maxLen - 1];

    const map = new Map();
    map.set(gems[0], 1);

    while (leftIdx <= rightIdx && rightIdx < maxLen) {
      if (gemsLen === map.size) {
        if (rightIdx - leftIdx < answer[1] - answer[0]) {
          answer = [leftIdx, rightIdx];
        } else if (rightIdx - leftIdx === answer[1] - answer[0]) {
          if (leftIdx < answer[0]) {
            answer = [leftIdx, rightIdx];
          }
        }

        if (map.get(gems[leftIdx]) > 1) {
          map.set(gems[leftIdx], map.get([leftIdx]) - 1);
        } else {
          map.delete(gems[leftIdx]);
        }
        leftIdx++;
      } else {
        rightIdx++;
        const cnt = map.get(gems[rightIdx]);
        map.set(gems[rightIdx], cnt ? cnt + 1 : 1);
      }
    }

    answer[0]++;
    answer[1]++;

    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = ["AA", "AB", "AC", "AA", "AC"];
    const expectResult = [1, 3];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = ["XYZ", "XYZ", "XYZ"];
    const expectResult = [1, 1];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = ["ZZZ", "YYY", "NNNN", "YYY", "BBB"];
    const expectResult = [1, 5];
    const testFunction = solution;
    const condition = arraysEqual(testFunction(input), expectResult);
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P58\n");

    const input = [
      "DIA",
      "RUBY",
      "RUBY",
      "DIA",
      "DIA",
      "EMERALD",
      "SAPPHIRE",
      "DIA",
    ];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
  }

  main();
}
