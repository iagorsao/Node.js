let media1 = 5;
let media2 = 7.8;
let media3 = 8;
const media = (media1 + media2 + media3) / 3;

if (media < 5){
    console.log('REPROVADO');
}else if(media > 5 && media < 7){
    console.log('RECUPERAÇÃO');
}else if (media > 7 ){
    console.log('APROVADO');
}
