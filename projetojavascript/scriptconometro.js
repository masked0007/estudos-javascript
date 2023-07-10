let millisecondsbtn = document.querySelector("#milliseconds");
let secondsbtn = document.querySelector("#seconds");
let minutesbtn = document.querySelector("#minutes");
let startbtn = document.querySelector("#start");
let stopbtn = document.querySelector("#stop");
let resumebtn = document.querySelector("#resume");
let resetbtn = document.querySelector("#reset");

let interval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isPaused = false;

function start() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;

      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesbtn = formatTime(minutes);
      secondsbtn = formatTime(seconds);
      millisecondsbtn = formatTime(milliseconds);
      document.getElementById(
        "timer"
      ).innerText = `${minutesbtn}:${secondsbtn}:${millisecondsbtn}`;
    }
  }, 10);
  /*startbtn.style.display = "none";
        stopbtn.style.display = "block" */
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "block";
}

function stop() {
  isPaused = true;
  document.getElementById("stop").style.display = "none";
  document.getElementById("resume").style.display = "block";
}
function resume() {
  isPaused = false;
  document.getElementById("stop").style.display = "block";
  document.getElementById("resume").style.display = "none";
}
function reset() {
  isPaused = false;
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("timer").innerText = "00:00:00";
  document.getElementById("resume").style.display = "none";
  document.getElementById("stop").style.display = "none";
  document.getElementById("start").style.display = "block";
}

function formatTime(time) {
  return time < 10 ? `${time}` : time;
}

/* "use strict"

let hora = 0;
let minutos = 0;
let segundos = 0;

let tempo = 1000;
let cron;

function mudartema() {
    let lugar = document.body;
    lugar.style.backgroundColor = "black";
}
function comecar() {
    cron = setInterval(() =>{timer();}, tempo);
}
function pausar() {
    clearInterval(cron);
}
function timer() {
    segundos ++;
    if (segundos === 60)
        {
            segundos = 0;
            minutos++;
            if(minutos == 60)
            minutos = 0;
            hora++;
            if(minutos == 60){
                minutos = 0;
                hora++;
            }
        }
    let format = (hora < 10 ? '0' + hora : hora) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);  
    document.getElementById("timer").innerText = format;
}
function reset() {
    clearInterval(cron);
    hora = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById("timer").innerText = '00:00:00'
}
*/
