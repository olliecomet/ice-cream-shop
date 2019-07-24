import { calcLineTotal } from './register.js';

export function renderLineItem(iceCream, lineItem) {
    const tr = document.createElement('tr');

    const tableNameCell = document.createElement('td');
    tableNameCell.textContent = lineItem.name;
    tr.appendChild(tableNameCell);

    const tableQuantityCell = document.createElement('td');
    tableQuantityCell.textContent = iceCream.quantity;
    tr.appendChild(tableQuantityCell);

    const tablePriceCell = document.createElement('td');
    tablePriceCell.textContent = lineItem.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(tablePriceCell);

    const tableTotalCell = document.createElement('td');
    const total = calcLineTotal(iceCream.quantity, lineItem.price);
    tableTotalCell.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    tr.appendChild(tableTotalCell);
    return tr;
}

export default renderLineItem;