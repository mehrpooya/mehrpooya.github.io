# Editing Guide — your website made simple

Everything you see on the website is controlled by **one file**:

```
data/content.js
```

You do **not** need to know how to code. You only change the text between the
quotation marks `" "`. Keep the quotes, commas, and curly braces `{ }` where they
are, save the file, and refresh the page in your browser to see the change.

> 💡 **Tip:** Before editing, make a copy of `data/content.js` so you always have a
> backup to go back to.

---

## 1. The basics

A line in `content.js` looks like this:

```js
name: "Ali Mehrpooya",
```

To change it, edit only the part inside the quotes:

```js
name: "Dr Ali Mehrpooya",
```

Lists look like this (each item in quotes, separated by commas):

```js
honours: [
  "Rank 1 — National M.Sc. Entrance Exam (Communications), Iran",
  "Rank 1 — National M.Sc. Entrance Exam (Electronics), Iran"
],
```

To remove an item, delete its whole line. To add one, copy a line and change the
text (make sure every item except the last ends with a comma).

---

## 2. Text styling shortcuts

Inside any text you can use these shortcuts:

| You type | You get |
|---|---|
| `**important**` | **important** (bold) |
| `*performance*` | shows in **red** (your accent colour) |
| `` `XCZU47DR` `` | `monospace` (good for part numbers / code) |
| `[Google](https://google.com)` | a clickable link |

---

## 3. Changing the main details

Near the top of `content.js`, the `profile` block controls the cover:

```js
profile: {
  name:    "Ali Mehrpooya",
  eyebrow: "Senior FPGA Developer",     // small label above the name
  role:    "Senior Research Associate — University of Bristol",
  tagline: "Designing the future. Delivering *performance*.",
  intro:   "FPGA & SoC engineer specialising in ...",
  ...
}
```

### Social links
Each social icon is one line. Delete a line to hide it. **Keep the `icon` word**
(`github`, `linkedin`, `scholar`, `bristol`, `email`) — it picks the icon.

```js
social: [
  { icon: "github",   label: "github.com/mehrpooya", href: "https://github.com/mehrpooya" },
  { icon: "email",    label: "Email me",             href: "mailto:you@example.com" }
]
```

---

## 4. Adding or editing a PROJECT (the important part)

Each project has two parts: the **card** (shown on the home page) and the **post**
(the full page shown when someone clicks it). Here is the smallest possible project:

```js
{
  id: "my-new-project",                       // unique, lowercase, no spaces
  title: "My New Project",
  tag: "ZCU102 · RFSoC",                       // small label on the card
  featured: false,
  summary: "One sentence describing the project for the card.",
  thumb: "projects-media/my-photo.jpg",        // the card image
  content: [
    { type: "text", value: "Write your explanation here. **Bold** and *red* work." }
  ]
},
```

To add it: copy an existing project (everything from one `{` to its matching `},`)
and paste it inside the `projects: [ ... ]` list. Give it a **new** `id`.

### The content blocks you can use

Put as many of these as you like inside `content: [ ... ]`, in any order:

**Paragraph**
```js
{ type: "text", value: "A paragraph. Supports **bold**, *red*, `code`, [links](https://...)." }
```

**Sub-heading**
```js
{ type: "heading", value: "Results" }
```

**Bullet list**
```js
{ type: "list", items: ["First point", "Second point", "Third point"] }
```

**Image** (drop the file into the `projects-media` folder first)
```js
{ type: "image", src: "projects-media/diagram.png", caption: "Block diagram" }
```

**Video — YouTube** (use the *embed* link, see section 5)
```js
{ type: "video", src: "https://www.youtube.com/embed/VIDEO_ID", caption: "Demo" }
```

**Video — your own file** (drop a `.mp4` into `projects-media`)
```js
{ type: "video", src: "projects-media/demo.mp4" }
```

**Spec table** (datasheet style — great for hardware details)
```js
{ type: "specs", title: "Platform", rows: [
    ["Board", "Xilinx ZCU102"],
    ["RF front end", "2 × ADRV9009"],
    ["Channels", "4 coherent"]
] }
```

**Code block**
```js
{ type: "code", lang: "vhdl", value: "signal clk : std_logic;" }
```

**Links list**
```js
{ type: "links", items: [
    { label: "Read the paper", href: "https://..." },
    { label: "GitHub repo",    href: "https://github.com/..." }
] }
```

**Tabs** (each tab holds its own blocks)
```js
{ type: "tabs", tabs: [
    { label: "Overview", blocks: [
        { type: "text", value: "What the project is." }
    ] },
    { label: "Results", blocks: [
        { type: "image", src: "projects-media/result.png", caption: "Output" },
        { type: "text",  value: "What the results show." }
    ] }
] }
```

---

## 5. Adding images and videos

**Images / videos of your own:**
1. Put the file into the **`projects-media`** folder.
2. Reference it as `projects-media/your-file-name.jpg` (the name must match exactly,
   including capital letters).

**YouTube videos:** open the video on YouTube, click **Share → Embed**, and copy the
link that looks like `https://www.youtube.com/embed/XXXXXXXX`. Use that as the `src`.
(The normal `watch?v=` link will *not* work for embedding.)

---

## 6. Changing colours or fonts (optional)

Colours live at the very top of `assets/css/styles.css`:

```css
:root {
  --red:  #D80A17;   /* your brand red (sampled from your banner) */
  --bg:   #08080A;   /* page background */
  --text: #F4F5F7;   /* main text colour */
}
```

Change the hex value (e.g. `#D80A17`) to recolour the whole site. Fonts are loaded
in `index.html` (the `<link ... fonts.googleapis.com ...>` line).

---

## 7. Replacing the cover images

The cover and logos are in `assets/img/`:

| File | What it is |
|---|---|
| `monogram.png` | the AM logo (nav bar + footer) |
| `chip.jpg` | the chip shown on the cover |
| `bristol.png` | the University of Bristol logo |
| `favicon.png` | the little icon in the browser tab |
| `cover-banner.jpg` | your full banner (used for link previews) |

Replace any of these with a file of the **same name** to swap it out.

---

That's it. Edit `data/content.js`, save, refresh. See `README.md` for how to put the
site online with GitHub Pages.
