var num = document.getElementById('num1')
var lista = document.getElementById('flist')
var res = document.getElementById('res')
var valores = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function islista(n, n1) {
    if (n1.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(isnumero(num.value) && !islista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('VALOR INVALIDO! ou JA ESTÁ NA LISTA(;')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
    window.alert('Adicione um valor!')
    } else {
        let val = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {   
            soma += valores[pos]
        if (valores[pos] > maior)
        maior = valores[pos]
        if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / val
    res.innerHTML = ''
    res.innerHTML += `<p>Nós Temos Ao todo: ${val} Valores</p>`
    res.innerHTML += `<p>O Maior valor informado foi ${maior}!</p>`
    res.innerHTML += `<p>O Menor Número informado foi ${menor}!</p>`
    res.innerHTML += `<p>Somando Todos os valores é Igual a ${soma}</p`
    res.innerhtml += `<p>A Media de todos os valores é ${media}<p/>` 
    }
}