//Escreva uma função chamada ehPar que receba um número 
//como parâmetro e retorne true se o número for par e 
//false caso seja ímpar.

function leNumero(){
      let numero = Number(prompt("Digite o número:"))
      return numero
}

function ehPar2 (num) {
    
    if (numero%2 === 0 ) {
    return true
    }
    else {
        return false
    }
}

function mostraResultado(res){
    if(res == true){
        alert("Par")
    }else{
        alert("Impar")
    }
}

let numero = leNumero()
let restultado = ehPar2(numero)
mostraResultado(restultado)
