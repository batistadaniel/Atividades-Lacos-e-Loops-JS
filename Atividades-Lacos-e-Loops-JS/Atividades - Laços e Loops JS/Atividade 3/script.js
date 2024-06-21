function verificador() {
    let numero = Number(document.getElementById("numero").value);
    let msg = document.getElementById("msg");

    msg.style.backgroundColor = "blue";
    msg.style.color = "yellow";

    do {
        if (isNaN(numero)) {
            msg.textContent = "Digite um número válido";
            break;
        }
        else if (numero % 2 == 0) {
            msg.textContent =  "O número é par";
            break;
        } else {
            msg.textContent = "O número é ímpar";
            break;
        }
    }
    while (true);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resposta").addEventListener("submit", function(event) {
        event.preventDefault();
        verificador();
    });
})