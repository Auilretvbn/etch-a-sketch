let gridSize = 16;

container = document.querySelector(".container");
container.style.display='grid';
container.style['grid-template-columns']=`repeat(${gridSize}, 1fr)`;
container.style['grid-template-rows']=`repeat(${gridSize}, 1fr)`;
container.style['grid-auto-flow']='row';

fragmentBox = document.createDocumentFragment();

for (let i = 0; i < gridSize; ++i){
    for (let j = 0; j < gridSize; ++j){
        div = document.createElement('div');
        div.className = 'normalBox';
        div.textContent = `${i} , ${j}`;
        fragmentBox.appendChild(div);
    }
}

container.appendChild(fragmentBox);
// const box = document.createElement('div');
// const box2 = document.createElement('div');
// const box3 = document.createElement('div');
// const box4 = document.createElement('div');

// box.textContent = "BOX1";
// box.style.border = "solid";
// box2.textContent = "BOX2";
// box3.textContent = "BOX3";
// box4.textContent = "BOX4";

// container.appendChild(box);
// container.appendChild(box2);
// container.appendChild(box3);
// container.appendChild(box4);