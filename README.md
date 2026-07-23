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

*Redesign concept — not the official live site.*
