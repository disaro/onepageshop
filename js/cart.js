import { el, addAmount } from './utils.js';

// Define cartObj
const cartObj = {
    productArr: [],
    totalItems: '',
    totalPrice: '',
};

/**
 * Function that creates the cart array
 * @param itemObj {obj}
 */

// Define the die addToCart-Funktion
export function addToCart(itemObj) {
    cartObj.productArr.push(itemObj);

    // checks if Product is already in cart and only increases the amount based on selected quantity

    // if(itemObj ... ) {

    // } else {

    // }

    createCart(cartObj.productArr);
    // add function that updates the quantity of products next to the cart symbol
    updateAmount()
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
                <div class="summary-amount">${addAmount(
                    value.itemStock,
                    value.itemAmount
                )}</div>
                <div class="price">${value.itemPrice} €</div>
                <button data-id="${value.itemId}" class="remove-btn">X</button>
                
            </div>
            <hr>
        </div>`;
    });

    el('#summary').innerHTML = cartTempl;

    // Event Listeners for remove button
    const removeButtons = document.querySelectorAll('.remove-btn');

    removeButtons.forEach((button) => {
        button.addEventListener('click', handleDeleteItem);
    });

    // console.log(cart);
    console.log(cartObj.productArr);
}

/**
 * Function that checks if Product is already in cart and only increases the quantity
 * TODO: like description
 */

/**
 * Function that deletes a cart object
 */

function handleDeleteItem(e) {
    // Empty cart html first
    el('#summary').innerHTML = '';

    // Filter out all items that are not equal with the ID
    function deleteProductById(id) {
        cartObj.productArr = cartObj.productArr.filter(
            (product) => { 
                console.log(product, 'product')
                console.log(id, 'id')
                return product.itemId !== id }
        );
    }
    deleteProductById(e.target.getAttribute('data-id'));
    // Recreate updated cart
    createCart(cartObj.productArr);
}

/**
 * Function that updates the quantity of products next to the cart symbol
 * 
 */
function updateAmount() {
    let sum = 0;
    
    cartObj.productArr.forEach((val) => {
            sum += parseInt(val.itemAmount);       
        });
        //console.log(sum);  
        cartObj.totalItems = sum;
        el('#cart-amount-text').innerText = cartObj.totalItems 
}


