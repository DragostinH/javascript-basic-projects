import getRandomHex from "./getRandomHex.js";
import getRandomInt from "./getRandomInt.js";

const hexPage = (() => {

    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    
    const spanToChange = document.querySelector('.color');
    
    const mainBtn = document.getElementById('btn');
    
    mainBtn.onclick = () => {
        let randomHexColor = getRandomHex(hexArr);
        document.body.style.backgroundColor = randomHexColor;
        spanToChange.textContent = randomHexColor;

    }


})();
