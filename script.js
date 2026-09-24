let count = 0;

// const is used here because this element reference should stay the same
// while the page is running. We do not want to reassign it to a different DOM node.
const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

function updateDisplay() {
  countDisplay.textContent = count;
}

increaseButton.addEventListener("click", function () {
  count += 1;
  updateDisplay();
});

decreaseButton.addEventListener("click", function () {
  if (count > 0) {
    count -= 1;
    updateDisplay();
  }
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
