# Al-Maun site — smoke tests

Fast, automated checks over every real page so you never ship a regression by hand.

**What it checks**
- Each page loads (no HTTP ≥ 400), with **no JS/console errors**
- **No horizontal overflow** at mobile (390px) and desktop (1280px)
- **No broken internal links** (every local `*.html` link resolves)
- SEO basics: a `<title>`, a meta description, exactly one `<h1>` per page
- Core interactions: the **mobile menu opens**, and a **modal opens**

## Run it

```bash
# one-time: install the browser driver (uses your system Chrome)
cd test && npm install

# 1) serve the site root (in another terminal, from the repo root)
python3 -m http.server 8137

# 2) run the tests
cd test && npm test
```

Exits non-zero if anything fails (so it works in CI too). Point it at any host with
`BASE=https://your-preview-url npm test`.
