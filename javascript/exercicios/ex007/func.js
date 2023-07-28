function soma(valor1,valor2){
    return valor1 + valor2;
};
function realDolar(real,dolar){
    return real * dolar;
}
document.getElementById('texto').innerHTML = '<strong>criando uma function para cotação do dolar e soma</strong>';
som1 = 10
som2 = 5
let somar = soma(som1,som2);
alert("a soma de "+som1+" + "+som2+" = "+somar)
br = 25.45.toFixed(2);
us = 4.75554545.toFixed(2);
let resultado = realDolar(br,us).toFixed(2);
alert('coverte '+br+' reais em dolar que esta '+us+' em igual a '+resultado);

function alertaHello(){
    alert('ola tudo bem com voce poderia me dar um like se gostou do repositorio')
}