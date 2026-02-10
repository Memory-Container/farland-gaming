
let container = document.querySelector(".game-board#flipCard")
let symbols = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍍', '🥭']
let used = Array(8).fill(0)
let cardOrder = []
function initialize() {
    for (let i = 0; i < 16; i++) {
        let random = Math.floor(Math.random() * 8)
        while (used[random] == 2) {
            random = Math.floor(Math.random() * 8)
        }
        used[random]++
        cardOrder.push(symbols[random])
        container.innerHTML += `
            <button class="card" id="${i}">
                <div class="inner">
                    <div class="card-front">
                        ❓
                    </div>
                    <div class="card-back">
                        ${cardOrder[i]}
                    </div>
                </div>
            </button>
        `
    }
    container.innerHTML += `
        <button onclick="flipCardreset()" class="reset hidden">
            Chơi lại
        </button>
    `
    let card = document.querySelectorAll(".card")
    card.forEach((cards) => {
        cards.addEventListener("click", () => {
            flip(cards)
        })
    })
}
let point = 0;
let firstCard = null, secondCard = null
function check(first, second) {
    if (cardOrder[first.id] ==cardOrder[second.id]) {
        point++
        first.classList.add("matched");
        second.classList.add("matched");
        firstCard = null
        secondCard = null
        currentActive = 0;
        lock = false
        if (point >= 8) {
            gameShard += point * shardMult[1]
            updateShardCount()
            document.querySelector(".reset").classList.remove("hidden")
        }
    } else {
        setTimeout(() => {
            first.classList.remove("flipped");
            second.classList.remove("flipped");
            firstCard = null
            secondCard = null
            currentActive = 0;
            lock = false
        }, 700)
    }
}
let currentActive = 0, lock = false;
function flip(card) {
    if (lock) {
        return;
    }
    if (currentActive == 0) {
        currentActive++
        firstCard = card
        firstCard.classList.add("flipped")
        return;
    }
    if (currentActive == 1) {
        currentActive++
        secondCard = card
        if (secondCard.id == firstCard.id) {
            secondCard = null
            currentActive--
            return;
        }
        secondCard.classList.add("flipped")
    }
    if (firstCard && secondCard) {
        lock = true
        check(firstCard, secondCard)
    }
}
initialize()
function flipCardreset() {
    let card = document.querySelectorAll(".card")
    let cardBack = document.querySelectorAll(".card-back")
    used = Array(8).fill(0)
    cardOrder = []
    for (let i = 0; i < 16; i++) {
        let random = Math.floor(Math.random() * 8)
        while (used[random] == 2) {
            random = Math.floor(Math.random() * 8)
        }
        used[random]++
        cardOrder.push(symbols[random])
    }
    card.forEach((cards) => {
        cards.classList = "card"
    })
    setInterval(() => {
        for (let i = 0; i < 16; i++) {
            cardBack[i].textContent = cardOrder[i]
        }
    }, 300)
    point = 0
    document.querySelector(".reset").classList.add("hidden")
}