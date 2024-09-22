let hourTime = document.querySelector(".hour");
let minutesTime = document.querySelector(".minute");
let secondsTime = document.querySelector(".second");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let toggle = false;
let hour, minutes, seconds;

let intervalId

function timer() {
    if (seconds >= 1) {
        seconds--;
    } else {
        if (minutes >= 1) {
            seconds = 59;
            minutes--;
        } else if (hour >= 1) {
            minutes = 59;
            seconds = 59;
            hour--;
        }
    }

    // Update the DOM with the current 
    hourTime.value = hour;
    secondsTime.value = seconds;
    minutesTime.value = minutes;

    // Stop the timer when it reaches 00:00:00
    if (hour === 0 && minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
        hourTime.value = "00";
        secondsTime.value = "00";
        minutesTime.value = "00";
    }
}

btn.addEventListener("click", () => {
    hour = hourTime.value;
    seconds = secondsTime.value;
    minutes = minutesTime.value;

    intervalId = setInterval(timer, 1000);
});

btn1.addEventListener("click",()=>{
    clearInterval(intervalId); //resect the all value and the stop the setInterVal function
    hourTime.value = ""
    minutesTime.value = ""
    secondsTime.value = ""
});



