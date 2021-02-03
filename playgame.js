const screen = document.querySelector(".screen");
const gameField = document.querySelector(".gameField");
const carrot = [];
const bug = [];
let score = 4;

function createImage(){
    for(let i=0; i<=3; i++){
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
        
        fieldH = gameField.clientHeight -150;
        fieldW = gameField.clientWidth -250;
        
        carrotH = carrot[i].clientHeight;
        carrotW = carrot[i].clientWidth;
        availSpace_V = fieldW - carrotW;
        availSpace_H = fieldH - carrotH;
    }
    moveImage();
    catchCarrot();    
}

function moveImage(){    
    for(let i=0; i<=3; i++){
    carrot[i].style.transform = `translate(${Math.round(Math.random() * availSpace_H) + "px"}, ${Math.round(Math.random() * availSpace_V) + "px"})`;
    bug[i].style.transform = `translate(${Math.round(Math.random() * availSpace_H) + "px"}, ${Math.round(Math.random() * availSpace_V) + "px"})`;
}
}

function catchCarrot(){
for(let i=0; i<=3; i++){
    carrot[i].addEventListener("click", ()=>{
        gameField.removeChild(carrot[i]);
        if(true){
            carrotSound.play();
            score = score - 1;
            gameScore.innerHTML = score;
            if(score <= 0){
                stopGame();
                popUpWin();
            }else if(count == 0){
                stopGame();
                popUpLost();
            }
        }
    })
}
}
