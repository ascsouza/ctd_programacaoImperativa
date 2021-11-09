
let  comida = {
    pipoca:    10,
    macarrao:   8,
    carne:     15,
    feijao:    12,
    Brigadeiro: 8 
}


function microondas(comida, tempo){
    if (tempo < comida) {
        console.log("Tempo Insuficiente!")             
        } else if (tempo >= comida && tempo < 2 * comida){
            console.log("Prato esta Pronto!")
            }else if(tempo >= 2 * comida && tempo < 3 * comida){
                console.log("Prato Queimou")
                } else if(tempo >= 3 * comida){
                    console.log("Kabuumm")
                        }else {
                            console.log("Opção Inexistente")
                }
}


microondas(comida.pipoca, 9);
microondas(comida.pipoca, 10);
microondas(comida.pipoca, 20);
microondas(comida.pipoca, 30);
microondas(comida.pipoca, 8);
microondas(comida.pipoca, 8);
    



