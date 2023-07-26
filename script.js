const main = document.querySelector('.main')
const container = document.querySelector(".container")
const blackButton = document.querySelector(".black")
const randomButton = document.querySelector(".random")
const message = document.querySelector(".info")

const setGrid = document.querySelector(".setGrid")
const resetButton = document.querySelector(".reset")

function grid(){
    let squares = main.querySelectorAll(".container");
    squares.forEach((div) => {
        div.remove();
    })

    let newGrid = prompt("how many grids do you want to make?");

    if (newGrid === ""){
        message.innerHTML = "Please enter a number"
    } else if (newGrid <= 0 || newGrid > 100){
        message.innerHTML = "Please enter a number between 1 to 100"
    } else {
        message.remove()
        createGrid(newGrid);

    }

   
    main.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`
    main.style.gridTemplateRows = `repeat(${newGrid}, 1fr)`
}
setGrid.addEventListener("click", grid)

function createGrid(size){

    for (let i = 0; i < size*size; i++){
        const div = document.createElement("div");
        div.classList.add("container")
        main.appendChild(div)
    }
}

function reset(){
    let squares = main.querySelectorAll(".container") 
    squares.forEach((div) => {
        div.style.backgroundColor = "white"
    })
}
resetButton.addEventListener("click", reset)

createGrid(64) //default grid

function changeColor(color){
    const containers = document.querySelectorAll(".container");
    containers.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = color;
        });
    });
}



blackButton.addEventListener("click", () => {
    changeColor("black")
})

randomButton.addEventListener("click", () => {
    let randomColor = `hsl(${Math.random() * 360}. 100%, 50%)`
    
})


