var counter = document.querySelector(".counter");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var count = 0;
plus.addEventListener("click", () => {
  counter.innerHTML = `${count++}`;
});
minus.addEventListener("click", () => {
  if (count > 0) {
    counter.innerHTML = `${count--}`;
  }
});
