const container = document.querySelector(".container");
let click = false;



function setGrid(size){
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
        let box = document.createElement("div");
        box.style.minHeight = "40px";
        box.style.minWidth = "40px";
        box.style.border = "1px solid transparent";
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
const random = document.querySelector(".random");

reset.addEventListener("click", resetGrid);
erase.addEventListener("click", eraseColor);

draw.addEventListener("click", e => {
    color = "black";
});

random.addEventListener("click", randomize)

function eraseColor(){
    color = "white";
}
function startDraw(){
   if(click){
    if (color === "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
   }
}

function randomize(){
    color = "random";
}

function resetGrid(){
    let divs = container.querySelectorAll("div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
}


container.addEventListener("click", e => {
    click = !click;
})

container.addEventListener("mouseleave", e => {
    click = false;
})


