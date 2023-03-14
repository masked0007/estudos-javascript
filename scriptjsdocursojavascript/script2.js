function contar() {
    var numero1 = document.getElementById('num1')
    var numero2 = document.getElementById('num2')
    var numero3 = document.getElementById('num3')
    var res = document.getElementById('res')

    if(numero1.value.length == 0 || numero2.value.length == 0 || numero3.value.length == 0) {
       // window.alert('[ERROR] Faltam algarismos ou tente Novamente(;')
        res.innerHTML = 'Impossivel de contar!'
    } else {
        res.innerHTML = 'Contando: '
        let p = Number(numero1.value)
        let s = Number(numero2.value)
        let t = Number(numero3.value)
        if (p <= 0) {
            window.alert('Passo Invalido... Vamos Considerar PASSO 1')
            passo = 1
        }
        if (p < s) {
            //Contagem crescente!
        for(let c = p; c <= s; c += t) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
        for(let c = p; c >= s; c -= t) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`

    }

}