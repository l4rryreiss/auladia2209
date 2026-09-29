// Crie uma função chamada somarElementos que
//  receba um array de números como parâmetro, 
// percorra o vetor, some todos os valores e retorne o total.


function somarElementos(numero)
    {
        let total = 0;

            for(let i = 0 ; i < numero.length ; i++)
                {
                    total += numero[i];
                } 

        return total;
    }
 
const TamanhoDoArray = Number(prompt(`Digite aqui a quantidade de números que deseja somar: `));
    const soma  = [];

    for(let i = 0 ; i < TamanhoDoArray ; i++)
        {
       let numero = Number(prompt(`Digite o numero para somar (total de ${i} numeros somados atualmente): `));
            soma.push(numero);
        }

let resultado = somarElementos(soma)
alert(`Total: ${resultado}`)

