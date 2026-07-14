# Quick Start Guide

## Get Running in 5 Minutes

### 1. Prerequisites
- Node.js 16+
- npm or yarn
- Git

### 2. Clone & Install
```bash
git clone https://github.com/butthamdan76-alt/HCI-.git
cd disruptive-advertising-main/disruptive_advertising-main
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### 4. Make Changes
Edit `app/page.tsx` or `app/globals.css` and see live updates.

### 5. Deploy
```bash
npm run build
npm start
```

---

## Key Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Run production server |
| `npm run lint` | Check code quality |

---

## Color Theme

The site uses a **modern blue-and-slate palette**:
- Primary: Blue (`#2563eb`)
- Accent: Dark Blue (`#1d4ed8`)
- Background: Light Blue (`#f8fafc`)

Edit colors in `app/globals.css` `:root` selector.

---

## Form API

The audit form posts to `POST /api/audit`:

```javascript
// Frontend (app/page.tsx)
const response = await fetch('/api/audit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
});

// Backend handles validation and returns response
const data = await response.json();
```

---

## File Structure

```
app/
├── page.tsx         ← Main homepage
├── layout.tsx       ← Root layout
├── globals.css      ← All styling
└── api/
    └── audit/
        └── route.ts ← Form endpoint
```

---

## Next Steps

1. ✅ **Understand the Layout**: Review `app/page.tsx` for component structure
2. 🎨 **Customize Colors**: Edit `app/globals.css` variables
3. 📝 **Update Content**: Modify text in `app/page.tsx`
4. 🔌 **Integrate Backend**: Connect `/api/audit` to your CRM/email service
5. 🚀 **Deploy**: Push to Vercel, Netlify, or your host

---

## Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Build failed?**
```bash
rm -rf .next && npm run build
```

**Need full docs?**
See `DOCUMENTATION.md` for comprehensive guide.

---

For full documentation, see [DOCUMENTATION.md](./DOCUMENTATION.md)
