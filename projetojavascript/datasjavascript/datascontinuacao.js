// CALCULAR A DIFERença EM DIAS DE 2 DATAS

var datainicial = new Date();
var datafinal = new Date(2024, 0, 0);
var diferencatempo = datafinal.getTime() - datainicial.getTime();
var diferencadias = Math.ceil(diferencatempo / (24 * 60 * 60 * 1000))
document.getElementById("text").textContent = diferencadias + ' ' + "dias";