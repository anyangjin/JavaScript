// if-else 조건문 외에도, switch 문을 사용하여 여러 조건에 대한 실행 코드를 작성할 수 있습니다. switch case 문은 하나의 변수를 여러 값과 비교하여 실행 코드를 결정하는 조건문입니다.

switch (표현식) {
  case 값1:
    // 값1에 대한 실행 코드
    break;
  case 값2:
    // 값2에 대한 실행 코드
    break;

  default:
    // 모든 case에 해당하지 않을 때 실행될 코드
    break;
}

switch (new Date().getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
}
// default: break; 1주일은 확실히 알기때문에 사용 안했음.
// default는 견고한 코드를 위해 쓰는게 좋다.

//여러줄 복사 alt + shift + 위,아래
//같은 단어 찾기 ctrl + D
//같은 모든 단어 ctrl + shift + l

switch (new Date().getDay()) {
  case 1:
    document.write("월요일입니다.");
    break;
  case 2:
    document.write("화요일입니다.");
    break;
  case 3:
    document.write("수요일입니다.");
    break;
  case 4:
    document.write("목요일입니다.");
    break;
  case 5:
    document.write("금요일입니다.");
    break;
  default:
    document.write("금금요일입니다. 주말이 뭐죠?");
    break;
}
// 위 코드에서 switch의 표현식은 자바스크립트 내장 Date() 함수를 통해 현재의 시간정보를 반환하고, getDay() 함수로 시간에서 요일 정보만 추출하고 있습니다.

// switch문은 case마다 break; 라는 코드를 작성해 주도록 되어있습니다. 만약 해당 코드가 없다면 어떤 결과가 나올까요?
let price = 0;
let menu = "카페라떼"; // 메뉴를 바꿔보세요!

switch (menu) {
  case "아메리카노":
    price = 4000;
  case "카페라떼":
    price = 5000;
  case "바닐라라떼":
    price = 6000;
  case "콜드브루":
    price = 5500;
  case "딸기라떼":
    price = 7000;
  case "레몬에이드":
    price = 6500;
  case "에스프레소":
    price = 3500;
  case "루이보스":
    price = 4500;
  default:
    console.log("메뉴를 정확히 입력하세요.");
}
// , break가 없다면 switch문을 탈출하지 않고 모든 코드들을 순서대로 실행시킵니다. switch문을 적절하게 사용하고 싶다면 반드시 break를 작성해주는 것을 잊지맙시다.

// 여러줄 복사하고 싶을 때에
// window : Alt + Shift + 위아래
// mac : option키와 shift키 누르고 방향키

// 같은 단어 찾고 싶을 때
// window : Ctrl + D
// mac : cmd + D

// 같은 모든 단어
// window : Ctrl + Shift + l 입니다.
// mac : cmd + Shift + l 입니다.

// 자동정렬
// window : Ctrl + a, Ctrl k + Ctrl + f(Ctrl누른 상태여야 합니다.)
// mac : cmd + a, cmd k + f

// 전체 줄 선택
// window : 컨트롤 L 커서 있는 줄 전체선택
// mac : shift + cmd + left, cmd + opt + l // 안되는 분도 있으십니다.

const 요일 = new Date().getDay();
const 요일객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};
console.log(요일객체[요일]);

//default는 어떻게 처리 ?

const 요일2 = 10;
const 요일객체2 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};
//널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? "hello");
//단락평가 사용
console.log(요일객체2[요일2] || "hello");
