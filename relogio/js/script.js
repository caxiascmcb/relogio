const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {  
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

const minuTesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let ispause = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTime);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer(){

    interval = setInterval(() => {

        if(!ispause) {

            milliseconds += 10

            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }

            if(seconds ===60) {
                minutes++;
                seconds = 0;
            }

            minuTesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }

    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block"
}

function pauseTime() {
    ispause = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
}

function resumeTimer() {
    ispause = false
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds=0;
    milliseconds = 0;

    minuTesEl.textContent = "00"
    secondsEl.textContent = "00"
    millisecondsEl.textContent = "000"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
}

function formatTime(time) {
    return time < 10 ? `0${time}`: time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}