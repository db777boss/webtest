let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
    });
}

function checkout() {
    alert('Redirecting to payment page...');
    window.location.href = 'https://www.google.com';
}

