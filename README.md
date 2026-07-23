# Al-Maun Neighborly Needs — Website Redesign

A redesign concept for **[Al-Maun Neighborly Needs](https://www.almaunlv.org/)**, the grassroots humanitarian arm of **Masjid As-Sabur** — the oldest mosque in Las Vegas — serving the Historic Westside since 2003.

The goal of the redesign: tell Al-Maun's grassroots story, show how busy and active the organization is, and **make it easy for people to donate** (the current site under-converts).

## Design directions

This repo contains a comparison hub plus four full, self-contained homepage prototypes. Open `index.html` to compare them.

| File | Direction | Feel |
|------|-----------|------|
| `index.html` | **Compare hub** | Live thumbnails of all four |
| `magazine.html` | **A · The Community Magazine** | Refined editorial photo-essay — warm ivory, Fraunces serif, documentary photography |
| `blockparty.html` | **B · Block Party** | Warm grassroots — sunny cream, grass-green & marigold, scrapbook collage, hand-drawn accents |
| `bold.html` | **C · Bright & Bold** | Light, high-energy modern — vivid emerald + coral, oversized Sora type, bento gallery |
| `emerald.html` | **Emerald** (earlier round) | Green, Bricolage-type version — kept for reference |

All four are **light-first**, fully responsive, support light/dark themes, respect `prefers-reduced-motion`, and share the same real community photos and copy — only the art direction changes.

## Running locally

No build step. Just serve the folder:

```bash
python3 -m http.server 8137
```

Then open <http://localhost:8137/>.

## Structure

```
├── index.html          # compare hub
├── magazine.html       # direction A
├── blockparty.html     # direction B
├── bold.html           # direction C
├── emerald.html        # earlier green version
├── images/             # Al-Maun's real photos (Humanitarian Day 2025, programs)
└── fonts/              # self-hosted webfonts (Fraunces, Sora, Inter, DM Sans, Bricolage Grotesque)
```

## Notes

- **Photos** © Al-Maun Neighborly Needs (sourced from their current site for this concept). Swap/add higher-resolution originals before launch.
- **Fonts** are self-hosted from Google Fonts (Open Font License).
- The donation widgets are **interactive previews** — in production they connect to Al-Maun's payment processor (e.g. a fee-free platform like Zeffy) and the impact figures should be confirmed by Al-Maun.
- 501(c)(3) · EIN 32-0087926.

## The chosen build — "Block Party" complete site

`blockparty.html` is the lead direction, built out into a **complete, clickable multi-page prototype** with the org's real logo, a designed mark + favicon, and working modals:

| Page | File |
|------|------|
| Home (full-width hero) | `blockparty.html` |
| Our Story | `about.html` |
| Programs (+ 6 detail modals) | `programs.html` |
| Impact (+ image lightbox) | `impact.html` |
| Events & Prayer (+ RSVP modals) | `events.html` |
| Get Involved (+ volunteer modal) | `get-involved.html` |
| Give (donation module + Zakat) | `give.html` |
| Contact (+ form modal) | `contact.html` |

Shared system: `assets/bp.css` (styles + dropdown nav + modal/lightbox), `assets/site.js` (nav, modals, lightbox), `assets/_buildkit.md` (canonical header/footer + verified facts). Brand: `images/logo-green.png` / `logo-white.png` / `logo-dark.png` (their real wordmark) + `favicon.svg`, `logo-mark.svg`, `apple-touch-icon.png` (designed mark).

**To confirm with Al-Maun before launch:** the ZIP on their contact page reads 89121 but the Historic Westside is 89106 (used 89106 here); daily prayer times are sample values; donation impact figures are illustrative.

*Redesign concept — not the official live site.*
