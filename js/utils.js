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
 * Function that returns the image  with path
 * @param size {string}
 */

export function addImage(image) {
    const imagePath = ` <img src ="./img/products/${image}.jpg">`;
    //console.log(image);
    return imagePath;
}

/**
 * Function that returns the sizes
 * @param size {array}
 */

export function addSize(size, stock) {
    let sizesTemplate = '';

    size.forEach((val) => {
        sizesTemplate += `<option value="${val}">${val}</option>`;
    });

    if (stock < 1) {
        return '';
    } else {
        return `<select class="size">${sizesTemplate}</select>`;
    }
}

/**
 * Function that returns the amount of available products to add
 * @param stock {Number}
 */
export function addAmount(stock, selectedAmount) {
    let amountTempl = 0;
    //console.log(stock, selectedAmount, 'selected amount');
    // Return the options template based on available products
    function option() {
        let optTemplate = '';

        for (let i = 1; i <= stock; i++) {
            optTemplate += `<option ${
                i == selectedAmount ? 'selected="selected"' : ''
            } value="${i}">${i}</option>`;
        }
        return optTemplate;
    }

    // condition to check if product is available and return
    if (stock < 1) {
        amountTempl = `<span class="sold">sold out</span>`;
    } else {
        amountTempl = `<select class="amount">
        ${option()}
        </select>`;
    }

    return amountTempl;
}
