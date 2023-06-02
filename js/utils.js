/**
 * Basic Utils
 */

export function el(css) {
    return document.querySelector(css);
}

export function group(css) {
    return document.querySelectorAll(css);
}

export function create(html) {
    return document.createElement(html);
}

/**
 * Function that returns the image path
 * TODO: Write a function that returns a complete image path
 */

/**
 * Function that returns the sizes
 * TODO: Write a function that returns the sizes as a select box
 */

/**
 * Function that returns the amount of available products to add
 * @param stock {Number}
 */
export function addAmount(stock) {
    let amount = null;

    // Return the options template based on available products
    function option() {
        let optTemplate = null;

        for (let i = 0; i < stock; i++) {
            optTemplate += `<option>${i}</option>`;
        }
        return optTemplate;
    }

    // condition to check if product is available and return
    if (stock < 1) {
        amount = `sold out`;
    } else {
        amount = `<select>
        ${option()}
        </select>`;
    }

    return amount;
}

/**
 * Function that updates the cart
 * TODO: Write a function that updates the cart icon amount
 */
