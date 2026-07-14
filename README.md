# Disruptive Advertising Recreation

Educational Next.js recreation of the public `disruptiveadvertising.com` homepage structure.

This project intentionally uses original code, original copy variations, and fresh visual treatment while recreating the layout, sections, responsiveness, navigation behavior, proof blocks, audit form, and a small Next.js backend API.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Backend

The audit form posts to `POST /api/audit`, validates the email, and returns a realistic JSON confirmation. It is ready to be replaced with email, database, or CRM integration.
