let gameSeq=[];
let userSeq=[];
let started = false;
let level = 0;
let h3 = document.querySelector('h3');
let btns =["yellow","red","purple","green"]
let btn=document.querySelector(".btn")
let allbtns=document.querySelectorAll(".btn")
let body = document.querySelector("body");

document.addEventListener("keypress", startGame);

startBtn.addEventListener("click", startGame);

function startGame() {
    if (!started) {
        started = true;
        level = 0;
        gameSeq = [];
        userSeq = [];
        h3.innerText = `Level ${level}`;
        startBtn.style.display = "none";
        levelUp();
    }
}

function btnflash (btn){

    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove('flash');
    },300);
}
function levelUp(){
    level++;
    userSeq=[];
    h3.innerText=`Level ${level}`;
    randidx= Math.floor(Math.random()*4);
    let randomcolor=btns[randidx];
    let randombtn= document.querySelector(`.${randomcolor}`)
    btnflash(randombtn);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
}
function checkans(idx){
    if(userSeq[idx]==gameSeq[idx]){
         if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
         }
    }
    else{
         h3.innerHTML =`<h3>You Lost The Game Is Over!!<br>Your Score Was ${level}<br>Press any key to start Or Refresh If On Mobile</h3>`
        body.classList.add('redflash')
        setTimeout(function(){
            body.classList.remove('redflash');
        },300)
        highest();
        reset();
    }
}
function btnpress(){
    let btn = this
      btnflash(btn)
       usercolor = btn.getAttribute("id")
       userSeq.push(usercolor);
       console.log(userSeq); 
       console.log(gameSeq);
          checkans(userSeq.length-1);
}
    
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
    started= false;
    gameSeq=[];
    level=0;
}
let h2 =document.querySelector('h2');
let highestscore=0
 function highest(){
    if(level>highestscore){
        highestscore=level;
        h2.innerText=`Highest Score Is ${highestscore}`

    }
 }


