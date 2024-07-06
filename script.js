let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];
 
let started=false;
let level=0;
let h2=document.querySelector("h2"); 
document.addEventListener("keypress",function(){
    if (started == false){
        console.log("game start");
        started = true;

        levelUp();
    }
    });
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function levelUp()
{
    level++;
    h2.innerText= `Level ${level}`;
    
    let randNum=Math.floor(Math.random()*3);
    let randomColor=btns[randNum];
    let randbtn=document.querySelector(`.${randomColor}`);
    // console.log(randomColor);
    // console.log(randbtn);
    btnFlash(randbtn);
    gameSeq.push(randomColor);
}
function checkAns()
{
 //console.log("curr level: ",level);

 let idx=level-1;
  
 if (userSeq[idx] === gameSeq[idx])
 {
  console.log("same value")
 }
 else{
    h2.innerText ="Game Over!!! Press any key to start.";
 }
}

function btnPress()
{
    let btn=this;
    btnFlash(btn)
    //console.log("this");
    let userColor= btn.getAttribute("id")
    //console.log(userColor);
    userSeq.push(userColor);
    checkAns();
}
 let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click",btnPress);
}
