function validador() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let msg = document.getElementById("msg");

    if (nome === senha) {
        msg.textContent = "ERRO!!! Tente novamente";
    } else {
        msg.textContent = "Parabéns!!! Você acertou";
    }
}

document.getElementById("resposta").addEventListener("submit", function(event) {
    event.preventDefault();
    validador();
});