export default function getRandomInt(param) {
    const arrayLength = param.length;
    
    if (Array.isArray(param)) {

        const randomNum = Math.floor(Math.random() * arrayLength);
        return randomNum;


    }

    return Math.ceil(Math.random() * param);

}