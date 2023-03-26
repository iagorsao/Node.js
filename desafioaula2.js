const preçoEtanol = 5.79;
const preçoGasolina = 6.66;
let qualCombustivel = 'etanol';
const gastoMedio = 10;
let distanciaViagem = 100;
let final;

if (qualCombustivel === 'gasolina'){
    custoGasolina = (distanciaViagem / gastoMedio);
    final = (custoGasolina * preçoGasolina)
    console.log(final);
    
}else if (qualCombustivel === 'etanol'){
    custoGasolina = (distanciaViagem / gastoMedio);
    final = (custoGasolina * preçoEtanol)
    console.log(final);
    


}