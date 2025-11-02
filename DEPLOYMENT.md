# SuryaKit Solutions - Deployment Guide

## Deploying to GitHub Pages

This website is designed to be easily deployed on GitHub Pages for free hosting.

### Step 1: Create a GitHub Repository

1. Create a new repository on GitHub (e.g., `suryagharkits-website`)
2. Initialize with README or push existing files

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: SuryaKit Solutions website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/suryagharkits-website.git

# Push to main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be published at: `https://YOUR_USERNAME.github.io/suryagharkits-website/`

### Step 4: Configure Custom Domain (Optional)

To use your custom domain `suryagharkits.com`:

1. In your repository, create a file named `CNAME` in the root directory
2. Add your domain name to the file: `suryagharkits.com`
3. In your domain registrar's DNS settings, add these records:
   - **A Records** pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record**: `www` pointing to `YOUR_USERNAME.github.io`

4. Wait for DNS propagation (can take up to 24-48 hours)
5. In GitHub repository settings > Pages, add your custom domain
6. Enable "Enforce HTTPS" after DNS verification

### Step 5: Test Your Website

After deployment, test all pages:
- Homepage: `/` or `/index.html`
- Shop: `/shop.html`
- Bulk Orders: `/bulk-orders.html`
- Why Choose Us: `/why-choose-us.html`
- Product Details: `/product-detail.html`

## Alternative Deployment Options

### Option 1: Netlify

1. Sign up at https://www.netlify.com
2. Drag and drop the entire `suryagharkits` folder to Netlify
3. Configure custom domain in Netlify settings
4. Automatic HTTPS is enabled

### Option 2: Vercel

1. Sign up at https://vercel.com
2. Import your GitHub repository
3. Deploy with one click
4. Configure custom domain in Vercel dashboard

### Option 3: Traditional Web Hosting

Upload all files via FTP to your web hosting provider:
- Upload entire folder structure
- Ensure `index.html` is in the root directory
- Point your domain to the hosting server

## File Structure

```
suryagharkits/
├── index.html              # Homepage
├── shop.html               # Product catalog
├── bulk-orders.html        # Bulk inquiry form
├── why-choose-us.html      # Company benefits
├── product-detail.html     # Product details page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── main.js             # Main JavaScript
│   ├── shop.js             # Shop filtering/sorting
│   └── bulk-form.js        # Form handling
├── CNAME                   # Custom domain (optional)
├── README.md               # Project documentation
└── DEPLOYMENT.md           # This file
```

## Important Notes

1. **No Backend Required**: This is a static website. All form submissions are currently handled client-side. For production, integrate with:
   - Form services: Formspree, Netlify Forms, Google Forms
   - Email services: EmailJS, SendGrid
   - Backend API: Node.js, PHP, Python

2. **Shopping Cart**: Currently uses localStorage. For production e-commerce:
   - Integrate payment gateway (Razorpay, Stripe)
   - Add backend for order processing
   - Implement user authentication

3. **Images**: Replace placeholder icons with actual product images:
   - Add images to `images/` folder
   - Update image paths in HTML

4. **SEO Optimization**:
   - Update meta descriptions in each page
   - Add Google Analytics tracking code
   - Submit sitemap to Google Search Console

5. **Security**:
   - Never commit sensitive data (API keys, credentials)
   - Use environment variables for production configs
   - Implement CAPTCHA on forms to prevent spam

## Maintenance

- Update product catalog regularly in `shop.html`
- Monitor form submissions
- Keep dependencies (Font Awesome CDN) up to date
- Regularly test on mobile devices
- Monitor site performance with Google PageSpeed Insights

## Support

For questions or issues with the website:
- Check the code documentation
- Review browser console for errors
- Test in multiple browsers (Chrome, Firefox, Safari, Edge)

## License

This website template is created for SuryaKit Solutions. All rights reserved.
