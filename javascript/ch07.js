/** @format */

onload = function () {
  // 아이디가 "package-ticket-count" 인 DOM에 대해
  // oninput 이벤트가 발생하면
  // 콘솔에 "Input!"이 출력되도록 한다.
  // 동시에 input의 부모 중 package에 있는
  // data-price 값을 가져와 출력한다.

  const count = document.querySelector("#package-ticket-count");
  count.oninput = function () {
    console.log("Input!");

    const package = this.closest(".package");
    const price = package.dataset.price;
    console.log(price);

    // 만약, input에 입력한 값이 비어있다면, 0으로 초기화 해라.
    // if ( ! this.value ) {
    //     this.value = "0";
    // }

    let inputValue = parseInt(this.value); //NaN, 20
    if (window.isNaN(inputValue)) {
      inputValue = 0;
    }

    // .package 다음 DOM(.total-price)안의 #amount를 가져온다.
    const amount = package.nextElementSibling.querySelector("#amount");
    amount.innerText = inputValue * parseFloat(price);
  };
};

