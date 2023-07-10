// CONCATENAR ITENS DE DIFERENTES MATRIZES://    /* codigooo */

const itens1 = ["notebook", "mesa", "teclado", "mouse"];
const itens2 = ["feijão", "arroz", "batata", "coca cola"];

//remove o ultimo item
itens2.pop();

//remove o primeiro item ou coloca um novo em primeiro
itens1.unshift("adiciona primeiro item");

// adiciona itens em ordem especificada e remove itens de ordem espefica
itens1.splice(2, 0, "novo segundo item", "novo 3 item");

// concat concaten 2 itens
const itens_totais = itens1.concat(itens2);
//console.log(itens_totais)

// MAIS USO DO SPLICE: Ele substitui os itens passando o primeiro a casa que ai ficar e depois quantas casa ele ira remover

let jogadores = ["joachim andersen", "maguire", "kolibali", "neymar", "messi", "cristiano ronaldo", "pele"];
let os_melhores = jogadores.splice(2, 2)
//console.log(os_melhores)

// AGORA SOBRE O USO DO SLICE: parecido com o splice, ao colocar o numero de pratida ate o numero final deve colocar um numero mais: se no caso houver 6 itens e você quer listar a partir do 2 item até o 5 voce não ira colocar x.slice(2, 5) e sim x.slice(2, 6) e se for 2 segundo ate o item 6 seria x.slice(2, 7) 

const Jogadores  = ["joachim andersen", "maguire", "kolibali", "neymar", "messi", "cristiano ronaldo", "pele"];
const crack = Jogadores.slice(-2, 6);
//console.log(crack);

// para mostrar os jogadores em ordem alfabetica:

const animais = ["insetos", "aves", "cachorros", "microrganismos"]
animais.sort()
// AGORA COLOCANDO EM ORDEM ALFABETICA INVERTIDA
animais.reverse()
//console.log(animais)

// COLOCANDO NÚMEROS EM ORDEM
const numeros = [1, 0, 3, 5, 6, 7, 200, 4, 2, 9, 8];

            // FUNÇÃO DE COMPARAÇÃO PARA COLOCAR OS NÚMEROS DO MAIOR PARA O MENOR         
// numeros.sort(function (a, b) {return a - b})

const maior20 = numeros.filter(filtro)

// FUNÇÃO PARA FILTRAR E DAR POR EXEMPLO O MAIOR NUMERO A PARTIR DE 20
function filtro (value, array) {
    return value > 20
};

//FUNÇÕES PARA DAR O MAIOR NUMERO E O MENOR NUMERO
function maiornumero(array) {
    return Math.max.apply(null, array);
};

function menornumero(array) {
    return Math.min.apply(null, array);
};

console.log(maior20);