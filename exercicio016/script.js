function fnCalcularPorcentagem(){
    let V1 =0, V2=0, valortotal=0

    V1 = parseFloat(document.getElementById("valordaconta").value) ||0;
    V2 = parseFloat(document.getElementById("valor").value) ||0;

    valortotal= V1 - (V1*V2) /100;

    document.getElementById("valortotal").textContent = valortotal.toFixed(2);

    
}

function fnCalcularMais(){
    let V1=0, V2=0, valortotal=0

    V1= parseFloat(document.getElementById("valordaconta").value) ||0;
    V2= parseFloat(document.getElementById("valor").value) ||0;

    valortotal= V1 + (V1*V2) /100;

    document.getElementById("valortotal").textContent = valortotal.toFixed(2);

}





document.getElementById('btSalvar').addEventListener('click', (event) => {
    event.preventDefault();
    fnCalcularPorcentagem();
    
})

document.getElementById('btSalvar').addEventListener('click', (event) => {
    event.preventDefault();
    fnCalcularMais();
    
})