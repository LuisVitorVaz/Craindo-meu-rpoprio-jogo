//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecretoNome = [];
let numeroSorteado = gerarNumeroAleatorio();
function adicionarAmigo() {
    let nome = document.querySelector("#amigo").value;
    if( nome === "")
    {
        alert("Digite o nome do amigo secreto");
        return;
    }
    amigoSecretoNome.push(nome);   // adiciona no array
    console.log(amigoSecretoNome); // mostra todos já adicionados

       listaDeamigos();
}
function listaDeamigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ""; // limpa a lista antes de mostrar

    for (let i = 0; i < amigoSecretoNome.length; i++) {

        let item = document.createElement("li");
        item.textContent = amigoSecretoNome[i];
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigoSecretoNome.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    // Gera número aleatório baseado na quantidade de amigos
    let numeroEscolhido = Math.floor(Math.random() * amigoSecretoNome.length);
    
    // Pega o nome sorteado usando o índice
    let amigoSorteado = amigoSecretoNome[numeroEscolhido];
    
    // Mostra o resultado na tela
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    
    console.log(`Nome sorteado: ${amigoSorteado}`);
}
