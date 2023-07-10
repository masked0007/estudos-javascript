// AS CLASSES NO JAVASCRIPT FUNCIONAM COMO UMA "FABRICA", VOCÊ DEIXA O NOME DA CLASSE DEPOIS OS NOMES DAS PROPRIEDADES SEM VALOR DEFINIDO E ENTÃO PODE USAR O NOME DA CLASSE PARA CRIAR OBJETOS COM OS MESMOS NOMES DE PROPRIEDADE SÓ QUE COM VALORES DIFERENTES! EXEMPLO:

/* class ModelCar {
  constructor(value1, value2, value3) {
    this.brand = value1;
    this.year = value2;
    this.date = value3;
  }
}

const CarroFiat = new ModelCar("fiat", 2021, new Date().getDate());
 console.log(CarroFiat); */

class Listshopping {
  Foods(value1, value2, value3, value4, value5) {
    this.foodca = value1;
    this.foodcf = value2;
    this.foodpf = value3;
    this.foodpo = value4;
    this.foodcc = value5;
  }
}
let Items = new Listshopping("arroz", "feijão", "frango", "ovos", "café");
console.log(Listshopping);
