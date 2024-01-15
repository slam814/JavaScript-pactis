const shopingCart = [
    {name: 'shoe', price: 4, quantity: 0},
    {name: 'Shirt', price: 3, quantity: 0},
    {name: 'pant', price: 6, quantity: 0},
    {name: 'belt', price: 7, quantity: 2}
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productPrice = product.price * product.quantity;

        sum = sum + productPrice;
    }


    return sum;
}

const sopingTotalCost = totalCost(shopingCart);
console.log(sopingTotalCost);