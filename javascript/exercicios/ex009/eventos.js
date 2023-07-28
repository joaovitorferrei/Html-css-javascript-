function eventClick(){
    alert('acionou um evento de click');
    document.body.style.backgroundColor = 'yellow';
}
function eventClick2(){
    alert('não click porfavor')
}

function viraVermelho(){
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'red';
}
function viraAzul() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'blue';
}
// function adicionaTexto() {
//     let p = document.getElementById('texto')
//     p.append('o mause se moveu')
// }
function limpaTexto() {
    document.getElementById('campoTexto').value = "";
}

function mudou() {
    console.log('mudou');
}

function teclaPressionada() {
    let input = document.getElementById('teclaPressionada').value;
    console.log(input);
}
