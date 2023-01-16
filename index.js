const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const numero1 = document.querySelector("#calculo1");
const numero2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");
const errors = document.querySelector("#errors");

form.addEventListener("submit", sumasion);

function removeErrors() {
  errors.classList.remove("showErrors");
  errors.innerHTML = "";
  errors.classList.add("hideErrors");
}
function addErrors() {
  pResult.innerHTML = "";
  errors.innerHTML =
    "El valor del primer número debe de ser mayor al del segundo";
  errors.classList.add("showErrors");
}

function sumasion(event) {
  event.preventDefault();
  removeErrors();
  const { num1, num2 } = {
    num1: Number(numero1.value),
    num2: Number(numero2.value)
  };

  if (num1 <= num2) {
    addErrors();
    return;
  }

  const sumaTotal = num1 + num2;
  pResult.innerHTML = "Resultado : " + sumaTotal;
}
