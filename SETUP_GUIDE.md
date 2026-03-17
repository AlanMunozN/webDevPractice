# 🚀 Setup Guide - NEXUS: Chronicles Landing Page

Congratulations! Your complete React + Vite gaming landing page has been created. Follow these steps to get it running and deploy it to GitHub Pages.

## Step 1: Fix Node.js (If Needed)

If you encounter Node.js errors, fix it with Homebrew:

```bash
# Uninstall old Node version
brew uninstall node@10

# Install latest Node.js
brew install node@20

# Verify installation
node --version   # Should show v20.x.x or higher
npm --version    # Should show 10.x.x or higher
```

## Step 2: Install Dependencies

Navigate to your project directory and install dependencies:

```bash
cd "/Users/alanmunoz/Desktop/Web dev"
npm install
```

Wait for this to complete (it may take 2-5 minutes).

## Step 3: Start Development Server

Test your project locally:

```bash
npm run dev
```

This will start a development server at `http://localhost:5173`

Open it in your browser and explore:
- **Home page**: http://localhost:5173/
- **Steam page**: http://localhost:5173/steam

## Step 4: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click **New Repository** button
3. Name it: `nexus-chronicles` (or any name you prefer)
4. Choose **Public** (required for GitHub Pages)
5. Leave everything else as default
6. Click **Create Repository**

## Step 5: Initialize Git & Push Code

In your project directory, run:

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: NEXUS Chronicles landing page"

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/nexus-chronicles.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 6: Build Production Bundle

Create an optimized production build:

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

## Step 7: Deploy to GitHub Pages

You have 2 options:

### Option A: Using GitHub Pages Settings (Easiest)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: Select `main` in dropdown
   - Folder: `/` (root)
4. Click **Save**

Wait 1-2 minutes. Your site will be live at:
```
https://YOUR_USERNAME.github.io/nexus-chronicles
```

### Option B: Using gh-pages Branch (Advanced)

Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

Update your `package.json` scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
}
```

Then run:
```bash
npm run deploy
```

## Step 8: Verify Deployment

1. Visit: `https://YOUR_USERNAME.github.io/nexus-chronicles`
2. Test both pages:
   - Main page loads with hero section
   - /steam page shows Steam store design
3. Check responsive design on mobile 📱

## Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 already in use
```bash
npm run dev -- --port 5174
```

### Changes not showing on GitHub Pages
```bash
# Rebuild and redeploy
npm run build
git add .
git commit -m "Update"
git push origin main
```

Wait a few minutes for GitHub Pages to update.

### GitHub Pages not working
1. Check repository is **Public** (not Private)
2. Verify Settings → Pages is configured
3. Check for errors in GitHub Actions tab
4. Ensure `dist/` folder is pushed (or gh-pages branch created)

## Next Steps

### Customize the Project

1. **Change game name:**
   - Edit `src/pages/Home.jsx` line 16
   - Edit `src/pages/Steam.jsx` line 7
   - Edit `index.html` title tag

2. **Add images:**
   - Place images in `public/` folder
   - Reference in components: `src="/image-name.png"`

3. **Modify colors:**
   - `#00d4ff` - Primary cyan
   - `#0099ff` - Secondary blue
   - Edit in `Home.css` and `Steam.css`

4. **Update game description:**
   - Edit `src/pages/Home.jsx` - Hero subtitle (line 18)
   - Edit `src/pages/Steam.jsx` - Game description (line 41-45)

### Add More Features

- **Newsletter signup form** - Add email input in CTA section
- **Social links** - Add social media buttons in footer
- **Game trailer** - Embed YouTube video in hero section
- **Blog section** - Create new route for news/blog posts
- **Multiplayer showcase** - Add interactive live player counter

## Performance Tips

- Optimize images using tools like TinyPNG
- Use `npm run build` to check bundle size
- Monitor with Chrome DevTools Lighthouse

## Need Help?

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- React Router: https://reactrouter.com
- GitHub Pages Docs: https://docs.github.com/en/pages

---

**🎮 You now have a professional gaming landing page! Share it with your community and enjoy! 🚀**
