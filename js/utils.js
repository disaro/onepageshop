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

export function addImage(image) {
    const imagePath = `/img/products/article.jpg/${image}`; 
console.log(image);
    return imagePath;
  }
  

/**
 * Function that returns the sizes
 * @param size {array}
 */

export function addSize(size) {

    console.log(size);
    return 'l, m'
}

/**
 * Function that returns the amount of available products to add
 * @param stock {Number}
 */
export function addAmount(stock) {
    let amount = 0;

    // Return the options template based on available products
    function option() {
        let optTemplate = '';

        for (let i = 0; i < stock; i++) {
            optTemplate += `<option>${i}</option>`;
        }
        return optTemplate;
    }

    // condition to check if product is available and return
    if (stock < 1) {
        amount = `<span class="sold">sold out</span>`;
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
