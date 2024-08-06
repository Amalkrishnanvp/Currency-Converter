const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");
let valueContainer;
const setOne = document.querySelectorAll(".set-1");
const first = document.querySelectorAll(".first");
const setTwo = document.querySelectorAll(".set-2");
const second = document.querySelectorAll(".second");

document.addEventListener("DOMContentLoaded", () => {
  leftContainer.addEventListener("change", (event) => {
    // getting value of selected option
    valueContainer = event.target.value;
    changeFlag1();
  });

  rightContainer.addEventListener("change", (event) => {
    // getting value of selected option
    valueContainer = event.target.value;
    changeFlag2();
  });

  // for change icons based on selected option
  function changeFlag1() {
    first.forEach((element) => {
      if (
        element.hasAttribute("for") &&
        element.getAttribute("for") === valueContainer
      ) {
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
          element.classList.add("block");
        } else {
          element.classList.add("block");
        }
      } else {
        if (element.classList.contains("block")) {
          element.classList.remove("block");
          element.classList.add("hidden");
        } else {
          element.classList.add("hidden");
        }
      }
    });
  }
  function changeFlag2() {
    second.forEach((element) => {
      if (
        element.hasAttribute("for") &&
        element.getAttribute("for") === valueContainer
      ) {
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
          element.classList.add("block");
        } else {
          element.classList.add("block");
        }
      } else {
        if (element.classList.contains("block")) {
          element.classList.remove("block");
          element.classList.add("hidden");
        } else {
          element.classList.add("hidden");
        }
      }
    });
  }
});
