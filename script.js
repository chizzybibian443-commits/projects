const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 75);
    }
});

pauseBtn.addEventListener("click",() => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(timerInterval);
    }
});
resetBtn.addEventListener("click", resetTimer); {
    paused = true;
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
}

function resetTimer() {
    paused = true;
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
}


function updateTime() {
    elapsedTime = Date.now() - startTime;
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
    mins = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    secs = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    timeDisplay.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
     
    secs= pad(secs);
    mins= pad(mins);
    hrs= pad(hrs);
}

function pad(unit) {
    return (("0" + unit).length > 2) ? unit : "0" + unit;
}
