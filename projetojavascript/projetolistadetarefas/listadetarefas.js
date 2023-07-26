let inputext = document.getElementById("listadetarefas").value;
let main = document.getElementById("conteudo1");
function adicionar(){
    if ((inputext !== "") && (inputext !== null) && (inputext !== undefined)) {
        let recebelemento = `<div class="areatext">
            <div class="icone"><i class="fa-regular fa-circle"></i></div>
            <div class="texto">${inputext}</div>
            <div><button class="deletar"><i class="fa-solid fa-trash" style="margin: 5px;"></i>delete</button></div>
        </div>`; main.innerHTML += recebelemento; 
    }
}