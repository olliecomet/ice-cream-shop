import iceCreamVarieties from '../src/data/ice-cream.js';
import renderLineItem from '../src/render-line-item.js';
import { findProduct } from '../src/register.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    // arrange
    const lineItem = {
        code: 'chocolate',
        quantity: 4
    };
    
    const chocolate = findProduct(lineItem.code, iceCreamVarieties);
    const expected = '<tr><td>Chocolate</td><td>4</td><td>$3.00</td><td>$12.00</td></tr>';

    // act
    const dom = renderLineItem(chocolate, lineItem);
    const html = dom.outerHTML; 

    // assert
    assert.equal(html, expected);
});

