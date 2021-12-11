//A-  Acessar elementos específicos de um array.

let compras = ['feijão', 'Arroz', 'Macarrão', 'Açucar'];

console.log(compras[2]);

//B - Modificar cada um dos elementos de um array e imprimi-los no console.

compras [1] = "Morango";
console.log(compras);

// Adicionar elementos a um array.

compras.push("Laranja")
console.log(compras);

// D - Extrair elementos de um array.

let ultimaCompra = compras.pop()
console.log(compras);

let primeiraCompra = compras.shift()
console.log(compras);

//E - Comparar elementos de um array com os elementos de outro.

console.log(compras.lastIndexOf("Laranja"));

console.log(compras.indexOf("Feijão"));

// O que esses códigos retornam?

// 1

let numbers =[22, 33, 54, 66, 72];
console.log(numbers.length)  // Total de elementos do Array

// 2

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0]) /* acessar uma posição específica de um array informando o seu nome
e, dentro de colchetes o número da posição que você deseja acessar */

// Array invertido

// 1

function imprimirInverso (compras) {
    return console.log(compras.reverse())
}

imprimirInverso(compras);

// 2

function inverter (compras) {
    let vinho = []
    return compras.reverse(vinho.push)
}

console.log(inverter(compras))

// SOMAR ARRAY

let arr = [1,2,3,4,5,6,7,8,9,10];

let soma = arr.reduce(function(valorA, valorB){
    return valorA + valorB
})

console.log(soma);


// simulação Arrya.Join

let lista = ["o", "l", "h", "o"];
let lista1 = lista.join("");

console.log(lista1);

// Coleções de Filmes (e mais…)

// 1 

let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

console.log(filmes[3]);

// 2

function texto(array){
    let result = filmes.map(array => array.toUpperCase())
    return result
}

console.log(texto(filmes))

// 3 

let filmes1 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

function texto(array, array1){
    const result = array.concat(array1);
    return result
}

console.log(texto(filmes, filmes1))

// 4

let filmes2 = filmes1.pop();
console.log(filmes2);
console.log(filmes1);




