# ⚡ QUICK START GUIDE

## Get Your Website Running in 3 Steps!

---

## Step 1: Download Product Images (2 minutes)

### Option A: Automatic (Recommended)
```bash
python download_images.py
```

### Option B: Manual
1. Open your browser
2. Visit: https://shopsolarkits.com/products/complete-all-in-one-solar-kit-ogk-plus
3. Right-click product images → Save Image As
4. Save to: `images/products/`

**Files needed:**
- ogk-plus.png
- roof-rack-6.jpg
- roof-rack-12.jpg
- roof-rack-24.jpg

---

## Step 2: Start Local Server (30 seconds)

```bash
cd C:\Users\Home\Downloads\suryagharkits
python -m http.server 8000
```

---

## Step 3: Open in Browser (10 seconds)

Visit: **http://localhost:8000**

---

## 🎉 THAT'S IT!

You should now see:
- ✨ Beautiful gradient header
- ✨ Smooth parallax scrolling
- ✨ 3D card hover effects
- ✨ Mouse-following product cards
- ✨ Progress bar at top
- ✨ Floating background animations

---

## 🎮 Try These:

1. **Scroll slowly** on homepage - Watch parallax!
2. **Hover over navigation** - See gradient appear
3. **Open shop.html** - Hover over product cards
4. **Move mouse over products** - See them follow cursor
5. **Scroll to bottom** - Watch progress bar fill

---

## ⚠️ Troubleshooting

### No Images?
→ Run `python download_images.py`
→ Or they'll load from CDN automatically

### No Parallax?
→ Use `python -m http.server` (don't double-click HTML)
→ Refresh page (Ctrl + Shift + R)

### Header Looks Plain?
→ Clear browser cache
→ Check if using http://localhost (not file://)

---

## 📱 Test on Mobile

1. Find your computer's IP address:
   ```bash
   ipconfig  # Windows
   ifconfig  # Mac/Linux
   ```

2. On your phone, visit:
   ```
   http://YOUR_IP:8000
   ```

3. See mobile-optimized parallax!

---

## 🚀 Deploy to GitHub Pages

```bash
git add .
git commit -m "Premium parallax website with local images"
git push origin main
```

Enable GitHub Pages in repo settings → Done!

---

## 🎯 Key Features to Show Off

1. **Header** - Gradient logo, pill navigation
2. **Scroll** - Progress bar, parallax layers
3. **Products** - 3D hover, mouse parallax
4. **Performance** - Smooth 60fps animations
5. **Mobile** - Auto-optimized effects

---

## 📞 Contact (Updated)

**Phone:** +91 9467643905
**Email:** info@suryagharkits.com
**Domain:** www.suryagharkits.com

---

**Need More Help?**

Read: `PARALLAX_&_IMAGES_GUIDE.md` for complete documentation

**Enjoy your premium parallax website!** ✨🚀
