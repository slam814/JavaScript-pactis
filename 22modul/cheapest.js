const phones =[
    {name: 'samsang', camara: 12, storage: '32gb', price: 600, color: 'silver'},
    {name: 'walton', camara: 12, storage: '32gb', price: 2200, color: 'silver'},
    {name: 'iPhone', camara: 12, storage: '32gb', price: 8200, color: 'silver'},
    {name: 'Xaomi', camara: 12, storage: '32gb', price: 5200, color: 'silver'},
    {name: 'Oppo', camara: 12, storage: '32gb', price: 2000, color: 'silver'},
    {name: 'Nokia', camara: 12, storage: '32gb', price: 4400, color: 'silver'},
    {name: 'HTC', camara: 12, storage: '32gb', price: 62200, color: 'silver'},
];

// console.log(phones);

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }

        
    }

    return cheapest;
}


const result = cheapestPhone(phones);
console.log(result);