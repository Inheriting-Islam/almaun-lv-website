/* ============================================================
   Al-Maun site — smoke test suite (Playwright)
   Checks every real page for: load errors, JS/console errors,
   horizontal overflow (mobile + desktop), broken internal links,
   SEO basics, and core interactions (mobile menu + a modal).

   Run:
     1) serve the site root:   python3 -m http.server 8137
     2) node test/smoke.mjs        (BASE=http://localhost:8137 by default)
   Exits non-zero if anything fails.
   ============================================================ */
import { chromium } from 'playwright';

const BASE = process.env.BASE || 'http://localhost:8137';
const PAGES = [
  'index.html', 'about.html', 'programs.html', 'nutrition-passport.html',
  'impact.html', 'events.html', 'get-involved.html', 'give.html',
  'youth-conference.html', 'contact.html', 'survey.html', 'in-memoriam.html',
  'privacy.html', 'terms.html', 'donor-policy.html', '404.html',
];

const fails = [];
const ok = (name) => console.log(`  ✓ ${name}`);
const bad = (name, detail) => { fails.push(`${name} — ${detail}`); console.log(`  ✗ ${name} — ${detail}`); };

const browser = await chromium.launch({ channel: 'chrome' });

// ---- per-page checks: load, console errors, overflow, SEO ----
for (const vp of [{ w: 390, h: 844, m: true, tag: 'mobile' }, { w: 1280, h: 900, m: false, tag: 'desktop' }]) {
  const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h }, isMobile: vp.m, hasTouch: vp.m });
  for (const p of PAGES) {
    const page = await ctx.newPage();
    const errs = [];
    page.on('console', m => { if (m.type() === 'error') errs.push(m.text().slice(0, 120)); });
    page.on('pageerror', e => errs.push('JS: ' + String(e).slice(0, 120)));
    let status = 0;
    try {
      const resp = await page.goto(`${BASE}/${p}`, { waitUntil: 'networkidle', timeout: 20000 });
      status = resp ? resp.status() : 0;
      await page.waitForTimeout(250);
      const ov = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (status >= 400) bad(`${p} @${vp.tag}`, `HTTP ${status}`);
      if (ov > 1) bad(`${p} @${vp.tag}`, `horizontal overflow +${ov}px`);
      if (errs.length) bad(`${p} @${vp.tag}`, `console/JS errors: ${errs.join(' | ')}`);
      if (vp.tag === 'desktop') {
        const seo = await page.evaluate(() => ({
          title: !!document.querySelector('title')?.textContent.trim(),
          desc: !!document.querySelector('meta[name="description"]'),
          h1: document.querySelectorAll('h1').length,
        }));
        if (!seo.title) bad(p, 'missing <title>');
        if (!seo.desc) bad(p, 'missing meta description');
        if (seo.h1 !== 1) bad(p, `expected 1 <h1>, found ${seo.h1}`);
      }
      if (status < 400 && ov <= 1 && !errs.length) ok(`${p} @${vp.tag}`);
    } catch (e) {
      bad(`${p} @${vp.tag}`, 'load failed: ' + String(e).slice(0, 90));
    }
    await page.close();
  }
  await ctx.close();
}

// ---- broken internal links: every local .html href must resolve ----
{
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  const seen = new Set();
  for (const p of PAGES) {
    await page.goto(`${BASE}/${p}`, { waitUntil: 'domcontentloaded' });
    const links = await page.evaluate(() =>
      [...document.querySelectorAll('a[href]')]
        .map(a => a.getAttribute('href'))
        .filter(h => h && h.endsWith('.html') && !h.startsWith('http')));
    for (const l of links) seen.add(l.split('#')[0]);
  }
  for (const l of seen) {
    const r = await page.request.get(`${BASE}/${l}`);
    if (r.status() >= 400) bad('internal link', `${l} -> HTTP ${r.status()}`);
  }
  ok(`internal links resolve (${seen.size} unique targets)`);
  await ctx.close();
}

// ---- core interactions: mobile menu opens; a modal opens ----
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/index.html`, { waitUntil: 'networkidle' });
  const burger = page.locator('#burger');
  if (await burger.count() && await burger.isVisible()) {
    await burger.tap();
    await page.waitForTimeout(250);
    const open = await page.evaluate(() => {
      const nav = document.getElementById('nav');
      const link = document.querySelector('#nav .nav__link');
      return nav && nav.classList.contains('open') && link && link.getBoundingClientRect().width > 0;
    });
    open ? ok('mobile menu opens') : bad('mobile menu', 'did not open');
  } else bad('mobile menu', 'burger not visible');

  await page.goto(`${BASE}/nutrition-passport.html`, { waitUntil: 'networkidle' });
  const opener = page.locator('[data-modal-open]').first();
  if (await opener.count()) {
    await opener.click();
    await page.waitForTimeout(300);
    const modalOpen = await page.evaluate(() => !!document.querySelector('.modal:not([hidden])'));
    modalOpen ? ok('modal opens') : bad('modal', 'did not open');
  }
  await ctx.close();
}

await browser.close();

console.log('\n' + '='.repeat(48));
if (fails.length) {
  console.log(`FAILED: ${fails.length} issue(s)\n` + fails.map(f => '  - ' + f).join('\n'));
  process.exit(1);
} else {
  console.log('ALL SMOKE TESTS PASSED ✓');
}
