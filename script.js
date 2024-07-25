const billInput = document.getElementById("bill-input");
const number_Of_People = document.getElementById("people-input");
const tipsButtons = Array.from(document.querySelectorAll(".tips button"));
let customInput = document.getElementById("custom");
let tip_amount = document.getElementById("tip");
let eachPersonTotal = document.getElementById("total");
const resetButton = document.getElementById("reset-button");

let percent;
let colorChanger;
let billValue = 0;

function updateInfo() {
  let total_amount = Number(billInput.value);
  let numberOfPeople = Number(number_Of_People.value);
  if (!percent || numberOfPeople === 0) {
    return;
  }
  let tipAmount = (total_amount * percent) / 100 / numberOfPeople;
  let total = ((total_amount * percent) / 100 + total_amount) / numberOfPeople;
  tip_amount.textContent = "$" + tipAmount.toFixed(2);
  eachPersonTotal.textContent = "$" + total.toFixed(2);
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

number_Of_People.addEventListener("input", () => {
  updateInfo();
});

customInput.addEventListener("input", (event) => {
  percent = parseInt(event.target.value);
});
