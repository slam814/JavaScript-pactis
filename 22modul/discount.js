function tiketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Rate = 100 * first100Rate;
        const restTicketQuntity = ticketQuantity - 100;
        const restTicketPrice  = restTicketQuntity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketPrice = restTicketQuntity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;

    }
}



const price = tiketPrice(180);
console.log(`price: ${price}`);