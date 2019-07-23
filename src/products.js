import iceCreamVarieties from './data/ice-cream.js';
import renderIceCream from './render-ice-cream.js';

const list = document.getElementById('ice-cream');

for (let i = 0; i < iceCreamVarieties.length; i++) {
   
    const iceCream = iceCreamVarieties[i];
    const dom = renderIceCream(iceCream);
    list.appendChild(dom);
}