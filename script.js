let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("result").value = currentInput;
}

function appendOperator(operator) {
  if (currentInput !== "") {
    currentInput += " " + operator + " ";
    document.getElementById("result").value = currentInput;
  }
}

function clearResult() {
  currentInput = "";
  document.getElementById("result").value = "";
}

function calculateResult() {
  try {
    // Reemplazamos la notación de potencia (^) por el operador **
    currentInput = currentInput.replace("^", "**");

    // Evaluar la expresión usando eval()
    currentInput = eval(currentInput).toString();
    document.getElementById("result").value = currentInput;
  } catch (e) {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}
