# Quick Reference

## Commands Cheat Sheet

```bash
# Setup
npm install                    # Install dependencies

# Development
npm run dev                   # Start dev server (http://localhost:5173)

# Production
npm run build                 # Build optimized bundle
npm run preview              # Preview production build locally

# Deployment
git init                      # Initialize git repository
git add .                     # Stage all files
git commit -m "message"      # Commit changes
git push origin main         # Push to GitHub
```

## Project URLs

- **Development**: http://localhost:5173
- **Home Page**: http://localhost:5173/
- **Steam Page**: http://localhost:5173/steam
- **Live Site**: https://YOUR_USERNAME.github.io/nexus-chronicles

## Key Files to Edit

| File | Purpose |
|------|---------|
| `src/pages/Home.jsx` | Landing page content |
| `src/pages/Steam.jsx` | Steam store content |
| `src/pages/Home.css` | Landing page styling |
| `src/pages/Steam.css` | Steam page styling |
| `package.json` | Dependencies & scripts |

## Color Palette

- **Primary (Cyan)**: `#00d4ff`
- **Secondary (Blue)**: `#0099ff`
- **Background (Dark)**: `#0a0e27`
- **Text**: `#e4e6eb`
- **Muted**: `#b8b8d1`

## File Size Reference

- `package.json`: ~400 bytes
- `index.html`: ~300 bytes
- React bundle (production): ~50KB (gzipped)
- Total project (dist/): ~150KB

## Deployment Flowchart

```
1. npm install (dependencies)
   ↓
2. npm run dev (test locally)
   ↓
3. git add . && git commit (save code)
   ↓
4. git push origin main (push to GitHub)
   ↓
5. npm run build (create dist/)
   ↓
6. Enable GitHub Pages in Settings
   ↓
7. Site live at GitHub URL! 🎉
```

## Common Issues

| Issue | Solution |
|-------|----------|
| "npm: command not found" | Install Node.js from nodejs.org |
| Port 5173 in use | Run `npm run dev -- --port 5174` |
| Changes not reflecting | Clear cache, rebuild: `npm run build` |
| GitHub Pages not updating | Wait 1-2 min, check Actions tab |
| Styling looks off | Clear browser cache (Cmd+Shift+R) |
