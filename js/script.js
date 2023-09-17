const container = document.querySelector(".container");



function setGrid(size){
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
        let box = document.createElement("div");
        box.style.minHeight = "40px";
        box.style.minWidth = "40px";
        box.style.border = "1px solid black";
        box.style.flex = "1";
        container.append(box);
        box.addEventListener('mouseover', startDraw);
        }
    }
}
setGrid(18);


let color = "black";
const erase = document.querySelector(".erase");
const draw = document.querySelector(".draw");
const reset = document.querySelector(".reset");

reset.addEventListener("click", resetGrid);
erase.addEventListener("click", eraseColor);

draw.addEventListener("click", e => {
    color = "black";
});

function eraseColor(){
    color = "white";
}
function startDraw(){
    this.style.backgroundColor = color;
}

function resetGrid(){
    let divs = container.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
}
