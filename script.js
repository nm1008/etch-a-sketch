const main = document.querySelector('.main')
const container = document.querySelector(".container")
const redButton = document.querySelector(".red")
const whiteButton = document.querySelector(".white")

function createGrid(size){

    for (let i = 0; i < size*size; i++){
        const div = document.createElement("div");
        div.classList.add("container")
        main.appendChild(div)
    }
}

function changeColor(color){
    const containers = document.querySelectorAll(".container");
    containers.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = color;
        });
    });
}

redButton.addEventListener("click", () => {
    changeColor("red")
})

whiteButton.addEventListener("click", () => {
    changeColor("white")
})

createGrid(16)
