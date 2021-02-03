const popUp = document.createElement("div");
const popUpBtn = document.createElement("button");
const popUpText = document.createElement("span");

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