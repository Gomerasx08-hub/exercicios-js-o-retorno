function fnTocarSom(tecla) {
    if(tecla == 65) {
        document.getElementById("som-65").currentTime = 0 
        document.getElementById("som-65").play()
    }
    else if(tecla ==83) {
        document.getElementById("som-83").currentTime = 0
        document.getElementById("som-83").play()
    }

}