function append(value: string): void {
  const resultInput = document.getElementById("result") as HTMLInputElement;
  resultInput.value += value;
}

function clearDisplay(): void {
  const resultInput = document.getElementById("result") as HTMLInputElement;
  resultInput.value = '';
}

function deleteLast(): void {
  const resultInput = document.getElementById("result") as HTMLInputElement;
  resultInput.value = resultInput.value.slice(0, -1);
}

function calculate(): void {
  const resultInput = document.getElementById("result") as HTMLInputElement;
  try {
      resultInput.value = eval(resultInput.value); // Use eval safely
  } catch {
      resultInput.value = 'Error';
  }
}

function calculateSquare(): void {
  const resultInput = document.getElementById("result") as HTMLInputElement;
  let value = parseFloat(resultInput.value);
  resultInput.value = (value * value).toString();
}

function calculateSquareRoot(): void {
  const resultInput = document.getElementById("result") as HTMLInputElement;
  let value = parseFloat(resultInput.value);
  resultInput.value = Math.sqrt(value).toString();
}

function calculateInverse(): void {
  const resultInput = document.getElementById("result") as HTMLInputElement;
  let value = parseFloat(resultInput.value);
  resultInput.value = (1 / value).toString();
}

function calculateFactorial(): void {
  const resultInput = document.getElementById("result") as HTMLInputElement;
  let value = parseInt(resultInput.value);
  resultInput.value = factorial(value).toString();
}

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function toggleTheme(): void {
  document.body.classList.toggle('dark-mode');
}
