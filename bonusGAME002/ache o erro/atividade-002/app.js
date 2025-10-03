function mostrarnumero(){
    Numero = parseFloat(document.getElementById("Numero").value)
    document.getElementById("resposta").innerText = "o numero informado foi: " +  Numero
    document.getElementById("Numero").value = ""
}