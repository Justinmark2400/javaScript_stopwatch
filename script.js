"use strict";

// Variables
const btnStart = document.getElementById("button-start");
const btnStop = document.getElementById("button-stop");
const btnReset = document.getElementById("button-reset");
const seconds = document.getElementById("seconds");
const tens = document.getElementById("tens");
let ms = 0;
let sec = 0;
let interval;

btnStart.addEventListener("click", function () {
  interval = setInterval(() => {
    ms++;
    if (ms < 100) {
      tens.textContent = `${ms}`.padStart(2, 0);
    } else {
      sec++;
      ms = 0;
      seconds.textContent = `${sec}`.padStart(2, 0);
      tens.textContent = `${ms}`.padStart(2, 0);
    }
  }, 10);
});

btnStop.addEventListener("click", function () {
  clearInterval(interval);
});

btnReset.addEventListener("click", function () {
  ms = 0;
  sec = 0;
  seconds.textContent = `${sec}`.padStart(2, 0);
  tens.textContent = `${ms}`.padStart(2, 0);
  clearInterval(interval);
});
