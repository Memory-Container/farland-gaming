let percentage = document.querySelector("#gambling-percentage")
let gamblingWindow = document.querySelector(".gambling-window")
let gamblingButton = document.querySelectorAll(".gambling")
let head = document.querySelector("head")
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
    if (gameShard <= 0) {
        return;
    }
    if (percentage.value == '') {
        percentage.value = 1
    }
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
    console.log(random, randomChoice, choice, Math.max(Math.floor(random*3), 1.25), Math.max(Math.floor(random*2), 0.25))
    updateShardCount()
}
setInterval(() => {
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