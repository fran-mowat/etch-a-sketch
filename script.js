const container = document.getElementById("container");

let sliderChange = () => {
    let sliderValue = document.getElementById("sliderValue");
    sliderValue.textContent = `${slider.value} x ${slider.value}`;

    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    for (let i=0; i<slider.value; i++){
        let rowContainer = document.createElement("div");
        rowContainer.className = "rowContainer";

        for (let j=0; j<slider.value; j++){
            let gridElement = document.createElement("div");
            gridElement.className = "gridElement";
            gridElement.addEventListener("mouseover", e => blackColour(e));
            gridElement.addEventListener("touchstart", e => blackColour(e)); 
            gridElement.addEventListener("touchmove", e => mobileBlackColour(e));
            rowContainer.appendChild(gridElement);
        }
        container.appendChild(rowContainer);
    }
}

const mobileBlackColour = (e) => {
    e.preventDefault(); 
    let touch = e.touches[0]; 
    let element = document.elementFromPoint(touch.clientX, touch.clientY); 
    if (element && element.classList.contains("gridElement")) {
        element.style.backgroundColor = "black"; 
    }
};

const blackColour = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "black";
};

let slider = document.getElementsByClassName("slider")[0];
slider.addEventListener("mouseup", sliderChange);
slider.addEventListener("touchend", sliderChange);
sliderChange();

let erasePress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => blackColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", e => mobileBlackColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchstart", e => blackColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => rainbowColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", e => mobileRainbowColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchstart", e => rainbowColour(e)); 
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => whiteColour(e));
        document.getElementsByClassName("gridElement")[i].addEventListener("touchmove", e => mobileWhiteColour(e));
        document.getElementsByClassName("gridElement")[i].addEventListener("touchstart", e => whiteColour(e)); 
    }
}

const mobileWhiteColour = (e) => {
    e.preventDefault(); 
    let touch = e.touches[0]; 
    let element = document.elementFromPoint(touch.clientX, touch.clientY); 
    if (element && element.classList.contains("gridElement")) {
        element.style.backgroundColor = "white"; 
    }
};

const whiteColour = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "white";
};

document.getElementById("erase").addEventListener("click", erasePress);

let penPress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => blackColour(e));
        document.getElementsByClassName("gridElement")[i].addEventListener("touchmove", e => mobileBlackColour(e));
        document.getElementsByClassName("gridElement")[i].addEventListener("touchstart", e => blackColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => rainbowColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", e => mobileRainbowColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchstart", e => rainbowColour(e)); 
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => whiteColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", e => mobileWhiteColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchstart", e => whiteColour(e)); 
    }
}

document.getElementById("pen").addEventListener("click", penPress);

let clearPress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].style.backgroundColor = "white";
    }
    penPress();
}

document.getElementById("clear").addEventListener("click", clearPress);

let rand = () => {
    return Math.floor(Math.random()*255);
}

let rainbowPress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => blackColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", e => mobileBlackColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchstart", e => blackColour(e));
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => rainbowColour(e));
        document.getElementsByClassName("gridElement")[i].addEventListener("touchmove", e => mobileRainbowColour(e));
        document.getElementsByClassName("gridElement")[i].addEventListener("touchstart", e => rainbowColour(e)); 
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => whiteColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", e => mobileWhiteColour(e));
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchstart", e => whiteColour(e)); 
    }
}

const mobileRainbowColour = (e) => {
    e.preventDefault(); 
    let touch = e.touches[0]; 
    let element = document.elementFromPoint(touch.clientX, touch.clientY); 
    if (element && element.classList.contains("gridElement")) {
        element.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
    }
};

const rainbowColour = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
};

document.getElementById("rainbow").addEventListener("click", rainbowPress);

