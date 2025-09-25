# 🕌 JANNAH Islamic PWA

A lightweight Progressive Web App (PWA) for Islamic content, inspiration, and learning.

---

## 📁 Project Structure

Ensure these files are placed **in the root directory** of your repository:

1. `index.html`
2. `manifest.json`
3. `service-worker.js`
4. `src/` (contains `app.js`)
5. `icons/` (`icon-192.png`, `icon-512.png`)
6. `assets/` (audio/images)
7. `data/` (Qur’an, Hadith, trackers, Nasheed, etc.)
8. `README.md`
9. `.nojekyll` (prevents GitHub Pages from ignoring PWA files)

---

## 🚀 Deploy to GitHub Pages

1. Go to **Settings → Pages**.  
2. Under **Source**, select:  
   - Branch: `main`  
   - Folder: `/ (root)`  
3. Click **Save**.  
4. Wait 30–60 seconds.  
5. Your PWA will be live at:
6. ---

## ⚠️ Troubleshooting

- If the PWA gets stuck loading:  
- Check that all file paths in `index.html` are correct.  
- Ensure `manifest.json` and `service-worker.js` are correctly linked.  
- Clear browser cache or remove old PWA shortcuts.  
- Open **Developer Console** to check for errors.

- Test offline mode: all pages should still load.

---

## ✅ Best Practices

- Keep file structure **clean and consistent**.  
- Do **not rename** key files or folders.  
- Always test the PWA in a browser before sharing.  
- Update JSON placeholders with real content gradually.

---

Built with ❤️ by HAMIDOU
