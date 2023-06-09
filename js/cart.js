import { el, group, addAmount } from './utils.js';

// Define cartObj
const cartObj = {
    productArr: [],
    totalItems: 0,
    totalPrice: '',
};

/**
 * Function that creates the cart array
 * @param itemObj {obj}
 */

// Define the die addToCart-Funktion
export function addToCart(itemObj) {
    const existingProductIndex = cartObj.productArr.findIndex(
        (product) =>
            product.itemId === itemObj.itemId &&
            product.itemSize === itemObj.itemSize
    );

    if (existingProductIndex !== -1) {
        const existingProduct = cartObj.productArr[existingProductIndex];
        const newAmount =
            parseInt(existingProduct.itemAmount) + parseInt(itemObj.itemAmount);
        const itemStock = parseInt(existingProduct.itemStock);

        if (newAmount <= itemStock) {
            existingProduct.itemAmount = newAmount.toString();
        } else {
            existingProduct.itemAmount = itemStock.toString();
        }
    } else {
        cartObj.productArr.push(itemObj);
      }
      createCart(cartObj.productArr);
      //updateAmount();
      // Updates the number of items in the cart; calculate the total price
      updateAmountPrice()
}

function createCart(cart) {
    let cartTempl = '';
    let summaryTempl = '';

    cart.forEach((value) => {

        // Template for products in the shopping cart     
        cartTempl += `
        <div class="summary-info">
        <div class="flex-row">
          <img src="${value.itemImg}">
          <h3>${value.itemName}</h3>
          <div class="summary-size">${value.itemSize}</div>
          <div class="summary-amount" data-previous-value="${
              value.itemAmount
          }">${addAmount(value.itemStock, value.itemAmount)}</div>
          <div class="price">${value.itemPrice} €</div>
          <button data-id="${value.itemId}" data-size="${
            value.itemSize
        }" class="remove-btn">X</button>
        </div>
        <hr>
      </div>
      `;
    });
    
    // TODO: add clear-btn function (?)
    // TODO: add buy-btn function --> JSON Object console (?)

    // Template for total price summary
    summaryTempl = `
        <p id='vat'>VAT: 19%</p>
        <p id='subtotal-text'></p>
        <button class="buy-btn">BUY</button>
        <button class="clear-btn">CLEAR</button>
        `
    // Link html
    el('#summary').innerHTML = cartTempl;
    el('.subtotal-wrapper').innerHTML = summaryTempl;

    // Event Listeners for remove button
    const removeButtons = group('.remove-btn');
    const summaryAmountSelects = group('.summary-amount');
    // Event Listener for clear button
    el('.clear-btn').addEventListener('click', clearCart);

    removeButtons.forEach((button) => {
        button.addEventListener('click', handleDeleteItem);
    });

    summaryAmountSelects.forEach((select) => {
        select.addEventListener('change', selectAmount);
    });

    // console.log(cart);
    console.log(cartObj);
}

/**
 * Function that checks if Product is already in cart and only increases the quantity
 * TODO: like description
 */

function selectAmount(e) {
    const select = e.target;
    const selectedValue = parseInt(select.value);
    const previousValue =
        parseInt(select.parentNode.getAttribute('data-previous-value')) ||
        parseInt(select.dataset.previousValue);

    console.log(cartObj.totalItems, 'cartObj.productArr.totalItems');

    if (selectedValue > previousValue) {
        // Wert wurde erhöht
        const difference = selectedValue - previousValue;
        console.log(`Wert um ${difference} erhöht`);
        console.dir(cartObj);
        cartObj.totalItems += difference;
        updateAmount(true);

        // Führe die entsprechende Aktion aus
    } else if (selectedValue < previousValue) {
        // Wert wurde verringert
        const difference = previousValue - selectedValue;
        console.log(`Wert um ${difference} verringert`);
        cartObj.totalItems -= difference;
        updateAmount(true);
        console.log(cartObj);
        // Führe die entsprechende Aktion aus
    } else {
        // Wert wurde nicht geändert
        console.log('Wert wurde nicht geändert');
        // Führe keine Aktion aus
    }

    console.log(cartObj.totalItems, 'cartObj.productArr.totalItems after');

    // Only initially
    select.parentNode.removeAttribute('data-previous-value');

    // Aktualisiere den vorherigen Wert im Dataset des Select-Felds
    select.dataset.previousValue = selectedValue;
}

/**
 * Function that deletes a cart object
 */

function handleDeleteItem(e) {
    // Empty cart html first
    el('#summary').innerHTML = '';

    // Filter out all items that are not equal with the ID
    function deleteProductById(id, size) {
        cartObj.productArr = cartObj.productArr.filter((product) => {
            // Filter products where neither ID nor size match.
            return product.itemId !== id || product.itemSize !== size;
        });
    }
    deleteProductById(
        e.target.getAttribute('data-id'),
        e.target.getAttribute('data-size')
    );
    // Recreate updated cart
    createCart(cartObj.productArr);
    // Updates the number of items in the cart; calculate the total price
    updateAmount();
    updateAmountPrice();
}

/**
 * Function that updates the quantity of products next to the cart symbol;
 *Calculates and updates the total price
 */
/**
 * Function that updates the quantity of products next to the cart symbol
 *
 */
function updateAmountPrice() {
    // Total items 
    let sumItems = 0;
    // Total amount
    let sumAmount = 0;
    const vat = 1.19;
    
    cartObj.productArr.forEach((val) => {
            sumItems += parseInt(val.itemAmount);

            // Calculate total price with vat
            sumAmount += (parseFloat(val.itemPrice) * vat) * parseInt(val.itemAmount);     
        });

        // Link to the object elements + html
        cartObj.totalItems = sumItems;
        cartObj.totalPrice = `<b> Subtotal: ${sumAmount.toFixed(2)} </b>`;
        el('#cart-amount-text').innerText = cartObj.totalItems 
        el('#subtotal-text').innerHTML = cartObj.totalPrice;
}

/**
 * Function that clear the cart.
 */
function clearCart() {

    //empty the elements 
    cartObj.productArr = [];
    cartObj.totalItems = '';
    cartObj.totalPrice= 0;
  
    updateAmountPrice(); 
    createCart(cartObj.productArr);
  }