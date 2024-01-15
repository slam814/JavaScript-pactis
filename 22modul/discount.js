function tiketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate
        return price;
    }
}



const price = tiketPrice(100);
console.log(`price: ${price}`);