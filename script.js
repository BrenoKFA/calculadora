function calcular() {
    let v1 = document.getElementById('n1').value
    let v2 = document.getElementById('n2').value
    let oper = document.getElementById('operacao').value

    if (oper == 'somar') {
        document.getElementById('resultado').innerHTML = Number(v1) + Number(v2)
    } else if (oper == 'subtrair') {
        document.getElementById('resultado').innerHTML = Number(v1) - Number(v2)
    } else if (oper == 'multiplicar') {
        document.getElementById('resultado').innerHTML = Number(v1) * Number(v2)
    } else {
        document.getElementById('resultado').innerHTML = Number(v1) / Number(v2)
    }
}