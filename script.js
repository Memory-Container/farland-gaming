const button = document.querySelector("button")
button.addEventListener("click", (e) => {
    if (e.target == button) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        const ripples = document.createElement('span');
        ripples.style.left = `${x}px`;
        ripples.style.top = `${y}px`;
        button.appendChild(ripples);
        setTimeout(() => {
            ripples.remove();
        }, 500);
    }
})
let main = document.querySelector('main')
function scrollGameMenu() {
    main.style.top = `calc(-100vh + 60px)`
}