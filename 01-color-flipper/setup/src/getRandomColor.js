import getRandomInt from "./getRandomInt.js";

export default function getRandomColor(arr){
    return arr[getRandomInt(arr)];
}