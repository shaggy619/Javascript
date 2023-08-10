// 10d.
function isToggled(selector) {
  let btnD = document.querySelector(selector);
  if (!btnD.classList.contains("is-clicked")) {
    btnD.classList.add("is-clicked");
  } else {
    btnD.classList.remove("is-clicked");
  }
}
