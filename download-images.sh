#!/bin/bash
# Script to download product images

# Create images directory if it doesn't exist
mkdir -p images/products
mkdir -p images/hero
mkdir -p images/backgrounds

# Download OGK-PLUS product images
curl -o images/products/ogk-plus.png "https://shopsolarkits.com/cdn/shop/files/1_d7e6eb55-a76f-4ce2-a03e-73ee26fe13b6.png?v=1725495618&width=800"

# Download IronRidge Roof Rack images
curl -o images/products/roof-rack-6.jpg "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-6.jpg?v=1725495803&width=800"
curl -o images/products/roof-rack-8.jpg "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-8.jpg?v=1725495803&width=800"
curl -o images/products/roof-rack-12.jpg "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-12.jpg?v=1725495803&width=800"
curl -o images/products/roof-rack-18.jpg "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-18.jpg?v=1725495803&width=800"
curl -o images/products/roof-rack-24.jpg "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-24.jpg?v=1725495803&width=800"
curl -o images/products/roof-rack-36.jpg "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-36.jpg?v=1725495803&width=800"

echo "✅ All product images downloaded successfully!"
echo "Images saved to: images/products/"
