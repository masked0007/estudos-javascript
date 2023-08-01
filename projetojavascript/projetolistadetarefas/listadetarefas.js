let contadorid = 0;
let inputext = document.getElementById("listadetarefas");
let main = document.getElementById("items-container");
function adicionar(){
    if ((inputext !== "") && (inputext !== null) && (inputext !== undefined)) {
        ++contadorid;
        let recebelemento = 
            `<div id="${contadorid}" class="items">
            <div class="icone"  ><i onclick="marcartarefa(${contadorid})" id="icone_${contadorid}" class="fa-regular fa-circle"></i></div>
            <div class="textos">${inputext.value}</div>
            <button class="delete" onclick="deletar(${contadorid})"><i class="fa-solid fa-trash" style="margin: 5px;"></i>Delete</button>
        </div>`; main.innerHTML += recebelemento; inputext.value = ""; inputext.focus();
    }
}
inputext.addEventListener("keyup", function(event) {
    //TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        adicionar();
    }
})
function deletar(id) {
    let itemss = document.getElementById(id);
    itemss.remove();
}
function marcartarefa(id) {
    var items = document.getElementById(id);
    var classe = items.getAttribute('class');
    items.parentNode.appendChild(items);
    console.log(classe);
     if (classe == "items") {
        items.classList.add("clicado");
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fa-circle');
        icone.classList.add('fa-circle-check');
        
     } else {
        items.classList.remove("clicado")
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('fa-circle-check');
        icone.classList.add('fa-circle');
     }
}