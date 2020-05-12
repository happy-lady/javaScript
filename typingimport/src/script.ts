const testWrapper = document.querySelector(".test-wrapper") as HTMLInputElement;
const testArea = document.querySelector("#test-area") as HTMLInputElement;
const originText = document.querySelector("#origin-text p")!.innerHTML;
const resetButton = document.querySelector("#reset") as HTMLInputElement;
const theTimer = document.querySelector(".timer") as HTMLInputElement;
import { leadingZero } from "./timer";

let interval: number | undefined | null = null;
let timerRunning = false;

let timer = [0, 0, 0, 0];

// Run a standard minute/second/hundredths timer:
function runTimer() {
    const currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    if (theTimer)
        theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    const textEntered = testArea.value;
    const originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval!);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    const textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    clearInterval(interval!);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
if (testArea) {
    testArea.addEventListener("keypress", start, false);
    testArea.addEventListener("keyup", spellCheck, false);
}
resetButton.addEventListener("click", reset, false);
