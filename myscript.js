function initialdraw() {
    drawGrid(32);
}

function drawGrid(gridSize) {
    container = document.querySelector(".container");
    container.style.display = 'grid';
    container.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;
    container.style['grid-auto-flow'] = 'row';

    fragmentBox = document.createDocumentFragment();

    for (let i = 0; i < gridSize; ++i) {
        for (let j = 0; j < gridSize; ++j) {
            div = document.createElement('div');
            div.className = 'normalBox gridPiece';
            div.addEventListener('mouseenter', changeColor);
            fragmentBox.appendChild(div);
        }
    }
    container.appendChild(fragmentBox);
}

function changeColor(event) {
    activeDiv = event.target;
    activeDiv.classList.replace('normalBox', 'hoverBox');
}

function resetGrid(event) {
    const allDiv = document.querySelectorAll("div");
    for (let singleNode of allDiv) {
        singleNode.classList.replace('hoverBox', 'normalBox');
    }
}

function resizeGrid(event) {
    let validInput = false;
    let input = Number(prompt("Please enter a positive integer up to 64"));
    if (typeof input == 'number' && (input > 0 && input <= 64)) {
        validInput = true;
    } else {
        alert("Invalid number. Please try again.");
    }

    if (validInput) {
        const deleteAll = document.querySelectorAll(".gridPiece");
        for (let singleNode of deleteAll) {
            singleNode.remove();
        }

        drawGrid(input);
    }

}

initialdraw();

const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener('click', resizeGrid);

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', resetGrid);


