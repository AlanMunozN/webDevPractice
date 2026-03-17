#!/bin/bash

# Build the project
npm run build

# Create CNAME for GitHub Pages (optional - if you have a custom domain)
# echo "yourdomain.com" > dist/CNAME

# Initialize git if not already done
if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin https://github.com/YOUR_USERNAME/nexus-chronicles.git
  git branch -M main
  git push -u origin main
fi

# Create gh-pages branch
git checkout --orphan gh-pages
git rm -rf .

# Copy dist files
cp -r dist/* .
rm -rf dist

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Go back to main
git checkout main

echo "✅ Deployment complete! Your site will be live in a few minutes."
echo "📍 Check: https://YOUR_USERNAME.github.io/nexus-chronicles"
