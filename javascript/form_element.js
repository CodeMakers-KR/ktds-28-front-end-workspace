/** @format */

onload = function () {
  // 아이디가 email인 input에 oninput 이벤트가 발생하면
  // 해당 엘리먼트의 부모인 .page-123을 찾고
  // 부모의 자식 중 클래스가 email-value인 엘리먼트에
  // email의 value를 작성한다.
  const email = document.querySelector("#email");
  email.oninput = function () {
    const value = this.value;
    this.closest(".page-123").querySelector(".email-value").textContent = value;
  };

  // 아이디가 jobs인 select에 onchange 이벤트가 발생하면
  // 해당 엘리먼트의 부모인 .page-124를 찾고
  // 부모의 자식 중 클래스가 job-value인 엘리먼트에
  // jobs의 value를 작성한다.
  const jobs = document.querySelector("#jobs");
  jobs.onchange = function () {
    const value = this.value;
    const optionText = jobs.querySelector(
      `option[value="${value}"]`,
    ).textContent;

    this.closest(".page-124").querySelector(".job-value").textContent =
      `value: ${value}, text: ${optionText}`;
  };

  // input태그 중 type이 radio 이면서 name이 age인 엘리먼트에
  // input[type=radio][name=age]
  // onchange 이벤트가 발생하면 해당 엘리먼트의 부모인 .page-125를 찾고
  // 부모의 자식 중 클래스가 name-value인 엘리먼트에
  // input의 value를 작성한다.
  const radios = document.querySelectorAll("input[type=radio][name=age]");
  radios.forEach(function (eachRadio) {
    eachRadio.onchange = function () {
      const value = this.value;
      const labelText = this.nextElementSibling.textContent;

      this.closest(".page-125").querySelector(".name-value").textContent =
        `value: ${value}, text: ${labelText}`;
    };
  });

  const genreCheckboxes = document.querySelectorAll(
    "input[type=checkbox][name=favorate-genre]",
  );

  case5();
  genreCheckboxes.forEach(function (gnr) {
    gnr.onchange();
  });

  function case1() {
    const genreCheckboxes = document.querySelectorAll(
      "input[type=checkbox][name=favorate-genre]",
    );

    genreCheckboxes.forEach(function (eachGenre) {
      eachGenre.onchange = function () {
        let value = "";
        genreCheckboxes.forEach(function (gnr) {
          if (gnr.checked) {
            value += `, ${gnr.value}`;
          }
        });

        this.closest(".page-125").querySelector(".genre-name").textContent =
          value.substring(1).trim();
      };
    });
  }

  function case2() {
    const genreCheckboxes = document.querySelectorAll(
      "input[type=checkbox][name=favorate-genre]",
    );
    genreCheckboxes.forEach(function (eachGenre) {
      eachGenre.onchange = function () {
        let value = "";
        document
          .querySelectorAll("input[type=checkbox][name=favorate-genre]:checked")
          .forEach(function (gnr) {
            value += `, ${gnr.value}`;
          });

        this.closest(".page-125").querySelector(".genre-name").textContent =
          value.substring(1).trim();
      };
    });
  }

  function case3() {
    genreCheckboxes.forEach(function (eachGenre) {
      eachGenre.onchange = function () {
        const checkedBoxes = document.querySelectorAll(
          "input[type=checkbox][name=favorate-genre]:checked",
        );
        let value = Array.from(checkedBoxes)
          .map(function (gnr) {
            return gnr.value;
          })
          .join(", ");

        this.closest(".page-125").querySelector(".genre-name").textContent =
          value;
      };
    });
  }

  function case4() {
    let genreValue = [];
    genreCheckboxes.forEach(function (eachGenre) {
      eachGenre.onchange = function () {
        const value = this.value;
        if (this.checked) {
          genreValue.push(value);
        } else {
          genreValue = genreValue.filter(function (gnrVal) {
            return gnrVal !== value;
          });
        }

        this.closest(".page-125").querySelector(".genre-name").textContent =
          genreValue.join(", ");
      };
    });
  }

  function case5() {
    genreCheckboxes.forEach(function (eachGenre) {
      eachGenre.onchange = function () {
        let value = Array.from(genreCheckboxes)
          .filter(function (gnr) {
            return gnr.checked;
          })
          .map(function (gnr) {
            return gnr.value;
          })
          .join(", ");

        this.closest(".page-125").querySelector(".genre-name").textContent =
          value;
      };
    });
  }
};
