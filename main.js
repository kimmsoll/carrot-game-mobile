const screen = document.querySelector(".screen");
const gameBtn = document.querySelector(".header__gameBtn");
const gameTimer = document.querySelector(".header__gameTimer");
const gameField = document.querySelector(".gameField");
const gameScore = document.querySelector(".header__gameScore");
const popUp = document.createElement("div");
const popUpBtn = document.createElement("button");
const popUpText = document.createElement("span");

const carrotSound = new Audio("sound/carrot_pull.mp3");
const bugSound = new Audio("sound/bug_pull.mp3");
const bg = new Audio("sound/bg.mp3");
const winSound= new Audio("sound/game_win.mp3");

const carrot = [];
const bug = [];

let score = 3;
let count = 3;
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

function createPopUp(){
    popUp.setAttribute("class", "pop-up");
    popUpBtn.setAttribute("class", "pop-up__button");
    popUpText.setAttribute("class", "pop-up__text");
    popUp.appendChild(popUpBtn);
    popUp.appendChild(popUpText);
    popUpBtn.innerHTML = `<i class="fas fa-redo"></i>`;
    popUpBtn.addEventListener("click", ()=>{
        window.location.reload();
        startGame();
    })
    screen.appendChild(popUp);
}

function popUpReplay(){
    createPopUp();
    popUpText.innerText = "Replay?👀";
}

function popUpWin(){
    bg.pause();
    winSound.play();
    createPopUp();
    popUpText.innerText = "Congrats!🎉";
}

function popUpLost(){
    bg.pause();
    bugSound.play();
    createPopUp();
    popUpText.innerText = "You lose~🙉";
}

function createImage(){
    for(let i=0; i<=2; i++){
        carrot[i] = document.createElement("img");
        carrot[i].src = "images/carrot.png";
        carrot[i].setAttribute("class", "carrot");
        gameField.appendChild(carrot[i]);
                
        bug[i] = document.createElement("img");
        bug[i].src = "images/bug.png";
        bug[i].setAttribute("class", "bug");
        gameField.appendChild(bug[i]);
        bug[i].addEventListener("click", ()=>{
            stopGame();
            popUpLost();
        });
        
        fieldH = gameField.clientHeight -90;
        fieldW = gameField.clientWidth -200;
        
        carrotH = carrot[i].clientHeight;
        carrotW = carrot[i].clientWidth;
        availSpace_V = fieldW - carrotW;
        availSpace_H = fieldH - carrotH;
    }
    moveImage();
    catchCarrot();    
}

function moveImage(){    
    for(let i=0; i<=2; i++){
    carrot[i].style.transform = `translate(${Math.round(Math.random() * availSpace_H) + "px"}, ${Math.round(Math.random() * availSpace_V) + "px"})`;
    bug[i].style.transform = `translate(${Math.round(Math.random() * availSpace_H) + "px"}, ${Math.round(Math.random() * availSpace_V) + "px"})`;
}
}

function catchCarrot(){
for(let i=0; i<=2; i++){
    carrot[i].addEventListener("click", ()=>{
        gameField.removeChild(carrot[i]);
        if(true){
            carrotSound.play();
            score = score - 1;
            gameScore.innerHTML = score;
            if(score <= 0){
                stopGame();
                popUpWin();
            }
        }
    })
}
}
