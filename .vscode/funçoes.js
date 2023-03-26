function sayMyName(name){
    console.log('Your Name is: ' + name);
}
sayMyName('Iago');
sayMyName('Ribeiro');
sayMyName('Dias ');

function quadrado(valor){
    return valor * valor ;

}
const quadradoDe10 = quadrado(10);
console.log(quadradoDe10)

function incrementarJuros(valor, percentualJuros){
    const acrescimo = (percentualJuros/100) * valor;
    return valor + acrescimo;
}
console.log(incrementarJuros(100, 10)); 
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 13.5));  
console.log(incrementarJuros(120, 10));

function main(){
    console.log('Programa Principal');
}
main();