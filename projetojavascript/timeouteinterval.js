// setTIMEOUT E SETINTERVAL:

// setTimeout: O setTimeout é uma função usada para cumprir uma tarefa uma unica vez ou ou varias em determinado tempo isso varia comforme você passa a instrução dela.

// setInterval: Lá o setInterval é uma função que usada para cumrprir uma tarefa varias vezes indefinidamente até que uma condição ou outra função aconteça

function startscore() {
  setTimeout(() => {
    document.getElementById("timer").innerText =
      document.body.style.backgroundColor = "purple";
  }, 5000);
}
