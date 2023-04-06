for (let i = 0; i < 10; i++) {
  console.log(10);
}

let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// airbnb 컨벤션에 권장
// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50];
let obj1 = { one: 10, two: 20 };
for (const i in arr1) {
  console.log(arr1[i]); // index를 가져온다!?
}

for (const i in obj1) {
  console.log(obj1[i]); // key를 가져온다!?
}

for (const i in "hello world") {
  console.log(i);
}

let s = 0;
for (const i in ".".repeat(101)) {
  s += parseInt(i);
}
console.log(s);

// airbnb 컨벤션에 권장
// IE에서는 사용 불가
// 개발자의 행복을 위해 익스플로러를 버리자 => 이렇게 해야만 사용할 수 있습니다.
let arr2 = [10, 20, 30, 40, 50];
let obj2 = { one: 10, two: 20 };

for (const item of arr2) {
  console.log(item);
}

let s = 0;
for (const item of arr2) {
  s += item;
}
console.log(s);

for (const item of obj2) {
  // of 뒤에 iterable한 값이 나와야 합니다.
  console.log(item);
}

for (const item of "hello world") {
  console.log(item);
}

// why? for of와 for in문에서는 const가 가능한가요?
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
  console.log(10);
} // error

{
  const x = 10;
  console.log(x);
}
console.log(x);

for (const i in [1, 2, 3]) {
  console.log(i);
}

for (const i of [1, 2, 3]) {
  console.log(i);
}

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

for (let i = 1; i < s.length; i++) {
  console.log(s[i - 1], s[i]); // 마지막 값을 확인해보세요.
  console.log(s[i] - s[i - 1]);
}

// 위보다 깔끔한 코드가 나오진 않습니다.
let s = [1, 3, 4, 8, 13, 17, 20];
for (const i in s) {
  console.log(parseInt(i));
  console.log(s[i], s[parseInt(i) + 1]);
}

// 문제
// 다음 수학 점수의 반평균을 구하세요.
let 수학점수 =
  [10, 99, 89, 70](
    // step1
    수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]
  ) / 수학점수.length;
// step2
let s = 0;
for (let i = 0; i < 수학점수.length; i++) {
  s += 수학점수[i];
}
console.log(s / 수학점수.length);

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

let s = 0;
for (let i = 0; i < user.length; i++) {
  console.log(user[i]["age"]);
  s += user[i]["age"];
}
console.log(Math.floor(s / user.length));

let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

let s = 0;
for (let i = 0; i < user.length; i++) {
  console.log(user[i]["age"]);
  s += user[i]["age"];
}
// console.log(Math.floor(s / user.length))
console.log((s / user.length).toFixed(2));

////

///// 심화 수업(기억하지 않으셔도 됩니다.) /////
let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    name: "Lamb Adams",
    gender: "male",
  },
];

let s = 0;
for (const i of user) {
  console.log(i);
  console.log(i.age); // 마지막에 undefined
  console.log(s); // 마지막에 102
  console.log("----------");
  s += i.age; // 마지막에 undefined + 102
}
console.log((s / user.length).toFixed(2));

/////////

let s = 0;
for (const i of user) {
  console.log(i);
  console.log(i.age); // 마지막에 undefined
  console.log(s); // 마지막에 102
  console.log("----------");
  s += i.age ?? 0;
}
console.log((s / user.length).toFixed(2));

/////
s = 0;
for (const i of user.map((v, i) => v.age)) {
  if (!!i) {
    s += i;
  }
}
console.log((s / user.length).toFixed(2));

/////
!true; // false
!false; // true
!!10; // true
!!1; // true
!!-1; // true
!!0; // false
!!"hello"; // true
!!NaN; //false
!!undefined; //false
!!nill; // false

/// 외우세요 ///
user
  .map((v) => v.age)
  .filter((v) => !!v)
  .reduce((a, b) => a + b, 0);

//
let x = 0;
while (x < 10) {
  console.log("start");
  console.log(x);
  x += 1;
  console.log("end");
}
///
let x = 0;
while (x < 10) {
  console.log("start");
  console.log(x);
  x += 1;
  console.log("end");
}

/////
// why? 10까지 출력이 되는가?
let x = 0;
while (x < 10) {
  console.log(x);
  x += 1;
}

let x = 0;
while (x < 10) {
  console.log(x);
  x += 1;
  console.log("");
}

/////
// 일반 와일 문 트루여야지 실행
let input;

do {
  input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

//

let input;

do {
  input = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input);

console.log("감사합니다.");

//구구단 암기 코드
//암기 코드 1
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

let i = 1;
while (i < 10) {
  let j = 1;
  while (j < 10) {
    console.log(`${i} x ${j} = ${i * j}`);
    j++;
  }
  i++;
}
//

// let j = 1; 로 초기화를 꼭 해줘야함 아니면 2단만 나옴.

//암기 코드 2
let ss1 = "hello world";
let result = "";
for (let i = 0; i < ss1.length; i++) {
  console.log(i);
  result = result + ss1[i];
  // result += ss[i]
}
//  "hello world" 그대로 출력

//뒤집기
let ss2 = "hello world";
let result = "";
for (let i = 0; i < ss2.length; i++) {
  console.log(i);
  result = ss2[i] + result;
  // result += ss[i]
}
console.log(result);
//이렇게 한땀 한땀 하는것
// s[0] + result => "h" + "" => "h"
// s[1] + result => "e + "h" => "eh"
// s[2] + result => "l + "eh" => "leh"
// ...

let s = "hello world";
let result = "";
let count = 0;
while (count < s.length) {
  result = s[i] + result;
  count++;
}
console.log(result);

//암기 코드 3
//팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let s = 1;
for (let i = 1; i < 6; i++) {
  s *= i;
}
console.log(s);
//한땀 한땀
//  s = s  * i // 1 * 1
//  s = 1  * 2
//  s = 2  * 3
//  s = 6  * 4
//  s = 24 * 5

//while 문으로 만들기
let s = 1;
i = 1;
while (i < 6) {
  s *= i;
  i += 1;
}
console.log(s);
