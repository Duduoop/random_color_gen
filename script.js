const containerEl = codument.querySelector(".container");

for (let index=0; index < 30; index++) {
    const colorContainerEL = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generatorCOlors();

function generateColors() {
    colorContainersEls.forEach((colorContainerEl)=> {
        const newColorCode = randomColor();
        colorContainerEL.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

function randomColor () {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}