# Disruptive-Style Next.js Experience

## Development Documentation

### Project Summary

This project is a coursework-focused Next.js recreation of a performance marketing agency homepage. The implementation focuses on reproducing the observed interaction patterns, information architecture, visual hierarchy, and responsive behavior while using original code and locally authored visual treatments.

### Deliverables

- Responsive Next.js marketing homepage
- Next.js API route for audit lead submissions
- Desktop mega menu and mobile off-canvas navigation
- CSS-based animated showreel at the top of the page
- Responsive content sections, proof points, forms, and footer
- Development documentation in Markdown and Word formats

### Technology Stack

| Area | Implementation |
| --- | --- |
| Framework | Next.js 14 with the App Router |
| Language | TypeScript and TSX |
| Styling | Responsive CSS with custom properties and keyframe animation |
| Icons | Lucide React |
| Backend | Next.js route handler at `app/api/audit/route.ts` |
| Validation | Production build plus local browser inspection |

### Experience Design

The revised design is based on a fresh visual and interaction audit of the reference site. The page uses a fixed white header, a red-and-black wordmark treatment, uppercase Montserrat-style navigation, a red call-to-action, a dark animated showreel, a client marquee, proof-led sections, and a deep footer.

The showreel intentionally uses authored CSS animation rather than copying the source site's video or visual media. This keeps the project self-contained while preserving the expected motion-first opening experience.

### Navigation Behavior

- Desktop navigation opens a full-width mega panel below the fixed header.
- Mega panels group services, audience segments, company information, and resources.
- The mobile breakpoint replaces desktop navigation with a right-side off-canvas drawer and backdrop.
- Navigation state is managed within the homepage client component.

### Audit Request Flow

The audit form collects name, business email, company, and annual revenue. On submission, the client sends a JSON request to `/api/audit`. The route handler validates required values and returns a user-facing confirmation response. The handler is intentionally ready to be extended with a CRM or email provider.

### Project Structure

```text
app/
  api/audit/route.ts       Lead-form route handler
  globals.css              Responsive visual system and animation
  layout.tsx               App metadata and global stylesheet import
  page.tsx                 Homepage content and interaction state
docs/
  development-documentation.md
  development-documentation.docx
scripts/
  create_development_doc.py
```

### Local Development

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000` to review the experience. Use the desktop header to verify the mega menus and reduce the viewport to verify the mobile drawer.

### Production Verification

```bash
npm.cmd run build
```

The build performs TypeScript validation and compiles the static homepage plus the audit API route.

### Scope and Asset Note

This is an educational recreation. It does not include copied source code, source video, or source-owned brand assets from the reference website. The motion sequence, logo treatment, illustrations, and UI are independently implemented for coursework and demonstration use.

