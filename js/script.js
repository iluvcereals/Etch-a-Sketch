let gridSize = 16;
let penColor = "black";
let click = false;

console.log(gridSize);
const container = document.querySelector(".container");
container.addEventListener("click", clickToggle);


function clickToggle(){
    click = !click;
}


const erase = document.querySelector(".erase");
erase.addEventListener("click", eraseMode);

function eraseMode(){
    penColor = "white";
}

const draw = document.querySelector(".draw");
draw.addEventListener("click", drawMode);

function drawMode(){
    penColor = "black";
}

const random = document.querySelector(".random");
random.addEventListener("click", randomMode);

function randomMode(){
    penColor = "random";
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetMode);

function resetMode(){
    const divs = container.querySelectorAll("div");
    divs.forEach(div => {
        div.style.backgroundColor = "white";
    })
}

function startPaint(){
    if(click){
        if (penColor === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = penColor;
        }
    }
    
}




function createRow(size){
    for (let i = 0; i < size; i++){
        let div = document.createElement("div");
        container.append(div);
        for (let j = 0; j < size; j++){
            let box = document.createElement("div");
            div.append(box);
            box.style.border = "1px solid grey";
            box.addEventListener("mouseover", startPaint);
        }
    }
}

function emptyGrid(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
const footer = document.querySelector("footer");
const slider = document.querySelector("#slider");
const gridSizeValue = footer.querySelector("div");
slider.oninput = function(){
    console.log(this.value);
    emptyGrid(container);
    createRow(this.value)
    gridSizeValue.innerHTML = `${this.value}x${this.value}`
}
createRow(16);





