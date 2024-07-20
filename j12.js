const display = document.getElementById("display");

function inputValue(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value) || "";
  } catch (e) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
