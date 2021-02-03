const gameBtn = document.querySelector(".header__gameBtn");
const gameTimer = document.querySelector(".header__gameTimer");
const gameScore = document.querySelector(".header__gameScore");

let count = 2;
let time = 0;
let btnClick = 0;

function startGame(){
    bg.play();
    gameField.innerHTML = "";
    createImage();
    time = setInterval("timer()", 1000);
    gameBtn.innerHTML = `<i class="fas fa-stop-circle"></i>`
}

function stopGame(){
    clearInterval(time);
}

gameBtn.addEventListener("click", ()=>{
    startGame();    
    btnClick++
if(btnClick > 1){
    popUpReplay();
}
});

function timer(){
    if( count != 0) {
        count = count-1;
        gameTimer.innerHTML = `0:${count}`;
    }else {
        stopGame();
        popUpReplay();
    }    
}
