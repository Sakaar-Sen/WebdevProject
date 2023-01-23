var countEl = document.getElementById('count')
var sumEl = document.getElementById('sum')
var statusEl = document.getElementById('status')
var playbtnEl = document.getElementById("play-btn")

var resetbtnEl = document.getElementById("reset-btn")
var chipsEl = document.getElementById("chips")
var amtEl = document.getElementById("amt")
var chips = 20
var amt = 2 

function startgame(){
    statusEl.style.visibility = "visible"
    rendergame()
}

function resetgame(){
    chips = 20
    chipsEl.textContent = "Your Chips: " + chips
    statusEl.textContent = "‎" 
    countEl.textContent = "You Got: " 
    sumEl.textContent = "Sum: "
}

function rendergame(){
    amt = amtEl.value
    if(amt > chips){
        alert("You are betting more chips than you have.")
        return 0
    }

    var firstnum = Math.floor(Math.random() * 6 + 1)
    var secondnum = Math.floor(Math.random() * 6 + 1)
    var sum = firstnum + secondnum

    countEl.textContent = "You Got: " + firstnum + " " + secondnum
    sumEl.textContent = "Sum: " + sum

    var choice;
    var choiceLess = document.getElementById("less")
    var choiceEqual = document.getElementById("equal")
    var choiceMore = document.getElementById("more")
    if(choiceLess.checked){
        choice = "less"
    }
    if(choiceEqual.checked){
        choice = "equal"
    }
    if(choiceMore.checked){
        choice = "more"
    }
  


    if((sum < 7 && choice === "less") || (sum === 7 && choice === "equal") || (sum > 7 && choice === "more")){
        statusEl.textContent = "WON"
        
        if(choice === "equal"){
            chips += +(amt*2)
        } else{
            chips += +amt
        }
        chipsEl.textContent = "Your Chips: " + chips
        
        
    } else{
        statusEl.textContent = "LOST" 
        chips -= +amt
        chipsEl.textContent = "Your Chips: " + chips
    }

    if(chips === 0){
        setTimeout(()=>{
            alert("You have lost the game.")
            chips = 20
            chipsEl.textContent = "Your Chips: " + chips
            statusEl.textContent = "‎" 
            countEl.textContent = "You Got: " 
            sumEl.textContent = "Sum: "
        }, 10)
         
    }

    if(chips >= 200){
        setTimeout(()=>{
            alert("You have WON the game!")
            chips = 20
            chipsEl.textContent = "Your Chips: " + chips
            statusEl.textContent = "‎" 
            countEl.textContent = "You Got: " 
            sumEl.textContent = "Sum: " 

        }, 10)
        
    }
}


var audio = document.getElementById("myAudio");

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}