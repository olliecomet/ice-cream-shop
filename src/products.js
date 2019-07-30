import renderIceCream from './render-ice-cream.js';
import store from './data/store.js';

const iceCreamVarieties = store.getProducts();

const list = document.getElementById('ice-cream');

for(let i = 0; i < iceCreamVarieties.length; i++) {
   
    const iceCream = iceCreamVarieties[i];
    const dom = renderIceCream(iceCream);
    list.appendChild(dom);
}