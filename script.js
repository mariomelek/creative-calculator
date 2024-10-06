// Function to append a value to the display
function append(value) {
    var resultInput = document.getElementById("result");
    resultInput.value += value;
}
// Function to clear the display
function clearDisplay() {
    var resultInput = document.getElementById("result");
    resultInput.value = '';
}
// Function to delete the last character from the display
function deleteLast() {
    var resultInput = document.getElementById("result");
    resultInput.value = resultInput.value.slice(0, -1);
}
// Function to calculate the result
function calculate() {
    var resultInput = document.getElementById("result");
    try {
        resultInput.value = eval(resultInput.value); // Use eval safely
    }
    catch (_a) {
        resultInput.value = 'Error';
    }
}
// Function to toggle the dark mode theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
