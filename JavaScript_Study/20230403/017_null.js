let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(val); //null

// 반 평균  비어있을때는 null 써라 참고삼아서만 알아두기.

// let 반점수 = [10, 20, 30, null, 40, 50]
// let 반평균 = 0
// for (const i of 반점수) {
//   console.log(i)
//   반평균 += i
// }

// let 반점수 = [10, 20, 30, undefined, 40, 50];
// let 반평균 = 0;
// for (const i of 반점수) {
//   console.log(i);
//   반평균 += i;
// }

// undefined는 변수가 선언 되었지만 값이 지정되지 않은 경우를 나타내며, null 은 어떤 값이 의도적으로 비어있음을 표현하기 위해 사용합니다.

// 💡 값이 비어있음을 나타내기 위해 undefined 를 사용해서는 안되나요?
// null은 초기화 하려는 특정한 목적으로 의도적으로 사용한다고 앞서 말씀드렸습니다.
// 하지만 undefined를 사용하는것은 어떨까요?

// 의미적으로는 부적절합니다. undefined는 선언된 변수에 아직 값이 할당되지 않았음을 의미하기 때문입니다.

// 하지만 실제 값을 초기화하기 위한 방법으로 null 을 사용하든 undefined를 사용하든 상관없습니다. 나중에 자세히 배우겠지만 자바스크립트의 메모리를 관리해주는 프로그램인 가비지컬렉터는 null 과 undefined를 구분하지 않습니다.

// //왜 null 의 타입은 object 인가요?
// null은 원시타입중 하나지만 타입을 검사해보면 객체 타입을 의미하는 object를 반환하는것을 확인 할 수 있습니다.
// 이는 자바스크립트 개발과정에서 발생한 오류이며, 이미 관련된 수 많은 코드가 사용되었기 때문에 수정되고 있지 않는 상황입니다.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null
