async function salvarTexto() {
    let assuntoDigitado = document.getElementById("meuInput").value;
    console.log("O usuário digitou: " + assuntoDigitado);

    // NOVO: manda o assunto para o backend
    let resposta = await fetch("http://127.0.0.1:5000/assuntos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto: assuntoDigitado })
    });
    let listaDoBackend = await resposta.json();
    console.log("O backend respondeu:", listaDoBackend);

    let listaAssuntos = document.getElementById("listaAssuntos");
    let novoItem = document.createElement("li");
    novoItem.textContent = assuntoDigitado;
    listaAssuntos.appendChild(novoItem);

    document.getElementById("meuInput").value = "";
}