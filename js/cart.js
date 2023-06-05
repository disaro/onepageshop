import { el } from './utils.js';

// Create cart object
const cartObj = {
    productArr: [],
    totalItems: '',
    totalPrice: '',
};

const summary = el('#summary');
/**
 * Function that creates the cart array
 * @param itemObj {obj}
 */

export function addToCart(itemObj) {
    cartObj.productArr.push(itemObj);
    createCart(cartObj.productArr);
    // add function that calculates total price
}

function createCart(cart) {
    let cartTempl = '';

    cart.forEach((value, index, array) => {
        console.log(value, 'value');
        console.log(index, 'index');

        cartTempl += `<div class="cart-item">
        <img src="${value.itemImg}">
        <h3>${value.itemName}</h3>
        <div class="amount">${value.itemAmount}</div>
        <div class="price">${value.itemPrice} €</div></div>`;
    });

    summary.innerHTML = cartTempl;

    console.log(cart);
    console.log(cartObj);
}

/**
 * Function that deletes a cart object
 * TODO: Write a Function that deletes a cart object
 */

/**
 * Function that creates the cart array
 * TODO: Write a function that displays tht total Cart items next to the Cart Symbol on top of the Page
 */
