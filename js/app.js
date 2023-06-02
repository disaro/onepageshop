import { data } from './data.js';
import { el, group, create, addAmount, addImage, addSize } from './utils.js';

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
            ${addImage(item.image)}
            <h3 class="name">${item.name}</h3>
            <p class="description">${item.description}</p>
            <p class="price">${item.price} €<p>
            ${addSize(item.sizes, item.stock)}
            ${addAmount(item.stock)} <button ${
                item.stock < 1 ? 'disabled' : ''
            } id="${item.id}">add</button>
            </div>
            `;
        });

        productsWrap.innerHTML = html;
    }
    init();
    renderTemplate(data.products);
}

app();
