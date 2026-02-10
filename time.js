const   timeDisplay = document.getElementsByClassName("actual")[0]
        dateDisplay = document.getElementsByClassName("actual")[1]

let     time = String(new Date()).match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)[0],
        date = `${String(new Date().getDate()).padStart(2, 0)}-${String(new Date().getMonth() + 1).padStart(2, 0)}-${String(new Date().getFullYear())}`,
        weeekDay = String(new Date()).match(/[\w]{3}/)
        
timeDisplay.textContent = time
dateDisplay.textContent = `${weeekDay} ${date}`
setInterval(()=> {
    time = String(new Date()).match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)[0]
    date = `${String(new Date().getDate()).padStart(2, 0)}-${String(new Date().getMonth() + 1).padStart(2, 0)}-${String(new Date().getFullYear())}`,
    weeekDay = String(new Date()).match(/[\w]{3}/),
    timeDisplay.textContent = time
    dateDisplay.textContent = `${weeekDay} ${date}`
}, 1000)
