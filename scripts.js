
// Slider
const sliderImages = document.querySelectorAll('.slider img');
let current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove('active');
  }
}

function startSlide() {
  reset();
  sliderImages[0].classList.add('active');
}

function slideLeft() {
  reset();
  sliderImages[current - 1].classList.add('active');
  current--;
}

function slideRight() {
  reset();
  sliderImages[current + 1].classList.add('active');
  current++;
}

// Button events
document.querySelector('.slider .prev').addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

document.querySelector('.slider .next').addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

// Number of Visitors
let visitorCount = 0;
const visitorCounter = document.querySelector('#visitor-count');

function updateVisitorCount() {
  visitorCount++;
  visitorCounter.innerHTML = visitorCount;
}

setInterval(updateVisitorCount, 1000);

// Product Prices
const productPrices = document.querySelectorAll('.product .price');

for (let i = 0; i < productPrices.length; i++) {
  let price = parseInt(productPrices[i].innerHTML.slice(1));
  price = price + (price * 0.5);
  productPrices[i].innerHTML = '$' + price;
}

// Add to Cart
const addToCartButtons = document.querySelectorAll('.product button');

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', function() {
    // Get the product name and price
    const productName = this.parentElement.querySelector('.product-name').innerHTML;
    const productPrice = this.parentElement.querySelector('.product-price').innerHTML;

    // Add the product to the cart list
    const cartList = document.querySelector('#cart-list');
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="product.jpg" alt="Product">
      <span class="product-name">${productName}</span>
      <span class="product-price">${productPrice}</span>
    `;
    cartList.appendChild(cartItem);

    // Show a success message
    alert('Product added to cart!');
  });
}

// Checkout Button
document.querySelector('#checkout-button').addEventListener('click', function() {
  // Redirect to the order confirmation page
  window.location.href = 'order-confirmation.html';
});

