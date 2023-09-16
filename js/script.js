const container = document.querySelector(".container");
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
        box.addEventListener('mouseover', e => {
            box.style.backgroundColor = "black";
        })
        }


    }
}

setGrid(18);
