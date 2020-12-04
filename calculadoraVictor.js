var numero1 = 0
var operador1
var numero2 = 0


function calcular(numero1, operador, numero2) {
    switch (operador) {
        case "+": return numero1 + numero2
        case "-": return numero1 - numero2
        case "*": return numero1 * numero2
        case "/": return numero1 / nemero2
        case "%": return numero1 % numero2
    }
}

function setarNumeros(numeros) {
    var texto = document.getElementById("visor").innerText
    if (!operador1) {
        numero1 = texto + numeros
    }
    else {
        numero2 = numero2 + "" + numeros
    }
    document.getElementById("visor").innerHTML += numeros
}
function setarOperadores(opera) {
    if (!operador1) {
        operador1 = opera
    }
    else {
        setarResultados()
        operador = opera


    }
    document.getElementById("visor").innerHTML += opera
}
function setarResultados() {
    var resultados
    if (operador1) {
        resultados = calcular(parseFloat(numero1), operador1, parseFloat(numero2))
    }
    document.getElementById("visor").innerHTML = resultados
    operador1 = ""
    numero2 = 0
    numero1 = resultados
}
function limpar() {
    numero1 = 0
    numero2 = 0
    operador1 = ""
    document.getElementById("visor").innerHTML = ""
}