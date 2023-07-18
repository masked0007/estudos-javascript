/* var data = new Date()


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

var hours = data.getHours();
var minutes = data.getMinutes();
var seconds = data.getMinutes();
var milliseconds = data.getMilliseconds();


document.getElementById("text").innerText = `Hojer é dia ${obeterdias} de ${obtermeses} do ano ${obteranoatual} as ${hours}:${minutes}:${seconds}:${milliseconds}`


// agora vou exemplificar com um pequeno codigo de validação de identide:
{
    let currentyear = new Date()
    let identity = new Date();

if (currentyear > identity) {
    console.log("this fuck identity it is vanquished!")
} else {
    console.log("all ok bro can go, a have good life!")
}
}
*/
// agora como mostar a diferença entre 2 datas em dias

function dados() {
    var vencimento = 2020;
    var suadata = document.getElementById("data1").textContent;
    if (suadata <= vencimento) {
        document.getElementById("dadoss").textContent = "o cartão dentro da validade(;";
    }
     else {
        document.getElementById("dadoss").textContent = "o cartão venceu );";
    }
}