//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigoSecretoNome = [];

function adicionarAmigo() {
    let nome = document.querySelector("#amigo").value;
    amigoSecretoNome.push(nome);   // adiciona no array
    console.log(amigoSecretoNome); // mostra todos já adicionados
}
