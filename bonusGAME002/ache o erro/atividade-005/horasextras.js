function fnhorasExtras(salario, horasTrabalhadas, cargaHoraria) {
    if(salario < 0){
        return 'todos os valores devem ser positivos'
    }
    
    let horasExtras = 0;

    if(horasTrabalhadas > cargaHoraria){
        horasExtras = (horasTrabalhadas - cargaHoraria) * salario;
        
    }

    return horasExtras;
}