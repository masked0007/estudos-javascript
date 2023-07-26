/*
   O QUE É JSON? :
JSON OBJECT NOTATION É UM FORMATO MAIS SIMPLES PARA ARMAZENAR DADOS E INFORMAÇÕES EM FORMATO TEXTO E TRANSMITIR ENTRE SERVIDOR E CLIENTE
A LINGUAGEM DELE É JAVASCRIPT!

Funcionalidades: JSON.parse() converte texto json em objetos! agora o JSON.stringfy() converte objetos em texto padrao JSON!

*/ 

/* EXEMPLO 1
const exemplo = {
    item: "smartphone",
    marca: "samsung",
    modelo: "SM-ABC1234",
    especificacoes: ["32 GB", "3,0 GB RAM", "SNAPDRAGON 610", "FRONTAL 30PX", "TRASEIRA 16PX"]
}
var texto = JSON.stringify(exemplo);
var objeto = JSON.parse(texto);
document.getElementById("text").textContent = objeto.especificacoes[2];
*/


/*
O QUE É AJAX? : O AJAX É Asynchronous JavaScript and XML, É UMA FORMA DE TRABALHAR COM OUTROS SERVIDORES E SITES SOLICITANDO INFORMAÇÕES USANDO 
DOCUMENTAÇÕES DE OUTRO SITES E AUMENTANDO A INTERATIVIDADE COM O SITE E USUARIO, PODE PROCESSAR INFORMÇÃO DE OUTRO SITES DE FORMA ASSINCRONA EM SEGUNDO PLANO!
*/
// NESTE EXEMPLO VOU USAR O JSON E AJAX PARA REQUISITAR INFORMAÇÕES QUE ESTÁ EM OBJETO E COM O JSON TRANSFORMALO EM TEXTO!

function obterinformacoes() {
    let valorinput = document.getElementById("dados").value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/'+ valorinput +'/json/');
    ajax.send();
    ajax.onload = function() {
    let obj = JSON.parse(ajax.responseText);
    let cidade = obj.localidade;
    let estado = obj.uf;
    let dddd = obj.ddd;
    document.getElementById("text").innerHTML = "cidade:" + " " + cidade + "<br> Estado:" + " " + estado + "<br> ddd:" + " " + dddd;
    }
}