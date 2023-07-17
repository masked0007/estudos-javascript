var data = new Date()


var obteranoatual = data.getFullYear();


// para obter os meses em escrito deve informar eles em uma matriz com os nome dele:
//var obtermeses = data.getMonth()
//document.getElementById("text").innerText = obtermeses;
// 2023

var meses = ["janeiro", "fervereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "december"]
var obtermeses = meses[data.getMonth()]

// outra meneira de obter data é usando o toLocalstring:
// var datacompletabr = data.toLocalesString("pt-br", {dataStyle: 'short'});
// = dia/mes/ano

var obeterdias = data.getDay()

var obterhorascompletas = new Date();

document.getElementById("text").innerText = `Hojer é dia ${obeterdias} de ${obtermeses} do ano ${obteranoatual} as ${obterhorascompletas}`