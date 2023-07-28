// imagine um array como uma lista de itens, com controle,por ondem de posição dele.

//ex const lista = ["Aroz","Feijão","Macarão","Leite"]

// A lista [0] (lista na posição 0) vai conter 'Aroz'.
// A lista [1] (lista na posição 1) vai conter 'Feijão'.

// E assim por diante.

let listaCompras = [
    'Arroz',
    'Feijão',
    'Macarrão',
    'Frango',
    'Leite'
];
const listaFormatada = `${listaCompras.join(", ")}`;
console.log(listaFormatada);
console.log(listaCompras.length - 1);

// const lista = new Array(
// 'Aroz',
// 'Feijão',
// 'Macarão',
// 'Frango',
// 'leite'
// );

// const lista = [];
// lista[0] = 'Aroz';
// lista[1] = 'Feijão';
// lista[2] = 'Macarão'; Tambem podemos fazer assim uma aray uma lista
// lista[3] = 'Frango'; 
// lista[4] = 'leite';