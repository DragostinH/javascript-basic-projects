const website = (() => {
    const value = document.getElementById('value');
    const btnDecrease = document.querySelector('.decrease');
    
    btnDecrease.onclick = () => {
        value.innerText--;
    }
    const btnReset = document.querySelector('.reset');
    btnReset.onclick = () => {
        value.innerText = 0;
    }
    const btnIncrease = document.querySelector('.increase');
    btnIncrease.onclick = ()=>{
        value.innerText++;
    }


})();