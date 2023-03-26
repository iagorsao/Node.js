const preço = 100;
const cond_Pagamento = 4;
const avista_Deb_10 = preço - ((preço * 10)/ 100);
const avista_Din_Pix_15 = preço - ((preço * 15)/ 100);
const acima_2x = preço + ((preço * 10)/ 100);


if(cond_Pagamento === 1){
    console.log('o preço fica R$' + avista_Deb_10);
    
}else if(cond_Pagamento === 2  ){
    console.log('o preço fica R$' + avista_Din_Pix_15);
    
}if(cond_Pagamento === 3){
    console.log('o preço fica R$' + preço);
    
}if(cond_Pagamento === 4){
    console.log('o preço fica R$' + acima_2x);
    
}