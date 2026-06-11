# Ali Mehrpooya — Portfolio Website

A fast, static personal website for an FPGA / SoC engineer. No build tools, no
frameworks — just HTML, CSS and a little JavaScript, so it runs anywhere and
deploys to GitHub Pages with a single push.

The design takes its cues from the AMD adaptive-computing product pages (clean
technical type, black/red palette, card-based portfolio) and from your banner
(the chip, the monogram, the red "seam" accents, the datasheet detailing).

---

## File structure

```
mehrpooya-site/
├── index.html              ← the page shell (rarely needs editing)
├── data/
│   └── content.js          ← ★ EDIT THIS to change all text & projects
├── assets/
│   ├── css/styles.css      ← colours, fonts, layout
│   ├── js/render.js        ← builds the page from content.js
│   ├── js/main.js          ← navigation, theme toggle, routing
│   └── img/                ← logos, chip image, favicon
├── projects-media/         ← put YOUR project images & videos here
├── EDITING_GUIDE.md        ← how to edit content (start here)
├── README.md               ← this file
└── .nojekyll               ← tells GitHub Pages to serve files as-is
```

To change anything on the site, open **`data/content.js`** and follow
**`EDITING_GUIDE.md`**. You should rarely need to touch anything else.

---

## Run it locally

Just open `index.html` in your browser — that's enough to preview it.

(Optional, if videos/images don't appear when opened directly, run a tiny local
server from this folder and visit `http://localhost:8000`:)

```bash
python3 -m http.server 8000
```

---

## Put it online with GitHub Pages

Your site address will be **`https://YOURNAME.github.io`**. Your banner says
`mehrpooya.github.io`, so these steps assume your GitHub username is `mehrpooya`.

1. **Create the repository.** On GitHub, make a new **public** repository named
   exactly:

   ```
   mehrpooya.github.io
   ```

   (Replace `mehrpooya` with your own GitHub username if different.)

2. **Upload the files.** Upload *the contents* of this folder (so that
   `index.html` sits at the top level of the repository, not inside a sub-folder).

   Using the website: open the repo → **Add file → Upload files** → drag everything
   in → **Commit changes**.

   Or with git:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/mehrpooya/mehrpooya.github.io.git
   git push -u origin main
   ```

3. **Turn on Pages.** In the repo, go to **Settings → Pages**. Under
   *Build and deployment*, set **Source = Deploy from a branch**, choose the
   **main** branch and the **/(root)** folder, and **Save**.

4. **Wait a minute,** then visit **`https://mehrpooya.github.io`**. Done.

To update the site later, edit `data/content.js`, commit/upload the change, and
GitHub Pages republishes automatically within a minute or so.

---

## Good to know

- **Theme:** a dark/light toggle sits in the top-right; it remembers each visitor's
  choice. The site defaults to the dark (banner-matched) theme.
- **Projects** open as their own shareable pages (e.g. `…github.io/#/project/blind-satellite-receiver`).
- **Fonts:** the banner uses commercial/branded type that can't be embedded, so the
  site uses close, freely-licensed matches — *Cinzel* (the engraved name), *Inter*
  (body), *Rajdhani* (technical labels) and *IBM Plex Mono* (part numbers & specs).
- **Accessibility:** keyboard focus is visible, motion is reduced for visitors who
  prefer it, and the layout works down to small phones.
