let amigos = [];

function adicionar(){
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value == "") {
        alert("Digite o nome do amigo!");
        amigo.focus();
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert("Esse amigo já foi adicionado!");
        amigo.focus();
        return;
    }
    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo.value);
    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent += ", " + amigo.value;
    }
    amigo.value = "";
}

function sortear(){
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos!");
        return;
    }
 embaralha(amigos)
 let sorteio = document.getElementById("lista-sorteio");

 for (let i = 0; i < amigos.length; i++) {
    sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '---> ' + amigos[i + 1] + '<br>';
 }
 console.log(lista);
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    let amigo = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");
    let sorteio = document.getElementById("lista-sorteio");
    amigos = [];
    amigo.value = "";
    lista.textContent = "";
    sorteio.innerHTML = "";
}