export function findProduct(code, iceCreamVarieties) {
    for(let i = 0; i < iceCreamVarieties.length; i++) {

        if(iceCreamVarieties[i].code === code) {
            return iceCreamVarieties[i];
        }
    }

    return null;
}

export function calcLineTotal(quantity, price) {
    const total = (quantity * price);
    return total;
} 

export function calcOrderTotal(order, iceCreamVarieties) {
    let orderTotal = 0;
    
    for(let i = 0; i < order.length; i++) {
        const product = findProduct(order[i].code, iceCreamVarieties);
        const lineTotal = calcLineTotal(order[i].quantity, product.price);

        orderTotal += lineTotal;   
    }

    return orderTotal;
}