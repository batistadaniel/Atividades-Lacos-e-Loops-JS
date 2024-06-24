function validador() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let msg = document.getElementById("msg");

    do {
        if (nome === senha) {
            msg.style.backgroundColor = "red";
            msg.textContent = "Erro! Tente novamente."
            break;
        } else {
            msg.style.backgroundColor = "green";
            msg.textContent = "Sucesso!";
            break;
        }
    }
    while (true);

    // if (nome === senha) {
    //     msg.textContent = "ERRO!!! Tente novamente";
    // } else {
    //     msg.textContent = "Parabéns!!! Você acertou";
    // }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resposta").addEventListener("submit", function (event) {
        event.preventDefault();
        validador();
    });
});
