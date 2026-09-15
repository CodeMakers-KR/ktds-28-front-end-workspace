/** @format */

onload = function () {
  const buttons = document.querySelectorAll(".package-green-button");

  buttons.forEach(function (eachButton) {
    eachButton.onclick = function () {
      const package = this.closest(".package");
      const price = package.dataset.price;

      const newPrice = document.createElement("p");
      //   newPrice.innerText = "From $" + price;
      newPrice.innerText = `From $${price}`;
      newPrice.classList.add("package-ticket-price");

      package.querySelector(".package-button-area").append(newPrice);

      this.remove();
    };
  });
};
