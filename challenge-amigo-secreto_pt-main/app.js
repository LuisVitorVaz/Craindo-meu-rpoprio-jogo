//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecretoNome = [];

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