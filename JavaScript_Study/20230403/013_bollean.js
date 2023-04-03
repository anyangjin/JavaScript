// **** 별표 4개 중요!

let a = 5;
let b = 10;

console.log(a > b); // false

//true,flase 값을 and, or 연산했을 경우 반환값은 true, false
let c = "true";
let d = false;

console.log(c && d); // false

//true, false가 아닌 값을 and, or 연산 했을 경우 단락회로평가를 하게 됩니다.
let a2 = "hello";
let b2 = "";

console.log(a2 && b2); //undefined

//암기해서 알고있어야함!!
console.log(Boolean("hello")); // t
console.log(Boolean("")); // 빈문자열 f
console.log(Boolean([1, 2, 3])); // t
console.log(Boolean([])); // 말도 안되게 t
console.log(Boolean({ one: 10, two: 20 })); //t
console.log(Boolean({})); // t
console.log(Boolean(0)); //false
console.log(Boolean(-1)); // t
console.log(Boolean(undefined)); // f
console.log(Boolean(null)); // f
console.log(Boolean(NaN)); // f

if (undefined) {
  console.log("hello");
} //undefined

let aa;
if (aa) {
  console.log("hello");
} //undefined

//답 할 수 있어야 견고한 코드를 짤 수 있습니다.
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드.

let aaa;
if (aaa > 100) {
  console.log("hello");
} //undefined

//
let x = 5;
let y = 10;
let z = 5;

console.log(x > y); // false
console.log(x < y); // true
console.log(x >= z); // true
console.log(x <= z); // true
console.log(x === z); // true
console.log(x !== y); // true
