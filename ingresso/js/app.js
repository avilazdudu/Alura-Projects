let qtdPista = 100;
let qtdSuperior = 200;
let qtdInferior = 400;
function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;
    let spanPista = document.getElementById("qtd-pista");
    let spanSuperior = document.getElementById("qtd-superior");
    let spanInferior = document.getElementById("qtd-inferior");

    if (quantidade <= 0 || quantidade > 10) {
        alert("Quantidade inválida! Escolha entre 1 e 10 ingressos.");
        return;
    }
    if (tipoIngresso === "pista") {
        qtdPista = qtdPista - quantidade;
        if (qtdPista < 0) {
            alert("Quantidade de ingressos na pista esgotada!");
            qtdPista = 0;
        } else {
            alert("Compra realizada com sucesso!");
            spanPista.innerHTML = qtdPista;
        }
    } else if (tipoIngresso === "superior") {
        qtdSuperior = qtdSuperior - quantidade;
        if (qtdSuperior < 0) {
            alert("Quantidade de ingressos na parte superior esgotada!");
            qtdSuperior = 0;
        } else {
            alert("Compra realizada com sucesso!");
            spanSuperior.innerHTML = qtdSuperior;
        }
    } else if (tipoIngresso === "inferior") {
        qtdInferior = qtdInferior - quantidade;
        if (qtdInferior < 0) {
            alert("Quantidade de ingressos na parte inferior esgotada!");
            qtdInferior = 0;
        } else {
            alert("Compra realizada com sucesso!");
            spanInferior.textContent = qtdInferior;
        }
    }

}