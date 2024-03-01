var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var exercicios = document.getElementsByClassName("nome-exercicio");
for (var i = 0; i < exercicios.length; i++) {
    var concluido = document.createElement("div");
    concluido.classList.add("concluido-button");
    concluido.innerHTML = "Concluído";
    concluido.addEventListener("click", function() {
        marcarConcluido(this);
    });

    var exercicioAtual = exercicios[i];
    exercicioAtual.after(concluido);
}

function marcarConcluido(el) {
    el.parentNode.style.display = "none";
}
