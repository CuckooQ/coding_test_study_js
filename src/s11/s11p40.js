/**
 * Title: 디스크 컨트롤러
 * Content: 하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다.
 *          디스크 컨트롤러를 구현하는 방법은 여러 가지가 있습니다. 가장 일반적인 방법은 요청이 들어온 순서대로 처리하는 것입니다.
 *          예를들어
 *          - 0ms 시점에 3ms가 소요되는 A작업 요청
 *          - 1ms 시점에 9ms가 소요되는 B작업 요청
 *          - 2ms 시점에 6ms가 소요되는 C작업 요청
 *          와 같은 요청이 들어왔습니다.
 *          한 번에 하나의 요청만을 수행할 수 있기 때문에 각각의 작업을 요청받은 순서대로 처리하면 다음과 같이 처리 됩니다.
 *          - A: 3ms 시점에 작업 완료 (요청에서 종료까지 : 3ms)
 *          - B: 1ms부터 대기하다가, 3ms 시점에 작업을 시작해서 12ms 시점에 작업 완료(요청에서 종료까지 : 11ms)
 *          - C: 2ms부터 대기하다가, 12ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 16ms)
 *          이 때 각 작업의 요청부터 종료까지 걸린 시간의 평균은 10ms(= (3 + 11 + 16) / 3)가 됩니다.
 *          하지만 A → C → B 순서대로 처리하면
 *          - A: 3ms 시점에 작업 완료(요청에서 종료까지 : 3ms)
 *          - C: 2ms부터 대기하다가, 3ms 시점에 작업을 시작해서 9ms 시점에 작업 완료(요청에서 종료까지 : 7ms)
 *          - B: 1ms부터 대기하다가, 9ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 17ms)
 *          이렇게 A → C → B의 순서로 처리하면 각 작업의 요청부터 종료까지 걸린 시간의 평균은 9ms(= (3 + 7 + 17) / 3)가 됩니다.
 *          각 작업에 대해 [작업이 요청되는 시점, 작업의 소요시간]을 담은 2차원 배열 jobs가 매개변수로 주어질 때,
 *          작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요.
 *          (단, 소수점 이하의 수는 버립니다)
 * Input Condition: jobs의 길이는 1 이상 500 이하입니다.
 *                  jobs의 각 행은 하나의 작업에 대한 [작업이 요청되는 시점, 작업의 소요시간] 입니다.
 *                  각 작업에 대해 작업이 요청되는 시간은 0 이상 1,000 이하입니다.
 *                  각 작업에 대해 작업의 소요시간은 1 이상 1,000 이하입니다.
 *                  하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다.
 * Output Condition: None
 * Input Example: [[0, 3], [1, 9], [2, 6]]
 * Output Example: 9
 */
// Expected: 12:23 - 13:03
// Actual: 12:23 - 13:56
// *다시 풀기
// *작업중 뽑는 처리와 기다리는 처리를 잘 못 구현했다.

{
  class Processer {
    constructor(jobs) {
      this.jobs = jobs;
      this.sortJobs();
      this.executedTimes = [];
      this.now = 0;
    }

    sortJobs() {
      // 작업 실행 시간 오름차 순으로 정렬
      // (현재 실행할 수 있는 작업 중 가장 짧은 시간에 완료할 수 있는 작업을 우선 실행)
      this.jobs.sort((a, b) => a[1] - b[1]);
    }

    waitUntilExecutable() {
      const onlyEnterTimes = this.jobs.map((job) => job[0]);
      const startableTime = Math.min(...onlyEnterTimes);
      this.now = startableTime;
    }

    getElapseTime(job) {
      const waitingTime = this.now - job[0];
      const executeTime = job[1];
      const elapseTime = waitingTime + executeTime;
      return elapseTime;
    }

    executeJob(job) {
      const elapseTime = this.getElapseTime(job);
      this.executedTimes.push(elapseTime);
      this.now += job[1];
    }

    getJob() {
      const executableJobIdx = this.jobs.findIndex((job) => job[0] <= this.now);

      const selectedJob = this.jobs[executableJobIdx];
      selectedJob && this.jobs.splice(executableJobIdx, 1);

      return selectedJob;
    }

    execute() {
      while (this.jobs.length !== 0) {
        const selectedJob = this.getJob();

        if (selectedJob) {
          this.executeJob(selectedJob);
        } else {
          this.waitUntilExecutable();
        }
      }
    }

    getAverageElapsedTime() {
      const elapsedTime = this.executedTimes.reduce((acc, val) => acc + val, 0);
      const jobCnt = this.executedTimes.length;
      return Math.floor(elapsedTime / jobCnt);
    }
  }

  function getMinAverageTime(jobs) {
    let minAverageTime = 0;

    const processer = new Processer([...jobs]);
    processer.execute();

    minAverageTime = processer.getAverageElapsedTime();

    return minAverageTime;
  }

  function solution(jobs) {
    const answer = getMinAverageTime(jobs);
    return answer;
  }

  function testToExample1() {
    const testNum = 1;
    const input = [[0, 3]];
    const expectResult = 3;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample2() {
    const testNum = 2;
    const input = [[1, 4]];
    const expectResult = 4;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample3() {
    const testNum = 3;
    const input = [[1000, 1000]];
    const expectResult = 1000;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample4() {
    const testNum = 4;
    const input = [
      [1000, 1000],
      [10, 900],
    ];
    const expectResult = (1000 + 900) / 2;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample5() {
    const testNum = 5;
    const input = [
      [1, 4],
      [5, 5],
      [10, 6],
      [16, 7],
      [23, 8],
    ];
    const expectResult = (4 + 5 + 6 + 7 + 8) / 5;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample6() {
    const testNum = 6;
    const input = [
      [1, 4],
      [4, 5],
      [9, 6],
      [15, 7],
      [22, 8],
    ];
    const expectResult = Math.floor((4 + 5 + 6 + 7 + 8 + 4) / 5);
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample7() {
    const testNum = 7;
    const input = [
      [0, 10],
      [4, 10],
      [15, 2],
      [5, 11],
    ];
    const expectResult = 15;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample8() {
    const testNum = 8;
    const input = [
      [0, 5],
      [1, 2],
      [5, 5],
    ];
    const expectResult = 6;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function testToExample9() {
    const testNum = 9;
    const input = [
      [24, 10],
      [28, 39],
      [43, 20],
      [37, 5],
      [47, 22],
      [20, 47],
      [15, 34],
      [15, 2],
      [35, 43],
      [26, 1],
    ];
    const expectResult = 72;
    const testFunction = solution;
    const condition = testFunction(input) === expectResult;
    validateTestResult(testNum, condition);
  }

  function main() {
    console.log("S11P40\n");

    const input = [
      [0, 3],
      [1, 9],
      [2, 6],
    ];
    const output = this.solution(input);

    // test();
    console.log(`Input: ${input.join(" ")} `);
    console.log(`Output: ${output}\n`);
  }

  function test() {
    testToExample1();
    testToExample2();
    testToExample3();
    testToExample4();
    testToExample5();
    testToExample6();
    testToExample7();
    testToExample8();
    testToExample9();
  }

  main();
}
