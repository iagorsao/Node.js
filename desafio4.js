const altura = 1.75;
const peso = 80;
const imc = peso / (altura * altura);
console.log(imc.toFixed(2))

if(imc < 18.5){
    console.log('ABAIXO DO PESO');

}else if (imc <= 25){
    console.log('ACIMA DO PESO');

}else if (imc <= 40){
    console.log('OBESO');

}else if (imc >= 41){
    console.log('OBESIDADE GRAVE')
}