let gameSeq=[];
let userSeq =[];

let btns =["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started=true;

        levelUp();
    }
});
 
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    
    //random btn choose
    let rndIdx = Math.floor(Math.random()*4);
    let rndCol = btns[rndIdx];
    let rndbtn = document.querySelector(`.${rndCol}`);
    gameSeq.push(rndCol);
    console.log(gameSeq);
    gameFlash(rndbtn);
}

function checkAns(indx){
    // console.log(`current level ${level}`);
    // let indx = level-1;k

    if(userSeq[indx] == gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText = `Game over! Your score was ${level}, press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
       setTimeout( function(){
        document.querySelector("body").style.backgroundColor = "white"
       },1000);
        reset();
    }
}

function btnPress(){
   let btn =this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started =false;
    gameSeq= [];
    userSeq=[];
    level = 0;

}