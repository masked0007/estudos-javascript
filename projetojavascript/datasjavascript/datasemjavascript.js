/*//let data = new Date()


//OBTER O ANO ATUAL:
//let obteranoatual = data.getFullYear();


// para obter os meses em escrito deve informar eles em uma matriz com os nome dele:
//let obtermeses = data.getMonth()
//document.getElementById("text").innerText = obtermeses;
// 2023

//  MANEIRA PARA OBTER OS MESES EM NOMES:
//let meses = ["janeiro", "fervereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "december"]
//let obtermeses = meses[data.getMonth()]

// outra meneira de obter data NO fORMATO  BR é usando o toLocalstring:
// let datacompletabr = data.toLocalesString("pt-br", {dataStyle: 'short'});
// = dia/mes/ano


// METODO PARA COMPARAR UMA VALIDADE COM OUTRA DE ACORDO COM A VALOR DA INPUT:
function dados() {
    var input1 = new Date(document.getElementById("data1").value);
    var vencimento = new Date(2020, 1, 1);

    if (input1 <= vencimento)
    {
    document.getElementById("dadoss").textContent = "seu cartão está ativo"
    } else {
        document.getElementById("dadoss").textContent = "Seu cartão venceu"
    }
}


// metodo para obter as datas em valores separados:
let d = new Date();
var dia1 = d.getDate();
var mes2 = d.getMonth() + 1;
var ano3 = d.getFullYear();
function addzero(x) {
   return x < 10 ? '0' + x : '' + x
};
document.getElementById("text").textContent = addzero(dia1) + "//" + addzero(mes2) + "//" + addzero(ano3);
*/