var carro = {
    marca:"tesla", preco: 1.000000, peso:4647.3, placa:"AEIO3342",
    ano: 2021,
    completocara: function () {
        return `A marca é: ${this.marca} e o Modelo é : ${this.ano}`
    }
};
 document.getElementById('texto').innerHTML = (carro.completocara());