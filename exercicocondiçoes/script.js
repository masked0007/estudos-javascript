function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas!` 
    if (hora >= 1 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background =  '#298B7B'
    // BOM DIA!
    } else if (hora >= 12 && hora <= 18) {
    // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#D56108'
    } else { 
    // BOA NOITE!
     img.src = 'fotonoite.png'
     document.body.style.background = '#233C91'
    }
}