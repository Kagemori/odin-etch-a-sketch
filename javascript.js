const container = document.querySelector("#container");

for (let i = 0; i < (16*16); i++){
    const square = document.createElement("div")
    square.classList.add("square");
    container.append(square);
}

const squares = document.querySelectorAll(".square");

squares.forEach((element) => {
    element.addEventListener("mouseenter", () =>{
        if(element.classList.contains("colored")){

        }else{
            element.classList.add("colored");
        }
    })
})