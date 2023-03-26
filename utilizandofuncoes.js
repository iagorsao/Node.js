function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function classificarImc(imc){
    if(imc < 18.5){
        return'ABAIXO DO PESO';
    
    }else if (imc <= 25){
        return'ACIMA DO PESO';
    
    }else if (imc <= 40){
        return'OBESO';
    
    }else if (imc >= 41){
        return'OBESIDADE GRAVE'
    }   
}

function main(){
    
    const altura = 1.75;
    const peso = 75;
    
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc))
}
main();
