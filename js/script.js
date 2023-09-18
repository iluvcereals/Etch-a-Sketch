const container = document.querySelector(".container");

function createGrid(size){
    for(let i = 0; i < size; i++){
        createRow(size);
    }
    
}

function createRow(size){
    for (let i = 0; i < size; i++){
        let div = document.createElement("div");
        container.append(div);
        for (let j = 0; j < size; j++){
            let box = document.createElement("div");
            div.append(box);
            box.style.border = "1px solid black";
        }
    }

    
}

createRow(64)