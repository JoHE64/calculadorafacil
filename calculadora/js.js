function sinais(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let resultado;
    let select = document.querySelector('select').value;

    switch(select){
        case 'somar': 
            resultado = n1 + n2;
            break;
        case 'subtrair':
            resultado = n1 - n2;
            break;
        case 'multiplicar':
            resultado = n1 * n2;
            break;
        case 'dividir':
            resultado = n1 / n2;
            break;
    }
    document.getElementById('resultado').innerText = resultado;
}