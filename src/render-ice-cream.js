import store from './data/store.js';

function renderIceCream(iceCream) {
    const li = document.createElement('li');
    li.className = iceCream.code;
    li.title = iceCream.description;

    const h3 = document.createElement('h3');
    h3.textContent = iceCream.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = iceCream.image;
    img.alt = iceCream.name + ' ice cream image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = iceCream.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = iceCream.code;
    button.addEventListener('click', () => {
        store.orderProduct(iceCream.code);
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}
// fixing my mistakes
export default renderIceCream;