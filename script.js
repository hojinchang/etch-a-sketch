const gridContainer = document.querySelector(".grid-container");
const sliderInput = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");

function parseGrid (gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = gridContainer.appendChild(document.createElement("div"));
        for (let j = 0; j < gridSize; j++) {
            const tile = document.createElement("div");
            tile.className = "tile";
            row.appendChild(tile);
        }
    }
}

function adjusttileSize(gridWidth, gridSize) {
    const tiles = document.querySelectorAll(".tile");
    const tileSize = gridWidth / gridSize;

    tiles.forEach(tile => {
        tile.style.cssText = `width: ${tileSize}px; height: ${tileSize}px;`
    })
}

function createGrid(gridWidth, gridSize) {
    parseGrid(gridSize);
    adjusttileSize(gridWidth, gridSize);
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


gridContainer.addEventListener("mouseover", function(e) {
    if (e.target.classList.contains("tile")) {
        e.target.classList.remove("tile");
        e.target.classList.add("black-tile");
    }
})