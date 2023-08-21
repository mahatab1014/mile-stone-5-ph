function stringToNumber(price) {
    return parseFloat(price);
}
function percentage(percent, total) {
    return ((percent/ 100) * total).toFixed(2);
}
// Click To Copy Promo Code
function copyPromoCode(target){
    navigator.clipboard.writeText(target.innerText);
}

let itemsPriceTotal = 0;
function productItemClick(target){
    // Get Product Name & Price
    const productName = target.childNodes[3].childNodes[3].innerText;
    // const productPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const productPrice = stringToNumber(target.childNodes[3].childNodes[5].innerText.split(" ")[0]);

    // Create list of selected products & add style on new list
    const cartContainer = document.getElementById("cart-container");
    cartContainer.style.listStyle = "auto";
    cartContainer.style.listStylePosition = "inside";
    // Connect new list with cart-container
    const createList = document.createElement("li");
    createList.innerText = productName;
    cartContainer.appendChild(createList);

    // Set Total
    itemsPriceTotal = itemsPriceTotal + productPrice;
    const itemsPriceSet = document.getElementById("items-price-total");
    itemsPriceSet.innerText = itemsPriceTotal;

    // Apply Promo Button
    if (itemsPriceTotal >= 200) {
        document.getElementById("promo-apply").disabled = false;
    }
    // Make Purchase Button
    if (itemsPriceTotal >= 0) {
        document.getElementById("purchase-button").disabled = false;
    }

    // In the beginning totalPrice
    const totalPriceSet = document.getElementById("total-price");
    totalPriceSet.innerText = itemsPriceTotal;


    // Set Discount
    document.getElementById("promo-apply").addEventListener("click", function(){
        const setDiscount = document.getElementById("promo-code").value;
        const discountPrice = document.getElementById("discount-price");
        const discount = percentage(20, itemsPriceTotal);

        if (setDiscount === "SELL200") {
            discountPrice.innerText = discount;

             // Set Grand Total Price
            const totalPrice = itemsPriceTotal - discount;
            const totalPriceSet = document.getElementById("total-price");
            totalPriceSet.innerText = totalPrice;
        }
    });

    // Make Purchase Modal
    document.getElementById("purchase-button").addEventListener("click", function(){
        make_purchase.showModal();
    });
}