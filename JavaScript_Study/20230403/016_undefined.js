//undefined는 변수가 값이 할당되지 않은 경우를 가리키는 데이터 타입입니다. 즉, 해당 변수에 아무런 값도 할당되지 않았거나, 정의되지 않은 변수에 접근하려고 할 때 undefined가 반환됩니다.
let a;
console.log(a); // undefined

if (typeof a === "undefined") {
    console.log('a에 아무것도 할당되지 않았습니다!')
}

//앞에서 배운것처럼 undefined는 falsy 값으로 평가되기 때문에 조건문에서 변수에 값이 할당되어 있는 상태인지 확인하고자 할때 자주 사용됩니다.

let y;

if (typeof y === "undefined") {
  // y가 정의되지 않은 경우에 실행
}

if (y) {
  // 실행되지 않음
}
//

if (typeof a === "undefined") {
  // y가 정의되지 않은 경우에 실행
  console.log("a에 아무것도 할당되지 않았습니다.");
}

if (!a) {
  // 실행되지 않음
  console.log("a에 아무것도 할당되지 않았습니다.");
}
