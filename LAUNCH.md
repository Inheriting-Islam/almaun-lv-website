# Al-Maun Website — Launch Readiness Checklist

*Prepared for the Al-Maun Neighborly Needs board. This tracks everything needed to replace the current almaunlv.org site with the new prototype.*

---

## Where things stand

The redesigned site is a **complete, clickable prototype** — 14 pages, real photos, real logo + favicon, working navigation and modals, and content fact-checked against the live site. It already **meets or exceeds** the current site on content and design. What remains is mostly **back-end wiring**, **go-live setup**, and **final real content** from Al-Maun.

**Pages built:** Home · Our Story · Programs · Nutrition Passport · Impact · Events & Prayer · Get Involved · Give · Contact · Youth Conference · 404 · Privacy · Terms · Donor Policy.

---

## ✅ Done in the prototype
- [x] Full site design & all pages, mobile-responsive, light/dark themes, accessible base (focus states, alt text, reduced-motion)
- [x] Real Al-Maun logo (green/white/black) + a designed brand mark & favicon set
- [x] Dropdown navigation, working modals (program details, RSVP, volunteer, contact, workshop signup), image lightbox
- [x] Nutrition Passport program section (Levels 1–3 + Bonus + workshops + signup)
- [x] Legal pages (Privacy, Terms, Donor Policy) — **templates, pending legal review**
- [x] SEO foundation: per-page titles, meta descriptions, Open Graph/Twitter cards, canonical URLs, Organization structured data (JSON-LD)
- [x] `sitemap.xml`, `robots.txt`, and a `_redirects` map from every old Squarespace URL
- [x] Fact-check vs live site (contact info, founders, stats). **Resolved:** ZIP is **89106** (the live contact page's "89121" is a typo — confirmed by their Nutrition Passport page)

## 🔌 Must wire up before launch (back-end)
- [ ] **Donations** — connect `give.html` to a real processor. **Recommend [Zeffy](https://www.zeffy.com) (0% fees for nonprofits)** vs. the ~3% Squarespace takes. Also wire the Nutrition Passport / Youth Conference / event "register" buttons.
- [ ] **Forms** — contact, volunteer, RSVP, workshop signup, newsletter currently show a success modal only. Wire to a form backend (Formspree / Netlify Forms) → deliver to staff inbox + push to the email list/CRM.
- [ ] **Newsletter** — connect signups to the email tool (Mailchimp / Constant Contact / etc.).
- [ ] **Prayer times** — currently sample values. Wire to an auto-updating source or a maintained schedule (Jumu'ah 1:00 PM is confirmed).
- [ ] **Content updates** — decide how staff edit events / stories / the needs list. **Recommend a lightweight CMS (Decap/Netlify CMS)** so staff self-serve — this fixes "we can't keep it current."
- [ ] **Nutrition Passport / Cart** — confirm whether they use commerce (workshop kits, tickets). If yes, wire a real store/checkout; if not, the signup form is enough.

## 🚀 Go-live technical
- [ ] Deploy static site to **Netlify / Cloudflare Pages** (free tier), point **almaunlv.org DNS**, enable **HTTPS/SSL**
- [ ] Rename `blockparty.html` → the site root (`index.html`); remove the internal compare hub
- [ ] Activate the **301 redirects** (`_redirects` is ready) so old links & Google rankings survive
- [ ] **Analytics:** Google Analytics/Plausible + Search Console + **Google Business Profile**
- [ ] **[Google Ad Grant](https://www.google.com/grants/)** — $10,000/month in free ads for 501(c)(3)s (huge for their marketing gap)
- [ ] **Accessibility audit** (WCAG AA) + **image optimization** (high-res originals → responsive `srcset`/WebP + lazy-load) + Lighthouse pass
- [ ] Spam protection on forms (honeypot/reCAPTCHA); cross-browser + device QA

## 📄 Final real content from Al-Maun
- [ ] High-resolution **photo originals** (prototype uses web-size copies) + more variety
- [ ] Real current **prayer times** + **office hours**
- [ ] **Leadership/staff bios + photos** (prototype uses initial placeholders)
- [ ] **Verified donation impact figures** ($25 = …, etc. are illustrative)
- [ ] Real **event dates** + **Youth Conference** details
- [ ] **Nutrition Passport** specifics (workshop schedule, any rewards)
- [ ] Board/financials for the Transparency section
- [ ] Legal counsel review of Privacy / Terms / Donor Policy

## ⚖️ Old URL → new page (redirect map)
| Old (Squarespace) | New |
|---|---|
| `/home` | `/` |
| `/about` | `/about.html` |
| `/contact` | `/contact.html` |
| `/donate-almaun` | `/give.html` |
| `/nutritionpassport` | `/nutrition-passport.html` |
| `/level-1`, `/level-2`, `/level-3`, `/nutrition-passport-bonus` | `/nutrition-passport.html` (+ `#level-1` … `#bonus`) |
| `/resources-workshops` | `/programs.html` |
| `/youthconference` | `/youth-conference.html` |
| `/survey` | `/contact.html` |
| `/cart` | `/give.html` |

## Critical path
**① Wire donations → ② wire forms & newsletter → ③ deploy + DNS + redirects → ④ analytics + Ad Grant → ⑤ legal review → ⑥ drop in final real content.**

*Rough effort: with content in hand, a focused build to a live, fully-wired site is on the order of a few days of work, plus the one-time hosting/DNS setup.*
