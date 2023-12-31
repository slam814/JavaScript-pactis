function bringSingara(money){
   if(money >= 9){
    const singaraPrice = 9;
    const moneyBack = money % singaraPrice;
    const quantityPrice = money - moneyBack;
    const quantity = quantityPrice / singaraPrice;
    console.log('Taka diachan:', money, 'Singar nen:', quantity, 'Taka back Pachan apni:', moneyBack)

   }

   else{
    const lesthenTaka = 9 - money;
    console.log('Aro Taka Lagbe', lesthenTaka)
   }


   
   
}


let taka = 1.5;

const reselt = bringSingara(taka);