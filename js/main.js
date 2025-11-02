// Main JavaScript for SuryaKit Solutions Website

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        }
    });

    // Shopping cart functionality
    initializeCart();

    // Newsletter form handling
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmit);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#privacy' && href !== '#terms' && href !== '#shipping') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Shopping Cart Management
function initializeCart() {
    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('suryakitCart') || '[]');
    updateCartCount();

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productCard = this.closest('.product-card');

            const product = {
                id: productId,
                name: productCard.querySelector('h3').textContent,
                price: productCard.querySelector('.product-price').textContent,
                brand: productCard.querySelector('.product-brand').textContent
            };

            addToCart(product);
        });
    });

    // Cart button click
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            showCartModal();
        });
    }
}

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('suryakitCart') || '[]');

    // Check if product already exists
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        // Increase quantity
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
    } else {
        // Add new product
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('suryakitCart', JSON.stringify(cart));
    updateCartCount();

    // Show success message
    showNotification('Product added to cart!');
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('suryakitCart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

function showCartModal() {
    const cart = JSON.parse(localStorage.getItem('suryakitCart') || '[]');

    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let cartHTML = '<div style="padding: 20px;">';
    cartHTML += '<h2>Your Cart</h2>';
    cartHTML += '<div style="margin: 20px 0;">';

    cart.forEach((item, index) => {
        cartHTML += `
            <div style="border-bottom: 1px solid #ddd; padding: 10px 0; margin: 10px 0;">
                <h4>${item.name}</h4>
                <p>${item.brand}</p>
                <p>Price: ${item.price} x ${item.quantity}</p>
            </div>
        `;
    });

    cartHTML += '</div>';
    cartHTML += '<button onclick="clearCart()" style="padding: 10px 20px; background: #ff6b00; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">Clear Cart</button>';
    cartHTML += '<a href="bulk-orders.html" style="padding: 10px 20px; background: #1a4d2e; color: white; text-decoration: none; border-radius: 5px;">Request Quote</a>';
    cartHTML += '</div>';

    // Create modal (simplified for demo)
    const modal = document.createElement('div');
    modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); z-index: 10000; display: flex; align-items: center; justify-content: center;';

    const modalContent = document.createElement('div');
    modalContent.style.cssText = 'background: white; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto; border-radius: 10px; position: relative;';

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = 'position: absolute; top: 10px; right: 15px; font-size: 30px; background: none; border: none; cursor: pointer;';
    closeBtn.onclick = () => modal.remove();

    modalContent.innerHTML = cartHTML;
    modalContent.insertBefore(closeBtn, modalContent.firstChild);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        localStorage.removeItem('suryakitCart');
        updateCartCount();
        location.reload();
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    // In a real application, this would send to a backend
    showNotification('Thank you for subscribing!');
    this.reset();
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
