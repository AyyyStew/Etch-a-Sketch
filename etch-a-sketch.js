var grid_width = 16
var grid_height = 16

function drawGrid(width, height){
    console.log(`Pixels to be draw: ${width*height}`)

    for(let i = 0; i < (grid_height*grid_height) ; i++){
        const pixel = document.createElement("div")
        pixel.classList.add("pixel")
        document.querySelector(".etch-a-sketch").appendChild(pixel)
    }

    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach(pixel => pixel.addEventListener('mouseover', (e) =>{
        pixel.classList.add("active-pixel")
    }))
}

function clearGrid(){
    const canvas = document.querySelector(".etch-a-sketch")

    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild)
    }
    
}

function newGrid(){
    clearGrid()
    drawGrid(grid_height, grid_width)
}

const clearButton = document.getElementById("clear")
clearButton.addEventListener('click', newGrid)

newGrid()






