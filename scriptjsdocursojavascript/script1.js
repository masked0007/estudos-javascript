function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'bebê menino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosos.png')
            }
        } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'bebê manina.png')
            } else if (idade < 20) {
                // Jovem
                img.setAttribute('src', 'jovem mulher.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'mulher.png')
            } else {
                // Idosa
                img.setAttribute('src', 'idosos.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}
