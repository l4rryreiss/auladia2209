//Crie uma função chamada formatarPessoa que receba um
 //objeto representando uma pessoa com as propriedades nome, idade e profissao. 
 //A função deve retornar uma frase formatada no padrão: "Olá, meu nome é [nome],
 // tenho [idade] anos e trabalho como [profissao]."

 function formatarPessoa()
    {
       const usuario = 
       {
        nome: prompt(`Digite seu nome: `),
        idade: Number(prompt(`Digite sua idade: `)),
        profissao: prompt(`Digite sua profissao: `)
       }

       return `Olá, meu nome é ${usuario.nome}, tenho ${usuario.idade} anos e trabalho com ${usuario.profissao}.`
    }

alert(formatarPessoa())