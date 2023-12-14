const newYear = "2024-01-01"

let Days = document.getElementById("days")
let Hours = document.getElementById("hours")
let Minutes = document.getElementById("minutes")
let Seconds = document.getElementById("seconds")
let time = document.getElementsByClassName("time-numbers")

function countdown() {
    let newYearDate = new Date(newYear)
    let currentDate = new Date()

    let totalSeconds = (newYearDate - currentDate) / 1000

    let days = Math.floor(totalSeconds / 3600 / 24)
    let hours = Math.floor((totalSeconds / 3600) % 24)
    let minutes = Math.floor((totalSeconds / 60) % 60)
    let seconds = Math.floor(totalSeconds % 60)

    Days.innerHTML = days
    Hours.innerHTML = formatTime(hours)
    Minutes.innerHTML = formatTime(minutes)
    Seconds.innerHTML = formatTime(seconds)

    
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)