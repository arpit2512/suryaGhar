#!/usr/bin/env python3
"""
Download product images for Surya Ghar Kits website
Run: python download_images.py
"""

import urllib.request
import os

# Create directories
os.makedirs('images/products', exist_ok=True)
os.makedirs('images/hero', exist_ok=True)
os.makedirs('images/backgrounds', exist_ok=True)

# Image URLs and filenames
images = {
    'images/products/ogk-plus.png': 'https://shopsolarkits.com/cdn/shop/files/1_d7e6eb55-a76f-4ce2-a03e-73ee26fe13b6.png?v=1725495618&width=800',
    'images/products/roof-rack-6.jpg': 'https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-6.jpg?v=1725495803&width=800',
    'images/products/roof-rack-8.jpg': 'https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-8.jpg?v=1725495803&width=800',
    'images/products/roof-rack-12.jpg': 'https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-12.jpg?v=1725495803&width=800',
    'images/products/roof-rack-18.jpg': 'https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-18.jpg?v=1725495803&width=800',
    'images/products/roof-rack-24.jpg': 'https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-24.jpg?v=1725495803&width=800',
    'images/products/roof-rack-36.jpg': 'https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-36.jpg?v=1725495803&width=800',
}

print("📥 Downloading product images...\n")

for filename, url in images.items():
    try:
        print(f"Downloading {filename}...")
        urllib.request.urlretrieve(url, filename)
        print(f"✅ {filename} downloaded successfully!")
    except Exception as e:
        print(f"❌ Failed to download {filename}: {e}")

print("\n✅ All downloads complete!")
print("Images saved to: images/products/")
print("\nNext steps:")
print("1. Check the images/products folder")
print("2. Open index.html in your browser")
print("3. All product images should now load from local files")
