// SET TIMEOUT: ATIVA UMA DETERMINADA FUNÇÃO APÓS UM DETERMINADO TEMPO VARIAS E VARIAS VEZES...

//SET INTERVAL:

let secondss = document.getElementById("seconds");
let minutess = document.getElementById("minutes");
let hourss = document.getElementById("hours");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resumebtn = document.getElementById("resume");
let resetbtn = document.getElementById("reset");

let interval;
let isPaused = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
  interval = setInterval(() => {
    if (!isPaused) {
      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      secondss = formatTime(seconds);
      minutess = formatTime(minutes);
      hourss = formatTime(hours);
      document.getElementById(
        "timer"
      ).innerText = `${hourss}:${minutess}:${secondss}`;
    }
  }, 1000);
}
function formatTime(time) {
  return time < 1000 ? `0${time}` : time;
}
function stop() {
  isPaused = true;
}
function resume() {
  isPaused = false;
}
function reset() {
  isPaused = false;
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("timer").innerText = "00:00:00";
}
