import store from './data/store.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const product = {
        code: formData.get('code'),
        name: formData.get('name'),
        category: formData.get('category'),
        price: +formData.get('price'),
        description: formData.get('description')
    };

    store.addProduct(product);

    alert('Product Saved!');

    form.reset();
});