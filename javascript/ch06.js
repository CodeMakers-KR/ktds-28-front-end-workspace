/** @format */

onload = function () {
  const image = document.querySelector("img");
  image.onmouseenter = function () {
    const ticket = document.querySelector(".ticket");
    console.log(ticket);
    console.dir(ticket);

    css(ticket, {
      display: "block",
      ["font-size"]: "2rem",
      color: "#f00",
      ["background-color"]: "#fff",
    });
    // ticket.style.setProperty("display", "block");
    // ticket.style.setProperty("font-size", "2rem");
    // ticket.style.setProperty("color", "#f00");
    // ticket.style.setProperty("background-color", "#fff");
  };

  image.onmouseleave = function () {
    const ticket = document.querySelector(".ticket");
    // ticket.style.removeProperty("display");
    removeCSS(ticket, ["display", "font-size", "color", "background-color"]);
  };
};

function css(dom, styles) {
  if (dom) {
    for (let key in styles) {
      dom.style.setProperty(key, styles[key]);
    }
  }
}

function removeCSS(dom, properties) {
  if (dom) {
    properties.forEach(function (eachProp) {
      dom.style.removeProperty(eachProp);
    });
  }
}
