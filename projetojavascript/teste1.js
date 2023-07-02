function CONVERTER() {
    var n1 = document.getElementById('valor1');
    var n2 = document.getElementById('valor2');
    var resultado = document.getElementById('res');
    ress = Number(n1.value * n2.value);
    resultado.innerHTML = ress;
}