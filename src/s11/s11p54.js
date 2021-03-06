/**
 * Title: 순위 검색
 * Content: 카오는 하반기 경력 개발자 공개채용을 진행 중에 있으며 현재 지원서 접수와 코딩테스트가 종료되었습니다.
 *          이번 채용에서 지원자는 지원서 작성 시 아래와 같이 4가지 항목을 반드시 선택하도록 하였습니다.
 *          1. 코딩테스트 참여 개발언어 항목에 cpp, java, python 중 하나를 선택해야 합니다.
 *          2. 지원 직군 항목에 backend와 frontend 중 하나를 선택해야 합니다.
 *          3. 지원 경력구분 항목에 junior와 senior 중 하나를 선택해야 합니다.
 *          4. 선호하는 소울푸드로 chicken과 pizza 중 하나를 선택해야 합니다.
 *          인재영입팀에 근무하고 있는 니니즈는 코딩테스트 결과를 분석하여 채용에 참여한 개발팀들에 제공하기 위해 지원자들의 지원 조건을 선택하면,
 *          해당 조건에 맞는 지원자가 몇 명인 지 쉽게 알 수 있는 도구를 만들고 있습니다.
 *          예를 들어, 개발팀에서 궁금해하는 문의사항은 다음과 같은 형태가 될 수 있습니다.
 *          * 코딩테스트에 java로 참여했으며, backend 직군을 선택했고, junior 경력이면서, 소울푸드로 pizza를 선택한 사람 중,
 *            코딩테스트 점수를 50점 이상 받은 지원자는 몇 명인가?
 *          물론 이 외에도 각 개발팀의 상황에 따라 아래와 같이 다양한 형태의 문의가 있을 수 있습니다.
 *          1. 코딩테스트에 python으로 참여했으며,
 *             frontend 직군을 선택했고,
 *             senior 경력이면서,
 *             소울푸드로 chicken을 선택한 사람 중,
 *             코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?
 *          2. 코딩테스트에 cpp로 참여했으며,
 *             senior 경력이면서,
 *             소울푸드로 pizza를 선택한 사람 중,
 *             코딩테스트 점수를 100점 이상 받은 사람은 모두 몇 명인가?
 *          3. backend 직군을 선택했고,
 *             senior 경력이면서,
 *             코딩테스트 점수를 200점 이상 받은 사람은 모두 몇 명인가?
 *          4. 소울푸드로 chicken을 선택한 사람 중,
 *             코딩테스트 점수를 250점 이상 받은 사람은 모두 몇 명인가?
 *          5. 코딩테스트 점수를 150점 이상 받은 사람은 모두 몇 명인가?
 *          즉, 개발팀에서 궁금해하는 내용은 다음과 같은 형태를 갖습니다.
 *          * [조건]을 만족하는 사람 중 코딩테스트 점수를 X점 이상 받은 사람은 모두 몇 명인가?
 *          지원자가 지원서에 입력한 4가지의 정보와 획득한 코딩테스트 점수를 하나의 문자열로 구성한 값의 배열 info,
 *          개발팀이 궁금해하는 문의조건이 문자열 형태로 담긴 배열 query가 매개변수로 주어질 때,
 *          각 문의조건에 해당하는 사람들의 숫자를 순서대로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
 * Input Condition: info 배열의 크기는 1 이상 50,000 이하입니다.
 *                  info 배열 각 원소의 값은 지원자가 지원서에 입력한 4가지 값과 코딩테스트 점수를 합친 "개발언어 직군 경력 소울푸드 점수" 형식입니다.
 *                  개발언어는 cpp, java, python 중 하나입니다.
 *                  직군은 backend, frontend 중 하나입니다.
 *                  경력은 junior, senior 중 하나입니다.
 *                  소울푸드는 chicken, pizza 중 하나입니다.
 *                  점수는 코딩테스트 점수를 의미하며, 1 이상 100,000 이하인 자연수입니다.
 *                  각 단어는 공백문자(스페이스 바) 하나로 구분되어 있습니다.
 *                  query 배열의 크기는 1 이상 100,000 이하입니다.
 *                  query의 각 문자열은 "[조건] X" 형식입니다.
 *                  [조건]은 "개발언어 and 직군 and 경력 and 소울푸드" 형식의 문자열입니다.
 *                  언어는 cpp, java, python, - 중 하나입니다.
 *                  직군은 backend, frontend, - 중 하나입니다.
 *                  경력은 junior, senior, - 중 하나입니다.
 *                  소울푸드는 chicken, pizza, - 중 하나입니다.
 *                  '-' 표시는 해당 조건을 고려하지 않겠다는 의미입니다.
 *                  X는 코딩테스트 점수를 의미하며 조건을 만족하는 사람 중 X점 이상 받은 사람은 모두 몇 명인 지를 의미합니다.
 *                  각 단어는 공백문자(스페이스 바) 하나로 구분되어 있습니다.
 *                  예를 들면, "cpp and - and senior and pizza 500"은 "cpp로 코딩테스트를 봤으며, 경력은 senior 이면서 소울푸드로 pizza를 선택한 지원자 중 코딩테스트 점수를 500점 이상 받은 사람은 모두 몇 명인가?"를 의미합니다.
 * Output Condition: None
 * Input Example: info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]
 *                query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]
 * Output Example: [1,1,1,1,2,4]
 */
// *다시 풀기
// *처음 작성했던 처리는 효율성 테스트에서 모두 실패했다.
// *정보를 효율적으로 저장하는 방법과 이분 탐색이 중요했다.

{
  function solution(info, query) {
    const answer = [];

    // 맵에 입력정보 키와 점수 배열 값을 설정
    const map = new Map();
    info.forEach((unitInfo) => {
      const args = unitInfo.split(" ");
      const score = Number(args.pop());
      comb(args, score, 0);
    });
    // 맵의 값인 점수 배열을 오름차순으로 정렬
    map.forEach((scores) => {
      return scores.sort((a, b) => a - b);
    });
    // 쿼리를 반복하면서 해당 쿼리와 일치하는 점수 배열을 가져와서 이분 탐색으로 기준 점수 이상의 점수의 개수 구하기
    query.forEach((unitQuery) => {
      const args = unitQuery.replace(/ and /g, " ").split(" ");
      const score = Number(args.pop());
      const key = args.join("");
      const scores = map.get(key);

      if (scores) {
        let startIdx = 0;
        let endIdx = scores.length;
        while (startIdx < endIdx) {
          const midIdx = Math.floor((startIdx + endIdx) / 2);
          if (scores[midIdx] >= score) {
            endIdx = midIdx;
          } else if (scores[midIdx] < score) {
            startIdx = midIdx + 1;
          }
        }
        const result = scores.length - startIdx;
        answer.push(result);
      } else {
        answer.push(0);
      }
    });

    return answer;

    function comb(args, score, startIdx) {
      const key = args.join("");
      const val = map.get(key);

      if (val) {
        val.push(score);
      } else {
        map.set(key, [score]);
      }

      // 해당 정보의 한개씩 '-'로 변환하면서 맵에 저장
      for (let i = startIdx; i < args.length; i++) {
        const tmp = [...args];
        tmp[i] = "-";
        comb(tmp, score, i + 1);
      }
    }
  }

  /*
  // 효율성 테스트 실패
  const NONE = "-";
  const QUERY_SEPERATOR = " and ";

  class Cache {
    constructor() {
      this.map = new Map();
    }

    set(key, applicant) {
      const cachedApplicants = this.map.get(key);
      this.map.set(
        key,
        cachedApplicants ? [...cachedApplicants, applicant] : [applicant]
      );
    }

    get(key) {
      return this.map.get(key);
    }
  }

  class DB {
    constructor() {
      this.cache = new Cache();
      this.applicants = [];
    }

    setApplicant(applicant) {
      this.cache.set(applicant.lan, applicant);
      this.cache.set(applicant.job, applicant);
      this.cache.set(applicant.career, applicant);
      this.cache.set(applicant.soulfood, applicant);
      this.applicants.push(applicant);
    }

    getFromQuery(query) {
      const lanFilteredApplicants =
        query.lan !== NONE ? this.cache.get(query.lan) : this.applicants;
      const jobFilteredApplicants =
        query.job !== NONE ? this.cache.get(query.job) : this.applicants;
      const careerFilteredApplicants =
        query.career !== NONE ? this.cache.get(query.career) : this.applicants;
      const soulfoodFilteredApplicants =
        query.soulfood !== NONE
          ? this.cache.get(query.soulfood)
          : this.applicants;

      const adaptableApplicants = lanFilteredApplicants.filter(
        (applicant) =>
          Number(applicant.score) >= Number(query.score) &&
          jobFilteredApplicants.includes(applicant) &&
          careerFilteredApplicants.includes(applicant) &&
          soulfoodFilteredApplicants.includes(applicant)
      );

      return adaptableApplicants;
    }
  }

  class Applicant {
    constructor(info) {
      const [lan, job, career, soulfood, score] = info.split(" ");
      this.id;
      this.lan = lan;
      this.job = job;
      this.career = career;
      this.soulfood = soulfood;
      this.score = score;
    }
  }

  class Query {
    constructor(query) {
      const scoreSeperateIdx = query.lastIndexOf(" ");
      const score = query.slice(scoreSeperateIdx + 1, query.length);
      query = query.slice(0, scoreSeperateIdx);
      const [lan, job, career, soulfood] = query.split(QUERY_SEPERATOR);
      this.lan = lan;
      this.job = job;
      this.career = career;
      this.soulfood = soulfood;
      this.score = score;
    }
  }

  function solution(info, query) {
    const answer = [];

    const db = new DB();

    info.forEach((unitInfo, idx) => {
      const applicant = new Applicant(unitInfo);
      applicant.id = idx;
      db.setApplicant(applicant);
    });

    query.forEach((unitQuery) => {
      const query = new Query(unitQuery);
      const adaptableApplicants = db.getFromQuery(query);
      answer.push(adaptableApplicants.length);
    });

    return answer;
  }
  */

  function main() {
    console.log("S11P54\n");

    const inputInfo = [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ];
    const inputQuery = [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ];
    const output = this.solution(inputInfo, inputQuery);

    console.log(`Input: ${inputInfo.join("\n")}\n${inputQuery.join("\n")} `);
    console.log(`Output: ${output.join(" ")}\n`);
  }

  main();
}
