<!-- VS Code Copilot Instructions for NEXUS: Chronicles Landing Page Project -->

This is a React + Vite project for a cyberpunk video game landing page with a Steam store route.

## Project Overview

- **Type**: React + Vite web application
- **Purpose**: Landing page and Steam store for "NEXUS: Chronicles" video game
- **Routes**: Landing page (/), Steam store (/steam)
- **Deployment**: GitHub Pages compatible

## Key Files

- `src/App.jsx` - Main app with React Router
- `src/pages/Home.jsx` - Landing page component
- `src/pages/Steam.jsx` - Steam store style page
- `package.json` - Dependencies and build scripts
- `vite.config.js` - Vite configuration
- `deploy.sh` - GitHub Pages deployment helper

## Quick Commands

```bash
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:5173)
npm run build       # Build for production
npm run preview     # Preview production build locally
```

## Customization Tips

1. **Change game title**: Edit in Home.jsx, Steam.jsx, and index.html
2. **Change colors**: Modify CSS color values in Home.css and Steam.css
3. **Add images**: Place in public/ folder and update component image paths
4. **Add content**: Edit component text and features in Home.jsx and Steam.jsx

## Deployment to GitHub Pages

See README.md for detailed deployment instructions, or run:
```bash
bash deploy.sh
```

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build

## Notes

- Fully responsive design (mobile-first approach)
- Smooth animations and transitions
- Cyberpunk aesthetic with cyan/blue neon theme
- No external CDN dependencies (all fonts/icons are inline)
