// function verificarNota() {
//     var nota = Number(document.getElementById("nota").value);
//     var msg = document.getElementById("msg");

//     if (nota <= 10) {
//         msg.innerHTML = "ok";
//     } else {
//         msg.innerHTML = "Nota inválida";
//     }
// }

// document.getElementById("resposta").addEventListener("submit", function(event) {
//     event.preventDefault();

//     verificarNota();
// });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("resposta").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var nota = Number(document.getElementById("nota").value);
        var msg = document.getElementById("msg");
        
        verificarNota(nota, msg);
    });
});

function verificarNota() {
    let nota = Number(document.getElementById("nota").value);
    let msg = document.getElementById("msg");

    if (nota <= 10) {
        msg.textContent = "ok";
    } else {
        msg.textContent = "Nota inválida";
    }
};
// document.getElementById('resposta').addEventListener('submit', function(event) {
//     event.preventDefault();
//     verificarNota();
// });

// function verificarNota() {
//     let nota = Number(document.getElementById("nota").value);
//     let msg = document.getElementById("msg");

//     if (nota <= 10) {
//         msg.textContent = "ok";
//     } else {
//         msg.innerHTML = "Nota inválida";
//     }
// }

// document.getElementById('resposta').addEventListener('submit', function(event) {
//     event.preventDefault();
//     verificarNota();
// });
