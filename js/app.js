import { data } from './data.js';
import { el, group, create, addAmount } from './utils.js';

console.log(data);

function app() {
    let productsWrap, summary, cart;

    /**
     * Create Init Variables
     */
    function init() {
        productsWrap = el('#products');
        summary = el('#summary');
        cart = el('#cart');
    }

    /**
     * Create renderTemplate
     * @param data {Object}
     */
    function renderTemplate(data) {
        let html = '';

        data.forEach((item) => {
            html += `<div>
            ${item.name}<br>
            ${item.description}<br>
            ${item.price} €<br>
            ${item.sizes}<br>
            ${addAmount()} <button id="${item.id}">add</button>
            </div>
`;
        });

        productsWrap.innerHTML = html;
    }
    init();
    renderTemplate(data.products);
}

app();
