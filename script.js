const button = document.querySelectorAll("button")
let main = document.querySelector('main')
const a = document.querySelectorAll("a")
let gameShard = 0
let shardMult = [1, 2, 1]
a.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
    }) 
});
button.forEach((element) => {
    element.addEventListener("click", (e) => {
        main = document.querySelector('main')
        if (e.target == element) {
            const x = e.clientX - e.target.offsetLeft - main.getBoundingClientRect().x;
            const y = e.clientY - e.target.offsetTop - main.getBoundingClientRect().y;
            const ripples = document.createElement('span');
            ripples.style.left = `${x}px`;
            ripples.style.top = `${y}px`;
            element.appendChild(ripples);
            setTimeout(() => {
                ripples.remove();
            }, 500);
        }
    })
})
let gameMenu = document.querySelector(".menu-section")
function scrollGameMenu() {
    main.style.top = `calc(-100vh + 60px)`
    gameMenu.style.display = 'flex'
}
function scrollMain() {
    main.style.top = `calc(0px)`
}
gameMenu.style.display = 'none'
function openGame(game) {
    let gameContainer = document.querySelector("#gameMenu")
    let flipCard = document.querySelector("#game2")
    let rps = document.querySelector("#game1")
    let gambling = document.querySelector("#game3")
    if (game == 1) {
        rps.style.display = 'flex'
        gameContainer.style.display = 'none'
    }
    if (game == 2) {
        gameContainer.style.display = 'none'
        flipCard.style.display = 'flex'
    }
    if (game == 3) {
        gameContainer.style.display = 'none'
        gambling.style.display =  'flex'
    }
}
function updateShardCount() {
    let shard = document.querySelectorAll(".shard")
    shard.forEach(element => {
        element.textContent = gameShard.toFixed(0)
    })
}
function returnToMenu() {
    let gameContainer = document.querySelector("#gameMenu")
    let flipCard = document.querySelector("#game2")
    let rps = document.querySelector("#game1")
    let gambling = document.querySelector("#game3")
    flipCard.style.display = 'none'
    rps.style.display = 'none'
    gambling.style.display =  'none'
    gameContainer.style.display = 'flex'
    flipCardreset()
    RPSreset()
}