/** @format */

/**
 * DOM
 *  > HTML 문서를 브라우저가 읽으면서 태그별로 객체화 시켜둔 것.
 * DOM Tree
 *  > DOM 간의 관계 (자식, 형제, 부모)
 * DOM 종류
 *  > DOM, Shadow DOM (Virtual DOM)
 *  > Shadow DOM (Virtual DOM) >> 스크립트에 의해 생성된 DOM
 */

onload = function () {
  const priceDom = document.querySelector(".package-ticket-price");
  console.log(priceDom);
  //   priceDom?.onclick = function() {
  //     alert("Click!");
  //   };
  priceDom?.addEventListener("click", function () {
    alert("Click!");
  });

  const buttons = document.querySelectorAll(".package-green-button");

  buttons.forEach(function (eachButton) {
    eachButton.onclick = function () {
      const package = this.closest(".package");
      const price = package.dataset.price;

      const newPrice = document.createElement("p");
      //   newPrice.innerText = "From $" + price;
      newPrice.innerText = `From $${price}`;
      newPrice.classList.add("package-ticket-price");
      newPrice.onclick = function () {
        alert("Click!");
      };

      package.querySelector(".package-button-area").append(newPrice);

      this.remove();
    };
  });
};
