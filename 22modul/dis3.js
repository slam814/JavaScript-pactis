function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const secend100Rate = 90;
    const restTicketRet = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * secend100Rate;
        const totalPrice = restTicketPrice + first100Price;
        return totalPrice;
    }else{
        const first100Price = 100 * first100Rate;
        const secend100Price = 100 * secend100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketRet * restTicketQuantity;
        const totalCost = first100Price + secend100Price + restTicketPrice;
        return totalCost;
    }


}



const price = ticketPrice(120);
console.log(price);