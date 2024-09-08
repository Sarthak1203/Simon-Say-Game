let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let heighestScore=[];
let btns=["yellow","red","purple","green",];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelup(){
    userSeq=[];
    level++;
    
    h2.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randColor=btns[randInd];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        heighestScore.push(level);
        h2.innerHTML=`Game Over! Your score was <b>${level}<b><br> Your heighest score is ${Math.max(...heighestScore)}<br>Press any key to start.`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
    console.log(heighestScore);
}