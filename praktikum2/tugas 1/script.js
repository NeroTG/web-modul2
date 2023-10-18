function clearDisplay() {
  document.querySelector('input[name="display"]').value = "";
}

function deleteLastChar() {
  var display = document.querySelector('input[name="display"]');
  display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
  document.querySelector('input[name="display"]').value += character;
}

function calculateResult() {
  var display = document.querySelector('input[name="display"]');
  // Mengganti simbol modulus (%) dengan regex (regular expression)
  var evalExpression = display.value.replace(/\%/g, "%");
  // Mengganti simbol pangkat (^) dengan simbol ** untuk perhitungan eksponen / pemangkatan
  evalExpression = evalExpression.replace(/\^/g, "**");

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
