document.getElementById('btcalcular').addEventListener('click', function(){
    let salario = parseFloat(document.getElementById('salario').value);
    let horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
    let cargaHoraria = parseFloat(document.getElementById('cargaHoraria').value);
    
    let horasExtras = fnhorasExtras(salario, horasTrabalhadas, cargaHoraria);
    document.getElementById('resposta').innerHTML = fnFormatarMonetario(horasExtras);
})