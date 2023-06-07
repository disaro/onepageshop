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
    const existingProductIndex = cartObj.productArr.findIndex(
        (product) => product.itemId === itemObj.itemId && product.itemSize === itemObj.itemSize
      );
    
      if (existingProductIndex !== -1) {
        const existingProduct = cartObj.productArr[existingProductIndex];
        const newAmount = parseInt(existingProduct.itemAmount) + parseInt(itemObj.itemAmount);
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
      
      //updates the number of items in the cart; calculate the total price
      updateAmountPrice()
}

function createCart(cart) {
    let cartTempl = '';
    let summaryTempl = '';

    cart.forEach((value) => {


        cartTempl += `
        <div class="summary-info">
        <div class="flex-row">
          <img src="${value.itemImg}">
          <h3>${value.itemName}</h3>
          <div class="summary-size">${value.itemSize}</div>
          <div class="summary-amount">${addAmount(value.itemStock, value.itemAmount)}</div>
          <div class="price">${value.itemPrice} €</div>
          <button data-id="${value.itemId}" data-size="${value.itemSize}" class="remove-btn">X</button> 
        </div>
        <hr>
      </div>
      `;
    });

    summaryTempl  

    /*
    <p>VAT: 19%</p>
    <p id='subtotal-text'></p>
    <button id=" " size=" " class="clear-btn">CLEAR</button>
    */
    
   // add clear-btn function ?

    el('#summary').innerHTML = cartTempl;

    // Event Listeners for remove button
    const removeButtons = document.querySelectorAll('.remove-btn');

    removeButtons.forEach((button) => {
        button.addEventListener('click', handleDeleteItem);
    });

    // console.log(cart);
    // console.log(cartObj.productArr);
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
    updateAmountPrice();
}

/**
 * Function that updates the quantity of products next to the cart symbol;
 * Calculates and updates the total price
 */
function updateAmountPrice() {
    let sumItems = 0;
    let sumAmount = 0;
    
    cartObj.productArr.forEach((val) => {
            sumItems += parseInt(val.itemAmount);  
            sumAmount += parseFloat(val.itemPrice) * parseInt(val.itemAmount);     
        });

        cartObj.totalItems = sumItems;
        cartObj.totalPrice = `<b> Subtotal: ${sumAmount.toFixed(2)} </b>`;
        el('#cart-amount-text').innerText = cartObj.totalItems 
        el('#subtotal-text').innerHTML = cartObj.totalPrice;
}

