function resizeCSSGrid(width, height, gridContainer){
    gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${height}, 1fr)`
    
    return
}

function drawGrid(width, height){
    console.log(`Pixels to be draw: ${width*height}`)

    const canvas = document.querySelector(".etch-a-sketch")
    resizeCSSGrid(width, height, canvas)
    // create the pixels
    for(let i = 0; i < (width*height) ; i++){
        const pixel = document.createElement("div")

        pixel.classList.add("pixel") //add the basic pixel styling to the pixels
        pixel.addEventListener('mouseover', (e) =>{
                pixel.classList.add("active-pixel") //add the mouseover even to the pixels
        })

        canvas.appendChild(pixel) //add the pixels to the dom
    }

    return
}

function clearGrid(){
    const canvas = document.querySelector(".etch-a-sketch")
    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild)
    }

    return
}



function newGrid(){
    clearGrid()
    
    const canvasWidth = document.getElementById('width').value
    const canvasHeight = document.getElementById('height').value
    console.log(canvasHeight, canvasWidth)

    drawGrid(canvasHeight, canvasWidth)

    return
}

const clearButton = document.getElementById("new-canvas")
clearButton.addEventListener('click', newGrid)

newGrid()