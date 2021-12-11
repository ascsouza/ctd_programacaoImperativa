
const Curso = require('./arquivo')

const listaEstudantes  =  [
    {  
        nome : "Pedro Ferreira" ,  
        qtdFaltas : 3 ,  
        notas : [ 8 ,  4 ,  10 ]  } ,

    {  
        nome : "Jose Antonio" ,  
        qtdFaltas : 2 ,  
        notas : [ 14 ,  7 ,  4 ]  
    } ,

    {  
        nome : "Mario Estie" ,  
        qtdFaltas : 8 ,  
        notas : [ 9 ,  5 ,  4 ]  
    } ,

    {  nome : "Victor Anto" ,  
       qtdFaltas : 6 ,  
       notas : [ 6 ,  10 ,  8 ]  
    } ,

    {  
        nome : "Thiago Ventra" ,  
        qtdFaltas : 9 ,  
        notas : [ 4 ,  7.4 , 3 ]  
    } ,

    {  nome : "Alberto Frias" ,  
       qtdFaltas : 2 ,  
       notas : [ 9 , 5 ,  4 ] 
    }] ;



let pi = new Curso('pi', 1, 2, listaAlunos)

console.log(pi.resultadoAprovacao('jonas'))