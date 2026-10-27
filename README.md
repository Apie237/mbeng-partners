# Dr. Mbeng & Partners — website

React 18 + Vite + Tailwind CSS + React Router.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About the founder, credentials, values, locations |
| `/services` | Offers, consulting tool kit, branches, engagement process |
| `/paxls-2026` | Pan-African Xenial Leadership Symposium |
| `/insights`, `/insights/:slug` | Articles |
| `/contact` | Enquiry form + WhatsApp (`/contact?topic=paxls` pre-selects PAXLS) |

## Editing content
Almost all text lives in `src/data/content.js` (contact details, services, branches, testimonials, insights, locations).
Images are in `public/images/`.

**Before going live:**
- `TESTIMONIALS`: the first entry is shown as the large featured quote.
- The `INSIGHTS` article bodies are drafts — review and edit them.

## Contact form
Posts to FormSubmit (`https://formsubmit.co/ajax/<email>`). The first submission triggers an activation email to that address.

## Deploying
**GitHub Pages (set up):** every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
One-time: in the repo go to *Settings → Pages → Build and deployment → Source* and choose **GitHub Actions**.
The site is served at `https://<user>.github.io/<repo>/`. For a custom domain, remove `BASE_PATH` from the workflow.

Netlify (`public/_redirects`) and Vercel (`vercel.json`) also work out of the box.

## Brand
Logo files are in `public/images/` (`logo-mark*.png`, `logo-full*.png`, purple and white); the original is in `brand/`.
