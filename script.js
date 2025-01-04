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
            gridElement.addEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
            gridElement.addEventListener("touchstart", e => {
                e.preventDefault();
                e.target.style.backgroundColor = "black"; 
            }); 
            gridElement.addEventListener("touchmove", e => { 
                e.preventDefault(); 
                let touch = e.touches[0]; 
                let element = document.elementFromPoint(touch.clientX, touch.clientY); 
                if (element && element.classList.contains("gridElement")) {
                    element.style.backgroundColor = "black"; 
                }});
            rowContainer.appendChild(gridElement);
        }
        container.appendChild(rowContainer);
    }
}

let slider = document.getElementsByClassName("slider")[0];
slider.addEventListener("mouseup", sliderChange);
slider.addEventListener("touchend", sliderChange);
sliderChange();

let erasePress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", e => {e.target.style.backgroundColor = "black"});
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", penPress);
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", penPress);
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => {e.target.style.backgroundColor = "white"});
        document.getElementsByClassName("gridElement")[i].addEventListener("touchmove", e => {e.target.style.backgroundColor = "white"});
    }
}

document.getElementById("erase").addEventListener("click", erasePress);

let penPress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].removeEventListener("mouseover", erasePress);
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", erasePress);
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", e => {e.target.style.backgroundColor = "black"});
        document.getElementsByClassName("gridElement")[i].addEventListener("touchmove", e => {e.target.style.backgroundColor = "black"});
    }
}

document.getElementById("pen").addEventListener("click", penPress);

let clearPress = () => {
    let sliderValue = document.getElementsByClassName("slider")[0].value;
    for (let i=0; i<sliderValue**2; i++){
        document.getElementsByClassName("gridElement")[i].style.backgroundColor = "white";
        document.getElementsByClassName("gridElement")[i].addEventListener("mouseover", penPress);
        document.getElementsByClassName("gridElement")[i].addEventListener("touchmove", penPress);
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

        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", erasePress);
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", penPress);
        document.getElementsByClassName("gridElement")[i].removeEventListener("touchmove", e => {e.target.style.backgroundColor = "black"});
        document.getElementsByClassName("gridElement")[i].addEventListener("touchmove", e => {e.target.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`});
    }
}

document.getElementById("rainbow").addEventListener("click", rainbowPress);

