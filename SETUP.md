# Portfolio Setup Guide

Your portfolio page is ready! Follow these steps to get it running:

## 1️⃣ Install Dependencies

The portfolio uses **Material UI** for components. Install it with:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Or with yarn:
```bash
yarn add @mui/material @emotion/react @emotion/styled
```

**Note**: Icons use inline SVG, so `@mui/icons-material` is NOT needed.

## 2️⃣ Your Next.js is Ready

Your `package.json` already has Next.js 16 and React 19. Just add Material UI above.

## 3️⃣ Run Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 What's Included

- **Hero Section** - Eye-catching introduction with gradient background
- **About Section** - Your professional background and expertise
- **Experience Section** - Work history and roles
- **Projects Section** - Featured portfolio projects
- **Skills Section** - Technical skills with progress bars
- **Contact Section** - Call-to-action buttons for social links
- **Responsive Navigation** - Mobile-friendly navbar with drawer menu

## ⚡ Optimizations for Vercel

The portfolio is built with performance in mind:
- ✅ Uses Next.js 16 Server Components
- ✅ Material UI for efficient component rendering
- ✅ Inline SVG icons (no extra package needed)
- ✅ Optimized CSS with CSS-in-JS (Emotion)
- ✅ Responsive design for all devices
- ✅ Fast load times ready for Vercel

## 🚀 Deploy to Vercel

Once you're happy with your portfolio:

```bash
npm run build
```

Then push to GitHub and connect to Vercel at [vercel.com](https://vercel.com)

## 📝 Customization Tips

Edit these sections in [app/page.tsx](app/page.tsx):

- **Hero Title**: Change "Frontend Developer" to your title
- **About Text**: Update with your personal story
- **Experience**: Modify the 3 experience items
- **Projects**: Add your real projects with descriptions
- **Skills**: Update skill categories and items
- **Colors**: The gradient uses `#667eea` and `#764ba2` - customize in the Hero Section

## 📱 Responsive Design

The portfolio is fully responsive:
- Mobile: Full-screen vertical layout
- Tablet: Optimized column layout
- Desktop: Multi-column sections

## Need Help?

Check [Next.js Docs](https://nextjs.org/docs) and [Material UI Docs](https://mui.com/material-ui/getting-started/)
