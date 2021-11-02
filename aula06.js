//2 - Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adicionar (numA, numB){
    return numA + numB
}


// 3 - Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtração (numA, numB){
    return numA - numB
}


// 4 - Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicação (numA, numB){
    return numA * numB
}


// 5 - Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao (numA, numB){
    return numA / numB
}


// Calculadora - Nível II

// 1:

console.log("------------Teste de Operações/Calculadora--------------")

// 2: 

console.log(adicionar(10, 10));
console.log(subtração(10, 10));
console.log(multiplicação(10, 10));
console.log(divisao(0, 0));

//      Calculadora - Nível III - Funções Extras


//1

function quadradoDoNumero(a) {
    
    return multiplicação(a,a)
}
console.log(quadradoDoNumero(10))

//2

function mediaDeTresNumeros(a, b, c,){
    const soma1 = adicionar(a,b)
    const soma2 = adicionar(soma1, c)
    return divisao(soma2, 3)
}

console.log(mediaDeTresNumeros(2, 3, 4))

// 3

function calculaPorcentagem(total,porc){
    
    const valor = divisao(porc, 100)
      return multiplicação(total, valor)
}

console.log(calculaPorcentagem(15, 300))

// 4

function geradorDePorcentagem(numA, numB) {
    const valor1 = divisao(numB, 100)
    return multiplicação(numA, valor1)
    
}

console.log(geradorDePorcentagem(2,200))