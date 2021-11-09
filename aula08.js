function podeSubir(catraca){

    if (catraca > 1.40 && catraca < 2.00){
       return "liberado"
    }    else if (catraca > 1.20 && autorizado < 1.40){
           return "Acesso autorizado somente com acompanhante"
    }          else {
                return "Não autorizado"
    }


}

console.log(podeSubir(1.25))





