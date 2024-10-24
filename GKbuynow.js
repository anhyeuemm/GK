document.addEventListener("DOMContentLoaded", function() {
    updateTotal();
});

function updateQuantity(button, change) {
    let quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    let newQuantity = quantity + change;

    if (newQuantity < 1) {
        newQuantity = 1;
    }

    quantityElement.textContent = newQuantity;

    updateTotal();
}

function updateTotal() {
    let cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    let itemCount = 0;

    cartItems.forEach(item => {
        let quantity = parseInt(item.querySelector('.quantity').textContent);
        let price = parseFloat(item.getAttribute('data-price'));
        total += quantity * price;
        itemCount += quantity;
    });

    document.querySelector('.total-price').textContent = `₱${total.toFixed(2)}`;
    document.querySelector('.item-count').textContent = `${itemCount} items`;
}

function removeItem(link) {
    let cartItem = link.closest('.cart-item');
    cartItem.remove();
    updateTotal();
}
