//Crie uma função chamada calcularIMC que receba o peso (kg) e
// a altura (m). A função deve calcular o IMC e retornar uma string com a
 // classificação: • IMC < 18.5: "Abaixo do peso" • IMC entre 18.5 e 24.9: 
  //"Peso normal" • IMC ≥ 25.0: "Sobrepeso"

  
    function calcularIMC(peso, altura) 
        {
            const IMC = peso / (altura * altura);
            
                        
            if (IMC < 18.5)
                {
                    return "Abaixo do peso";
                }
            else
            {
                if (18.5 < IMC || 24.9 > IMC)
                {
                    return "Peso normal";
                }
                else
                    {
                        if (25.0 >= IMC)
                            {
                                return "Sobrepeso";
                            }
                }
            }
        }

    const peso = Number(prompt(`Digite seu peso em kg:`));
    const altura = Number(prompt(`Digite sua altura em metro:`));


const classificacao = calcularIMC(peso, altura);
alert(`${classificacao}`);