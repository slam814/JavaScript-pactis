var shopingCart ={
    Book: 23,
    pen: 100,
    pencile: 223,
    rolar: 888,

}
console.log(shopingCart);

shopingCart.pen = 77;
console.log(shopingCart);
var propertyName = 'pen';
shopingCart[propertyName] = 8888;
console.log(shopingCart);