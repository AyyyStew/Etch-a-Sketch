const grid_width = 16
const grid_height = 16

for(let i = 0; i < (grid_height*grid_height) ; i++){
    const pixel = document.createElement("div")
    pixel.classList.add("pixel")
    document.body.appendChild(pixel)
}