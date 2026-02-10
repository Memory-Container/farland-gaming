let choices = ["paper", "rock", "scissors"]
const weapons = {
   rock: {weakTo: 'paper', strongTo: 'scissors'},
   paper: {weakTo: 'scissors', strongTo: 'rock'},
   scissors: {weakTo: 'rock', strongTo: 'paper'}
}

let botChoice;
let choiceButton = document.querySelectorAll("button.choice")
let resultContainer = document.querySelector(".result")
let user = document.getElementById("user")
let bot = document.getElementById("bot")
let resetButton = document.querySelector("#reset")
let result
function choose(myChoice) {
    if (result || gameShard < 12) {
        return
    }
    botChoice = choices[Math.floor(Math.random() * 2)]
    if (myChoice == botChoice) {
        result = "Chả ai thắng cả"
        gameShard += 3
    }
    if (weapons[myChoice].strongTo === botChoice) {
        result = "Bạn thắng"
        gameShard += 8
    }

    if (weapons[myChoice].weakTo === botChoice) {
        result = "Máy tính thắng"
        gameShard -= 12
    }
    resetButton.classList.remove("disabled")
    updateShardCount()
    user.textContent = format(myChoice)
    bot.textContent = format(botChoice)
    resultContainer.textContent = result
}
function format(choices) {
    switch(choices) {
        case "paper":
            return "✋";
        case "rock":
            return  "👊";
        case "scissors":
            return "✌️" ;
    }
}
function RPSreset() {
    if (!result || gameShard < 12) {
        return
    }
    result = ''
    user.innerHTML = bot.innerHTML = `<i class="fa-solid fa-x"></i>`
    resultContainer.innerHTML = '&nbsp;'
    resetButton.classList.add("disabled")
}
setInterval(() => {
    if (gameShard < 12) {
        choiceButton.forEach(element => {
            element.style.filter = 'contrast(1) brightness(0.5) grayscale(1)'
        });
    } else {
        choiceButton.forEach(element => {
            element.style.filter = 'contrast(1) brightness(1)'
        });
        resetButton.classList.add("disabled")
    }
}, 50)