# PowerShell script to download product images for Windows

Write-Host "📥 Downloading product images..." -ForegroundColor Cyan

# Create directories
New-Item -ItemType Directory -Force -Path "images\products" | Out-Null
New-Item -ItemType Directory -Force -Path "images\hero" | Out-Null
New-Item -ItemType Directory -Force -Path "images\backgrounds" | Out-Null

# Download OGK-PLUS product image
Write-Host "Downloading OGK-PLUS image..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://shopsolarkits.com/cdn/shop/files/1_d7e6eb55-a76f-4ce2-a03e-73ee26fe13b6.png?v=1725495618&width=800" -OutFile "images\products\ogk-plus.png"

# Download IronRidge Roof Rack images
Write-Host "Downloading Roof Rack images..." -ForegroundColor Yellow
Invoke-WebRequest -Uri "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-6.jpg?v=1725495803&width=800" -OutFile "images\products\roof-rack-6.jpg"
Invoke-WebRequest -Uri "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-8.jpg?v=1725495803&width=800" -OutFile "images\products\roof-rack-8.jpg"
Invoke-WebRequest -Uri "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-12.jpg?v=1725495803&width=800" -OutFile "images\products\roof-rack-12.jpg"
Invoke-WebRequest -Uri "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-18.jpg?v=1725495803&width=800" -OutFile "images\products\roof-rack-18.jpg"
Invoke-WebRequest -Uri "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-24.jpg?v=1725495803&width=800" -OutFile "images\products\roof-rack-24.jpg"
Invoke-WebRequest -Uri "https://shopsolarkits.com/cdn/shop/files/PVX-ROOF-MOUNT-KIT-36.jpg?v=1725495803&width=800" -OutFile "images\products\roof-rack-36.jpg"

Write-Host "✅ All product images downloaded successfully!" -ForegroundColor Green
Write-Host "Images saved to: images\products\" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Check the images\products folder" -ForegroundColor White
Write-Host "2. Open index.html in your browser" -ForegroundColor White
Write-Host "3. All product images should now load from local files" -ForegroundColor White
