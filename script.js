const gridContainer = document.querySelector(".grid-container");
const sliderInput = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");

function parseGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = gridContainer.appendChild(document.createElement("div"));
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);
        }
    }
}

function adjustSquareSize(gridWidth, gridSize) {
    const squares = document.querySelectorAll(".square");
    const squareSize = gridWidth / gridSize;

    squares.forEach(square => {
        square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`
    })
}

function createGrid(gridWidth, gridSize) {
    parseGrid(gridSize);
    adjustSquareSize(gridWidth, gridSize);
}

function adjustGrid(gridWidth, gridSize) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    sliderText.textContent = `${gridSize} x ${gridSize}`;
    createGrid(gridWidth, gridSize);
}





let gridSize = sliderInput.value;
const gridWidth = parseInt(getComputedStyle(gridContainer).width, 10);
createGrid(gridWidth, gridSize);


sliderInput.addEventListener("input", function() {
    gridSize = sliderInput.value;
    adjustGrid(gridWidth, gridSize);
});