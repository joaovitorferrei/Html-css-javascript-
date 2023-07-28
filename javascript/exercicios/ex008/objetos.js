
// Objetos em javascript
let carro = {
    marca: 'ford', //propriedade
    modelo: 'ka',
    ano: 2015,
    placa: 'ABD-5623',
    peneu: 'aro 20',
    cor: 'vermelho',
    corpeneu: 'preto cromado',
    acelera: function() { // metodo
        alert('carro começou acelarar saia')
    },
    completo: function() {
        return 'a marca do carro e '+this.marca+' o modelo e '+this.modelo
    }
};
carro.acelera();
console.log(carro.completo());