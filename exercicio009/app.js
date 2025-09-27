function fnRepetirFrase(){
    let qtd = 0, frase = "", contador = 0
 
    // ensinando a utilizar o while
    // while(contador < 10){
    //     console.log("olá " + contador)
    //     contador = contador + 1                  ⬅️
    //
    //     contador++ (faz a mesma coisa do de cima ⬆️)
    // }
   
    frase = document.getElementById("frase").value
    qtd = parseInt(document.getElementById("qtd").value)
    document.getElementById("lista_frases").innerHTML = ""
 
    while(contador < qtd){
        document.getElementById("lista_frases").innerHTML += "<li>" + frase + "</li>"
        contador++
    }
}