var jogador = "x";

function jogar(game) {
    if(game.innerHTML == "") {
        game.innerHTML = jogador;
        if(jogador == "x") {
            jogador = "o"
        } else {
            jogador = "x"
        }
    }
}
function reset() {
    window.location.reload();
}