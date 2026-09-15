/** @format */

// javascript가 실행될 때 "h1" 태그에 작성된 내용이 alert으로 나왔으면 좋겠다.
// alert("hello!!!");

// window.onload ==> 브라우저의 탭이 load 상태가 되었을 때~! executeFunctions 함수를 실행시켜라.
window.onload = function () {
  // 브라우저 탭의 body에 있는 h1 태그를 읽어와서 그 내용을 가져온다.
  let h1 = document.querySelector("h1");
  console.log(h1);
  console.dir(h1);

  alert(h1.innerText);

  h1.innerText = "어디로 갈까요?";

  let p = document.querySelector("p");
  console.log(p);
  console.dir(p);

  p.innerText = "당신의 다음 여행을 계획하세요."

};
