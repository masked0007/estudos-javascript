// O SWITCH: ELE SERVE COMO O VARIAS CONDIÇÕES "UM IF E ELSE MAIS RAPIDO" COMO PREDEFINE AS CONDIÇÕES IRÃO ACONTECER SE A PRIMEIRA NÃO ACONTECER: NESTE EXEMPLO IREI CRIAR UM PROGRAMA EM QUE A COR MUDARA COMFORME A COR QUE O USUARIO DIGITAR E SE ELA FOR COORESPONDENTE AS CORES/CONDIÇÕES QUE FORAM PREDEFINIDAS ELAS MUDARÃO A COR DO FUNDO DO SITE PARA A COR QUE FOI ESCOLHIDA E ESTA PREDEFINIDA...


function checker() {
    var cor = document.getElementById("changecolor").value;
switch (cor) {
    case "blue":
    document.body.style.backgroundColor = 'blue';
    break;
    case "red":
    document.body.style.backgroundColor = 'red';
    break;
    default:
        document.getElementById("textt").innerText = "digite outra cor está não está disponivel"
}}