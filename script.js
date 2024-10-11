function append(value) {
    var resultInput = document.getElementById("result");

    const operators = ['+', '-', '*', '/', '%'];
    const lastChar = resultInput.value.slice(-1);

    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    if (operators.includes(value) && resultInput.value === '') {
        return;
    }

    resultInput.value += value;
}

function clearDisplay() {
    var resultInput = document.getElementById("result");
    resultInput.value = '';
}

function deleteLast() {
    var resultInput = document.getElementById("result");
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculate() {
    var resultInput = document.getElementById("result");
    try {
        if (resultInput.value.trim() === '') return;
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
