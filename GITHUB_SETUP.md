# 🌐 GitHub & GitHub Pages Setup Guide

## ⚠️ IMPORTANT: Your Repository URL

**Your repository is**: `webDevPractice`
**Your URL will be**: `https://AlanMunozN.github.io/webDevPractice/`

This is already configured in `vite.config.js` (base path set to `/webDevPractice/`)

## Pushing Code to GitHub

### Option A: Using Git Commands

```bash
# Navigate to project
cd "/Users/alanmunoz/Desktop/Web dev"

# Initialize git (if not done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: NEXUS Chronicles landing page"

# Add remote repository
git remote add origin https://github.com/AlanMunozN/webDevPractice.git

# Rename branch to main
git branch -M main

# Push code
git push -u origin main
```

**Note**: The project is already set up for `webDevPractice` repository in `vite.config.js`

### Option B: Using GitHub Desktop (GUI)

1. Download [GitHub Desktop](https://desktop.github.com)
2. Sign in with your GitHub account
3. Click **Add Local Repository**
4. Browse to `/Users/alanmunoz/Desktop/Web dev`
5. Click **Create & Push**
6. Review changes and click **Commit to main**
7. Click **Publish repository**

## Deploying to GitHub Pages

### Method 1: Using GitHub Actions (Automatic) ⭐ RECOMMENDED

This method automatically builds and deploys whenever you push to main.

1. **Check workflow file**
   - `.github/workflows/deploy.yml` is already created

2. **Enable GitHub Actions** (usually automatic):
   - Go to repository Settings → Actions
   - Ensure Actions is enabled

3. **Check deployment status**:
   - Go to **/Actions** tab
   - You should see "Deploy to GitHub Pages" workflow
   - It runs automatically on every push

4. **Site gAlanMunozN.github.io/webDevPractice/
   ```
   https://YOUR_USERNAME.github.io/nexus-chronicles
   ```

   Wait 2-3 minutes after first push for initial deployment.

### Method 2: Using GitHub Pages Settings (Manual)

1. Go to repository **Settings**
2. Scroll to **Pages** section (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main`
   - **Folder**: Select `/` (root folder)
4. Click **Save**
5. Wait 1-2 minutes, your site will be live

### Method 3: Using gh-pages Branch

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "npm run build && npm run gh-pages"

# Deploy
npm run build
npm run deploy
```

## Accessing Your Live Site

### Your GitHub Pages URL

```
https://AlanMunozN.github.io/webDevPractice/
```

Make sure to include the trailing slash!

### With Custom Domain (Optional)

1. Buy domain (GoDaddy, Namecheap, etc.)
2. Create CNAME file in project root (we included deploy.sh for this)
3. Point domain DNS to GitHub's servers
4. GitHub Pages will use your custom domain

## Updating Your Site

After making changes to your code:

```bash
# Commit your changes
git add .
git commit -m "Update: Added new features"

# Push to GitHub
git push origin main
```

**That's it!** GitHub Actions will automatically:
1. Build the project (`npm run build`)
2. Deploy to GitHub Pages
3. Your site updates in 2-3 minutes

## Monitoring Deployment

### Check Deployment Status

1. Go to repository **Actions** tab
2. Look for "Deploy to GitHub Pages" workflow
3. Status shows: ✅ Passed or ❌ Failed
4. Click to see detailed logs

### Troubleshooting Failed Deployment

If deployment fails:

1. **Check Actions logs** for error messages
2. **Fix the error** locally:
   ```bash
   npm install
   npm run build  # Should produce dist/ folder
   ```
3. **Commit fix**:
   ```bash
   git add .
   git commit -m "Fix build error"
   git push origin main
   ```
4. **Retry**: Action will run automatically

## Verifying Your Site is Live

1. Open browser
2. Visit: `https://YOUR_USERNAME.github.io/nexus-chronicles`
3. Test:
   - ✓ Home page loads
   - ✓ /steam page AlanMunozN.github.io/webDevPractice/
   - ✓ Links navigate correctly
   - ✓ Images display
   - ✓ Responsive on mobile

## Custom Domain Setup (Advanced)

### Get a Custom Domain

1. Register at GoDaddy, Namecheap, or similar
2. Example: `nexuschronicles.com`

### Configure GitHub Pages

1. Repository **Settings** → **Pages**
2. Under "Custom domain":
   - Enter: `nexuschronicles.com`
   - Click **Save**
3. GitHub creates CNAME file automatically

### Point Domain to GitHub

In your domain registrar DNS settings, add:

```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

Or:

```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

Wait 24-48 hours for DNS propagation.

## Recommended Workflow

### Initial Setup (One Time)
```bash
npm install
npm run build
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/nexus-chronicles.git
git push -u origin main
```
AlanMunozN/webDevPractice
### Regular Development
```bash
# Make changes
npm run dev  # Test locally

# Commit
git add .
git commit -m "Update: [description]"
git push origin main
```

### Production Updates
```bash
npm run build  # Verify build works locally
git add .
git commit -m "Deploy: [changes]"
git push origin main
# Automatic deployment via GitHub Actions ✅
```

## GitHub Pages Limits

- **Storage**: 1GB per repository
- **Bandwidth**: Unlimited
- **Build time**: 10 minutes max
- **Frequency**: Any (no limits)
- **Downtime**: None guaranteed
- **Cost**: Free with public repository

## SEO Optimization for GitHub Pages

Add meta tags to `index.html`:

```html
<meta name="description" content="NEXUS: Chronicles - A cyberpunk RPG gaming experience">
<meta name="keywords" content="gaming, cyberpunk, RPG, steam">
<meta name="og:title" content="NEXUS: Chronicles">
<meta name="og:description" content="Dive into the digital abyss...">
<meta name="og:image" content="https://YOUR_USERNAME.github.io/nexus-chronicles/image.png">
```

This helps with social sharing and search engines.

## Troubleshooting Common Issues

| Issue | Solution |
|-------|----------|
| "Repository not found" | Check URL is correct |
| "403 Forbidden" | Repository must be Public |
| "Site not updating" | Wait 5 minutes, clear browser cache |
| "404 on /steam page" | Enable GitHub Pages, check branch settings |
| "Images not loading" | Update image paths in HTML |
| "Styles look broken" | Check CSS file paths, rebuild |

## Getting Help

- **GitHub Docs**: https://docs.github.com/en/pages
- **GitHub Community**: https://github.community
- **Stack Overflow**: Tag with `github-pages`

---

**Your site is now ready to share with the world! 🚀**
