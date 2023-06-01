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
 * Function that returns the amount of producs to add
 * TODO: Write a function that returns a template for amount of products.
 */
export function addAmount() {
    // TODO: Check how many products are available and add that many options
    const amount = `<select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    </select>`;
    return amount;
}

/**
 * Function that updates the cart
 * TODO: Write a function that updates the cart icon amount
 */
