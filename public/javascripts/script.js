const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");
let valueContainer;
const first = document.querySelectorAll(".first");
const second = document.querySelectorAll(".second");
const convertBtn = document.querySelector(".convert-btn");
const amount = document.querySelector(".amount");
const resultDisplay = document.querySelector(".result-display");

// to get converted currency
async function getCurrency(amountInput, fromCurrencyInput, toCurrencyInput) {
  // create object with values
  const values = {
    amount: amountInput,
    fromCurrency: fromCurrencyInput,
    toCurrency: toCurrencyInput,
  };
  try {
    // API request to server
    const response = await fetch("/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    } else {
      const data = await response.json();
      console.log(data);
      displayCurrency(data);
    }
  } catch (error) {
    console.error("Error converting currency:", error);
    throw error;
  }
}

// to display currency data
function displayCurrency(data) {
  resultDisplay.innerText = data;
}

// convert button
convertBtn.addEventListener("click", () => {
  const amountInput = amount.value;
  const fromCurrencyInput = leftContainer.value;
  const toCurrencyInput = rightContainer.value;

  getCurrency(amountInput, fromCurrencyInput, toCurrencyInput);
});

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
