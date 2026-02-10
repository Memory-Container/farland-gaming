let innerCoin = document.querySelector(".inner-coin")
let percentage = document.querySelector("#gambling-percentage")
let gamblingWindow = document.querySelector(".gambling-window")
let gamblingButton = document.querySelectorAll(".gambling")
let head = document.querySelector("head")
let isRunning = false;
let tails = document.querySelector("#tails")
percentage.addEventListener("input", () => {
    console.log(1)
    if (Number(percentage.value) < 1 || Number(percentage.value) > 100 || !Number(percentage.value)) {
        percentage.value = ''
    }
})
let choices2 = ["head", "tails", "head", "tails", "tails", "tails"]
function gamble(choice) {
    let random = Math.random() 
    let randomChoice = choices2[Math.max(Math.floor(random * choices2.length - 1), 0)]
    let resultText = []
    if (gameShard <= 0 || isRunning) {
        return;
    }
    if (percentage.value == '') {
        percentage.value = 1
    }
    if (randomChoice == 'head') {
        innerCoin.style.transform = 'rotateY(0deg) rotateX(0deg)'
    } else [
        innerCoin.style.transform = 'rotateY(0deg) rotateX(180deg)'
    ]
    if (choice == randomChoice) {
        resultText[0] = 'thắng'
        gameShard += Math.max(Math.floor(random*3), 1.25) * gameShard * (Number(percentage.value) / 100)
    } else {
        resultText[0] = 'thua'
        gameShard -= Math.max(Math.floor(random*5), 2) * gameShard * (Number(percentage.value) / 100)
        if (gameShard < 1) {
            gameShard = Math.floor(gameShard)
        }
    }
    resultText[1] = randomChoice == "head" ? "ngửa" : "úp"
    gamblingWindow.style.display = 'flex'
    gamblingWindow.textContent = `Kết quả là ${resultText[0]}, đồng xu ảo đang là mặt ${resultText[1]}`
    updateShardCount()
}
function startAnimation(choice) {
    if (!isRunning) {
        innerCoin.classList.add("flip")
        isRunning = true
        setTimeout(() => {
            innerCoin.classList.remove("flip")
            isRunning = false
            gamble(choice)
        }, 1900);
    }
    return
}
setInterval(() => {
    if (isRunning == true) {
        gamblingButton.forEach(element => {
            element.classList.add("disabled")
        })
        return;

    }
    if (gameShard > 0) {
        gamblingButton.forEach(element => {
            element.classList.remove("disabled")
        })
    } else {
        gamblingButton.forEach(element => {
            element.classList.add("disabled")
        })
    }
}, 50)