const btnSortear = document.querySelector("#btn-sortear");
const btnReiniciar = document.querySelector("#btn-reiniciar");
function sortear() {
    let quantidade = document.querySelector("#quantidade").value;
    let numeroMinimo = document.querySelector("#de").value;
    let numeroMaximo = document.querySelector("#ate").value;
    let resultado = document.querySelector("#resultado");

    let numerosSorteados = [];
    for (let i = 0; i < quantidade; i++) {
        let numeroSorteado = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + parseInt(numeroMinimo);
        numerosSorteados.push(numeroSorteado);
    }
    resultado.innerHTML = `<p class="texto__paragrafo">Números sorteados: ${numerosSorteados.join(", ")}</p>`;
    
    btnReiniciar.classList.add("container__botao");
    btnReiniciar.classList.remove("container__botao-desabilitado");
    btnSortear.classList.remove("container__botao");
    btnSortear.classList.add("container__botao-desabilitado");
}

function reiniciar() {
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<p class="texto__paragrafo">Clique em "Sortear" para gerar os números.</p>`;
    document.querySelector("#quantidade").value = "";
    document.querySelector("#de").value = "";
    document.querySelector("#ate").value = "";

    btnReiniciar.classList.add("container__botao-desabilitado");
    btnReiniciar.classList.remove("container__botao");
    btnSortear.classList.remove("container__botao-desabilitado");
    btnSortear.classList.add("container__botao");
}