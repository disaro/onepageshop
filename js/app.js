import { data } from './data.js';
import { el, group, create, addAmount, addImage, addSize } from './utils.js';
import { cartUpdater } from './cart.js';

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
            } id="${item.id}" data-name="${item.name}" data-price="${item.price}">add</button>
            </div>
            `;
        });

        productsWrap.innerHTML = html;

        // Event-Listener für jeden Button hinzufügen
        const buttons = productsWrap.querySelectorAll('button');
        console.log(buttons);
        buttons.forEach((button) => {
            button.addEventListener('click', handleAddToCart);
        });
    }

    function handleAddToCart(e) {

        const itemObj = {
            itemId: e.target.id,
            itemName: e.target.getAttribute('data-name'),
            itemPrice: e.target.getAttribute('data-price'),
            itemSize: e.target.parentNode.querySelector('.size').value,
            itemAmount: e.target.parentNode.querySelector('.amount').value,
            itemImg: e.target.parentNode.parentNode.querySelector('img').getAttribute('src')
        };
        
        // console.log(itemObj)
        // console.log(size)
        // console.log(amount)
        console.log(itemObj)

        // Füge den Artikel dem Warenkorb hinzu
        //addToCart(itemId);
    }

    init();
    renderTemplate(data.products);
}

app();
