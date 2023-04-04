let avengers = ["아이언맨", "스파이더맨", "헐크", "토르"];
console.log(avengers.sort());

let nums = [3, 1, 8, 6];
console.log(nums.sort());

let nums2 = [23, 5, 1000, 42];
console.log(nums2.sort());

//오름차순
let nums = [3, 1, 11, 8, 6];
console.log(nums.sort((a, b) => a - b));
//내림차순
let nums = [3, 1, 11, 8, 6];
console.log(nums.sort((a, b) => b - a));

// 실무사용코드
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}

//https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd

// 딥하게 sort 탐색해보겠다?
const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
  })
);
