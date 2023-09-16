const container = document.querySelector(".container");

let isPressed = false;
function setGrid(size){
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
        let box = document.createElement("div");
        box.style.minHeight = "40px";
        box.style.minWidth = "40px";
        box.style.border = "1px solid black";
        box.style.margin = "0";
        box.style.flex = "1";
        container.append(box);
        container.addEventListener('mousedown', e => isPressed = true)
        container.addEventListener('mouseup', e => isPressed = false)
        container.addEventListener('mouseover', e => {
            if(isPressed){
                e.target.style.backgroundColor = color;
            }
        });
        }
    }
}
let color = "black";
const erase = document.querySelector(".erase");
const draw = document.querySelector(".draw");
erase.addEventListener("click", e => {
    color = "white";
});

draw.addEventListener("click", e => {
    color = "black";
});
setGrid(18);
