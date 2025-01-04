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
slider.addEventListener("touchend", sliderChange);

let erasePress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", penPress);
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => {e.target.style.backgroundColor = "white"});
    }
}

document.getElementById("erase").addEventListener("click", erasePress);

let penPress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", erasePress);
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
    }
}

document.getElementById("pen").addEventListener("click", penPress);

let clearPress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].style.backgroundColor = "white";
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", penPress);
    }
}

document.getElementById("clear").addEventListener("click", clearPress);

let rand = () => {
    return Math.floor(Math.random()*255);
}

let rainbowPress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", erasePress);
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", penPress);
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => {e.target.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`});
    }
}

document.getElementById("rainbow").addEventListener("click", rainbowPress);

