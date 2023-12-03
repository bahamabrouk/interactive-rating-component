const rate1 = document.getElementById("rating-1");
const rate2 = document.getElementById("rating-2");
const rate3 = document.getElementById("rating-3");
const rate4 = document.getElementById("rating-4");
const rate5 = document.getElementById("rating-5");
const result = document.getElementById("xNumber");

rate1.addEventListener("click", function onClick(event) {
  rate1.style.backgroundColor = "hsl(217, 12%, 63%)";
  rate2.style.backgroundColor = "hsl(217, 12%, 21%) ";
  rate3.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate4.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate5.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate1.style.color = "white";
  result.innerHTML = "1";
});

rate2.addEventListener("click", function onClick(event) {
  rate2.style.backgroundColor = "hsl(217, 12%, 63%)";
  rate1.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate3.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate4.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate5.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate2.style.color = "white";
  result.innerHTML = "2";
});
rate3.addEventListener("click", function onClick(event) {
  rate3.style.backgroundColor = "hsl(217, 12%, 63%)";
  rate1.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate2.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate4.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate5.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate3.style.color = "white";
  result.innerHTML = "3";
});
rate4.addEventListener("click", function onClick(event) {
  rate4.style.backgroundColor = "hsl(217, 12%, 63%)";
  rate1.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate2.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate3.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate5.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate4.style.color = "white";
  result.innerHTML = "4";
});
rate5.addEventListener("click", function onClick(event) {
  rate5.style.backgroundColor = "hsl(217, 12%, 63%)";
  rate1.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate2.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate3.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate4.style.backgroundColor = "hsl(217, 12%, 21%)";
  rate5.style.color = "white";
  result.innerHTML = "5";
});

function submit() {
  let mainComponent = document.getElementById("main-component");
  let thanksComponent = document.getElementById("thanks-component");

  if ((mainComponent.style.display = "grid")) {
    mainComponent.style.display = "none";
    thanksComponent.style.display = "grid";
  }
}
