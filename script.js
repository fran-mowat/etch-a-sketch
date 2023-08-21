const container = document.getElementById("container");

for (let i=0; i<16; i++){
    let rowContainer = document.createElement("div");
    rowContainer.className = "rowContainer";
    for (let j=0; j<16; j++){
        let gridElement = document.createElement("div");
        gridElement.className = "gridElement";
        gridElement.addEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
        rowContainer.appendChild(gridElement);
    }
    container.appendChild(rowContainer);
}

let slider = document.getElementsByClassName("slider")[0];
let sliderValue = document.getElementById("sliderValue");
sliderValue.textContent = `${slider.value} x ${slider.value}`;

let sliderChange = e => {
    let pixels = e.target.value;
    sliderValue.textContent = `${pixels} x ${pixels}`;

    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    for (let i=0; i<pixels; i++){
        let rowContainer = document.createElement("div");
        rowContainer.className = "rowContainer";

        for (let j=0; j<pixels; j++){
            let gridElement = document.createElement("div");
            gridElement.className = "gridElement";
            gridElement.addEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
            rowContainer.appendChild(gridElement);
        }
        container.appendChild(rowContainer);
    }
}

slider.addEventListener("mouseup", sliderChange);

let erasePress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => {e.target.style.backgroundColor = "white"});
    }
}

document.getElementById("erase").addEventListener("click", erasePress);


