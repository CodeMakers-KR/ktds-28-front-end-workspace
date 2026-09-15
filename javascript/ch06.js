/** @format */

// window의 타입 Window
Window.prototype.afterRender = function (callbackFunction) {
  this.onload = callbackFunction;
};

// document의 타입 Document
Document.prototype.find = function (selector) {
  return this.querySelector(selector);
};

// DOM 의 타입 ==> Element
Element.prototype.next = function () {
  return this.nextElementSibling;
};
Element.prototype.find = function (selector) {
  return this.querySelector(selector);
};
Element.prototype.data = function (name, value) {
  if (!value) {
    return this.dataset[name];
  } else {
    this.dataset[name] = value;
  }
};
Element.prototype.val = function (value) {
  if (!value) {
    return this.value;
  } else {
    this.value = value;
  }
};
Element.prototype.css = function (styles) {
  for (let key in styles) {
    this.style.setProperty(key, styles[key]);
  }
};
Element.prototype.removeCss = function (properties) {
  const element = this;
  properties.forEach(function (eachProp) {
    element.style.removeProperty(eachProp);
  });
};

afterRender(function () {
  const image = document.find("img");
  image.onmouseenter = function () {
    const ticket = document.find(".ticket");

    ticket.css({
      display: "block",
      ["font-size"]: "2rem",
      color: "#f00",
      ["background-color"]: "#fff",
    });
  };

  image.onmouseleave = function () {
    const ticket = document.find(".ticket");
    // ticket.style.removeProperty("display");
    ticket.removeCss(["display", "font-size", "color", "background-color"]);
  };
});
