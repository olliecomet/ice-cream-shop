import store from '../src/data/store.js';
import iceCream from '../src/data/ice-cream.js';
import iceCreamVarieties from '../src/data/ice-cream.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('basic get and save', assert => {
    // arrange
    const key = 'cat';
    const cat = { name: 'felix' };

    // act
    store.save(key, cat);
    const got = store.get(key);

    // assert
    assert.deepEqual(got, cat);
});

test('get products returns bootstrapped data', assert => {
    // act
    const products = store.getProducts();
   
    // assert
    assert.deepEqual(products, iceCream);    
});

test('get shopping cart + return if no shopping cart', assert => {
    // act
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, []);
});

test('order products adds item to shopping cart', assert => {
    // arrange
    const code = 'apple';

    const expected = [{
        code: 'apple',
        quantity: 1
    }];

    // act
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();

    // assert
    assert.deepEqual(shoppingCart, expected);
});

test('get a product by code', assert => {
    // arrange
    const code = 'chocolate';

    const expected = iceCreamVarieties[0];

    // act
    const iceCream = store.getProduct(code);

    // assert
    assert.deepEqual(iceCream, expected);
});


