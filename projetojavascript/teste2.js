function converterparafahrenheit() {
    var valor1 = document.getElementById('celsius').value;
    var total = document.getElementById('textt');
    resposta = (valor1 * 9/5) + 32;
    total.innerHTML = resposta; 
}