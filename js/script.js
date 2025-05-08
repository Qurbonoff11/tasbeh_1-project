/* DOCUMENT */
const $HTML = document;

/* GET ELEMENTS */
let calcNumber = $HTML.querySelector(".screen-num");
let resetBtn = $HTML.querySelector(".res-btn");
let plusBtn = $HTML.querySelector(".plus-btn");

let num = 0;
calcNumber.innerHTML = num;
plusBtn.addEventListener("click", () => {
  calcNumber.innerHTML++;

  if (parseInt(calcNumber.innerHTML) >= 34) {
    calcNumber.innerHTML = 0
  }
});

$HTML.addEventListener("keydown", (event) => {

  if (event.key === "+" && parseInt(calcNumber.innerHTML) >= 0) {
    calcNumber.innerHTML++;
    if (calcNumber.innerHTML >= 34) {
      calcNumber.innerHTML = 0
    }
  }
});

resetBtn.addEventListener("click", () => {
  calcNumber.innerHTML = 0
})

$HTML.addEventListener("keydown", (even) => {
  if (even.key === "0" && parseInt(calcNumber.innerHTML) > 0) {
    calcNumber.innerHTML = 0
    console.log(even.key);
  }
})