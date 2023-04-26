const memoTextarea = document.getElementById("memo");
const saveButton = document.getElementById("save-button");
const cancelButton = document.getElementById("cancel-button");

saveButton.addEventListener("click", function () {
  const memo = memoTextarea.value;
  const now = new Date();
  const datetime =
    now.getFullYear() +
    "-" +
    (now.getMonth() + 1) +
    "-" +
    now.getDate() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds();
  localStorage.setItem("memo", memo);
  localStorage.setItem("datetime", datetime);
  alert("메모가 저장되었습니다.");
});

cancelButton.addEventListener("click", function () {
  const confirmCancel = confirm("메모를 삭제하시겠습니까?");
  if (confirmCancel) {
    localStorage.removeItem("memo");
    localStorage.removeItem("datetime");
    memoTextarea.value = "";
    alert("메모가 삭제되었습니다.");
  }
});

window.addEventListener("load", function () {
  const memo = localStorage.getItem("memo");
  const datetime = localStorage.getItem("datetime");
  if (memo) {
    memoTextarea.value = memo + "\n\n" + datetime;
  }
});
