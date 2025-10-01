let listaDeNumeros = [];

function fnLimpar() {
    document.getElementById("formulario").reset();
}

function fnSalvarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    if (!isNaN(numero)) {
        listaDeNumeros.push(numero);
        console.log("Número adicionado:", numero);
    } else {
        alert("Digite um número válido.");
    }
}

function fnCalcularMedia() {
    let media = 0, qtdNumeros = 0, somaDosNumeros = 0, i = 0;

    qtdNumeros = listaDeNumeros.length;

    if (qtdNumeros === 0) {
        alert("Nenhum número adicionado!");
        return;
    }

    while (i < qtdNumeros) {
        somaDosNumeros += listaDeNumeros[i];
        i = i + 1;
    }

    console.log("Soma: ", somaDosNumeros);

    media = somaDosNumeros / qtdNumeros;
    document.getElementById("media").innerHTML = media.toFixed(2);
}
