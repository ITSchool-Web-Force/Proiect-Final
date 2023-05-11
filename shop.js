
document.addEventListener('DOMContentLoaded', () => {
    // Get all "Add to cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    // Create empty shopping cart array
    let cart = [];
  
    // Add event listener to each button
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get item ID from button data attribute
        const itemId = button.getAttribute('data-item-id');
  
        // Add item to cart array
        cart.push(itemId);
  
        // Update cart total
        const cartTotal = document.querySelector('#cart-total');
        cartTotal.textContent = cart.length;
  
        // Display confirmation message
        alert('Item added to cart!');
      });
    });
  });
  
// Drop down menu
const shopButton = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

shopButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});


