// 1 - Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function polegadas (A){
    return 2.54 * A
}

console.log(polegadas(10))

// 2 - Crie uma função que receba uma string e a converta em um URL. ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function stringSite(string) {
    return "http://www." + string + ".com.br"
}
console.log(stringSite("DH"))

// 3 - Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function string(string) {
    return string + "!"
}

console.log(string("DH"));

// 4 - Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function cachorro(anos) {
    return anos * 7
}

console.log(cachorro(5));

// 5 - Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.

function trabalho(salario) {

    return salario / 160
}

console.log(trabalho(1500));

// 6 - Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 

function imc(a, p) {
    return  p /(a * a)
}

console.log(imc(1.70, 60.0))

/* 7 - *Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase(). A função .toUpperCase() modifica a string e converte todos os caracteres para letras
maiúsculas:    */

function converter(string) {

    return string.toUpperCase()

}

console.log(converter("alisson"))

// 8 - Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.

function parametro (numA) {
    return typeof(numA)
}

console.log(parametro(10))

// 9 - Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.

function circunferência(raio) {
    return Math.PI * raio
}

console.log(circunferência(10))