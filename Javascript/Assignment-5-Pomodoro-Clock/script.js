let breakTimeDecrement = document.getElementById("break-time-decrement");
let breakTimeLength = document.getElementById("break-time-length");
let breakTimeIncrement = document.getElementById("break-time-increment");
let workTimeDecrement = document.getElementById("work-time-decrement");
let workTimeLength = document.getElementById("work-time-length");
let workTimeIncrement = document.getElementById("work-time-increment");

let breakMinutes = 5;
let workMinutes = 25;

const circle = document.querySelector('.circle');
const timerDisplay = document.getElementById('timer-display');
const playPauseElement = document.getElementById('play-pause');
const sessionTypeElement = document.getElementById('session-type');

let timer;
let timeRemaining;
let isRunning = false;
let isWorkSession = true;
let totalTime;

// Button controls
breakTimeDecrement.addEventListener("click", () => {
    if (!isRunning && breakMinutes > 1) {
        breakMinutes--;
        breakTimeLength.textContent = breakMinutes;
    }
});

breakTimeIncrement.addEventListener("click", () => {
    if (!isRunning && breakMinutes < 60) {
        breakMinutes++;
        breakTimeLength.textContent = breakMinutes;
    }
});

workTimeDecrement.addEventListener("click", () => {
    if (!isRunning && workMinutes > 1) {
        workMinutes--;
        workTimeLength.textContent = workMinutes;
        if (isWorkSession) {
            resetTimer();
        }
    }
});

workTimeIncrement.addEventListener("click", () => {
    if (!isRunning && workMinutes < 60) {
        workMinutes++;
        workTimeLength.textContent = workMinutes;
        if (isWorkSession) {
            resetTimer();
        }
    }
});

// Timer functions
function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    
    // Update circle progress
    const progress = ((totalTime - timeRemaining) / totalTime) * 360;
    circle.style.background = `conic-gradient(#fff ${progress}deg, rgba(255, 255, 255, 0.2) ${progress}deg)`;
}

function startTimer() {
    isRunning = true;
    playPauseElement.textContent = "PAUSE";
    
    timer = setInterval(() => {
        timeRemaining--;
        updateDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            switchSession();
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    playPauseElement.textContent = "RESUME";
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeRemaining = isWorkSession ? workMinutes * 60 : breakMinutes * 60;
    totalTime = timeRemaining;
    playPauseElement.textContent = "Play";
    updateDisplay();
}

function switchSession() {
    isWorkSession = !isWorkSession;
    sessionTypeElement.textContent = isWorkSession ? "WORK" : "BREAK";
    resetTimer();
    startTimer();
}

playPauseElement.addEventListener("click", () => {
    if (isRunning) {
        pauseTimer();
    } else {
        if (timeRemaining === undefined || playPauseElement.textContent === "START") {
            resetTimer();
        }
        startTimer();
    }
});

// Initialize
resetTimer();