const container = document.getElementById("container");

for (let i=0; i<16; i++){
    let rowContainer = document.createElement("div")
    rowContainer.className = "rowContainer";
    for (let j=0; j<16; j++){
        let gridElement = document.createElement("div")
        gridElement.className = "gridElement";
        gridElement.addEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
        rowContainer.appendChild(gridElement);
    }
    container.appendChild(rowContainer);
}

let slider = document.getElementsByClassName("slider")[0]
let sliderValue = document.getElementById("sliderValue")
sliderValue.textContent = `${slider.value} x ${slider.value}`;

slider.addEventListener("mouseup", e => {sliderValue.textContent = `${e.target.value} x ${e.target.value}`});