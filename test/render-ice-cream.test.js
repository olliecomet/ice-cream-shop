import renderIceCream from '../src/render-ice-cream.js';

const test = QUnit.test;

QUnit.module('Render Ice Cream');

test ('renders ice cream', assert => {
    //arrange
    const chocolate = {
        code: 'chocolate',
        name: 'Chocolate',
        image: 'assets/chocolate.png',
        description: 'A fan favorite',
        category: 'plain',
        price: 3.00,
        cost: 1.00
    };

    const expected = '<li class="chocolate" title="A fan favorite"><h3>Chocolate</h3><img src="assets/chocolate.png" alt="Chocolate ice cream image"><p class="price">3.00 <button value="chocolate">Add</button></p></li>';

    //act
    const dom = renderIceCream(chocolate);
    const html = dom.outerHTML;

    //assert
    assert.equal(html, expected);
});