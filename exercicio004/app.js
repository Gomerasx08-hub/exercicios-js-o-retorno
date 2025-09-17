function fnvalidarIdadeCNH(){
   
    // esse == igual que
    // esse != diferente que
    // esse > maior que
    // esse < menor que
    // esse >= maior ou igual que
    // esse <= menor ou igual que

    event.preventDefault()

    let nomeUsuario = document.getElementById("txtNome").value
    let idadeUsuario = document.getElementById("txtIdade").value


    console.log(idadeUsuario)

    if (idadeUsuario >= 18){
        alert("parabens " + nomeUsuario + ", voce pode dirigir")
        document.getElementById("Resultado").innerHTML = Texto

    } else {
        alert("Desculpe, " + nomeUsuario + ", voce nao pode dirigir")
        document.getElementById("resultado").innerHTML = Texto

    }


}
