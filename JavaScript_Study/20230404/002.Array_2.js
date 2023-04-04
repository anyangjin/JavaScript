// v 벨류 el 엘리먼트 i 아이템
//짝 수
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 === 0;
});
//짝수의합 .으로 이어진건 메소드 체이닝
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

// _ = 아이템,엘리먼트 이지만 의미없는 값은 _ 로 표시

//홀 수
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
  return el % 2 !== 0;
});

//글자 나눠짐
Array.from("hello World");

// 모음 제거
Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v));

//reduce

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.reduce((a, c) => a + c, 0); //55

const arr = [1, 2, 3, 4, 5];
arr.reduce((a, c) => a + c, 0); //15

const arr = [];
arr.reduce((a, c) => a + c, 0);

const arr = [1];
arr.reduce((a, c) => a + c, 0);

// error 0을 항상 넣어주세요.
const arr = [];
arr.reduce((a, c) => a + c, 0);

//includes
const arr1 = ["hello", "world", "hojun"];
arr1.includes("world");

const arr1 = ["hello", "world", "hojun"];
arr1.includes("hojun");

const arr1 = ["hello", "world", "hojun"];
arr1.includes("jun");

//join
const arr1 = ["hello", "world", "hojun"];
arr1.join("!");

const arr2 = ["010", "5044", "2903"];
arr2.join("-");

const arr3 = [010, 5044, 2903];
arr2.join("-"); // 이렇게 하면 안된다.

//0b100 // b는 바이너리의 약자입니다.
//0o100 // o는 옥타의 첫 글자 입니다.
//0x100 // x는 헥사를 표현합니다.
