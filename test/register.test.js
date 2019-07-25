import iceCreamVarieties from '../src/data/ice-cream.js';
import order from '../src/data/order.js';
import { findProduct, calcLineTotal, calcOrderTotal } from '../src/register.js';

QUnit.module('Register');

const test = QUnit.test;

test('Find product by code', assert => {
    // arrange 
    const code = 'chocolate';
    const expected = {
        code: 'chocolate',
        name: 'Chocolate',
        image: 'assets/chocolate.png',
        description: 'A fan favorite',
        category: 'plain',
        price: 3.00,
        cost: 1.00
    };

    // act 
    const foundProduct = findProduct(code, iceCreamVarieties);

    // assert
    assert.deepEqual(foundProduct, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 2;
    const expected = 6;

    // act
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});

test('calculate order total', (assert) => {
    // arrange 
    const expected = '$25.00';

    // act
    const orderTotal = calcOrderTotal(order, iceCreamVarieties);

    // assert
    assert.equal(orderTotal, expected);
});