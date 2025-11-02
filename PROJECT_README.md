# SuryaKit Solutions - Website

A professional, responsive website for SuryaKit Solutions, a B2B solar kit supplier for EPCs (Engineering, Procurement, and Construction companies) in India.

## Overview

This is a static website built with HTML, CSS, and JavaScript, designed to be deployed on GitHub Pages. The website showcases pre-engineered solar kits for on-grid, off-grid, and hybrid installations.

## Features

### Core Pages
- **Homepage**: Hero section, product categories, company benefits, how it works
- **Our Kits (Shop)**: Product catalog with filtering and sorting capabilities
- **Bulk Orders**: Comprehensive inquiry form for large-scale projects
- **Why Choose Us**: Detailed company benefits and value proposition
- **Product Details**: Individual product specifications and components

### Functionality
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Filtering**: Filter by kit type, capacity, manufacturer, and price
- **Shopping Cart**: LocalStorage-based cart system
- **Form Handling**: Client-side form validation and processing
- **Mobile Menu**: Hamburger menu for mobile navigation

### Technologies Used
- HTML5
- CSS3 (Custom styling with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0 (Icons)
- LocalStorage API (Cart and form data)

## Project Structure

```
suryagharkits/
├── index.html              # Homepage
├── shop.html               # Product catalog page
├── bulk-orders.html        # Bulk inquiry form
├── why-choose-us.html      # Company benefits page
├── product-detail.html     # Product details page
├── css/
│   └── styles.css          # Main stylesheet (~500 lines)
├── js/
│   ├── main.js             # Core functionality (cart, menu, notifications)
│   ├── shop.js             # Product filtering and sorting
│   └── bulk-form.js        # Form validation and submission
├── CNAME                   # Custom domain configuration
├── .gitignore              # Git ignore rules
├── DEPLOYMENT.md           # Deployment instructions
└── PROJECT_README.md       # This file
```

## Getting Started

### Local Development

1. **Clone or download** the repository
2. **Open `index.html`** in your web browser
3. No build process required - it's a static site!

### Using a Local Server (Recommended)

For better testing, use a local server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js (http-server)**
```bash
npx http-server
```

**Option 3: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

Visit: `http://localhost:8000`

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to GitHub Pages:**

1. Create a GitHub repository
2. Push all files to the `main` branch
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Customization Guide

### Update Company Information

**Footer Contact Details** (all HTML files):
```html
<!-- Update in footer section -->
<p>123 Solar Street, Green Energy Park<br>
Mumbai, Maharashtra 400001<br>
GSTIN: 27XXXXX1234X1ZX</p>
<p><i class="fas fa-phone"></i> +91-XXXXX-XXXXX<br>
<i class="fas fa-envelope"></i> info@suryagharkits.com</p>
```

### Add Products

**In `shop.html`**, add product cards:
```html
<div class="product-card" data-type="on-grid" data-capacity="10" data-panel="waaree" data-inverter="sungrow" data-price="485000">
    <div class="product-image">
        <div class="image-placeholder">
            <i class="fas fa-solar-panel"></i>
        </div>
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p class="product-brand">Brand Info</p>
        <p class="product-specs">Specifications</p>
        <p class="product-price">₹Price</p>
        <div class="product-actions">
            <button class="btn btn-primary btn-block add-to-cart" data-id="ID">Add to Cart</button>
            <a href="product-detail.html?id=ID" class="btn btn-outline btn-block">View Details</a>
        </div>
    </div>
</div>
```

### Change Colors

**In `css/styles.css`**, update CSS variables:
```css
:root {
    --primary-color: #ff6b00;      /* Orange - Main brand color */
    --secondary-color: #1a4d2e;    /* Green - Secondary brand color */
    --accent-color: #ffd93d;       /* Yellow - Accent color */
    --text-dark: #2c3e50;          /* Dark text */
    --text-light: #6c757d;         /* Light text */
}
```

### Add Real Images

1. Create an `images/` folder in the root directory
2. Add product images (e.g., `product-1.jpg`)
3. Update HTML:
```html
<!-- Replace -->
<div class="image-placeholder">
    <i class="fas fa-solar-panel"></i>
</div>

<!-- With -->
<img src="images/product-1.jpg" alt="Product Name">
```

## Integration Recommendations

### For Production Use

1. **Form Backend**:
   - Use Formspree, Netlify Forms, or EmailJS
   - Or build custom API with Node.js/PHP

2. **Payment Gateway**:
   - Integrate Razorpay or Stripe for payments
   - Add checkout flow

3. **Analytics**:
   - Add Google Analytics tracking code
   - Monitor user behavior and conversions

4. **SEO**:
   - Update meta descriptions
   - Add Open Graph tags
   - Submit sitemap to search engines

5. **Security**:
   - Add CAPTCHA to forms
   - Implement rate limiting
   - Use HTTPS (automatic with GitHub Pages)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal external dependencies (only Font Awesome CDN)
- Optimized CSS with minimal specificity
- Vanilla JavaScript (no heavy frameworks)
- Fast load times (<2s on average connection)

## Features to Add

Future enhancements:
- [ ] Image gallery for products
- [ ] Customer testimonials section
- [ ] Case studies page
- [ ] Blog/Resources section
- [ ] Live chat integration
- [ ] Product comparison tool
- [ ] Calculator for ROI/savings
- [ ] Multi-language support (Hindi/English)

## Credits

- **Icons**: Font Awesome 6.4.0
- **Fonts**: System fonts (Segoe UI, etc.)
- **Design**: Custom design based on requirements

## License

Copyright © 2025 SuryaKit Solutions. All rights reserved.

## Contact

For questions about this website:
- Email: info@suryagharkits.com
- Website: https://suryagharkits.com

---

**Built with care for the solar revolution in India** ☀️
