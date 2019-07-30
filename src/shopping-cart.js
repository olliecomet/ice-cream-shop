import { calcOrderTotal } from './register.js';
import renderLineItem from './render-line-item.js';
import store from './data/store.js';

const iceCreamVarieties = store.getProducts();

const tbody = document.querySelector('tbody');
const orderTotal = document.getElementById('order-total-cell');

const shoppingCart = store.getShoppingCart();

for(let i = 0; i < shoppingCart.length; i++) {
    const lineItem = shoppingCart[i];
    const iceCream = store.getProduct(lineItem.code);
    const dom = renderLineItem(iceCream, lineItem);
    tbody.appendChild(dom);
}

orderTotal.textContent = calcOrderTotal(shoppingCart, iceCreamVarieties);