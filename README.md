# Yasaman Derakhshandeh — Portfolio

A portfolio for Yasaman (Yasi) Derakhshandeh, a product designer and Product & Design Lead at FaydenAI. The home page lists her projects; projects with their own case study (starting with **Aplomb**) open on a page of their own.

Built with **React 19 + Vite + Tailwind CSS v4**. There's no backend and no animation library. Motion uses CSS plus a small `IntersectionObserver` hook, and it all deploys free to **GitHub Pages**.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

Requires Node 20+.

---

## Where things live

```
src/
  content/
    site.js          ← profile, links, hero, about, experience, projects, expertise
    aplomb.js        ← the Aplomb case study (copy, film chapters, palette, images)
  assets/images/
    brand/           ← the YD Design logo (night-blue and white versions, plus the original)
    aplomb/          ← Aplomb case-study images (brand board and crops)
    work/            ← project card previews
    about/           ← your photo (portrait.jpg, 4:5), shown in the hero
  components/
    Hero, Nav, Work, About (with Experience), Expertise ("What I do"), Contact, Footer
    ProjectPage.jsx  ← project pages registry + "More work" strip
    aplomb/          ← the Aplomb page: CaseStudy, Film (video player), Chapters (01–05)
    ui/              ← Reveal (scroll-in), Media (image + placeholder), shared bits
  lib/               ← image lookup, small hooks, and the hash router
  styles.css         ← design tokens (colours, fonts, shadows) and global styles
public/
  media/aplomb-showcase.mp4   ← the Aplomb film
  og-image.png                ← social sharing preview (1200×630)
  favicon.png, apple-touch-icon.png   ← icons cut from the YD Design logo
```

**You only need to edit `src/content/` and drop images into `src/assets/images/`.**

---

## Filling in placeholders

Anything not yet confirmed shows on the page with a small dashed **PLACEHOLDER** tag, so the gaps are easy to spot. To list them all:

```bash
grep -rn "TODO" src/content
```

Still to add:

| What | Where |
|---|---|
| More projects (Aplomb and Immibright are in; one placeholder remains) | `site.js` → `projects` + images in `src/assets/images/work/` |
| Aplomb timeline | `aplomb.js` → `meta` |
| Aplomb typeface name(s) | `aplomb.js` → `system.typefaces` |

### Adding images

1. Put the file in `src/assets/images/…` (for example `work/project-1.jpg`).
2. Reference it by that path in the content file: `image: 'work/project-1.jpg'`.

Images are discovered at build time. If a file is missing, the page shows a designed placeholder with the expected filename instead of a broken image. Vite fingerprints the files, and they lazy-load.

**Image tips:** export at about 2× the display size (1600–2000px wide for large visuals) as JPEG at 80% or WebP. Keep each file under ~300 KB.

### Replacing a project placeholder

```js
{
  title: 'Project name',
  description: 'One sentence on the product and the problem.',
  role: 'Lead designer',
  tags: ['Mobile app', 'Design system'],
  image: 'work/project-name.jpg',
  link: 'https://…', // case study or live site; null hides the link
},
```

Delete the `placeholder: true` line once it's real.

### Giving a project its own page

Project pages live at `#/work/<slug>` (a hash URL, so they work on GitHub Pages and from a saved file).

1. Add `slug: 'my-project'` to the project in `site.js → projects`. The card then opens the page instead of an external link.
2. Build the page, e.g. `src/components/my-project/Page.jsx` (copy `aplomb/CaseStudy.jsx` as a starting point).
3. Register it in `src/components/ProjectPage.jsx` → `pages`.

Keep case studies short: lead with the strongest visual (a film or a hero image), then only the sections that add something it can't show.

### The Aplomb film

The film is `public/media/aplomb-showcase.mp4` (copied from `~/Documents/Portfolio/Aplomb/`; the original is untouched). It plays muted when it scrolls into view, pauses when it leaves, and does nothing for visitors who prefer reduced motion. Scene markers are in `aplomb.js → film.chapters`; adjust the `t` values (in seconds) if you re-cut the film.

It's 19 MB. That's fine for GitHub, but a web-optimised encode loads faster. If you have `ffmpeg`:

```bash
ffmpeg -i aplomb-showcase.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart -c:a aac -b:a 96k aplomb-showcase-web.mp4
```

### Design tokens

Colours, fonts and shadows are defined once in `src/styles.css` under `@theme` and used as Tailwind classes (`bg-lapis`, `text-firouzeh-deep`, `font-display`, …).

- **Lapis** `#2B36A8`: the one bold colour, used for the hero and the contact section
- **Turquoise** `#4FD1C1` on lapis, **deep turquoise** `#0E7F73` for links on white
- **Night** `#10164A` for text, **porcelain** `#EEF1FB` for quieter sections, white for everything else
- **Display:** Bodoni Moda (self-hosted), a high-contrast serif like the YD mark
- **Text:** Figtree (self-hosted)

The hero's photo sits in an arch (a nod to architecture), and the turquoise line that draws around it once on load comes from the orbit in the YD logo. That's the page's one animation.

Projects marked `placeholder: true` stay hidden on the live page until you fill them in.

---

## Deploying to GitHub Pages

Deployment is automated by `.github/workflows/deploy.yml`.

1. **Create a repo** on GitHub under `YasiDerak`:
   - `YasiDerak.github.io` serves the site at **https://yasiderak.github.io** (recommended)
   - any other name, such as `portfolio`, serves it at `https://yasiderak.github.io/portfolio/`
2. **Push this folder:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/YasiDerak/YasiDerak.github.io.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Each push to `main` builds and publishes the site. Progress shows in the **Actions** tab.

The workflow sets the correct base path for you: `/` for a `*.github.io` repo, `/<repo>/` otherwise.

**If you use a project repo** (not `YasiDerak.github.io`), update `VITE_SITE_URL` in `.env` (for example `https://yasiderak.github.io/portfolio`) so the social preview and canonical URL point to the right place.

**Custom domain?** Add it under Settings → Pages, put a `CNAME` file containing the domain in `public/`, and set `VITE_SITE_URL` to it.

---

## Accessibility & performance notes

- Semantic landmarks, a skip link, labelled navigation, visible focus states, and keyboard-operable video controls.
- `prefers-reduced-motion` turns off scroll reveals, ambient motion, the hero's type interaction and film autoplay.
- Fonts are self-hosted (no third-party requests). Images lazy-load, and the film uses `preload="none"` until it's in view.
- SEO: title, description, canonical link, Open Graph/Twitter cards and `Person` structured data are in `index.html`.
