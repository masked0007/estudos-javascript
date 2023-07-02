












































/* "use strict"

var hora = 0;
var minutos = 0;
var segundos = 0;

var tempo = 1000;
var cron;

function mudartema() {
    var lugar = document.body;
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
    var format = (hora < 10 ? '0' + hora : hora) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);  
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