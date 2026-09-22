//Crie uma função chamada celsiusParaFahrenheit que receba uma 
//temperatura em Celsius e retorne a conversão para Fahrenheit 
//(F = (C × 1.8) + 32).

function celsiusParaFahrenheit (){
    let C = Number(prompt("Digite a temperatura em celsius:"))
    fahrenheit = (C * 1.8) + 32
    return alert ("A  temperatura em fahrenheit é de " + fahrenheit ) 
}
celsiusParaFahrenheit ()