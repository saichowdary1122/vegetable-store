let cart = [];
let total = 0;

// Add to Cart
function addToCart(item, price) {
    cart.push({ item, price });
    total += price;

    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Update cart
    const listItem = document.createElement('li');
    listItem.textContent = `${item} - $${price}`;
    cartItems.appendChild(listItem);

    // Update total
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout (Buy Now)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase! Your order ID is: ORDER12345');
        // Reset cart
        cart = [];
        total = 0;
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('total').textContent = 'Total: $0';
    }
}

// Submit Feedback
function submitFeedback() {
    const feedbackInput = document.getElementById('feedback-input');
    const feedbackList = document.getElementById('feedback-list');

    if (feedbackInput.value.trim() === '') {
        alert('Please enter feedback before submitting.');
        return;
    }

    const feedbackItem = document.createElement('p');
    feedbackItem.textContent = feedbackInput.value;
    feedbackList.appendChild(feedbackItem);

    feedbackInput.value = '';
    alert('Thank you for your feedback!');
}

// Track Order
function trackOrder() {
    const orderId = document.getElementById('order-id').value;

    if (orderId === 'ORDER12345') {
        document.getElementById('tracking-result').textContent = 'Your order is being prepared for shipment.';
    } else {
        document.getElementById('tracking-result').textContent = 'Order not found. Please check the Order ID.';
    }
}