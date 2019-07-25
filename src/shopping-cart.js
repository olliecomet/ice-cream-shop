import order from './data/order.js';
import iceCreamVarieties from './data/ice-cream.js';
import { findProduct, calcOrderTotal } from './register.js';
import renderLineItem from './render-line-item.js';


const tbody = document.querySelector('tbody');
const orderTotal = document.getElementById('order-total-cell');

for(let i = 0; i < order.length; i++) {
    const lineItem = order[i];
    const iceCream = findProduct(order[i].code, iceCreamVarieties);
    const dom = renderLineItem(iceCream, lineItem);
    tbody.appendChild(dom);
}

orderTotal.textContent = calcOrderTotal(order, iceCreamVarieties);