// Ciclos e Repetições

// 1 



let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "a vida é bela"];

let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"] 


function lista(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i].toUpperCase())

    }

}

lista(filmes) 


//  2


function passagemDeElementos(array1, array2) { 
    let invalido = array2.pop();
    let qtd = array2.length;
       for (let i = 0; i < qtd; i ++){
       array1.push(array2.pop().toUpperCase())

          }
          console.log("Esse filme  é invalido:", invalido)
          return array1
    
   }

   console.log(passagemDeElementos(filmes, filmes2))

   // 3










