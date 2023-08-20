const container = document.getElementById("container");

for (let i=0; i<16; i++){
    let rowContainer = document.createElement("div")
    rowContainer.className = "rowContainer";
    for (let j=0; j<16; j++){
        let gridElement = document.createElement("div")
        gridElement.className = "gridElement";
        rowContainer.appendChild(gridElement);
    }
    container.appendChild(rowContainer);
}
