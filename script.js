const gridContainer = document.querySelector(".grid-container");


const sliderInput = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");


sliderInput.addEventListener("input", function() {
    const gridSize = sliderInput.value
    sliderText.textContent = `${gridSize} x ${gridSize}`;

});
console.log(sliderInput.value);