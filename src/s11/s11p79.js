/**
 * Title: [카카오 인턴] 경주로 건설
 * Content: 건설회사의 설계사인 죠르디는 고객사로부터 자동차 경주로 건설에 필요한 견적을 의뢰받았습니다.
 *          제공된 경주로 설계 도면에 따르면 경주로 부지는 N x N 크기의 정사각형 격자 형태이며 각 격자는 1 x 1 크기입니다.
 *          설계 도면에는 각 격자의 칸은 0 또는 1 로 채워져 있으며, 0은 칸이 비어 있음을 1은 해당 칸이 벽으로 채워져 있음을 나타냅니다.
 *          경주로의 출발점은 (0, 0) 칸(좌측 상단)이며, 도착점은 (N-1, N-1) 칸(우측 하단)입니다.
 *          죠르디는 출발점인 (0, 0) 칸에서 출발한 자동차가 도착점인 (N-1, N-1) 칸까지 무사히 도달할 수 있게 중간에 끊기지 않도록 경주로를 건설해야 합니다.
 *          경주로는 상, 하, 좌, 우로 인접한 두 빈 칸을 연결하여 건설할 수 있으며, 벽이 있는 칸에는 경주로를 건설할 수 없습니다.
 *          이때, 인접한 두 빈 칸을 상하 또는 좌우로 연결한 경주로를 직선 도로 라고 합니다.
 *          또한 두 직선 도로가 서로 직각으로 만나는 지점을 코너 라고 부릅니다.
 *          건설 비용을 계산해 보니 직선 도로 하나를 만들 때는 100원이 소요되며, 코너를 하나 만들 때는 500원이 추가로 듭니다.
 *          죠르디는 견적서 작성을 위해 경주로를 건설하는 데 필요한 최소 비용을 계산해야 합니다.
 *          예를 들어, 아래 그림은 직선 도로 6개(1-2, 2-3, 3-4, 4-5, 5-6, 6-7)와 코너 4개(3, 4, 5, 6)로 구성된 임의의 경주로 예시이며,
 *          건설 비용은 6 x 100 + 4 x 500 = 2600원 입니다.
 *
 *          1 X X
 *          2 5 6
 *          3 4 7
 *
 *          또 다른 예로, 아래 그림은 직선 도로 4개(1-2, 2-3, 3-4, 4-5)와 코너 1개(3)로 구성된 경주로이며, 건설 비용은 4 x 100 + 1 x 500 = 900원 입니다.
 *
 *          1 2 3
 *          X X 4
 *          X X 5
 *
 *          도면의 상태(0은 비어 있음, 1은 벽)을 나타내는 2차원 배열 board가 매개변수로 주어질 때,
 *          경주로를 건설하는데 필요한 최소 비용을 return 하도록 solution 함수를 완성해주세요.
 * Input Condition: board는 2차원 정사각 배열로 배열의 크기는 3 이상 25 이하입니다.
 *                  board 배열의 각 원소의 값은 0 또는 1 입니다.
 *                  도면의 가장 왼쪽 상단 좌표는 (0, 0)이며, 가장 우측 하단 좌표는 (N-1, N-1) 입니다.
 *                  원소의 값 0은 칸이 비어 있어 도로 연결이 가능함을 1은 칸이 벽으로 채워져 있어 도로 연결이 불가능함을 나타냅니다.
 *                  board는 항상 출발점에서 도착점까지 경주로를 건설할 수 있는 형태로 주어집니다.
 *                  출발점과 도착점 칸의 원소의 값은 항상 0으로 주어집니다.
 * Output Condition: None
 * Input Example: [[0,0,0],[0,0,0],[0,0,0]]
 * Output Example: 900
 */
// *다시풀기

{
  function solution(board) {
    let answer = Number.MAX_SAFE_INTEGER;
    return answer;
  }

  /*
  // 각 위치마다 최소한의 비용으로 가면 도착지점에 최소한의 비용으로 갈 수 있다는 전제의 풀이이나, 마지막 테스트가 실패한다.
  // 예외가 있는 전제.
  const BLOCK = 1;
  const COST = {
    STRAIGHT: 100,
    CORNER: 500,
  };
  const NEXT_POINT = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  function solution(board) {
    let answer = Number.MAX_SAFE_INTEGER;

    const boardLen = board.length;
    const minCosts = Array.from({ length: boardLen }, () =>
      Array(boardLen).fill(Infinity)
    );
    minCosts[0][0] = 0;

    bfs();
    answer = minCosts[boardLen - 1][boardLen - 1];
    return answer;

    function bfs() {
      const queue = [];
      queue.push([0, 0, 0, 0]);

      while (queue.length) {
        const [x, y, way, cost] = queue.shift();

        for (let i = 1; i <= 4; i++) {
          const [px, py] = NEXT_POINT[i - 1];
          const nextX = x + px;
          const nextY = y + py;
          let nextCost = cost + COST.STRAIGHT;
          nextCost += way !== i && way !== 0 && COST.CORNER;
          if (
            nextX < 0 ||
            nextY < 0 ||
            nextX >= boardLen ||
            nextY >= boardLen ||
            board[nextX][nextY] === BLOCK ||
            minCosts[nextX][nextY] < nextCost
          ) {
            continue;
          }

          minCosts[nextX][nextY] = nextCost;
          queue.push([nextX, nextY, i, nextCost]);
        }
      }
    }
  }
  */

  function testToExample1() {
    const testNum = 1;
    const input = [
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [1, 0, 0, 0],
    ];
    const expectResult = 2100;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 0],
      [1, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0],
    ];
    const expectResult = 3200;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = [
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
    ];
    const expectResult = 3800;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
    ];
    const expectResult = 4500;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P79\n");

    const input = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join("\n")} `);
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
