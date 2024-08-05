const billInput = document.getElementById("bill-input");
const number_Of_People = document.getElementById("people-input");
const tipsButtons = Array.from(document.querySelectorAll(".tips button"));
let customInput = document.getElementById("custom");
let tip_amount = document.getElementById("payment-one-type");
let eachPersonTotal = document.getElementById("payment-two-type");
const resetButton = document.getElementById("reset-button");
const errorMessage = document.getElementById("error-message");

let percent;
let colorChanger;
let billValue = 0;
let people = 1;

function updateInfo() {
  let total_amount = Number(billInput.value);
  let numberOfPeople = Number(number_Of_People.value);
  if (!percent || numberOfPeople === 0) {
    return;
  }
  let tipAmount = (total_amount * percent) / 100 / numberOfPeople;
  let total = ((total_amount * percent) / 100 + total_amount) / numberOfPeople;

  if (billInput.value.length > 6) {
    tip_amount.style.fontSize = "20px";
    eachPersonTotal.style.fontSize = "20px";
  }

  tip_amount.textContent = "$" + tipAmount.toFixed(2);
  eachPersonTotal.textContent = "$" + total.toFixed(2);
  tip_amount.style.color = " #26C2AE";
  eachPersonTotal.style.color = " #26C2AE";
}

billInput.addEventListener("input", (event) => {
  updateInfo();
});

tipsButtons.map((button) => {
  button.style.cursor = "pointer";
  button.addEventListener("click", (event) => {
    if (colorChanger != undefined) {
      colorChanger.style.backgroundColor = " #00474B";
      colorChanger.style.color = "white";
    }
    event.target.style.backgroundColor = " #26C2AE";
    event.target.style.color = " #00474B";
    colorChanger = event.target;
    percent = parseInt(button.textContent);
    updateInfo();
    customInput.value = "";
  });
});

number_Of_People.addEventListener("input", (event) => {
  if (event.target.value == 0) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
  updateInfo();
});

customInput.addEventListener("input", (event) => {
  percent = parseInt(event.target.value);
});

function resetAll() {
  billInput.value = "";
  number_Of_People.value = "";
  customInput.value = "";
  tip_amount.textContent = "$0.00";
  eachPersonTotal.textContent = "$0.00";
  percent = null;
}

resetButton.addEventListener("click", () => {
  resetAll();
  resetButton.style.backgroundColor = " #0D686D";
});
