import getRandomInt from "./getRandomInt.js";
import getRandomColor from "./getRandomColor.js";
const colorFlipper = (() => {
    // Colors to circle around.
    const simpleColors = ["green", "red", "rgba(133,122,200)", "#f15025"];

    // Span element
    const spanToChange = document.querySelector('.color');
    // Button that you will click to change colors.
    const mainBtn = document.getElementById('btn');


    // Event that changes the background color and the span text
    mainBtn.onclick = () =>{
        let randColor = getRandomColor(simpleColors);
        document.body.style.backgroundColor = randColor;
        spanToChange.textContent = randColor;

    }
})();


