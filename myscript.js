function initialdraw() {
    drawGrid(25);
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
            div.className = 'normalBox';
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

function resizeGrid(gridSize){
    
}

initialdraw();

resetButton = document.querySelector("#Reset");
resetButton.addEventListener('click', resetGrid);

resizeButton = document.querySelector("#Resize");

// const allDiv = document.querySelectorAll("div");
// for (let singleNode of allDiv) {
//     singleNode.classList.replace('normalBox', 'hoverBox');
// }


