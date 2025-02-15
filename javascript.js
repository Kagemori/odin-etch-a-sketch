function makeNewGrid(gridsize){
    const container = document.querySelector("#container");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < (gridsize * gridsize); i++){
        const square = document.createElement("div")
        square.classList.add("square");
        container.append(square);
    }
}

function squareListener(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((element) => {
        element.addEventListener("mouseenter", () =>{
            if(element.classList.contains("colored")){
    
            }else{
                element.classList.add("colored");
            }
        })
    })
}

const grid = document.querySelector("#newgrid");

grid.addEventListener("click", () => {
    let size = parseInt(prompt("Enter new grid size (100 Max): "));

    if(typeof(size) != "number"){
        alert(size + " is not a number! Please try again!");
    }else if(size > 100){
        alert(size + " is too large!");
    }else{
        makeNewGrid(size);
        squareListener();
    }
})

// Initial - Default
makeNewGrid(16);
squareListener();