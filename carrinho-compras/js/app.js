let valorGeral = 0;
limpar();

function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById("quantidade").value;
    let preco = quantidade * valorProduto;
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span>${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`
    valorGeral = valorGeral + preco;
    let total = document.getElementById("valor-total");
    total.textContent = `R$ ${valorGeral},00`;
    document.getElementById("quantidade").value = 0;
}

function limpar(){
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = '';
    valorGeral = 0;
    let total = document.getElementById("valor-total");
    total.textContent = 'R$ 0,00';
}