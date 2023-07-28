let nome,sobrenome, nomeCompleto;
nome = 'Joao Vitor';
sobrenome = 'Nascimento';
nomeCompleto = nome +' '+ sobrenome;
let idade;
idade = 30;
pessoa = idade + 10+' '+ nomeCompleto ;
document.getElementById('texto').innerText = pessoa;

// let não permite redeclaração de uma variaveel:
// exemplo: let nome = 'joao vitor';
//          let nome = 'joao guilerme';
//          output: erro varivel não pode ser redefinida: joao vitor
//          let so pode ser redefinodo no seu proprio escopo
// exemplo:
// let idade = 18
// {
//      let idade = 45
// };
// document.wri*(idade);
// output: 18


// var permite redeclaração de uma variavel:
// exemplo: var nome 'joao'
//          var nome 'joao guilherme'
//          output:  joao guilherme: var permite redeclaração de variavel
//          pode ser redefinido mesmo fora do seu proprio escopo             
// exemplo:
//var idade 18;
// {
//      var idade = 45
// };
// document.wri*(idade);
// output: 45

// const = constante não muda:
// exemplo: const pi = 3.14
//          const pi = 3.78465
//          output: erro : 3.14
//          sempre vai ser o mesmo valor não muda nunca
// exemplo:
//const idade = 18
//{
//  const idade = 45
//};
//output: 18 
// não obedece mudancas em lugar nenhum