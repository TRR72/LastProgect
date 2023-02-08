
const startBtn = document.querySelector(".sign-button");
const passEl = document.querySelector(".input_pass");
const rePassEl = document.querySelector(".input_pass-re");

startBtn.addEventListener("click", function (e) {
  if (
    passEl.value !== rePassEl.value ||
    passEl.value === "" ||
    rePassEl.value === ""
  ) {
    e.preventDefault();
    if (passEl.classList.contains("input-correct")) {
      passEl.classList.remove("input-correct");
      rePassEl.classList.remove("input-correct");
    }
    passEl.classList.add("input-error");
    rePassEl.classList.add("input-error");
  } else {
    e.preventDefault();
    if (passEl.classList.contains("input-error")) {
      passEl.classList.remove("input-error");
      rePassEl.classList.remove("input-error");
    }
    passEl.classList.add("input-correct");
    rePassEl.classList.add("input-correct");
  }
});

// рейтинг 5 звезд
const starsEls = document.querySelectorAll(".rating_sign_input");

starsEls.forEach((elem) => {
  elem.addEventListener("change", function (e) {
    const checkedNumber = document.querySelector(
      ".rating_sign_input:checked"
    ).value;
    console.log(checkedNumber);
    starsEls.forEach((item) => {
      const currentLable = item.previousElementSibling;
      console.log(currentLable);
      if (item.value <= checkedNumber) {
        currentLable.classList.add("check");
      } else {
        currentLable.classList.remove("check");
      }
    });
  });
});
