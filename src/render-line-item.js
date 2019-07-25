import { calcLineTotal } from './register.js';

export function renderLineItem(iceCream, lineItem) {
    const tr = document.createElement('tr');

    const tableNameCell = document.createElement('td');
    tableNameCell.textContent = iceCream.name;
    tr.appendChild(tableNameCell);
    
    const tableQuantityCell = document.createElement('td');
    tableQuantityCell.textContent = lineItem.quantity;
    tr.appendChild(tableQuantityCell);

    const tablePriceCell = document.createElement('td');
    tablePriceCell.textContent = iceCream.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(tablePriceCell);

    const tableTotalCell = document.createElement('td');
    const total = calcLineTotal(lineItem.quantity, iceCream.price);
    tableTotalCell.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    tr.appendChild(tableTotalCell);
    return tr;
}

export default renderLineItem;