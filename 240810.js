//1.

const grade = {
    국어: 90,
    영어: 80,
    수학: 100,
  };
  
  // 논리 연산자(&& 또는 ||)를 활용하여 아래의 조건을 만족하는 코드를 작성해주세요.
  // 출력: true
  
  // 국어, 영어, 수학 점수가 모두 80점 이상이면 true, 아니면 false를 반환해주세요.
  function checkGrade(grade) {
    // 여기에 코드를 작성해주세요!
    if(grade.국어 >= 80 && grade.영어 >= 80 && grade.수학 >= 80) {
        return true;
    } else {
        return false;
    }
  }
  
  console.log(checkGrade(grade));


  //2.-------------------------------------------------------------------------

  let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

// sort() 메서드를 활용하여 다음과 같은 결과가 나오도록 코드를 작성해 주세요.
// 결과: ['김병연', '김르탄', '내배캠', '박가현', '윤창식', '최원장']

// 튜터님 이름이 담긴 배열을 가나다순으로 정렬하는 코드를 작성해주세요.
// 이 아래에 코드를 작성해주세요!
tutorNames.sort();

console.log(tutorNames);

//3.--------------------------------------------------------------------------------

const numbers = [3, 7, 8, 5, 9, 12, 15];

// find() 메서드를 활용하여 첫 번째로 짝수를 찾는 함수를 구현합니다.
// 출력 결과: 8

// 힌트
// 1. find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
// 2. 즉, 숫자 배열에서 짝수를 찾아야 합니다.
// 3. find() 메서드는 콜백 함수를 인자로 받습니다.
// 4. 콜백 함수는 주어진 요소가 짝수인지 판별합니다.
// 5. 짝수를 찾으면 true를 반환합니다.
function findFirstEvenNumber(numbers) {
  // 함수 내부를 채워주세요!
 const evenNum = numbers.find(function (numbers) {
    // if(numbers % 2 === 0) {
    //     return true;
    // } else {
    //     false;
    // }
    return numbers % 2 === 0;
 });
 return evenNum;   
}

console.log(findFirstEvenNumber(numbers));


//4.----------------------------------------------------------------------------------------

// 주의) 실제 근무 시간과 다릅니다!
const tutors = [
    {
      이름: "최원장",
      출근시간: 9,
      퇴근시간: 18,
    },
    {
      이름: "윤창식",
      출근시간: 9,
      퇴근시간: 21,
    },
    {
      이름: "박가현",
      출근시간: 13,
      퇴근시간: 18,
    },
    {
      이름: "김병연",
      출근시간: 13,
      퇴근시간: 21,
    },
  ];
  
  // find() 메서드를 활용하여 출근시간이 9시이면서 퇴근시간이 21시인 튜터를 찾아주세요!
  
  // 힌트
  // 1. find() 메서드를 사용해 tutors 배열을 순회합니다.
  // 2. 순회하면서 tutor 객체를 하나씩 가져옵니다.
  // 3. tutor 객체의 출근시간과 퇴근시간을 동시에 비교하여 조건에 맞는 tutor를 찾습니다.
  
  function find9to21Tutor(tutors) {
    // 함수 내용을 채워주세요!
    const worktutor = tutors.find(function(wt) {
        // if(wt.출근시간 === 9 && wt.퇴근시간 === 21) {
        //     return true;
        // } else {
        //     return false;

        // }
        return wt.출근시간 === 9 && wt.퇴근시간 ===21;
    });
    return worktutor;
  }
  
  console.log(find9to21Tutor(tutors));
  // 출력 결과: { 이름: "윤창식", 출근시간: 9, 퇴근시간: 21 }
  