let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game start");
        started = true;

        levelUp();
    }
});

function reset()
{
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
};

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
};

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randNum = Math.floor(Math.random() * 3);
    let randomColor = btns[randNum];
    let randbtn = document.querySelector(`.${randomColor}`);
    // console.log(randomColor);
    // console.log(randbtn);
    btnFlash(randbtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
};

function warning(){
    document.querySelector("body").style.backgroundColor="red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
};

function checkAns(idx) {
    // console.log("curr level: ",level);

    if (userSeq[idx] === gameSeq[idx]) {
        //console.log("same value")
        if (userSeq.length == gameSeq.length) {
           setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerHTML = `Game Over!!! Your score was <b>${level}</b> <br>Press any key to start.`;
        warning();
        reset();
    }
};

function btnPress() {
    let btn = this;
    btnFlash(btn)
    //console.log("this");
    let userColor = btn.getAttribute("id")
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click", btnPress);
};
