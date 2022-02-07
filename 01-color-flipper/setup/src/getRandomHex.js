import getRandomInt from "./getRandomInt.js";

export default function getRandomHex(hexArr) {
    const hex = ['#',
        hexArr[getRandomInt(hexArr)],
        hexArr[getRandomInt(hexArr)],

        hexArr[getRandomInt(hexArr)],
        hexArr[getRandomInt(hexArr)],

        hexArr[getRandomInt(hexArr)],
        hexArr[getRandomInt(hexArr)],
    ]

    return hex.join('');
}