const main = document.querySelector('.main')
const container = document.querySelector('.container')

for(let i = 0; i < 16; i++){
    const newDiv = document.createElement('div')
    newDiv.classList.add('container')
    main.appendChild(newDiv)
}

