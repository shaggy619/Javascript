let outputParagraph = document.querySelector(".display-paragraph");
let calculation = localStorage.getItem("calculation");
updateCalculation("");
function updateCalculation(value) {
  outputParagraph.innerHTML = calculation += value;
  localStorage.setItem("calculation", calculation);
}
