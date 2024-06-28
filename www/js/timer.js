let timer;
let timeLeft = 300; // Default to 5 minutes

function resetTimer() {
    timeLeft = 300;
    document.getElementById('timer').innerText = formatTime(timeLeft);
    updateClockHand();
}

function increaseTime() {
    timeLeft += 60;
    document.getElementById('timer').innerText = formatTime(timeLeft);
    updateClockHand();
}

function decreaseTime() {
    if (timeLeft > 60) {
        timeLeft -= 60;
        document.getElementById('timer').innerText = formatTime(timeLeft);
        updateClockHand();
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateClockHand() {
    const hand = document.getElementById('hand');
    const degrees = (300 - timeLeft) * 360 / 300;
    hand.style.transform = `rotate(${degrees}deg)`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = formatTime(timeLeft);
        updateClockHand();
        if (timeLeft <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function stopTimer() {
    clearInterval(timer);
    resetTimer();
}

// Initialize
resetTimer();
