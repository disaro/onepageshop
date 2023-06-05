import { data } from './data.js';
import { el, addAmount } from './utils.js';


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

    // checks if Product is already in cart and only increases the amount based on selected quantity

    // if(itemObj ... ) {

    // } else {

    // }

    createCart(cartObj.productArr);
    // add function that updates the quantity of products next to the cart symbol
    // add function that calculates total price
}

function createCart(cart) {
    let cartTempl = '';

    cart.forEach((value, index, array) => {
        // console.log(value, 'value');
        // console.log(index, 'index');
        
        cartTempl += `
        <div class="summary-info">
        <div class="flex-row">
            <img src="${value.itemImg}">
            <h3>${value.itemName}</h3>
            <div class="summary-size">${value.itemSize}</div>
            <div class="summary-amount">${addAmount(value.itemStock, value.itemAmount)}</div>
            <div class="price">${value.itemPrice} €</div>
            <button class="remove-btn">X</button>
            
        </div><hr>`;
    });

    summary.innerHTML = cartTempl;

    // console.log(cart);
    console.log(cartObj);
}



/**
 * Function that checks if Product is already in cart and only increases the quantity
 * TODO: like description
 */

/**
 * Function that deletes a cart object
 * TODO: Write a Function that deletes a cart object
 */

/**
 * Function that updates the quantity of products next to the cart symbol
 * TODO: Write a function that displays the total Cart items next to the Cart Symbol on top of the Page
 */
