let v1 = document.getElementById('n1')
let v2 = document.getElementById('n2')
let operacao = document.querySelector("#calcular")

function calcular(o) {
    operacao.setAttribute("value", o)
}

function resultado() {
    let res = document.querySelector("#resultado")

    if (operacao.value == "adicao") {
        res.innerHTML =  parseInt(v1.value) + parseInt(v2.value)
    } else if (operacao.value == "subtracao") {
        res.innerHTML = parseInt(v1.value) - parseInt(v2.value)
    } else if (operacao.value == "multiplicacao") {
        res.innerHTML = parseInt(v1.value) * parseInt(v2.value)
    } else if (operacao.value == "divisao") {
        res.innerHTML = parseInt(v1.value) / parseInt(v2.value)
    }
}