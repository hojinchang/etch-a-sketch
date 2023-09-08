const gridContainer = document.querySelector(".grid-container");
const sliderInput = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-text");
const clearButton = document.querySelector(".clear-button");
const colourPicker = document.getElementById("colour-picker");
const colouredTile = document.querySelector(".coloured-tile");
const colourFillButton = document.querySelector(".colour-fill-button");
const rainbowFillButton = document.querySelector(".rainbow-fill-button");
const buttons = document.querySelectorAll(".colour-fill-button, .rainbow-fill-button, .clear-button");



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

function resetGrid(gridWidth, gridSize) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    createGrid(gridWidth, gridSize);
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return [r, g, b]
}

function fillTiles(e, tileColour) {
    if (e.target.classList.contains("tile")) {
        if (fillMode === "colour") {
            e.target.style.backgroundColor = tileColour;
        } else if (fillMode ==="rainbow") {
            rgb = randomRGB();
            e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        }
    }
}

function toggleButtonHover(e, button) {
    if (e.type === "mouseover") {
        button.classList.add("button-hover");
    } else if (e.type === "mouseout") {
        button.classList.remove("button-hover");
    }
}



let gridSize = sliderInput.value;
const gridWidth = parseInt(getComputedStyle(gridContainer).width, 10);
createGrid(gridWidth, gridSize);


let fillMode = "colour";
colourFillButton.style.backgroundColor = "#EEE0C9";
colourFillButton.addEventListener("click", function() {
    fillMode = "colour";
    colourFillButton.style.backgroundColor = "#EEE0C9";
    rainbowFillButton.style.backgroundColor = "#F1F0E8";
})

rainbowFillButton.addEventListener("click", function() {
    fillMode = "rainbow";
    rainbowFillButton.style.backgroundColor = "#EEE0C9";
    colourFillButton.style.backgroundColor = "#F1F0E8";
})

clearButton.addEventListener("click", function() {
    resetGrid(gridWidth, gridSize);
});

sliderInput.addEventListener("input", function() {
    gridSize = sliderInput.value;
    sliderText.textContent = `${gridSize} x ${gridSize}`;
    resetGrid(gridWidth, gridSize);
});

buttons.forEach(button => {
    button.addEventListener("mouseover", function(e) {
        toggleButtonHover(e, button);
    })

    button.addEventListener("mouseout", function(e) {
        toggleButtonHover(e, button);
    })
})

let tileColour = "#000000";
colourPicker.addEventListener("input", function() {
    tileColour = colourPicker.value;
});

gridContainer.addEventListener("mouseover", function(e) {
    fillTiles(e, tileColour);
});