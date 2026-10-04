# Sanjey - Freelance Portfolio Website

Static website (plain HTML, CSS, JS). No build step needed.

## Files
- `index.html`, `about.html`, `services.html`, `portfolio.html`, `contact.html`: the 5 pages
- `404.html`: shown for wrong links
- `style.css`: all styling
- `main.js`: all content (services, skills, projects, steps) and the enquiry form logic

## Edit content
Open `main.js` and change the lists at the top (`SERVICES`, `SKILLS`, `PROJECTS`, ...).
Enquiry email is `CONTACT_EMAIL` in the same file.

## Deploy on Vercel
1. Push these files to the **root** of a GitHub repo
2. Vercel -> Add New -> Project -> import the repo
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty. Deploy.

## SEO setup
- Replace `https://sanjeyyyyy.vercel.app` in every `.html`, `robots.txt` and `sitemap.xml` with your real site URL (one find-and-replace across the project).
- After editing `main.js` content, run `npm i jsdom` then `node tools/prerender.js` so the static HTML stays in sync (crawlers read it without JavaScript).
- Submit `sitemap.xml` in Google Search Console and add your Google Business / social profile links to `sameAs` in the JSON-LD in `index.html`.
