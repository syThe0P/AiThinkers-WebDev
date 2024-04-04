const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const css = document.querySelector("h3");
const body = document.getElementById("body");

function addGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}

color1.addEventListener("input", addGradient);
color2.addEventListener("input", addGradient);
