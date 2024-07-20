const input = document.getElementById("input");
const cf = document.getElementById("cf");
const fc = document.getElementById("fc");
const result = document.getElementById("result");

function convert() {
    const inputValue = parseFloat(input.value);
    if (isNaN(inputValue)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    if (cf.checked) {
        result.textContent = `${(inputValue * 1.8 + 32).toFixed(1)} °F`;
    } else if (fc.checked) {
        result.textContent = `${((inputValue - 32) / 1.8).toFixed(1)} °C`;
    } else {
        result.textContent = "Select a unit";
    }
}
